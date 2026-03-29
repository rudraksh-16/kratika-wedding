import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AboutCouple from './components/AboutCouple';
import EventsSchedule from './components/EventsSchedule';
import VenueMap from './components/VenueMap';
import PhotoGallery from './components/PhotoGallery';
import FamilySection from './components/FamilySection';
import BaaratNote from './components/BaaratNote';
import Footer from './components/Footer';
import FloatingPhotosBtn from './components/FloatingPhotosBtn';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <AboutCouple />
        <EventsSchedule />
        <VenueMap />
        <PhotoGallery />
        <FamilySection />
        <BaaratNote />
      </main>
      <Footer />
      <FloatingPhotosBtn />
    </>
  );
}
