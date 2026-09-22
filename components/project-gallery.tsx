import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

type Category = "arquitetura" | "interiores" | "comercial";

type Project = {
  slug: string;
  title: string;
  category: Category;
  images: string[];
};

const projects: Project[] = [
  {
    slug: "renaissance",
    title: "Casa Renaissance",
    category: "arquitetura",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/renaissance/${n}.jpg`),
  },
  {
    slug: "alphaville",
    title: "Casa Alphaville",
    category: "arquitetura",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/alphaville/${n}.jpg`),
  },
  {
    slug: "reserva-inglesa",
    title: "Apto Reserva Inglesa",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/reserva-inglesa/${n}.jpg`),
  },
  {
    slug: "atmosphere",
    title: "Apto 1402 Atmosphere",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/atmosphere/${n}.jpg`),
  },
  {
    slug: "concept-105",
    title: "Apto Concept 105 Next",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/concept-105/${n}.jpg`),
  },
  {
    slug: "coral-gables",
    title: "Apto 802A Coral Gables",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/coral-gables/${n}.jpg`),
  },
  {
    slug: "artefacto-2023",
    title: "Mostra Artefacto 2023",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/artefacto-2023/${n}.jpg`),
  },
  {
    slug: "artefacto-2025",
    title: "Mostra Artefacto 2025",
    category: "interiores",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/assets/projetos/artefacto-2025/${n}.jpg`),
  },
  {
    slug: "advocacia",
    title: "Escritório de Advocacia",
    category: "comercial",
    images: [1, 2, 3, 4, 5].map((n) => `/assets/projetos/advocacia/${n}.jpg`),
  },
];

const categories: { id: Category; label: string; tag: string; cover: string; coverTitle: string }[] = [
  {
    id: "interiores",
    label: "Interiores",
    tag: "Projeto de interiores",
    cover: "/assets/hero-interiores.png",
    coverTitle: "Leveza, luz e formas orgânicas",
  },
  {
    id: "arquitetura",
    label: "Arquitetura",
    tag: "Projeto residencial",
    cover: "/assets/hero-arquitetura.jpg",
    coverTitle: "Presença, equilíbrio e elegância",
  },
  {
    id: "comercial",
    label: "Comercial",
    tag: "Projeto comercial",
    cover: "/assets/projetos/advocacia/1.jpg",
    coverTitle: "Precisão, elegância e identidade",
  },
];

export function ProjectGallery() {
  const loopingCategories = [...categories, ...categories];

  return (
    <div className="project-gallery">
      <div className="project-marquee" aria-label="Categorias de projetos">
        <div className="project-track">
          {loopingCategories.map((c, index) => (
            <a
              href={`#cat-${c.id}`}
              className="project-panel"
              key={`${c.id}-${index}`}
              tabIndex={index < categories.length ? 0 : -1}
              aria-hidden={index >= categories.length}
            >
              <Image
                src={c.cover}
                alt={index < categories.length ? c.coverTitle : ""}
                fill
                sizes="(max-width: 640px) 72vw, 27vw"
              />
              <div className="project-reveal">
                <div>
                  <span>{c.tag}</span>
                  <h3>{c.coverTitle}</h3>
                </div>
                <ArrowUpRight size={25} strokeWidth={1.2} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {categories.map((c) => {
        const catProjects = projects.filter((p) => p.category === c.id);
        const isSingle = catProjects.length < 2;
        const loopingProjects = isSingle ? catProjects : [...catProjects, ...catProjects];
        const duration = Math.max(14, catProjects.length * 9);

        return (
          <div className="project-lightbox" id={`cat-${c.id}`} key={c.id}>
            <a href="#projetos" className="lightbox-close" aria-label="Fechar">
              <X size={16} strokeWidth={1.4} />
              Fechar
            </a>
            <div className="project-lightbox-inner">
              <span className="lightbox-tag">{c.label}</span>
              <h3>Projetos de {c.label.toLowerCase()}</h3>
              <div
                className="project-marquee"
                aria-label={`Projetos de ${c.label.toLowerCase()}`}
                style={{ ["--marquee-duration" as string]: `${duration}s` }}
              >
                <div className={`project-track${isSingle ? " project-track--static" : ""}`}>
                  {loopingProjects.map((p, index) => (
                    <a
                      href={`#p-${p.slug}`}
                      className="project-panel"
                      key={`${p.slug}-${index}`}
                      tabIndex={index < catProjects.length ? 0 : -1}
                      aria-hidden={index >= catProjects.length}
                    >
                      <Image
                        src={p.images[0]}
                        alt={index < catProjects.length ? p.title : ""}
                        fill
                        sizes="(max-width: 640px) 72vw, 27vw"
                      />
                      <div className="project-reveal">
                        <div>
                          <span>{c.tag}</span>
                          <h3>{p.title}</h3>
                        </div>
                        <ArrowUpRight size={25} strokeWidth={1.2} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {projects.map((p) => {
        const category = categories.find((c) => c.id === p.category)!;
        return (
          <div className="project-lightbox" id={`p-${p.slug}`} key={p.slug}>
            <a href={`#cat-${p.category}`} className="lightbox-close" aria-label="Fechar">
              <X size={16} strokeWidth={1.4} />
              Fechar
            </a>
            <div className="project-lightbox-inner">
              <span className="lightbox-tag">{category.tag}</span>
              <h3>{p.title}</h3>
              <div className="lightbox-grid">
                {p.images.map((src) => (
                  <div className="lightbox-photo" key={src}>
                    <Image src={src} alt={p.title} fill sizes="(max-width: 700px) 92vw, 45vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
