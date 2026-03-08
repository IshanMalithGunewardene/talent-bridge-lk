// src/features/home/HomePage.jsx
import Hero from './Hero.jsx';
import Feedback from './feedBack.jsx';
import HelpFaqSection from './faq.jsx';
import Catogories from './catogories.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Catogories />
      <Feedback />
      <HelpFaqSection />
    </>
  );
}