import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "/assets/hero-interiores.png",
    type: "Projeto de interiores",
    title: "Leveza, luz e formas orgânicas",
    alt: "Sala de estar contemporânea projetada por Lediane Barbosa",
  },
  {
    image: "/assets/hero-arquitetura.jpg",
    type: "Projeto residencial",
    title: "Presença, equilíbrio e elegância",
    alt: "Fachada residencial projetada por Lediane Barbosa",
  },
];

export function ProjectMarquee() {
  const loopingProjects = [...projects, ...projects];

  return (
    <div className="project-marquee" aria-label="Projetos em destaque">
      <div className="project-track">
        {loopingProjects.map((project, index) => (
          <article
            className="project-panel"
            key={`${project.image}-${index}`}
            tabIndex={index < projects.length ? 0 : -1}
            aria-hidden={index >= projects.length}
          >
            <Image
              src={project.image}
              alt={index < projects.length ? project.alt : ""}
              fill
              sizes="(max-width: 640px) 72vw, 27vw"
            />
            <div className="project-reveal">
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
              </div>
              <ArrowUpRight size={25} strokeWidth={1.2} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
