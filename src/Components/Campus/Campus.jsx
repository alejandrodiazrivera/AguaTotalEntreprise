import React, { useState } from 'react';
import './Campus.css';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import white_arrow from '../../assets/white_arrow.png';

const images = [
  { src: gallery1, title: 'Eksklusivt Toilet i Turkis Marmor', description: 'Dette toilet er udført med præcision og fokus på kvalitet ved brug af eksklusiv turkis marmorsten. Installation inkluderer nøjagtig opmåling og tilpasning for perfekt montering af marmorpladerne. Samlingerne er fugede med specialudviklet silikone, der sikrer en tæt og æstetisk finish. Desuden er der anvendt skjulte vægophæng og integreret vandinstallation for et minimalistisk og moderne udtryk.' },
  { src: gallery2, title: 'Minimalistisk toilet i Grå Marmor', description: 'Udført i grå marmor med præcisionsskåret sten for skarpe linjer og en monolitisk fremtoning. Teknikkerne inkluderer synlige fuger i tone-afstemt epoxymateriale, der fremhæver stenens naturlige struktur. Toilettet er monteret med skjulte vægophæng og integrerede rørføringselementer for et rent og kompromisløst design.' },
  { src: gallery3, title: 'Badeværelse i kolonial stil', description: 'Dette badeværelse bringer sjælen fra kolonialtiden til live med et håndlavet bambusskab, der afspejler enkelheden og naturligheden fra perioden. Bruseren i antik messing tilføjer et elegant og tidløst præg, mens de klassiske detaljer understreger den varme og harmoniske atmosfære. Indretningen fuldendes med en kolonialinspireret stol, der bidrager til en autentisk oplevelse af tidens luksus og funktionalitet.' },
];

const Campus = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleGalleryPopup = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt='' />
        <img src={gallery2} alt='' />
        <img src={gallery3} alt='' />
      </div>
      <button className='btn dark-btn' onClick={toggleGalleryPopup}>
        Se mere her <img src={white_arrow} alt='' />
      </button>

      {isGalleryOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <div className="popup-gallery">
              <img src={images[currentIndex].src} alt='' className="popup-image" />
              <div className="popup-description">
                <h2>{images[currentIndex].title}</h2>
                <p>{images[currentIndex].description}</p>
              </div>
            </div>
            <button onClick={handlePrev} className='btn dark-btn'>Forrige</button>
            <button onClick={handleNext} className='btn dark-btn'>Næste</button>
            <button onClick={toggleGalleryPopup} className='btn dark-btn'>Luk</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campus;