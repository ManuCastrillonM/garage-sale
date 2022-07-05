import './About.scss';

function About() {
  const steps = [
    'Cuentanos que productos te interesan',
    'Te compartimos el número de cuenta para realizar el pago',
    'Puedes recoger el producto (no nos encargamos del envío)',
  ];

  return (
    <section className="about">
      <h1 className="about__title">¿Como comprar?</h1>
      <ul>
        {steps.map((step, index) => (
          <li key={step}>
            {`${index + 1}. `}
            {step}
          </li>
        ))}
      </ul>
      <p className="about__note">
        <span className="about__note-title">nota:</span>
        {' '}
        Los precios no incluyen costos de envío
      </p>
    </section>
  );
}

export default About;
