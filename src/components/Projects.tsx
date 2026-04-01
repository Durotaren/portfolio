import Project from './Project';
import portfolio from '../assets/portfolio.png';
import memoryCard from '../assets/memoryCard.png';
import cv from '../assets/cv.png';
import weather from '../assets/weather.png';

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-white text-2xl">My Projects</div>
      <div className="flex flex-col gap-18 mb-18">
        <Project
          name="Portfolio"
          description="A custom site built with React, Tailwind and Motion to showcase my experience."
          githubLink="https://github.com/Durotaren/portfolio"
          liveDemoLink="something"
          image={portfolio}
          gradientColor="#2F4051"
        />
        <Project
          name="Memory Card"
          description="A Rick and Morty-themed memory game built with React, featuring shuffled cards, score tracking, and win/loss states."
          githubLink="https://github.com/Durotaren/memory-card"
          liveDemoLink="https://memory-card-rick-morty.vercel.app"
          image={memoryCard}
          gradientColor="#2B4D37"
        />
        <Project
          name="CV Maker"
          description="A simple CV / résumé generator built with React."
          githubLink="https://github.com/Durotaren/cv-application"
          liveDemoLink="https://next-cv-app.vercel.app"
          image={cv}
          gradientColor="#483B55"
        />
        <Project
          name="Weather App"
          description="Real-time weather forecasts with dynamic icons, 5-day outlook, hourly updates, and recent search widgets for any city worldwide."
          githubLink="https://github.com/Durotaren/weather-app"
          liveDemoLink="https://durotaren.github.io/weather-app/"
          image={weather}
          gradientColor="#523D27"
        />
      </div>
    </div>
  );
}
