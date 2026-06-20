import { useState } from 'react'
import './App.css'
import vitorbraga1 from './assets/vitorbraga1.png'
import vitorbraga2 from './assets/vitorbraga2.png'
import vitorbraga3 from './assets/vitorbraga3.png'
import vitorbraga4 from './assets/vitorbraga4.png'
import vitorbraga5 from './assets/vitorbraga5.png'

const buyLink = 'https://pay.kiwify.com.br/XvcZrMp'

const events = [
  { src: vitorbraga5, name: 'Web Summit Rio', caption: 'No maior palco de tecnologia do mundo, representando o Brasil no empreendedorismo' },
  { src: vitorbraga2, name: 'Rio Innovation Week', caption: 'Participu do evento discutindo o futuro dos investimentos digitais.' },
  { src: vitorbraga4, name: 'NewHack', caption: 'Networking com líderes do setor e conexões que geram oportunidades reais.' },
  { src: vitorbraga3, name: 'Horasis', caption: 'Encontro global de líderes e estratégias que moldam o mercado.' },
]

const modules = [
  { title: 'Análise Fundamentalista', desc: 'Entenda blockchain, tokens e as grandes oportunidades do mercado.', icon: '🔬' },
  { title: 'Configuração de Gráficos', desc: 'Monte setups limpos e práticos para operar com confiança.', icon: '📊' },
  { title: 'Estratégia LHAM', desc: 'Saiba quando entrar e quando sair com uma técnica profissional.', icon: '🎯' },
  { title: 'Análise Técnica', desc: 'Use indicadores e gestão de risco para ganhar consistência.', icon: '📈' },
  { title: 'Mercado Futuros', desc: 'Ganhos diários gastando apenas 15 minutos por dia.', icon: '⚡' },
  { title: 'NFTs & Carteiras', desc: 'Compre, venda e armazene ativos digitais com segurança.', icon: '🛡️' },
]

