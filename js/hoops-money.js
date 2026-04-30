const coaches = [
  {
    n: '001',
    topic: 'Pattern Recognition',
    name: 'Basketball Money: The Pattern Coach',
    cog: 'COG 01',
    cogName: 'React',
    image: 'images/image-001.png',
    freeUrl: 'https://chatgpt.com/g/g-69f0984f5fc881918ff9630398483a75-basketball-money-the-pattern-coach',
    cogUrl: '/cogs/cog-01.html',
    purpose: {
      en: 'Learn to see repeated cues, defender habits, spacing signals, mistakes, and opportunities before reacting.',
      es: 'Aprende a ver señales repetidas, hábitos defensivos, spacing, errores y oportunidades antes de reaccionar.'
    },
    bullets: {
      en: ['See what others miss', 'Recognize repeated cues', 'Turn pattern recognition into value'],
      es: ['Ve lo que otros no ven', 'Reconoce señales repetidas', 'Convierte patrones en valor']
    },
    drill: {
      en: 'Test how quickly you recognize cues and react to what is happening.',
      es: 'Prueba cuán rápido reconoces señales y reaccionas a lo que está pasando.'
    }
  },
  {
    n: '002',
    topic: 'Reaction Control',
    name: 'Basketball Money: The Reaction Control Coach',
    cog: 'COG 02',
    cogName: 'Recall',
    image: 'images/image-002.png',
    freeUrl: 'https://chatgpt.com/g/g-69f0aa32ab2481918057aa69e24fd03d-basketball-money-the-reaction-control-coach',
    cogUrl: '/cogs/cog-02.html',
    purpose: {
      en: 'Learn to react quickly without panic, overreaction, emotional loss, or poor discipline.',
      es: 'Aprende a reaccionar rápido sin pánico, sobre-reacción, pérdida emocional o falta de disciplina.'
    },
    bullets: {
      en: ['React fast with control', 'Stay disciplined under pressure', 'Turn reaction into trust'],
      es: ['Reacciona rápido con control', 'Mantente disciplinado bajo presión', 'Convierte reacción en confianza']
    },
    drill: {
      en: 'Test how well you remember and use information under pressure.',
      es: 'Prueba qué tan bien recuerdas y usas información bajo presión.'
    }
  },
  {
    n: '003',
    topic: 'Sequence Recall',
    name: 'Basketball Money: The Sequence Recall Coach',
    cog: 'COG 03',
    cogName: 'Reflex',
    image: 'images/image-003.png',
    freeUrl: 'https://chatgpt.com/g/g-69f0b04f020881918fa092260f66f476-basketball-money-the-sequence-recall-coach',
    cogUrl: '/cogs/cog-03.html',
    purpose: {
      en: 'Learn to remember sequences, reads, instructions, and the right action when pressure rises.',
      es: 'Aprende a recordar secuencias, lecturas, instrucciones y la acción correcta cuando sube la presión.'
    },
    bullets: {
      en: ['Remember under pressure', 'Build sequence discipline', 'Prove mental organization'],
      es: ['Recuerda bajo presión', 'Construye disciplina de secuencia', 'Prueba organización mental']
    },
    drill: {
      en: 'Test reaction quality, timing, discipline, and quick response control.',
      es: 'Prueba calidad de reacción, timing, disciplina y control de respuesta rápida.'
    }
  },
  {
    n: '004',
    topic: 'Multi-Target Vision',
    name: 'Basketball Money: The Vision Coach',
    cog: 'COG 04',
    cogName: 'Replay',
    image: 'images/image-004.png',
    freeUrl: 'https://chatgpt.com/g/g-69f0b5d6284881918080e60ba5345884-basketball-money-the-vision-coach',
    cogUrl: '/cogs/cog-04.html',
    purpose: {
      en: 'Learn to track multiple targets: ball, defenders, teammates, space, timing, and pressure.',
      es: 'Aprende a seguir múltiples objetivos: balón, defensores, compañeros, espacio, timing y presión.'
    },
    bullets: {
      en: ['Track more than one target', 'Read the whole floor', 'Turn vision into opportunity'],
      es: ['Sigue más de un objetivo', 'Lee toda la cancha', 'Convierte visión en oportunidad']
    },
    drill: {
      en: 'Test how well you track, remember, and replay game-like information.',
      es: 'Prueba cómo sigues, recuerdas y reproduces información parecida al juego.'
    }
  },
  {
    n: '005',
    topic: 'Decision Speed',
    name: 'Basketball Money: The Decision Speed Coach',
    cog: 'COG 05',
    cogName: 'Ritmo',
    image: 'images/image-005.png',
    freeUrl: 'https://chatgpt.com/g/g-69f0bc40872c81919fc54d2dda4904cb-basketball-money-the-decision-speed-coach',
    cogUrl: '/cogs/cog-05.html',
    purpose: {
      en: 'Learn to make faster, smarter decisions without playing rushed or losing the advantage.',
      es: 'Aprende a tomar decisiones más rápidas e inteligentes sin jugar apresurado ni perder la ventaja.'
    },
    bullets: {
      en: ['Process fast without rushing', 'Choose before the window closes', 'Build your Basketball Money Blueprint'],
      es: ['Procesa rápido sin apresurarte', 'Decide antes de que cierre la ventana', 'Construye tu Blueprint Basketball Money']
    },
    drill: {
      en: 'Test rhythm, timing, decision speed, and the ability to stay composed in flow.',
      es: 'Prueba ritmo, timing, velocidad de decisión y la habilidad de mantenerse compuesto en flujo.'
    }
  }
];

