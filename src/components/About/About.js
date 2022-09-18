import './About.scss';

function About() {
  const steps = [
    'Cuentanos que productos te interesan',
    'Te compartimos el número de cuenta para realizar el pago*',
    'Puedes recoger el producto a partir de la fecha marcada como disponible',
  ];

  return (
    <section className="about container">
      <h1 className="about__title">¿Como comprar?</h1>
      <ul className="about__list">
        {steps.map((step, index) => (
          <li key={step} className="about__list-item">
            <div>
              <span className="about__step-title">{`${index + 1}`}</span>
              <p className="about__step-description">{step}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="about__note">
        *Los precios no incluyen costos de envío
      </p>
    </section>
  );
}

export default About;
