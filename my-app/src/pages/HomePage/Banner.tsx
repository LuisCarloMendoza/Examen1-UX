import React from 'react';

const Banner = () => {
  const handlePlayClick = () => {
    alert('Play button clicked!');
  };

  const handleInfoClick = () => {
    alert('Info button clicked!');
  };

  const handleSoundClick = () => {
    alert('Sound button clicked!');
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Peaky Blinders</h1>
        <p className="banner-description"> Post-World War I Birmingham,
             England, following the rise of the Shelby family and their ruthless gang.</p>
        <div className="banner-buttons">
          <button onClick={handlePlayClick} className="banner-button-play">
          <img src="/Images/BannerPlay.png" alt="icon" className="button-icon"/>
          Play
          </button>
          <button onClick={handleInfoClick} className="banner-button-info">
          <img src="/Images/BannerInfo.png" alt="icon" className="button-icon"/>
          More Info
          </button>
        </div>
        <div className="banner-extra">
          <button onClick={handleSoundClick} className="sound-button">🔊</button>
          <img src="/Images/BannerAgeLabel.png" alt="Text Label" className="text-label" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
