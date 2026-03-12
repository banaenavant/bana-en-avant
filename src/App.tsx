import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Actions from './components/Actions';
import News from './components/News';
import GetInvolved from './components/GetInvolved';
import Donate from './components/Donate';
import Footer from './components/Footer';
import MissionDetail from './pages/MissionDetail';
import ActionDetail from './pages/ActionDetail';
import NewsDetail from './pages/NewsDetail';
import type { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [detailId, setDetailId] = useState<string>('');

  const navigateTo = (page: Page, id?: string) => {
    if (id) setDetailId(id);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'mission') {
    return (
      <>
        <Header onNavigate={goHome} />
        <MissionDetail onBack={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'action-detail') {
    return (
      <>
        <Header onNavigate={goHome} />
        <ActionDetail actionId={detailId} onBack={goHome} />
        <Footer />
      </>
    );
  }

  if (currentPage === 'news-detail') {
    return (
      <>
        <Header onNavigate={goHome} />
        <NewsDetail newsId={detailId} onBack={goHome} />
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
      <News onNavigate={navigateTo} />
      <GetInvolved />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
