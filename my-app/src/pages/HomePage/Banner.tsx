import React, { useRef, useState } from 'react';

const Banner = () => {
  // Referencias para el video y el estado de mute
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false); // Estado para controlar si el video está en mute

  // Función para manejar el clic en el botón de Play
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Reproduce el video cuando se hace clic en Play
    }
  };

  // Función para manejar el clic en el botón de Info (sin cambios)
  const handleInfoClick = () => {
    alert('Info button clicked!');
  };

  // Función para manejar el clic en el botón de Sound (mute o desmute)
  const handleSoundClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Cambia el estado de mute
      setIsMuted(!isMuted); // Actualiza el estado de mute
    }
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Peaky Blinders</h1>
        <p className="banner-description">
          Post-World War I Birmingham, England, following the rise of the Shelby family and their ruthless gang.
        </p>
        <div className="banner-buttons">
          <button onClick={handlePlayClick} className="banner-button-play">
            <img src="/Images/BannerPlay.png" alt="icon" className="button-icon" />
            Play
          </button>
          <button onClick={handleInfoClick} className="banner-button-info">
            <img src="/Images/BannerInfo.png" alt="icon" className="button-icon" />
            More Info
          </button>
        </div>
        <div className="banner-extra">
          <button onClick={handleSoundClick} className="sound-button">
            {isMuted ? '🔇' : '🔊'} {/* Cambia el icono según el estado de mute */}
          </button>
          <img src="/Images/BannerAgeLabel.png" alt="Text Label" className="text-label" />
        </div>
        {/* Video oculto inicialmente */}
        <video ref={videoRef} width="100%" height="auto" style={{ display: 'none' }} controls>
          <source src="/Images/peaky.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
