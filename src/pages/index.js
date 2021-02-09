import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Gestion des inscriptions et réinscriptions',
    imageUrl: 'img/Groupe8756.png',
    description: (
      <>
        Cette fonctionnalité permet de gérer les opérations d'inscription et réinscription des élèves.
      </>
    ),
  },
  {
    title: 'Gestion des notes et des moyennes',
    imageUrl: 'img/Groupe8747.png',
    description: (
      <>
        La gestion des notes concerne les programmations, la saisie des notes et la publication des moyennes ainsi que le classement des élèves.
      </>
    ),
  },
  {
    title: 'Communication avec les parents',
    imageUrl: 'img/Groupe8748.png',
    description: (
      <>
        Cette fonctionnalité sert à effectuer des campgnes SMS vers les numéros des parents d'élèves.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Image() {
  return (
    <img className={styles.img} src={useBaseUrl('img/dashboard2.png')} alt="dashboard" />
    // <main>
    //   {/* <h1 className="purple-text">Purple Heading!</h1> */}
    //   <div className="container">
    //     <div className="row">
    //       {/* <img className={styles.img} src={useBaseUrl('img/dashboard.PNG')} alt="dashboard" /> */}
    //     </div>
    //   </div>
      
    // </main>
  );
}

// function MyComponent() {
//   return (
//     <main>
//       <Image />
//     </main>
//   );
// }

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              // button button--primary button--lg : button button--outline button--secondary button--lg
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>

          <div className={styles.heights}></div>
          
        </div>

        {/* <div className={styles.heights}>

        </div> */}
      
      </header>

      <div className={styles.comntentImg}>
        <Image />
      </div>
      
      <div className={styles.heights}></div>
      <br></br><br></br><br></br><br></br>
      
      <h2 className="text--center">Quelques fonctionnalités</h2>
      
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        
      </main>
    </Layout>
    
  );
}

export default Home;
