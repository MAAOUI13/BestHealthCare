import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Page d'accueil de BestHealthCare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav">
        <div className="nav__logo">BestHealthCare</div>
        <Link href="/login">
        <button className="btn">Se Connecter</button>
      </Link>
      </nav>

      <header className="header">
        <div className="content">
          <h1><span>Profitez dès maintenant</span><br />Services Médicaux</h1>
          <p>
            Explorez notre plateforme innovante et découvrez une expérience unique. Que vous soyez un professionnel ou un passionné, notre application web vous offre des fonctionnalités puissantes pour simplifier votre quotidien.
          </p>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <Image src="/assets/header-bg.png" alt="header image" width={475} height={450} />
          <div className="image__content image__content__1">
            <span><i className="ri-user-3-line"></i></span>
            <div className="details">
              <h4>400+</h4>
              <p>Clients actifs</p>
            </div>
          </div>
          <div className="image__content image__content__2">
            <ul>
              <li>
                <span><i className="ri-check-line"></i></span>
                Gérez votre cabinet en toute simplicité avec notre application intuitive et efficace
              </li>
              <li>
                <span><i la="ri-check-line"></i></span>
                Simplicité et précision au service de votre cabinet 
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>À propos de notre société</h2>
        <div className="about__content">
          <div className="about__text">
            <h3>Qui sommes-nous ?</h3>
            <p>
              Nous sommes <strong>BestConsultingIT</strong>, une entreprise qui regroupe des consultants experts spécialisés dans le développement de solutions informatiques innovantes. Notre mission est de créer des applications web performantes et conviviales qui répondent aux besoins spécifiques de nos clients.
            </p>
            <p>
              Avec des années d'expérience et une équipe dédiée de professionnels, nous nous engageons à offrir des solutions de haute qualité qui simplifient la gestion et optimisent les performances.
            </p>
           <br></br>
            <a href="https://bestconsultingit.com/" className="btn--primary">Visitez notre site</a> 
          </div>
        </div>
        <div className="about__highlights">
          <h3>Nos Points Forts</h3>
          <ul>
            <li><i className="ri-star-line"></i> Expertise Technique</li>
            <li><i la="ri-star-line"></i> Innovation Constante</li>
            <li><i la="ri-star-line"></i> Support Client Réactif</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__contact">
          <h3>Contactez-nous</h3>
          <p>Adresse : Tunisie, Tunis, Lac 1053</p>
          <p>Téléphone : +216 29 232 300</p>
          <p>Email : <a href="mailto:business@bestconsultingit.com">business@bestconsultingit.com</a></p>
        </div>
        <div className="footer__bottom">
          <p>© 2024 BestHealthCare. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

