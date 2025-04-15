import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoTitle from './components/LogoTitle';
import BannerButton from './components/BannerButton';
import ProjectCard from './components/ProjectCard';

import TechLadies from './assets/tech-ladies.png';
import TechLadiesText from './assets/tech-ladies-text.png';
import AboutUs from './assets/about-us.png';
import Members from './assets/members.png';
import Banner1 from './assets/banner-1.png';
import Banner2 from './assets/banner-2.png';
import Banner3 from './assets/banner-3.png';
import IconUp from './assets/icon-up.png';
import Facebook from './assets/facebook.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import Youtube from './assets/youtube.png';
import Logo from './assets/logo.png';
import PyBook from './assets/pybook.png';
import DigitalInclusion from './assets/digital-inclusion.png';
import PyLadies from './assets/pyladies.png';
import OpenSource from './assets/open-source.png';
import Workshop from './assets/workshop.png';
import PythonCourse from './assets/python-course.png';

function App() {
  return (
    <>

      <header className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <LogoTitle />
        </div>
        
        <ul className='row col-lg-6 col-md-12 col-sm-12'>
          <li className='col-lg-2 col-md-12 col-sm-12'><a href="*">Sobre</a></li>
          <li className='col-lg-2 col-md-12 col-sm-12'><a href="*">Eventos</a></li>
          <li className='col-lg-2 col-md-12 col-sm-12'><a href="*">Projetos</a></li>
          <li className='col-lg-2 col-md-12 col-sm-12'><a href="*">Membros</a></li>
          <li className='col-lg-2 col-md-12 col-sm-12'><a href="*">Contato</a></li>
        </ul>
      </header>
      <section className="banner-img" style={{backgroundImage: `url(${TechLadies})`}}>
          <img src={TechLadiesText}/>
          <button className="primary-button" onClick={() => {}}>JUNTE-SE A NÓS</button>
      </section>
      <main>
        <div className='divider'/>
        <section className='row mb-5'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1 className='ms-5 mt-4 mb-4'>Sobre</h1>
            <p>
              A PyLadies Floripa é uma comunidade dedicada a incentivar a participação de mulheres e pessoas de gêneros sub-representados no universo da programação, com foco na linguagem Python. Nosso objetivo é criar um ambiente acolhedor, inclusivo e colaborativo, onde todas possam aprender, compartilhar conhecimentos e crescer profissionalmente.
              Através de eventos, workshops, cursos e mentorias, buscamos apoiar iniciantes e fortalecer a presença feminina na tecnologia.
            </p>
            <h4>Venha construir essa comunidade com a gente! 🚀🐍💜</h4>
          </div>
          <img className='col-lg-6 col-md-12 col-sm-12 about-us-image mt-4' src={AboutUs} />
        </section>
        <div className='divider'/>
        <section className='mb-5'>
          <h1 className='ms-5 mt-4 mb-4'>Eventos</h1>
          <h4>Participe dos próximos eventos:</h4>
          <div className='row d-flex px-5 justify-content-center'>
            <BannerButton img={Banner1} onPress={() => {}}/>
            <BannerButton img={Banner2} onPress={() => {}}/>
            <BannerButton img={Banner3} onPress={() => {}}/>
          </div>
        </section>
        <div className='divider'/>
        <section className='mb-5'>
          <h1 className='ms-5 mt-4 mb-4'>Projetos</h1>
          <h4>Nossos projetos:</h4>
          <div className='row'>
            <ProjectCard title={'PyBook'} img={PyBook} onPress={() => {}}/>
            <ProjectCard title={'Inclusão Digital'} img={DigitalInclusion} onPress={() => {}}/>
            <ProjectCard title={'Projeto Open Source'} img={OpenSource} onPress={() => {}}/>
            <ProjectCard title={'Curso Básico de Python'} img={PythonCourse} onPress={() => {}}/>
            <ProjectCard title={'Desafio PyLadies'} img={PyLadies} onPress={() => {}}/>
            <ProjectCard title={'Workshop Semanal'} img={Workshop} onPress={() => {}}/>
          </div>
        </section>
        <div className='divider'/>
        <section className='row mt-4 align-items-center'>
          <div className='col-lg-9 col-md-12 col-sm-12'>
            <h1 className='ms-5 mt-4 mb-4'>Membros</h1>
            <p>
              Nossos membros incluem iniciantes que estão dando os primeiros passos na área, desenvolvedoras experientes, pesquisadoras, entusiastas e aliadas que apoiam a inclusão e diversidade no setor.
              Aqui, cada membro tem a oportunidade de aprender, ensinar e crescer junto com a comunidade. Valorizamos a troca de conhecimentos, a colaboração e o apoio mútuo, criando um ambiente seguro e acolhedor para todas.
              Quer fazer parte dessa rede? Junte-se a nós e ajude a transformar o cenário da tecnologia! 🚀🐍💜
            </p>
          </div>
          <img className='col-lg-3 col-md-12 col-sm-12' src={Members} style={{maxHeight:350, objectFit: 'contain'}} />
        </section>
      </main>
      <footer className='row mt-3 align-items-center justify-content-between'>
        <img className='col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center' src={Logo} style={{maxWidth:140}} />
        <div className='col-lg-8 col-md-12 col-sm-12 text-center mt-4'>
          <h1 className='text-white'>Contatos</h1>
          <div className='row mt-4 px-5 align-items-center justify-content-center'>
            <a className='col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center mt-4' href="*"><img src={Twitter} style={{maxWidth:100}} /></a>
            <a className='col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center mt-4' href="*"><img src={Instagram} style={{maxWidth:100}} /></a>
            <a className='col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center mt-4' href="*"><img src={Facebook} style={{maxWidth:100}} /></a>
            <a className='col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center mt-4' href="*"><img src={Youtube} style={{maxWidth:100, maxHeight:70}} /></a>
          </div>
        </div>
        <a className='col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center mt-5' href="*"><img src={IconUp} /></a>
      </footer>
    </>
  );
}

export default App;
