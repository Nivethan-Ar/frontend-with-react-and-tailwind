import Footer from './components/footer';
import Header from './components/header';
import OurCreations from './components/our-creations';
import VR_SECTION from './components/vr-section';

// MOBILE FIRST APPROACH
function LoopStudiosLandingPage() {
  return (
    <>
      <Header />
      <VR_SECTION />
      <OurCreations />
      <Footer />
    </>
  );
}

export default LoopStudiosLandingPage;
