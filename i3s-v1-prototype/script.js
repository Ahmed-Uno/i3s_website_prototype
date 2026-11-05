const app = document.getElementById("app");
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => nav.classList.toggle("open"));
document.addEventListener("click", e => {
  if (!e.target.closest(".site-header")) nav.classList.remove("open");
});

const solutions = [
  ["01","Convoyeurs","Solutions de convoyage et de manutention pour les environnements miniers, carrières et industriels.","Convoyeurs, bandes transporteuses, composants et accompagnement technique."],
  ["02","Filtration","Des solutions de filtration adaptées aux exigences des procédés industriels.","Filtration liquide, équipements et solutions adaptées à vos applications."],
  ["03","Caoutchouc & polyuréthane","Des composants techniques conçus pour résister à l’usure et aux conditions exigeantes.","Pièces d’usure, revêtements, composants et solutions sur mesure."],
  ["04","Autres solutions","Une offre complémentaire d’équipements, pièces et services pour vos installations.","Pompes, vannes, robinetterie, pièces de rechange et sourcing international."]
];

function layout(inner){
  app.innerHTML = inner;
  window.scrollTo(0,0);
}

function home(){
  layout(`
  <section class="hero">
    <div class="hero-content">
      <div class="eyebrow">Industrial Smart Solution Supplier</div>
      <h1>Des solutions industrielles qui performent.</h1>
      <p>I3S accompagne les acteurs des mines, carrières, ciment et industrie avec des équipements, des solutions techniques et un réseau international de fournisseurs.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#/solutions">Découvrir nos solutions ↗</a>
        <a class="btn btn-light" href="#/contact">Parler à un expert</a>
      </div>
    </div>
  </section>
  <div class="ticker"><span>Mining</span><span>Phosphate</span><span>Cement</span><span>Quarrying</span><span>Industry</span></div>

  <section class="section">
    <div class="intro-grid">
      <div>
        <div class="section-kicker">I3S en bref</div>
        <div class="big-statement">Une expertise industrielle. Un réseau international. Une approche terrain.</div>
      </div>
      <div class="intro-copy">I3S est une société marocaine spécialisée dans la fourniture de solutions industrielles complètes. Forte de son expérience et de son réseau international, elle accompagne ses clients dans l’optimisation de leurs performances avec des équipements de qualité, des pièces de rechange et une expertise technique adaptée à leurs besoins.</div>
    </div>
    <div class="stats">
      <div class="stat"><strong>28+</strong><span>ans d’expérience*</span></div>
      <div class="stat"><strong>04</strong><span>piliers d’expertise</span></div>
      <div class="stat"><strong>05</strong><span>secteurs clés</span></div>
      <div class="stat"><strong>360°</strong><span>de la conception à la livraison</span></div>
    </div>
    <p class="form-note" style="margin-top:15px">* Chiffre issu de la présentation actuelle — à valider avec I3S avant publication.</p>
  </section>

  <section class="section alt">
    <div class="section-head">
      <div class="section-kicker">Notre offre</div>
      <h2 class="section-title">Des solutions pensées pour vos contraintes.</h2>
      <p class="section-lead">Du convoyage à la filtration, I3S propose des solutions adaptées aux environnements industriels exigeants.</p>
    </div>
    <div class="cards">
      ${solutions.map(s=>`<article class="card"><div class="card-number">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><a href="#/solutions">En savoir plus →</a></article>`).join("")}
    </div>
  </section>

  <section class="section">
    <div class="section-head">
      <div class="section-kicker">Applications</div>
      <h2 class="section-title">Une présence dans les secteurs clés.</h2>
    </div>
    <div class="industries">
      <div class="industry" style="background-image:url('https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=80')"><h3>Mines</h3><p>Or, cuivre, fer, phosphates...</p></div>
      <div class="industry" style="background-image:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80')"><h3>Phosphate</h3><p>Procédés et produits phosphatés.</p></div>
      <div class="industry" style="background-image:url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80')"><h3>Ciment</h3><p>Fours, broyeurs et équipements.</p></div>
      <div class="industry" style="background-image:url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=80')"><h3>Carrières</h3><p>Concassage, criblage, lavage.</p></div>
      <div class="industry" style="background-image:url('https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=80')"><h3>Industrie</h3><p>Agroalimentaire, chimie, process.</p></div>
    </div>
  </section>

  <section class="section alt">
    <div class="why">
      <div class="why-image"></div>
      <div>
        <div class="section-kicker">Pourquoi I3S</div>
        <h2 class="section-title">Un partenaire qui reste aux côtés de vos équipes.</h2>
        <div class="points" style="margin-top:35px">
          <div class="point"><div class="point-icon">01</div><div><h3>Expertise terrain</h3><p>Une connaissance des environnements industriels et des contraintes opérationnelles.</p></div></div>
          <div class="point"><div class="point-icon">02</div><div><h3>Qualité & fiabilité</h3><p>Des équipements, pièces et solutions sélectionnés pour répondre aux exigences des applications.</p></div></div>
          <div class="point"><div class="point-icon">03</div><div><h3>Réseau international</h3><p>Un sourcing international pour identifier les technologies et fournisseurs adaptés.</p></div></div>
          <div class="point"><div class="point-icon">04</div><div><h3>Accompagnement</h3><p>De la conception à la livraison, avec un support technique au service du projet.</p></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div><div class="section-kicker">Votre prochain projet</div><h2>Construisons la solution.</h2><p>Parlez-nous de votre application, de votre équipement ou de votre besoin industriel.</p></div>
    <a class="btn btn-primary" href="#/contact">Contacter I3S ↗</a>
  </section>`);
}

