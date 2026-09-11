import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Menu } from "lucide-react";
import { ProjectMarquee } from "@/components/project-marquee";

const whatsapp =
  "https://wa.me/5592991507276?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-slides" aria-hidden="true">
          <Image className="hero-slide hero-slide-one" src="/assets/hero-arquitetura.jpg" alt="" fill priority sizes="100vw" />
          <Image className="hero-slide hero-slide-two" src="/assets/hero-interiores.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-shade" />

        <header className="site-header">
          <a className="wordmark" href="#inicio" aria-label="Lediane Barbosa — início">
            <Image className="wordmark-mark" src="/assets/logo-lediane.png" alt="" width={34} height={34} priority />
            <span className="wordmark-text">
              <span>LEDIANE BARBOSA</span>
              <small>ARQUITETURA + INTERIORES</small>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="header-contact" href={whatsapp} target="_blank" rel="noreferrer">
            Vamos conversar <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><Menu size={22} strokeWidth={1.4} /></summary>
            <div>
              <a href="#projetos">Projetos</a><a href="#servicos">Serviços</a>
              <a href="#sobre">Sobre</a><a href="#contato">Contato</a>
            </div>
          </details>
        </header>

        <div className="hero-content">
          <p className="eyebrow">ARQUITETURA · INTERIORES · MANAUS</p>
          <h1>Detalhes que transformam espaços em identidade.</h1>
          <p className="hero-description">
            Projetos autorais, acolhedores e atemporais — pensados para unir
            beleza, funcionalidade e a história de quem vai viver cada espaço.
          </p>
          <a className="primary-button" href={whatsapp} target="_blank" rel="noreferrer">
            <span>CONTE SOBRE SEU PROJETO</span>
            <ArrowUpRight size={24} strokeWidth={1.25} />
          </a>
        </div>

        <div className="hero-footer">
          <div className="slide-progress" aria-label="Apresentação com dois projetos">
            <span>01</span><span className="progress-track"><i /></span><span className="muted">02</span>
          </div>
          <a className="scroll-link" href="#essencia">
            Conheça nosso trabalho <ArrowDown size={17} strokeWidth={1.4} />
          </a>
        </div>
      </section>

      <section className="essence" id="essencia">
        <div>
          <p className="section-tag">NOSSA ESSÊNCIA</p>
          <h2>Do primeiro traço à obra, cada escolha tem intenção.</h2>
        </div>
        <p className="essence-copy">
          A arquitetura de Lediane Barbosa nasce da escuta e se revela nos detalhes.
          Materiais, luz, proporções e afetos se encontram para criar ambientes
          únicos, funcionais e feitos para atravessar o tempo.
        </p>
      </section>

      <section className="pillars" id="servicos" aria-label="Áreas de atuação">
        <article><span>01</span><h3>Arquitetura</h3><p>Casas autorais desenvolvidas a partir do modo de viver de cada cliente.</p></article>
        <article><span>02</span><h3>Interiores</h3><p>Ambientes com personalidade, equilíbrio e riqueza de detalhes.</p></article>
        <article><span>03</span><h3>Do projeto à obra</h3><p>Acompanhamento atento para preservar cada decisão até a entrega.</p></article>
      </section>

      <section className="projects" id="projetos">
        <div className="projects-intro">
          <p className="section-tag">NOSSOS PROJETOS</p>
          <h2>Um olhar único para cada espaço.</h2>
          <p>Arquitetura e interiores construídos com equilíbrio, personalidade e atenção a cada escolha.</p>
        </div>
        <ProjectMarquee />
      </section>

      <section className="services-detail">
        <p className="section-tag">O QUE FAZEMOS</p>
        <div className="service-list">
          {[
            ["01", "Arquitetura residencial", "Projetos concebidos a partir da rotina, dos desejos e da identidade de cada família."],
            ["02", "Design de interiores", "Ambientes completos que combinam materiais, iluminação, mobiliário e afeto."],
            ["03", "Detalhamento e especificação", "Cada solução traduzida com precisão para preservar a intenção do projeto."],
            ["04", "Acompanhamento de obra", "Presença técnica durante a execução, do projeto à materialização dos espaços."],
          ].map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowRight size={22} strokeWidth={1.2} /></article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-image">
          <Image src="/assets/lediane-sorrindo.jpg" alt="Arquiteta Lediane Barbosa" fill sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
        <div className="about-content">
          <p className="section-tag">LEDIANE BARBOSA</p>
          <h2>Arquitetura feita de repertório, sensibilidade e intenção.</h2>
          <p>À frente do escritório, Lediane cria projetos de arquitetura e interiores em que funcionalidade e sofisticação caminham juntas.</p>
          <p>Seu olhar se volta aos detalhes que tornam cada ambiente único: a luz, as texturas, os materiais e, sobretudo, a história das pessoas que irão habitá-lo.</p>
          <a href="https://www.instagram.com/ledianebarbosaarquitetura/" target="_blank" rel="noreferrer">Conheça nosso olhar no Instagram <InstagramIcon /></a>
        </div>
      </section>

      <section className="method">
        <div className="method-intro">
          <p className="section-tag">NOSSO MÉTODO</p>
          <h2>Do encontro inicial<br />à obra realizada.</h2>
          <p>Um processo claro, próximo e atento para que cada decisão tenha propósito.</p>
        </div>
        <div className="method-steps">
          {[
            ["01", "Conversa e briefing", "Entendemos o espaço, as necessidades e o jeito de viver de cada cliente."],
            ["02", "Conceito", "Definimos a direção criativa que orientará todas as escolhas do projeto."],
            ["03", "Desenvolvimento", "Transformamos o conceito em soluções de arquitetura e interiores."],
            ["04", "Detalhamento", "Materiais, medidas e especificações são organizados para a execução."],
            ["05", "Obra", "Acompanhamos o processo para aproximar o resultado de tudo que foi projetado."],
          ].map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-image"><Image src="/assets/lediane-seria.jpg" alt="Lediane Barbosa em retrato profissional" fill sizes="100vw" /></div>
        <div className="manifesto-copy"><p>A obra também tem sua beleza.</p><h2>É no caminho que o projeto começa, de verdade, a ganhar vida.</h2></div>
      </section>

      <section className="contact" id="contato">
        <p className="section-tag">ENTRE EM CONTATO</p>
        <div className="contact-grid">
          <h2>Todo projeto começa por uma conversa.</h2>
          <div>
            <p>Conte um pouco sobre o que você imagina. A partir daí, marcamos um encontro para entender o projeto e os próximos passos.</p>
            <a className="contact-button" href={whatsapp} target="_blank" rel="noreferrer"><span>FALAR PELO WHATSAPP</span><ArrowUpRight size={25} strokeWidth={1.2} /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/assets/logo-lediane.png" alt="Lediane Barbosa Arquitetura e Interiores" width={160} height={160} />
        </div>
        <div><span>CONTATO</span><a href="mailto:lediane@lbarquitetura.com.br"><Mail size={14} /> lediane@lbarquitetura.com.br</a><a href={whatsapp} target="_blank" rel="noreferrer">(92) 99150-7276</a></div>
        <div><span>REDES SOCIAIS</span><a href="https://www.instagram.com/ledianebarbosaarquitetura/" target="_blank" rel="noreferrer"><InstagramIcon size={14} /> @ledianebarbosaarquitetura</a></div>
        <p>© 2026 Lediane Barbosa. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
