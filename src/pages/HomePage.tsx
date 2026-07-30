import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import Formula from '../components/sections/Formula';
import Process from '../components/sections/Process';
import Uniqueness from '../components/sections/Uniqueness';
import Audience from '../components/sections/Audience';
import Scaling from '../components/sections/Scaling';
import TrustBadges from '../components/sections/TrustBadges';
import Team from '../components/sections/Team';

export function HomePage() {
  return <>
  <Header />
  <main>
    <Hero />
    <Problem />
    <Solution />
    <Formula />
    <Process />
    <Uniqueness />
    <Audience />
    <Scaling />
    <TrustBadges />
    <Team />
  </main>
  <Footer />
  </>;
}
