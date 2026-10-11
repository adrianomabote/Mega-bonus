const PARTNER_URL =
  "https://abre.ai/tQf2";

const STEPS = [
  {
    title: "Regista-te.",
    detail: "Cria a tua conta grátis na plataforma.",
  },
  {
    title: "Deposita.",
    detail: "O valor é duplicado automaticamente.",
  },
  {
    title: "Joga já.",
    detail: "Aviator, cassino e apostas ao vivo.",
  },
];

function StepList() {
  return (
    <ol className="steps surface-card">
      {STEPS.map(({ title, detail }, index) => (
        <li className="step" key={title}>
          <a
            className="step-link"
            href={PARTNER_URL}
            rel="noopener noreferrer nofollow sponsored"
          >
            <span className="step-number" aria-hidden="true">
              {index + 1}
            </span>
            <p className="step-copy">
              <strong>{title}</strong> <span>{detail}</span>
            </p>
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function App() {
  return (
    <div className="page-background">
      <main className="landing-page">
        <div className="hero">
          <img
            className="hero-image"
            src="/images/aviator-hero.jpg"
            alt="Jogadora a mostrar o jogo Aviator no telemóvel com multiplicador alto"
            width="1242"
            height="1242"
            fetchPriority="high"
            decoding="async"
          />

          <span className="live-badge">
            <span className="live-indicator" aria-hidden="true" />
            Ao vivo agora
          </span>

          <div className="hero-fade" aria-hidden="true" />

          <p className="hero-caption">
            <span>8.44x</span> cashout confirmado no Aviator
          </p>
        </div>

        <section className="offer" aria-labelledby="bonus-title">
          <p className="eyebrow">Promoção de boas-vindas</p>

          <h1 id="bonus-title">
            Bónus de <span className="gold-gradient">100%</span> no 1º depósito
          </h1>

          <div className="minimum-deposit">
            <span>Depósito mínimo: 100MT</span>
          </div>

          <p className="first-deposit">Válido apenas para o seu primeiro depósito</p>

          <div className="steps-wrap">
            <StepList />
          </div>

          <p className="free-registration">Registo 100% gratuito</p>

          <div className="register-wrap">
            <a
              className="register-button"
              href={PARTNER_URL}
              rel="noopener noreferrer nofollow sponsored"
            >
              Registar agora <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="promotion-note">
            Promoção válida para novos clientes. Joga com responsabilidade. +18
          </p>
        </section>

        <div className="page-spacer" aria-hidden="true" />

        <footer className="page-footer">
          <p>18+ | Jogo responsável. Apostar pode causar dependência.</p>
          <p className="footer-extra">
            Conteúdo promocional para novos clientes em Moçambique.
          </p>
        </footer>
      </main>
    </div>
  );
}
