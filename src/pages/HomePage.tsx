import PitchHeader from '../components/layout/PitchHeader';
import PitchFooter from '../components/layout/PitchFooter';
import PitchHero from '../components/sections/PitchHero';
import PitchProblem from '../components/sections/PitchProblem';
import PitchComposition from '../components/sections/PitchComposition';
import PitchMarket from '../components/sections/PitchMarket';
import PitchPricing from '../components/sections/PitchPricing';
import PitchExpertise from '../components/sections/PitchExpertise';
import PitchTraction from '../components/sections/PitchTraction';
import PitchTeam from '../components/sections/PitchTeam';
import PitchCalculator from '../components/sections/PitchCalculator';
import Solution from '../components/sections/Solution';

// Solution ниже — временный каркас из старого дизайна для «Как это работает»
// (sticky-сцена), которая ещё не переведена на новую дизайн-систему
// (самый сложный шаг ТЗ, идёт последним).
export function HomePage() {
  return <>
  <PitchHeader />
  <main>
    <PitchHero />
    <PitchProblem />
    <Solution />
    <PitchComposition />
    <PitchMarket />
    <PitchPricing />
    <PitchCalculator />
    <PitchExpertise />
    <PitchTraction />
    <PitchTeam />
  </main>
  <PitchFooter />
  </>;
}
