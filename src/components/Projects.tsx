import Project from './Project';
import screenshot from '../assets/screenshot.png';

export default function Projects() {
  return (
    <div>
      <div className="text-white text-2xl mb-8">My Projects</div>
      <Project
        name="Portfolio"
        description="A custom site built with React, Tailwind and Motion to showcase my experience."
        githubLink="https://github.com/Durotaren/portfolio"
        liveDemoLink="something"
        image={screenshot}
        gradientColor="#2F4051"
      />
    </div>
  );
}