function about(){
  layout(`
  <section class="page-hero"><div class="eyebrow">À propos d’I3S</div><h1>Une expertise au service de vos projets industriels.</h1><p>Industrial Smart Solution Supplier — une société marocaine tournée vers la performance, la fiabilité et l’accompagnement de ses clients.</p></section>
  <section class="section">
    <div class="about-grid">
      <div class="about-image"></div>
      <div class="prose">
        <div class="section-kicker">Qui sommes-nous ?</div>
        <h2>Votre partenaire de confiance pour l’industrie.</h2>
        <p>I3S est une société marocaine spécialisée dans la fourniture de solutions industrielles complètes pour les secteurs minier, cimentier, des carrières et de l’industrie lourde.</p>
        <p>Forte de son expérience et de son réseau international, I3S accompagne ses clients dans l’optimisation de leurs performances en leur proposant des équipements de qualité, des pièces de rechange et une expertise technique adaptée à leurs besoins.</p>
        <p>Notre approche combine compréhension du terrain, sélection de solutions et accompagnement technique pour construire des réponses concrètes aux enjeux industriels.</p>
      </div>
    </div>
  </section>
  <section class="section alt">
    <div class="section-head"><div class="section-kicker">Notre mission & notre vision</div><h2 class="section-title">Performance. Fiabilité. Durabilité.</h2></div>
    <div class="values">
      <div class="value"><h3>Mission</h3><p>Fournir des solutions fiables, innovantes et compétitives pour un secteur industriel durable et plus efficace.</p></div>
      <div class="value"><h3>Vision</h3><p>Devenir un acteur de référence dans la fourniture de solutions industrielles au Maroc, en Afrique et au Moyen-Orient.</p></div>
      <div class="value"><h3>Engagement</h3><p>Placer la qualité, la proximité client et la responsabilité au cœur de chaque projet.</p></div>
      <div class="value"><h3>Innovation</h3><p>Identifier les technologies et partenaires capables d’améliorer les performances des installations.</p></div>
    </div>
  </section>
  <section class="cta"><div><div class="section-kicker">Notre expertise</div><h2>Une approche orientée projet.</h2><p>Engineering, équipements, pièces de rechange et sourcing : quatre piliers pour accompagner vos besoins.</p></div><a class="btn btn-primary" href="#/solutions">Voir nos solutions ↗</a></section>`);
}

