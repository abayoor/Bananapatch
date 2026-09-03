// One-off generator: extracts the 11 target countries from world-atlas
// countries-50m.json, projects them with a simple equirectangular
// projection clipped to the Africa/Middle East bounding box from the
// pitch deck (lon -19..58, lat -36..41), and writes ready-to-render SVG
// path `d` strings so the site ships a small static JSON instead of the
// full topojson + topojson-client at runtime.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as topojson from 'topojson-client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const topoPath = path.join(__dirname, '../node_modules/world-atlas/countries-110m.json');
const topology = JSON.parse(readFileSync(topoPath, 'utf-8'));
const geo = topojson.feature(topology, topology.objects.countries);

const TARGETS = {
  566: { code: 'NG', name: 'Нигерия', population: '232 млн' },
  231: { code: 'ET', name: 'Эфиопия', population: '132 млн' },
  180: { code: 'CD', name: 'ДР Конго', population: '112 млн' },
  404: { code: 'KE', name: 'Кения', population: '57 млн' },
  800: { code: 'UG', name: 'Уганда', population: '51 млн' },
  368: { code: 'IQ', name: 'Ирак', population: '47 млн' },
  887: { code: 'YE', name: 'Йемен', population: '41 млн' },
  760: { code: 'SY', name: 'Сирия', population: '25 млн' },
  716: { code: 'ZW', name: 'Зимбабве', population: '16 млн' },
  728: { code: 'SS', name: 'Южный Судан', population: '12 млн' },
  275: { code: 'PS', name: 'Палестина', population: '5,5 млн' },
};

const LON_MIN = -19, LON_MAX = 58, LAT_MIN = -36, LAT_MAX = 41;
const VB_W = 800, VB_H = ((LAT_MAX - LAT_MIN) / (LON_MAX - LON_MIN)) * VB_W;

function project([lon, lat]) {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * VB_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VB_H;
  return [x, y];
}

const r1 = (n) => Math.round(n * 10) / 10;

function ringToPath(ring) {
  return ring.map((pt, i) => {
    const [x, y] = project(pt);
    return `${i === 0 ? 'M' : 'L'}${r1(x)},${r1(y)}`;
  }).join(' ') + ' Z';
}

function geometryToPath(geometry) {
  if (!geometry) return '';
  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map(ringToPath).join(' ');
  }
  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.map((poly) => poly.map(ringToPath).join(' ')).join(' ');
  }
  return '';
}

// Only keep features that touch the deck's bounding box (padded a bit so
// neighbouring coastlines still render), otherwise the shipped JSON balloons
// with geometry for continents nobody scrolls to on this map.
const PAD = 15;
function bboxOfGeometry(geometry) {
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  const rings = geometry.type === 'Polygon' ? geometry.coordinates : geometry.coordinates.flat();
  for (const ring of rings) {
    for (const [lon, lat] of ring) {
      if (lon < minLon) minLon = lon;
      if (lon > maxLon) maxLon = lon;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
  }
  return [minLon, minLat, maxLon, maxLat];
}
function intersectsRegion([minLon, minLat, maxLon, maxLat]) {
  return maxLon >= LON_MIN - PAD && minLon <= LON_MAX + PAD && maxLat >= LAT_MIN - PAD && minLat <= LAT_MAX + PAD;
}

// All countries (for the base landmass), then the 11 targets highlighted.
const land = [];
const countries = [];

for (const f of geo.features) {
  if (!f.geometry) continue;
  const bbox = bboxOfGeometry(f.geometry);
  // Countries that straddle the antimeridian (Russia, Fiji, the US with its
  // Aleutian tail…) get a bogus bbox spanning nearly the whole globe, which
  // both falsely "intersects" our region and, when equirectangular-projected
  // naively, draws a stray line clear across the map. Our region never
  // legitimately needs a >180°-wide country, so drop them outright.
  if (bbox[2] - bbox[0] > 180) continue;
  if (!intersectsRegion(bbox)) continue;
  const id = Number(f.id);
  const d = geometryToPath(f.geometry);
  if (!d) continue;
  land.push(d);
  if (TARGETS[id]) {
    countries.push({ ...TARGETS[id], d });
  }
}

const missing = Object.keys(TARGETS).filter((id) => !countries.some((c) => c.code === TARGETS[id].code));
if (missing.length) {
  console.error('Missing target countries for ids:', missing);
  process.exit(1);
}

const out = {
  viewBox: `0 0 ${VB_W.toFixed(1)} ${VB_H.toFixed(1)}`,
  land,
  countries,
};

const outPath = path.join(__dirname, '../src/data/market-map.json');
writeFileSync(outPath, JSON.stringify(out));
console.log('Wrote', outPath, 'land paths:', land.length, 'countries:', countries.length);
