import {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';

import styles from './index.module.css';

// ── Hooks ────────────────────────────────────────────────────────────────

function useCountUp(end: number, duration = 1500): [React.RefObject<HTMLSpanElement>, number] {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          if (prefersReduced || end === 0) {
            setCount(end);
            return;
          }

          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      {threshold: 0.5},
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, count];
}

// ── Data ─────────────────────────────────────────────────────────────────

type Card = {
  title: string;
  description: string;
  link: string;
  external?: boolean;
  badge?: 'new' | 'beta';
};

const areas: Card[] = [
  {
    title: 'Contratación pública',
    description:
      'Cómo funciona la contratación tecnológica de la AEAT: expedientes, patrones, adjudicatarios y cómo buscar contratos.',
    link: '/docs/contratacion-publica',
  },
];

const projects: Card[] = [
  {
    title: 'Llave',
    description:
      'Biblioteca open source multiplataforma para gestión de certificados electrónicos y autenticación con Cl@ve.',
    link: 'https://github.com/aldoborrero/llave',
    external: true,
    badge: 'new',
  },
  {
    title: 'puntoBOE',
    description:
      'Validador de ficheros BOE de la AEAT que funciona 100% en el navegador, sin envío de datos a ningún servidor.',
    link: 'https://github.com/OpenHacienda/puntoBOE',
    external: true,
    badge: 'beta',
  },
];

// ── Sections ─────────────────────────────────────────────────────────────

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className={clsx('badge-beta', styles.heroEyebrow)}>
          Transparencia fiscal open source
        </span>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>
          Entender la AEAT no debería ser tan difícil
        </p>
        <p className={styles.heroDescription}>
          Documentación abierta, herramientas open source y transparencia
          sobre la administración tributaria española.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Leer la documentación
          </Link>
          <Link
            className={clsx('button button--lg', styles.outlineButton)}
            href="https://github.com/OpenHacienda">
            Ver en GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  const [ref1, count1] = useCountUp(100);
  const [ref2, count2] = useCountUp(0);
  const [ref3, count3] = useCountUp(3);

  return (
    <section className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span ref={ref1} className={styles.statNumber}>
              {count1}%
            </span>
            <span className={styles.statLabel}>Open Source</span>
          </div>
          <div className={styles.stat}>
            <span ref={ref2} className={styles.statNumber}>
              {count2}
            </span>
            <span className={styles.statLabel}>Datos enviados a servidores</span>
          </div>
          <div className={styles.stat}>
            <span ref={ref3} className={styles.statNumber}>
              {count3}
            </span>
            <span className={styles.statLabel}>Plataformas soportadas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionStatement() {
  return (
    <section className={clsx(styles.mission, styles.fadeInOnScroll)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.missionText}>
              La AEAT no debería ser un monstruo al que tenerle miedo.
              Cuando los sistemas son difíciles de entender, la
              documentación es escasa y las herramientas solo funcionan
              en condiciones muy concretas, se crea una distancia entre
              la administración y los ciudadanos que no beneficia a nadie.
              OpenHacienda existe para reducir esa distancia: documentar
              cómo funcionan las cosas, hacer accesible lo que debería
              serlo, y contribuir a que la administración tributaria rinda
              cuentas ante la ciudadanía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className={clsx(styles.comparisonSection, styles.fadeInOnScroll)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionHeading}>
              Por qué herramientas abiertas
            </Heading>
          </div>
        </div>
        <div className="row">
          <div className="col col--6" style={{marginBottom: '1rem'}}>
            <div className={clsx('card', styles.cardNegative, styles.cardLift)} style={{height: '100%'}}>
              <div className="card__header">
                <Heading as="h3">La experiencia habitual</Heading>
              </div>
              <div className="card__body">
                <ul style={{paddingLeft: '1.2rem'}}>
                  <li>Applets de Java que requieren versiones específicas del navegador.</li>
                  <li>Validar ficheros subiendo datos a servidores de la AEAT.</li>
                  <li>Certificados que solo funcionan con el software de la FNMT en Windows.</li>
                  <li>Documentación en PDF sin ejemplos de código.</li>
                  <li>Herramientas que solo funcionan en un sistema operativo.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--6" style={{marginBottom: '1rem'}}>
            <div className={clsx('card', styles.cardPositive, styles.cardLift)} style={{height: '100%'}}>
              <div className="card__header">
                <Heading as="h3">Con OpenHacienda</Heading>
              </div>
              <div className="card__body">
                <ul className="list-check" style={{paddingLeft: 0}}>
                  <li>Funciona en cualquier navegador moderno.</li>
                  <li>Validación local — tus datos no salen de tu máquina.</li>
                  <li>Gestión de certificados multiplataforma: macOS, Windows, Linux.</li>
                  <li>Documentación con ejemplos reales, versionada en git.</li>
                  <li>Todo open source, auditable y sin coste.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardGrid({title, cards}: {title: string; cards: Card[]}) {
  return (
    <section className={clsx(styles.section, styles.fadeInOnScroll)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionHeading}>
              {title}
            </Heading>
          </div>
        </div>
        <div className="row">
          {cards.map(({title: cardTitle, description, link, external, badge}) => (
            <div className="col col--6" key={cardTitle} style={{marginBottom: '1rem'}}>
              <div className={clsx('card', styles.cardLift)} style={{height: '100%'}}>
                <div className="card__header">
                  <Heading as="h3">
                    {cardTitle}
                    {badge && (
                      <>
                        {' '}
                        <span className={`badge-${badge}`}>{badge}</span>
                      </>
                    )}
                  </Heading>
                </div>
                <div className="card__body">
                  <p>{description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--sm"
                    {...(external ? {href: link} : {to: link})}>
                    {external ? 'Ver en GitHub →' : 'Ver documentación →'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributeCTA() {
  return (
    <section className={styles.contributeCta}>
      <div className="container">
        <Heading as="h2">Contribuir</Heading>
        <p>
          Este proyecto es open source y acepta contribuciones. Si
          encuentras un error, tienes información adicional o quieres
          documentar algo nuevo, abre un PR.
        </p>
        <div className={styles.contributeButtons}>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/OpenHacienda">
            Abrir en GitHub
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/por-que">
            Por qué existe este proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}

function LegalDisclaimer() {
  return (
    <section className={styles.disclaimer}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Admonition type="warning" title="Aviso legal">
              Este sitio <strong>no está afiliado con la AEAT</strong> ni
              con ningún organismo oficial. La información aquí publicada es
              de carácter técnico y orientativo.
            </Admonition>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación no oficial sobre la AEAT y la administración tributaria española">
      <HomepageHero />
      <StatsBar />
      <main>
        <MissionStatement />
        <hr className={styles.sectionDivider} />
        <ComparisonSection />
        <hr className={styles.sectionDivider} />
        <CardGrid title="¿Qué encontrarás aquí?" cards={areas} />
        <hr className={styles.sectionDivider} />
        <CardGrid title="Proyectos" cards={projects} />
      </main>
      <ContributeCTA />
      <LegalDisclaimer />
    </Layout>
  );
}
