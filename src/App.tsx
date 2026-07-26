import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Actions from './components/Actions';
import GetInvolved from './components/GetInvolved';
import Donate from './components/Donate';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import MissionDetail from './pages/MissionDetail';
import RemiseMaterielHopital from './pages/RemiseMaterielHopital';
import MobilisationMadoua from './pages/MobilisationMadoua';
import Covid19 from './pages/Covid19';
import PrixExcellence5eme from './pages/PrixExcellence5eme';
import FeteJeunesse2017 from './pages/FeteJeunesse2017';
import RencontreRoiParis from './pages/RencontreRoiParis';
import PrixExcellence4eme from './pages/PrixExcellence4eme';
import RefectionPeintures from './pages/RefectionPeintures';
import PrixExcellence3eme from './pages/PrixExcellence3eme';
import DonMedicaments from './pages/DonMedicaments';
import PrixExcellence2013 from './pages/PrixExcellence2013';
import PrixExcellence2012 from './pages/PrixExcellence2012';
import GroupeElectrogene from './pages/GroupeElectrogene';
import AgricultureBangoulap from './pages/AgricultureBangoulap';
import type { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [returnAnchor, setReturnAnchor] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setReturnAnchor(page === 'mission' ? 'about' : 'actions');
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentPage('home');
    const anchor = returnAnchor;
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToActions = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('actions')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (currentPage === 'mission') {
    return (
      <>
        <Header onNavigate={goHome} />
        <MissionDetail onBack={goHome} onGoToActions={goToActions} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'remise-materiel-hopital') {
    return (
      <>
        <Header onNavigate={goHome} />
        <RemiseMaterielHopital onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'mobilisation-madoua') {
    return (
      <>
        <Header onNavigate={goHome} />
        <MobilisationMadoua onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'covid19') {
    return (
      <>
        <Header onNavigate={goHome} />
        <Covid19 onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'prix-excellence-5eme') {
    return (
      <>
        <Header onNavigate={goHome} />
        <PrixExcellence5eme onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'fete-jeunesse-2017') {
    return (
      <>
        <Header onNavigate={goHome} />
        <FeteJeunesse2017 onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'rencontre-roi-paris') {
    return (
      <>
        <Header onNavigate={goHome} />
        <RencontreRoiParis onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'prix-excellence-4eme') {
    return (
      <>
        <Header onNavigate={goHome} />
        <PrixExcellence4eme onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'refection-peintures') {
    return (
      <>
        <Header onNavigate={goHome} />
        <RefectionPeintures onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'prix-excellence-3eme') {
    return (
      <>
        <Header onNavigate={goHome} />
        <PrixExcellence3eme onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'don-medicaments') {
    return (
      <>
        <Header onNavigate={goHome} />
        <DonMedicaments onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'prix-excellence-2013') {
    return (
      <>
        <Header onNavigate={goHome} />
        <PrixExcellence2013 onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'prix-excellence-2012') {
    return (
      <>
        <Header onNavigate={goHome} />
        <PrixExcellence2012 onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'groupe-electrogene') {
    return (
      <>
        <Header onNavigate={goHome} />
        <GroupeElectrogene onNavigate={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'agriculture-bangoulap') {
    return (
      <>
        <Header onNavigate={goHome} />
        <AgricultureBangoulap onNavigate={navigateTo} />
        <Footer />
      </>
    );
  }


  return (
    <div className="min-h-screen">
      <Header onNavigate={goHome} />
      <Hero />
      <About onNavigate={navigateTo} />
      <Actions onNavigate={navigateTo} />
      <GetInvolved />
      <Donate />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
