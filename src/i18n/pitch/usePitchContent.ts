import { useI18n } from '../I18nProvider';
import { ru } from './ru';
import { kk } from './kk';
import { en } from './en';
import type { Locale } from '../types';
import type { PitchContent } from './ru';

const content: Record<Locale, PitchContent> = { ru, kk, en };

export function usePitchContent(): PitchContent {
  const { locale } = useI18n();
  return content[locale];
}

export type { PitchContent };