const faq = [
  { q: 'Como é o formato do curso?', a: '100% online com aulas gravadas. Você assiste de qualquer lugar, no seu ritmo. Acesso vitalício.' },
  { q: 'Preciso ter experiência com criptomoedas?', a: 'Não. O curso começa do absoluto zero e vai até técnicas avançadas. Você aprende no seu passo.' },
  { q: 'O curso dá certificado?', a: 'Sim. Ao final você recebe um certificado de conclusão reconhecido.' },
  { q: 'Quanto tempo leva para ver resultados?', a: 'Alunos dedicados começam a ver resultados nas primeiras semanas. O método é prático e direto.' },
  { q: 'Tem garantia?', a: '7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.' },
]

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="app">
      {/* ───── Topbar ───── */}
      <nav className="topbar">
        <div className="brand">Milionário com Criptomoedas</div>
        <div className="topbar-actions">
          <a href="#modules" className="topbar-link">Módulos</a>
          <a href="#pricing" className="topbar-link">Preço</a>
          <a href={buyLink} target="_blank" rel="noreferrer" className="nav-link">
            Garanta sua vaga
          </a>
        </div>
      </nav>

      {/* ───── Hero ───── */}
      <section className="section hero-sec" id="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow">🔥 Treinamento estratégico</span>
            <h1>Do zero aos primeiros lucros em criptomoedas —<br /> com um método que já deu certo.</h1>
            <p className="hero-p">
              Eu já ajudei dezenas de alunos a pagar dívidas, comprar imóveis e conquistar liberdade financeira. 
              Agora quero ajudar você com o mesmo método que me levou aos palcos do <strong>Web Summit Rio</strong>, 
              <strong> Rio Innovation Week</strong>, <strong>New Hack</strong> e em 2025 entrei no<strong> Youtube Partner Perks Club</strong>.
            </p>
            <div className="hero-actions">
              <a href={buyLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                Quero começar agora
              </a>
              <a href="#gallery" className="btn btn-outline btn-lg">
                Ver eventos →
              </a>
            </div>
            <div className="hero-social-proof">
              <div className="proof-item">
                <strong>8+ anos</strong>
                <span>de mercado</span>
              </div>
              <div className="proof-item">
                <strong>R$ 60k+</strong>
                <span>em dívidas quitadas</span>
              </div>
              <div className="proof-item">
                <strong>150+</strong>
                <span>países alcançados</span>
              </div>
              <div className="proof-item">
                <strong>40+</strong>
                <span>eventos como palestrante</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <img src={vitorbraga1} alt="Vitor Braga no Web Summit Rio" />
              <div className="hero-card-body">
                <span className="hero-card-tag">📸 Web Summit Rio 2025</span>
                <p>"O mercado de criptomoedas é a maior transferência de riqueza da nossa geração."</p>
              </div>
            </div>
            <div className="hero-glow" />
          </div>
        </div>
      </section>

      {/* ───── Story ───── */}
      <section className="section story-sec" id="story">
        <div className="story-inner">
          <span className="section-label">📖 Minha história</span>
          <h2>Da favela aos palcos internacionais — como as criptomoedas mudaram minha vida.</h2>
          <div className="story-cards">
            <div className="story-card">
              <span className="story-icon">🏠</span>
              <h3>Apartamento dos meus pais</h3>
              <p>Com meus lucros no mercado de criptomoedas, quitei o apartamento dos meus pais — um sonho que parecia impossível.</p>
            </div>
            <div className="story-card">
              <span className="story-icon">🎓</span>
              <h3>Reconhecimento internacional</h3>
              <p>Meu método chamou a atenção de 150 países ao redor do mundo,entre eles: <strong>Estados Unidos</strong>, <strong>Reino Unido</strong> e <strong>Emirados Árabes Unidos</strong>.</p>
            </div>
            <div className="story-card">
              <span className="story-icon">💰</span>
              <h3>Alunos transformados</h3>
              <p>Alunos que seguiram o método quitaram dívidas de mais de <strong>R$ 60 mil</strong> e conquistaram estabilidade financeira.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Event Gallery ───── */}
      <section className="section gallery-sec" id="gallery">
        <div className="gallery-inner">
          <span className="section-label">📸 Presença internacional</span>
          <h2>Dos maiores palcos do mundo para a sua tela.</h2>
          <p className="section-p">
            Veja os eventos onde apresentei meu método e construí autoridade no mercado de criptomoedas.
          </p>
          <div className="gallery-grid">
            {events.map(e => (
              <div key={e.name} className="gallery-card">
                <div className="gallery-img">
                  <img src={e.src} alt={e.name} />
                </div>
                <div className="gallery-body">
                  <h3>{e.name}</h3>
                  <p>{e.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Modules ───── */}
      <section className="section modules-sec" id="modules">
        <div className="modules-inner">
          <span className="section-label">📚 Conteúdo do curso</span>
          <h2>Tudo que você precisa para operar com segurança e lucrar.</h2>
          <p className="section-p">Módulos práticos, diretos e atualizados com o mercado real.</p>
          <div className="modules-grid">
            {modules.map(m => (
              <div key={m.title} className="module-card">
                <span className="module-icon">{m.icon}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Stats / Authority ───── */}
      <section className="section stats-sec">
        <div className="stats-inner">
          <div className="stat-big-card">
            <div className="stat-item">
              <strong>8+</strong>
              <span>Anos de mercado</span>
            </div>
            <div className="stat-item">
              <strong>R$ 60k+</strong>
              <span>Dívidas quitadas por alunos</span>
            </div>
            <div className="stat-item">
              <strong>150+</strong>
              <span>Países alcançados</span>
            </div>
            <div className="stat-item">
              <strong>5</strong>
              <span>Eventos como expositor e palestrante</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Método prático e direto</span>
            </div>
            <div className="stat-item">
              <strong>7 dias</strong>
              <span>Garantia incondicional</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Pricing ───── */}
      <section className="section pricing-sec" id="pricing">
        <div className="pricing-inner">
          <span className="section-label">🎯 Oferta especial</span>
          <h2>Invista no seu futuro por menos do que você imagina.</h2>
          <p className="section-p">Curso completo + bônus exclusivos + acesso vitalício.</p>
          <div className="pricing-card">
            <div className="pricing-header">
              <span className="pricing-badge">MAIS POPULAR</span>
              <div className="pricing-price">
                <strong>R$ 497</strong>
                <span>à vista ou 12x no cartão</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✅ Módulo completo de Análise Fundamentalista</li>
              <li>✅ Configuração de Gráficos profissional</li>
              <li>✅ Estratégia LHAM (passo a passo)</li>
              <li>✅ Análise Técnica com indicadores exclusivos</li>
              <li>✅ Mercado Futuros — ganhos diários</li>
              <li>✅ NFTs & Carteiras digitais</li>
              <li>🎁 <strong>Bônus:</strong> Criptomoedas Milionárias</li>
              <li>🎁 <strong>Bônus:</strong> Tech Ações emergentes</li>
              <li>🎁 <strong>Bônus:</strong> Carteiras físicas e virtuais</li>
              <li>🔒 Garantia de 7 dias</li>
            </ul>
            <a href={buyLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg btn-block">
              Quero começar agora
            </a>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="section faq-sec" id="faq">
        <div className="faq-inner">
          <span className="section-label">❓ Perguntas frequentes</span>
          <h2>Ficou alguma dúvida?</h2>
          <div className="faq-list">
            {faq.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="section final-cta-sec">
        <div className="final-cta-inner">
          <h2>Você está a um clique de mudar sua vida financeira.</h2>
          <p>Entre agora e comece sua jornada com o método que já transformou centenas de alunos.</p>
          <a href={buyLink} target="_blank" rel="noreferrer" className="btn btn-primary btn-xl">
            Quero garantir minha vaga
          </a>
          <span className="final-cta-footnote">✅ 7 dias de garantia • Acesso vitalício • Suporte direto</span>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="footer">
        <div className="footer-inner">
          <p>2026 © Milionário com Criptomoedas • Vitor Braga</p>
          <p className="footer-muted"> Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
