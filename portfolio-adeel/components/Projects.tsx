import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A few C++ builds where I turned coursework concepts into working systems."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} direction="up" delay={i * 0.12}>
              <ProjectCard
                title={project.title}
                description={project.description}
                stack={project.stack}
                github={project.github}
                demo={project.demo || undefined}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
