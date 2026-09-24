import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, Menu } from "lucide-react";
import { ProjectGallery } from "@/components/project-gallery";

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
            <Image className="wordmark-mark" src="/assets/logo-lediane.png" alt="" width={46} height={46} priority />
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
          <p className="eyebrow">ARQUITETURA · INTERIORES</p>
          <h1>É no detalhe que um projeto se distingue.</h1>
          <p className="hero-description">
            Arquitetura e interiores desenvolvidos por inteiro, com decisões
            precisas, soluções personalizadas e acompanhamento atento em cada etapa.
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
          <h2>O projeto está no todo. Mas é decidido nos detalhes.</h2>
        </div>
        <div className="essence-copy">
          <p>
            Uma proporção que funciona melhor. A entrada de luz no ponto certo.
            Um material que muda a leitura do ambiente. Um encontro bem resolvido
            entre arquitetura, marcenaria e mobiliário. É nessa soma de decisões —
            muitas delas quase imperceptíveis isoladamente — que um projeto ganha força.
          </p>
          <p>
            No escritório Lediane Barbosa Arquitetura e Interiores, cada trabalho é
            desenvolvido com esse nível de atenção: do conceito às especificações, da
            composição dos ambientes ao acompanhamento da execução. Porque um bom
            resultado não nasce de uma grande ideia apenas. Nasce de muitas boas
            decisões trabalhando juntas.
          </p>
        </div>
      </section>

      <section className="pillars" id="servicos" aria-label="Áreas de atuação">
        <article>
          <span>01</span>
          <h3>Arquitetura</h3>
          <p className="pillar-lead">Tudo começa pela forma como o espaço pode funcionar melhor.</p>
          <p>Implantação, proporções, circulação, luz, integração e relação com o entorno são pensadas em conjunto para chegar a uma arquitetura que seja tão bem resolvida quanto bonita.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Interiores</h3>
          <p className="pillar-lead">É quando o projeto ganha matéria, textura e atmosfera.</p>
          <p>Revestimentos, iluminação, marcenaria, mobiliário e objetos são escolhidos como partes de uma mesma composição — sem excessos, sem soluções soltas, sem nada fora de lugar.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Do projeto à obra</h3>
          <p className="pillar-lead">Porque entre desenhar bem e entregar bem existe uma obra inteira.</p>
          <p>O acompanhamento preserva decisões, orienta ajustes e mantém a coerência do projeto até que aquilo que foi pensado finalmente tome forma.</p>
        </article>
      </section>

      <section className="projects" id="projetos">
        <div className="projects-intro">
          <p className="section-tag">NOSSOS PROJETOS</p>
          <h2>Projetos que se revelam por inteiro.</h2>
          <p>Na arquitetura, na luz, nos materiais, nos interiores e na forma como tudo se encontra. Conheça alguns de nossos projetos.</p>
        </div>
        <ProjectGallery />
      </section>

      <section className="services-detail">
        <div className="services-intro">
          <p className="section-tag">O QUE FAZEMOS</p>
          <h2>Serviços pensados para cada etapa do projeto.</h2>
          <p>Da arquitetura ao último detalhe dos interiores, com soluções que dão unidade, precisão e qualidade ao resultado.</p>
        </div>
        <div className="service-list">
          {[
            [
              "01",
              "Arquitetura residencial",
              "Uma boa casa começa muito antes da forma.",
              "Implantação, volumetria, circulação, incidência de luz, integração dos ambientes e relação com o entorno são trabalhadas como partes de uma mesma decisão. Desenvolvemos projetos residenciais completos, buscando soluções que aproveitem melhor cada espaço e construam uma arquitetura consistente do primeiro estudo à definição final.",
            ],
            [
              "02",
              "Design de interiores",
              "É nos interiores que muitas das decisões mais sutis começam a aparecer.",
              "Materiais, iluminação, marcenaria, mobiliário, texturas e proporções são pensados em conjunto para criar ambientes com unidade e presença. Cada elemento entra no projeto por uma razão — e é essa precisão na composição que faz o espaço funcionar como um todo.",
            ],
            [
              "03",
              "Detalhamento e especificação",
              "Um projeto bem pensado precisa ser igualmente bem definido.",
              "Detalhamos soluções, materiais, acabamentos, marcenaria, iluminação e demais elementos necessários para que cada decisão possa ser compreendida e executada com precisão. É nessa etapa que a intenção do projeto se transforma em informação clara para a obra.",
            ],
            [
              "04",
              "Acompanhamento de obra",
              "Entre o desenho e o resultado final, decisões continuam acontecendo.",
              "O acompanhamento de obra permite orientar ajustes, esclarecer soluções e preservar a coerência do projeto ao longo da execução. Uma presença técnica que ajuda a fazer com que aquilo que foi pensado chegue ao espaço construído com a mesma qualidade.",
            ],
            [
              "05",
              "Projetos comerciais",
              "Um espaço comercial também comunica uma identidade — e merece o mesmo cuidado de um projeto residencial.",
              "Escritórios, consultórios, lojas e ambientes corporativos pedem soluções que unam funcionalidade, fluidez de uso e a identidade de quem ocupa o espaço. Desenvolvemos a arquitetura e os interiores desses projetos com a mesma atenção às proporções, aos materiais e à luz — para que cada ambiente comercial seja, ao mesmo tempo, bem resolvido tecnicamente e coerente com a marca que representa.",
            ],
          ].map(([number, title, lead, body]) => (
            <details className="service-item" name="service" key={number}>
              <summary>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p className="service-lead">{lead}</p>
                </div>
                <ArrowRight size={22} strokeWidth={1.2} />
              </summary>
              <p className="service-body">{body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-image">
          <Image src="/assets/lediane-sorrindo.jpg" alt="Arquiteta Lediane Barbosa" fill sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
        <div className="about-content">
          <p className="section-tag">LEDIANE BARBOSA</p>
          <h2>Mais de 20 anos de arquitetura, repertório e precisão.</h2>
          <p>
            Lediane Barbosa construiu sua trajetória a partir de um olhar atento
            para aquilo que faz um projeto ganhar força: proporção, luz, materiais,
            composição e coerência entre todas as decisões.
          </p>
          <p>
            Formada pela UNIP Manaus e à frente do escritório Lediane Barbosa
            Arquitetura e Interiores, soma mais de 500 projetos realizados ao longo
            de mais de duas décadas de atuação, com forte presença na arquitetura
            residencial e no design de interiores.
          </p>
          <p>
            Seu trabalho é marcado pela valorização da luz natural, pelo uso
            criterioso de materiais nobres, pela presença da biofilia e por uma
            atenção minuciosa aos detalhes. Não como recursos isolados, mas como
            partes de uma arquitetura pensada por inteiro, do conceito à execução.
          </p>
          <p>
            Ao longo da carreira, participou de importantes mostras, como CASACOR
            Amazonas e Artefacto, além de ter recebido reconhecimentos e premiações
            no segmento, consolidando sua presença na arquitetura de alto padrão.
          </p>
          <p>
            Seu repertório também se constrói fora do escritório. Lediane já
            visitou 26 países, reunindo referências de diferentes culturas,
            paisagens, materiais e formas de viver. França, Itália, Indonésia,
            África do Sul, Reino Unido e Suíça estão entre os destinos que
            ampliaram seu olhar e seguem alimentando seu processo criativo.
          </p>
          <p>
            Mãe de três filhos e casada com Christiaan, também seu sócio, Lediane
            leva para o trabalho uma compreensão muito próxima do que uma casa
            representa no dia a dia. Talvez por isso seus projetos consigam
            equilibrar tão bem sofisticação, funcionalidade e aquela sensação rara
            de que tudo está exatamente onde deveria estar.
          </p>
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
        <div><span>ENDEREÇO</span><a href="https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Val%C3%A9rio%2C+985%2C+Manaus" target="_blank" rel="noreferrer"><MapPin size={14} /> Rua João Valério, 985, Manaus</a></div>
        <div><span>REDES SOCIAIS</span><a href="https://www.instagram.com/ledianebarbosaarquitetura/" target="_blank" rel="noreferrer"><InstagramIcon size={14} /> @ledianebarbosaarquitetura</a></div>
        <p>© 2026 Lediane Barbosa. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
