import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Nav, Tab } from 'react-bootstrap';
import Header3 from '../layout/header3';
import HomeSlider3 from '../element/home-slider3';
import Footer2 from '../layout/footer2';
import Testimonial2 from '../element/testimonial2';
import CaseStudy from '../element/case-study';
import Featureslide from '../element/feature-slider';
import GoogleMaps from 'simple-react-google-maps';
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/botstrap-select.min.css';
import '../assets/css/color-2.css';
import '../assets/css/color-3.css';
import '../assets/css/color.css';
import '../assets/css/custom-animate.css';
import '../assets/css/flaticon.css';
import '../assets/css/fontawesome-all.css';
import '../assets/css/hover.css';
// import '../assets/css/jquery-ui.css';
// import '../assets/css/jquery.fancybox.min.css';
// import '../assets/css/jquery.touchspin.css';
// import '../assets/css/owl.css';
import '../assets/css/responsive.css';
import '../assets/css/rtl-home.css';
// import '../assets/css/scrollbar.css';
import '../assets/css/shop.css';
import '../assets/css/slider.css';
import '../assets/css/style.css';

import map1 from './../assets/images/shape/shape-6.png';
import ctabg1 from './../assets/images/background/image-10.jpg';

import logoDark from '../assets/images/logo-dark.png';
import logoColorido from '../assets/images/cura-salute-cores.png';
import News10 from '../assets/images/resource/news-10.jpg';
import News11 from '../assets/images/resource/news-11.jpg';
import Icon19 from '../assets/images/icons/icon-19.png';
import Icon20 from '../assets/images/icons/icon-20.png';
import Image11 from '../assets/images/resource/image-11.jpg';
import Image12 from '../assets/images/resource/image-12.jpg';
import Image4 from '../assets/images/resource/image-4.jpg';
import News1 from '../assets/images/resource/news-1.jpg';
import News2 from '../assets/images/resource/news-2.jpg';
import News3 from '../assets/images/resource/news-3.jpg';

