import "./About.css";

export function About() {
  return (
    <section className="About">
      <header className="AboutHero" aria-label="About hero illustration">
    
        <img
          src="/src/assets/images/about.png"
          width={800}
          height={400}
          loading="eager"
          decoding="async"
        />
      </header>

      <h2>Who’s Behind This</h2>
      <p>
        I’m <strong>Eliav Mendelsohn</strong> — an award-winning digital marketer turned full-stack builder…
        If you’re hiring a hybrid who ships both <em>product</em> and <em>progress</em>, 
        <a href="mailto:eliavman@gmail.com"> make me an offer</a>.
      </p>

      <h2>What the App Does</h2>
      <p>
        Brain Stack is your interview sparring partner: role + level + company → sharp, technical questions with crisp model answers.
      </p>

      <h2>How It’s Built</h2>
      <p>
        React + TypeScript + Vite, managed with pnpm, and powered by ChatGPT for role-aware question generation.
      </p>
    </section>
  );
}

export default About;