const body = document.body;
const coachGrid = document.getElementById('coachGrid');
const drillGrid = document.getElementById('drillGrid');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function lang(){
  return body.dataset.lang || 'en';
}

function render(){
  const current = lang();

  coachGrid.innerHTML = coaches.map(coach => `
    <article class="coach-card">
      <div class="coach-image">
        <img src="${coach.image}" alt="${coach.name}">
      </div>

      <div class="coach-top">
        <span class="coach-number">${coach.n}</span>
        <span class="coach-topic">${coach.topic}</span>
        <h3>${coach.name}</h3>
        <p>${coach.purpose[current]}</p>
      </div>

      <div class="coach-body">
        <div class="cog-line">
          <span>${coach.cog}</span>
          <span>FREE</span>
        </div>

        <p class="cog-name">${coach.cogName}</p>

        <div class="mini-list">
          ${coach.bullets[current].map(item => `<span>${item}</span>`).join('')}
        </div>

        <div class="card-actions">
          <a class="small-btn free" href="${coach.freeUrl}" target="_blank" rel="noopener noreferrer">
            ${current === 'en' ? 'Open Free Coach' : 'Abrir Coach Gratis'}
          </a>

          <a class="small-btn paid" href="${coach.cogUrl}">
            ${current === 'en' ? `Play Free ${coach.cog}` : `Jugar ${coach.cog} Gratis`}
          </a>
        </div>
      </div>
    </article>
  `).join('');

  drillGrid.innerHTML = coaches.map(coach => `
    <article class="drill-card">
      <strong>${coach.cog}</strong>
      <h3>${coach.cogName}</h3>
      <p>${coach.drill[current]}</p>
      <a class="small-btn paid" href="${coach.cogUrl}" style="margin-top:14px;">
        ${current === 'en' ? `Play Free ${coach.cog}` : `Jugar ${coach.cog} Gratis`}
      </a>
    </article>
  `).join('');
}

function setLanguage(nextLang){
  body.dataset.lang = nextLang;
  document.documentElement.lang = nextLang === 'es' ? 'es' : 'en';

  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setLang === nextLang);
  });

  render();
}

function closeMenu(){
  mobileMenu.classList.remove('open');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded','false');
}

function openMenu(){
  mobileMenu.classList.add('open');
  menuToggle.classList.add('active');
  menuToggle.setAttribute('aria-expanded','true');
}

document.querySelectorAll('[data-set-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 920) closeMenu();
});

render();