class Index3 extends Component {
  render() {
    return (
      <>
        <Header3 />

        {/* <!-- Hidden Sidebar --> */}
        <section class='hidden-sidebar '>
          <div class='wrapper-box'>
            <div class='hidden-sidebar-close'>
              <span class='flaticon-cancel'></span>
            </div>
            <div class='logo'>
              <Link to={'/'}>
                <img src={logoColorido} alt='' />
              </Link>
            </div>
            <div class='content'>
              <div class='about-widget-two sidebar-widget'>
                <h3>
                  Consultoria em benefícios <br />
                  para todo Brasil
                </h3>
                <div class='text'>
                  Evidentemente, o desenvolvimento contínuo de distintas formas
                  de atuação promove a alavancagem das diretrizes de
                  desenvolvimento para o futuro.
                </div>
              </div>
              {/* <!-- News Widget --> */}
              <div class='news-widget sidebar-widget'>
                <div class='widget-title'>Novidades & Atualizações</div>
                <div class='post-wrapper'>
                  <div class='image'>
                    <Link to='blog-details.html'>
                      <img src={News10} alt='' />
                    </Link>
                  </div>
                  <div class='category'>Novos planos</div>
                  <h4>
                    <Link to={'/blog-details'}>
                      Veja novidades em <br />
                      Planos de Saúde
                    </Link>
                  </h4>
                </div>
                <div class='post-wrapper'>
                  <div class='image'>
                    <Link to='blog-details.html'>
                      <img src={News11} alt='' />
                    </Link>
                  </div>
                  <div class='category'>Novas estratégias</div>
                  <h4>
                    <Link to={'/blog-details'}>
                      Veja os melhores serviços para
                      <br />
                      Aumentar produtividade de seu negócio
                    </Link>
                  </h4>
                </div>
              </div>
              {/* <!-- Newsletter Widget --> */}
              <div class='newsletter-widget'>
                <div class='widget-title'>Receba as novidades</div>
                <form action='#'>
                  <input type='email' placeholder='Seu e-mail' />
                  <button class='theme-btn btn-style-one'>
                    <span class='btn-title'>Inscreva-se</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Search Popup--> */}
        {/* <div id='search-popup' class='search-popup'>
          <div class='close-search theme-btn'>
            <span class='flaticon-cancel'></span>
          </div>
          <div class='popup-inner'>
            <div class='overlay-layer'></div>
            <div class='search-form'>
              <form
                method='post'
                action='http://azim.commonsupport.com/Finandox/index.html'
              >
                <div class='form-group'>
                  <fieldset>
                    <input
                      type='search'
                      class='form-control'
                      name='search-input'
                      value=''
                      placeholder='Search Here'
                      required
                    />
                    <input
                      type='submit'
                      value='Search Now!'
                      class='theme-btn'
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul class='recent-searches'>
                <li>
                  <Link to={'/#'}>Finance</Link>
                </li>
                <li>
                  <Link to={'/#'}>Idea</Link>
                </li>
                <li>
                  <Link to={'/#'}>Service</Link>
                </li>
                <li>
                  <Link to={'/#'}>Growth</Link>
                </li>
                <li>
                  <Link to={'/#'}>Plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <!-- Banner Section --> */}
        <HomeSlider3 />
        {/* <!--End Banner Section --> */}

        {/* <!-- About Section Two --> */}
        <section class='about-section-three'>
          <div class='auto-container'>
            <div class='wrapper-box'>
              <div class='row align-items-center'>
                <div class='col-lg-5'>
                  <div class='sec-title text-right'>
                    <div class='sub-title'>Fale Conosco</div>
                    <h2>
                      Por e-mail, <br />
                      Telefone ou WhatsApp
                    </h2>
                  </div>
                </div>
                <div class='col-lg-7'>
                  <div class='content-box'>
                    <div class='row'>
                      <div class='info-column col-md-6'>
                        <div class='icon-box'>
                          <div class='icon'>
                            <img src={Icon19} alt='' />
                          </div>
                          <h5>Telefone/ WhatsApp</h5>
                          <a
                            style={{ color: '#282828' }}
                            target='_blank'
                            href='https://api.whatsapp.com/send?phone=555511932828286038&text=Ol%C3%A1%2C%20Cura%20Salute.'
                          >
                            <h2>+55 11 93000-6038</h2>
                          </a>
                        </div>
                      </div>
                      <div class='info-column col-md-6'>
                        <div class='icon-box'>
                          <div class='icon'>
                            <img src={Icon20} alt='' />
                          </div>
                          <h5>Email</h5>
                          <a
                            style={{ color: '#000' }}
                            target='_blank'
                            href='mailto:carvalho@curasalute.com.br'
                          >
                            <h2>
                              carvalho
                              <br />
                              @curasalute.com.br
                            </h2>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Why Choose Us Section --> */}
        <section class='why-chooseus-section pt-0'>
          <div class='auto-container'>
            <div class='row align-items-center'>
              <div class='col-lg-6'>
                <div class='image-wrapper'>
                  <div class='image-one'>
                    <img src={Image11} alt='' />
                  </div>
                  <div class='image-two'>
                    <img src={Image12} alt='' />
                  </div>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='content-box ml-lg-3'>
                  <div class='sec-title'>
                    <div class='sub-title'>Por que nos escolher?</div>
                    <h2>
                      Por que você deveria <br />
                      escolher a Cura Salute
                    </h2>
                  </div>
                  <Tab.Container defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav nav-tabs tab-btn-style-one'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>
                          <span>Nossa Missão</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>
                          <span>Nossa Visão</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>
                          <span>Nossos Valores</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className='tabs-content'>
                      <Tab.Pane eventKey='first' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={Image4} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Caros amigos, a mobilidade dos capitais
                              internacionais exige a precisão e a definição das
                              formas de ação.
                            </p>
                            <p>
                              As experiências acumuladas demonstram que o início
                              da atividade geral de formação de atitudes
                              obstaculiza a apreciação da importância das novas
                              proposições.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={Image4} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Gostaria de enfatizar que a execução dos pontos do
                              programa cumpre um papel essencial na formulação
                              do retorno esperado a longo prazo.
                            </p>
                            <p>
                              Não obstante, a estrutura atual da organização
                              apresenta tendências no sentido de aprovar a
                              manutenção das condições financeiras e
                              administrativas exigidas.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third' className='fadeInUp animated'>
                        <div class='clearfix'>
                          <div class='image'>
                            <img src={Image4} alt='' />
                          </div>
                          <div class='text'>
                            <p>
                              Evidentemente, a expansão dos mercados mundiais
                              nos obriga à análise do levantamento das variáveis
                              envolvidas.
                            </p>
                            <p>
                              É claro que o entendimento das metas propostas
                              agrega valor ao estabelecimento do levantamento
                              das variáveis envolvidas.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services Section Three --> */}
        <section class='services-section-three'>
          <div class='auto-container'>
            <div class='sec-title text-center'>
              <div class='sub-title'>Serviços</div>
              <h2>O que fazemos</h2>
            </div>
            <div class='row'>
              {/* <!-- Services Block One --> */}
              <div class='service-block-one col-lg-4'>
                <div class='inner-box'>
                  <div class='icon'>
                    <span class='flaticon-assets'></span>
                    <span class='round-shape'></span>
                  </div>
                  <h3>Consultoiria em Benefícios</h3>
                  <div class='text'>
                    Do mesmo modo, a consolidação das estruturas exige a
                    precisão e a definição dos índices pretendidos.
                  </div>
                </div>
              </div>
              {/* <!-- Services Block One --> */}
              <div class='service-block-one col-lg-4'>
                <div class='inner-box'>
                  <div class='icon'>
                    <span class='flaticon-life-insurance'></span>
                    <span class='round-shape'></span>
                  </div>
                  <h3>Seguro de Saúde, Vida ou Automóvel</h3>
                  <div class='text'>
                    Assim mesmo, o aumento do diálogo entre os diferentes
                    setores produtivos faz parte de um processo de gerenciamento
                    dos índices pretendidos.
                  </div>
                </div>
              </div>
              {/* <!-- Services Block One --> */}
              <div class='service-block-one col-lg-4'>
                <div class='inner-box'>
                  <div class='icon'>
                    <span class='flaticon-consulting'></span>
                    <span class='round-shape'></span>
                  </div>
                  <h3>Treinamento e capacitação</h3>
                  <div class='text'>
                    É importante questionar o quanto a necessidade de renovação
                    processual é uma das consequências de todos os recursos
                    funcionais envolvidos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Insurance Calculate --> */}
        <section class='insurance-calculate'>
          <div class='big-title'>Calculadora de Seguros</div>
          <div class='auto-container'>
            <div class='wrapper-box'>
              <div
                class='shape'
                style={{ backgroundImage: 'url(' + map1 + ')' }}
              ></div>
              <h1>Calculadora de Seguros</h1>
              <div class='price'>
                <span>R$10.000</span>
                <span>R$20.000</span>
                <span>R$30.000</span>
                <span>R$40.000</span>
                <span>R$50.000</span>
              </div>
              <div class='progress-box'>
                <div class='bar'>
                  <ProgressBar className='count-bar' now={64} />
                </div>
              </div>
              <div class='lower-content'>
                <div class='column'>
                  <h5>Economia de até</h5>
                  <h2>70%</h2>
                </div>
                <div class='column'>
                  <h5>Cobertura ampliada</h5>
                  <h2>Até 3x maior</h2>
                </div>
                <div class='column'>
                  <h5>Mensalidades a partir de</h5>
                  <h2>R$350</h2>
                </div>
                <div class='column'>
                  <Link to={'/#'} class='theme-btn btn-style-two'>
                    <span class='btn-title'>Simular</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Case Studies --> */}
        <section class='cases-section'>
          {/* <!--case Tabs--> */}
          <div class='case-tabs'>
            <div class='container-fluid'>
              <div class='sec-title text-center'>
                <div class='sub-title'>Nosso trabalho</div>
                <h2>O que já fizemos</h2>
              </div>
              <div class='case-tab-wrapper'>
                {/* <!--Tabs Content-->   */}
                <div class='case-tabs-content'>
                  {/* <!--case Tab / Active Tab--> */}
                  <div class='case-tab active-tab'>
                    <CaseStudy />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonial Section --> */}
        <Testimonial2 />

        {/* <!-- Map Section --> */}
        <section class='map-section'>
          <div class='map-column'>
            <GoogleMaps
              apiKey={'AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54'}
              style={{ height: '800px', width: '100%' }}
              zoom={14}
              center={{ lat: -23.589775478121304, lng: -46.730949338073344 }}
              markers={{ lat: -23.589775478121304, lng: -46.730949338073344 }} //optional -23.589775478121304, -46.730949338073344
            />
          </div>
        </section>

        {/* <!-- Contact Section Two --> */}
        <section class='contact-section-two'>
          <div class='auto-container'>
            <div class='contact-info-area'>
              <div class='contact-info'>
                <div class='row'>
                  <div
                    class='info-column col-lg-4 wow fadeInUp'
                    data-wow-delay='200ms'
                    data-wow-duration='1200ms'
                  >
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-email-6'></span>
                      </div>
                      <h3>Email</h3>
                      <ul>
                        <li>
                          <Link to={'/mailto:carvalho@curasalute.com.br'}>
                            carvalho@curasalute
                          </Link>
                        </li>
                        <li>
                          <Link to={'/mailto:contato@curasalute.com.br'}>
                            contato@curasalute.com.br
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class='info-column col-lg-4 wow fadeInUp'
                    data-wow-delay='200ms'
                    data-wow-duration='1200ms'
                  >
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-call-1'></span>
                      </div>
                      <h3>Nossos números</h3>
                      <ul>
                        <li>
                          <Link to={'/tel:+5511123456789'}>
                            +55 11 123 456 789
                          </Link>
                        </li>
                        <li>
                          <Link to={'/tel:+5511930006038'}>
                            +55 11 93000-6038
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class='info-column col-lg-4 wow fadeInUp'
                    data-wow-delay='200ms'
                    data-wow-duration='1200ms'
                  >
                    <div class='icon-box'>
                      <div class='icon'>
                        <span class='flaticon-location'></span>
                      </div>
                      <h3>Nosso endereço</h3>
                      <ul>
                        <li>
                          R. Keisuke Koza, 46 <br />
                          São Paulo - SP
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='contact-form-area'>
              <div class='sec-title text-center'>
                <div class='sub-title'>Fale com a gente</div>
                <h2>Contato</h2>
              </div>
              {/* <!-- Contact Form--> */}
              <div class='contact-form'>
                <form
                  method='post'
                  // action='http://azim.commonsupport.com/Finandox/sendemail.php'
                  id='contact-form'
                >
                  <div class='row clearfix'>
                    <div class='col-md-6 form-group'>
                      <label for='name'>Seu nome</label>
                      <input
                        type='text'
                        name='username'
                        id='name'
                        placeholder='Seu nome aqui......'
                        required=''
                      />
                      <i class='fas fa-user'></i>
                    </div>

                    <div class='col-md-6 form-group'>
                      <label for='email'>Seu email</label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Seu email aqui......'
                        required=''
                      />
                      <i class='fas fa-envelope'></i>
                    </div>

                    <div class='col-md-12 form-group'>
                      <label for='message'>Sua mensagem</label>
                      <textarea
                        name='message'
                        id='message'
                        placeholder='Sua mensagem aqui......'
                      ></textarea>
                      <i class='fas fa-edit'></i>
                    </div>

                    <div class='col-md-12 form-group'>
                      <button
                        class='theme-btn btn-style-one'
                        type='submit'
                        name='submit-form'
                      >
                        <span class='btn-title'>Enviar</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Feature Section Two --> */}
        <Featureslide />

        {/* <!-- News Section --> */}
        <section class='news-section'>
          <div class='auto-container'>
            <div class='sec-title text-center'>
              <div class='sub-title'>Blog</div>
              <h2>Nossas últimas atualizações</h2>
            </div>
            <div class='row'>
              {/* <!-- News Block One --> */}
              <div
                class='news-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div class='inner-box'>
                  <div class='image'>
                    <Link to={'/#'}>
                      <img src={News1} alt='' />
                    </Link>
                  </div>
                  <div class='lower-content'>
                    <div class='category'>Seguros</div>
                    <ul class='post-meta'>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-calendar-alt'></i>08 de abril 2021
                        </Link>
                      </li>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-user'></i>Por Carvalho
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={'/#'}>
                        Consultor de Seguros de Saúde Avalia
                      </Link>
                    </h3>
                    <div class='text'>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- News Block One --> */}
              <div
                class='news-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div class='inner-box'>
                  <div class='image'>
                    <Link to={'/#'}>
                      <img src={News2} alt='' />
                    </Link>
                  </div>
                  <div class='lower-content'>
                    <div class='category'>Seguros</div>
                    <ul class='post-meta'>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-calendar-alt'></i>08 de abril 2021
                        </Link>
                      </li>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-user'></i>Por Carvalho
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={'/#'}>
                        Consultor de Seguros de Saúde Avalia
                      </Link>
                    </h3>
                    <div class='text'>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- News Block One --> */}
              <div
                class='news-block-one col-lg-4 wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1200ms'
              >
                <div class='inner-box'>
                  <div class='image'>
                    <Link to={'/#'}>
                      <img src={News3} alt='' />
                    </Link>
                  </div>
                  <div class='lower-content'>
                    <div class='category'>Seguros</div>
                    <ul class='post-meta'>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-calendar-alt'></i>08 de abril 2021
                        </Link>
                      </li>
                      <li>
                        <Link to={'/#'}>
                          <i class='far fa-user'></i>Por Carvalho
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={'/#'}>
                        Consultor de Seguros de Saúde Avalia
                      </Link>
                    </h3>
                    <div class='text'>
                      Lorem ipsum dolor sit amet, consectet ur adipisicing elit,
                      sed do eiusmod temp or incididunt ut labore et dolore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CTA Section --> */}
        <section class='cta-section'>
          <div class='auto-container'>
            <div
              class='wrapper-box'
              style={{ backgroundImage: 'url(' + ctabg1 + ')' }}
            >
              <div class='row align-items-center'>
                <div class='col-lg-6'>
                  <div class='sec-title light'>
                    <div class='sub-title'>Contrate seu seguro</div>
                    <h2>
                      Faça já <br />
                      sua cotação
                    </h2>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <form action='#'>
                    <input type='email' placeholder='Seu e-mail' />
                    <button
                      class='theme-btn btn-style-one'
                      type='submit'
                      name='submit-form'
                    >
                      <span class='btn-title'>
                        <i class='fal fa-envelope'></i>Inscreva-se agora
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer2 />
      </>
    );
  }
}
export default Index3;
