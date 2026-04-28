const coaches = [
  {
    n:'001',
    name:'Basketball Money: The Pattern Coach',
    cog:'COG 01',
    drill:'Pattern Recognition Drill',
    freeUrl:'https://chatgpt.com/g/g-69f0984f5fc881918ff9630398483a75-basketball-money-the-pattern-coach',
    paidUrl:'paid-gate.html?cog=1',
    purpose:{
      en:'Learn to see repeated cues, defender habits, spacing signals, mistakes, and opportunities before reacting.',
      es:'Aprende a ver señales repetidas, hábitos defensivos, spacing, errores y oportunidades antes de reaccionar.'
    },
    bullets:{
      en:['See what others miss','Recognize repeated cues','Turn pattern recognition into value'],
      es:['Ve lo que otros no ven','Reconoce señales repetidas','Convierte patrones en valor']
    }
  },
  {
    n:'002',
    name:'Basketball Money: The Reaction Control Coach',
    cog:'COG 02',
    drill:'Reaction Control Drill',
    freeUrl:'',
    paidUrl:'paid-gate.html?cog=2',
    purpose:{
      en:'Learn to react quickly without panic, overreaction, emotional loss, or poor discipline.',
      es:'Aprende a reaccionar rápido sin pánico, sobre-reacción, pérdida emocional o falta de disciplina.'
    },
    bullets:{
      en:['React fast with control','Stay disciplined under pressure','Turn reaction into trust'],
      es:['Reacciona rápido con control','Mantente disciplinado bajo presión','Convierte reacción en confianza']
    }
  },
  {
    n:'003',
    name:'Basketball Money: The Sequence Recall Coach',
    cog:'COG 03',
    drill:'Sequence Recall Drill',
    freeUrl:'',
    paidUrl:'paid-gate.html?cog=3',
    purpose:{
      en:'Learn to remember sequences, reads, instructions, and the right action when pressure rises.',
      es:'Aprende a recordar secuencias, lecturas, instrucciones y la acción correcta cuando sube la presión.'
    },
    bullets:{
      en:['Remember under pressure','Build sequence discipline','Prove mental organization'],
      es:['Recuerda bajo presión','Construye disciplina de secuencia','Prueba organización mental']
    }
  },
  {
    n:'004',
    name:'Basketball Money: The Vision Coach',
    cog:'COG 04',
    drill:'Multi-Target Vision Drill',
    freeUrl:'',
    paidUrl:'paid-gate.html?cog=4',
    purpose:{
      en:'Learn to track multiple targets: ball, defenders, teammates, space, timing, and pressure.',
      es:'Aprende a seguir múltiples objetivos: balón, defensores, compañeros, espacio, timing y presión.'
    },
    bullets:{
      en:['Track more than one target','Read the whole floor','Turn vision into opportunity'],
      es:['Sigue más de un objetivo','Lee toda la cancha','Convierte visión en oportunidad']
    }
  },
  {
    n:'005',
    name:'Basketball Money: The Decision Speed Coach',
    cog:'COG 05',
    drill:'Decision Speed Blueprint Drill',
    freeUrl:'',
    paidUrl:'paid-gate.html?cog=5',
    purpose:{
      en:'Learn to make faster, smarter decisions without playing rushed or losing the advantage.',
      es:'Aprende a tomar decisiones más rápidas e inteligentes sin jugar apresurado ni perder la ventaja.'
    },
    bullets:{
      en:['Process fast without rushing','Choose before the window closes','Build your Basketball Money Blueprint'],
      es:['Procesa rápido sin apresurarte','Decide antes de que cierre la ventana','Construye tu Blueprint Basketball Money']
    }
  }
];

const body = document.body;
const coachGrid = document.getElementById('coachGrid');
const drillGrid = document.getElementById('drillGrid');

function lang(){
  return body.dataset.lang || 'en';
}

function render(){
  const current = lang();

  coachGrid.innerHTML = coaches.map(coach => {
    const freeBtn = coach.freeUrl
      ? `<a class="small-btn free" href="${coach.freeUrl}" target="_blank" rel="noopener noreferrer">${current === 'en' ? 'Open Free Coach' : 'Abrir Coach Gratis'}</a>`
      : `<a class="small-btn free disabled" href="#">${current === 'en' ? 'Free Coach Link Coming' : 'Enlace Del Coach Próximamente'}</a>`;

    return `
      <article class="coach-card">
        <div class="coach-top">
          <span class="coach-number">${coach.n}</span>
          <h3>${coach.name}</h3>
          <p>${coach.purpose[current]}</p>
        </div>

        <div class="coach-body">
          <div class="cog-line">
            <span>${coach.cog}</span>
            <span>🔒</span>
          </div>

          <div class="mini-list">
            ${coach.bullets[current].map(item => `<span>${item}</span>`).join('')}
          </div>

          <div class="card-actions">
            ${freeBtn}
            <a class="small-btn paid" href="${coach.paidUrl}">${current === 'en' ? `Unlock ${coach.cog}` : `Desbloquear ${coach.cog}`}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  drillGrid.innerHTML = coaches.map(coach => `
    <article class="drill-card">
      <strong>${coach.cog}</strong>
      <h3>${coach.drill}</h3>
      <p>${coach.purpose[current]}</p>
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

document.querySelectorAll('[data-set-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

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
