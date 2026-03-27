import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Documentación no oficial sobre la AEAT
        </p>
        <p style={{maxWidth: '640px', margin: '0 auto 1.5rem'}}>
          Un recurso open source para desarrolladores, integradores y
          ciudadanos que quieren entender cómo funcionan los sistemas y
          la contratación de la Agencia Tributaria española.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Empezar
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/OpenHacienda">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const areas: {title: string; description: string; link: string; external?: boolean}[] = [
  {
    title: 'Contratación pública',
    description:
      'Cómo funciona la contratación tecnológica de la AEAT: expedientes, patrones, adjudicatarios y cómo buscar contratos.',
    link: '/docs/contratacion-publica',
  },
  {
    title: 'Llave',
    description:
      'Biblioteca open source multiplataforma para gestión de certificados electrónicos y autenticación con Cl@ve.',
    link: 'https://github.com/aldoborrero/llave',
    external: true,
  },
];

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación no oficial sobre la AEAT y la administración tributaria española">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
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
            <div className="row" style={{marginTop: '1rem'}}>
              <div className="col col--8 col--offset-2">
                <p>
                  La documentación oficial de la AEAT es frecuentemente
                  incompleta, dispersa o difícil de interpretar — este proyecto
                  intenta llenar ese hueco.
                </p>
              </div>
            </div>
            <div className="row" style={{marginTop: '1.5rem'}}>
              <div className="col col--8 col--offset-2">
                <Heading as="h2">¿Qué encontrarás aquí?</Heading>
              </div>
            </div>
            <div className="row">
              {areas.map(({title, description, link, external}) => (
                <div className="col col--6" key={title} style={{marginBottom: '1rem'}}>
                  <div className="card" style={{height: '100%'}}>
                    <div className="card__header">
                      <Heading as="h3">{title}</Heading>
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
            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--8 col--offset-2">
                <Heading as="h2">Contribuir</Heading>
                <p>
                  Este proyecto es open source y acepta contribuciones. Si
                  encuentras un error, tienes información adicional o quieres
                  documentar algo nuevo, abre un PR en{' '}
                  <Link href="https://github.com/OpenHacienda">GitHub</Link>.
                </p>
                <p>
                  <Link to="/docs/por-que">
                    Lee más sobre por qué existe este proyecto →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