function solutionsPage(){
  layout(`
  <section class="page-hero"><div class="eyebrow">Nos solutions</div><h1>De l’équipement à la performance.</h1><p>Une offre industrielle structurée autour des besoins réels de vos installations.</p></section>
  <section class="section alt">
    <div class="solution-list">
      ${solutions.map(s=>`<article class="solution-row"><div class="num">${s[0]}</div><div><h2>${s[1]}</h2><p>${s[3]}</p></div><a href="#/contact">Discuter du besoin →</a></article>`).join("")}
    </div>
  </section>
  <section class="section">
    <div class="section-head"><div class="section-kicker">Écosystème</div><h2 class="section-title">Un réseau de partenaires technologiques.</h2><p class="section-lead">La présentation actuelle d’I3S met notamment en avant Truco, Maag Gear, Alpine, MetSlurry, MicroSeal, SEKO, GoodWin, Christian Pfeiffer, Valmet, S.Y.M., Transval et Naipu. Les logos et statuts de représentation pourront être intégrés et vérifiés en V2.</p></div>
    <div class="cards" style="grid-template-columns:repeat(3,1fr)">
      <article class="card"><div class="card-number">01</div><h3>Technologies</h3><p>Des solutions sélectionnées pour leurs performances et leur adéquation aux applications industrielles.</p></article>
      <article class="card"><div class="card-number">02</div><h3>Sourcing</h3><p>Recherche de fournisseurs, négociation, suivi des commandes, logistique et livraison.</p></article>
      <article class="card"><div class="card-number">03</div><h3>Support</h3><p>Une approche qui associe produit, disponibilité des pièces et accompagnement technique.</p></article>
    </div>
  </section>`);
}

function contact(){
  layout(`
  <section class="page-hero"><div class="eyebrow">Contact</div><h1>Parlons de votre projet.</h1><p>Décrivez-nous votre besoin industriel. Cette version du formulaire est uniquement visuelle.</p></section>
  <section class="section">
    <div class="contact-grid">
      <div class="contact-card">
        <div class="section-kicker">I3S Casablanca</div><h2>Construisons les solutions de demain.</h2>
        <div class="contact-item"><small>Adresse</small><span>26, avenue Mers Sultan, 1er étage, appt. 3<br>Casablanca, Maroc</span></div>
        <div class="contact-item"><small>Téléphone</small><a href="tel:+212661584085">+212 661 584 085</a></div>
        <div class="contact-item"><small>Email</small><a href="mailto:kamal.bendaou@indus3s.ma">kamal.bendaou@indus3s.ma</a></div>
        <div class="contact-item"><small>Site</small><a href="https://www.indus3s.ma" target="_blank" rel="noreferrer">www.indus3s.ma</a></div>
      </div>
      <form class="form" onsubmit="event.preventDefault(); alert('Prototype V1 : formulaire visuel uniquement.');">
        <div class="form-row"><div class="field"><label>Nom</label><input required placeholder="Votre nom"></div><div class="field"><label>Entreprise</label><input placeholder="Votre entreprise"></div></div>
        <div class="form-row"><div class="field"><label>Email</label><input type="email" required placeholder="nom@entreprise.com"></div><div class="field"><label>Téléphone</label><input placeholder="+212 ..."></div></div>
        <div class="field"><label>Votre besoin</label><input placeholder="Ex. convoyeur, filtration, pompe..."></div>
        <div class="field"><label>Message</label><textarea placeholder="Décrivez votre projet ou votre besoin technique..."></textarea></div>
        <div><button class="btn" style="background:var(--blue);color:#fff;border-color:var(--blue)" type="submit">Envoyer la demande ↗</button><p class="form-note">Aucun envoi réel n’est effectué dans cette V1.</p></div>
      </form>
    </div>
  </section>`);
}

function router(){
  const path = location.hash.replace("#","") || "/";
  nav.classList.remove("open");
  if(path === "/about") about();
  else if(path === "/solutions") solutionsPage();
  else if(path === "/contact") contact();
  else home();
}
window.addEventListener("hashchange", router);
router();
