import React from 'react';
import './LogoSection.css';
import Logo from '../../components/Logo/Logo';

const logos = [
  { src: '/src/assets/img/figma.png', alt: 'Figma' },
  { src: '/src/assets/img/substack.png', alt: 'Substack' },
  { src: '/src/assets/img/discord.png', alt: 'Discord' },
  { src: '/src/assets/img/arc.png', alt: 'Arc' },
  { src: '/src/assets/img/spotify_3x.png', alt: 'Spotify' },
  { src: '/src/assets/img/toyota.png', alt: 'Toyota' },
];

const LogoSection = () => {
  return (
    <div className="logo-section">
      {logos.map((logo, index) => (
        <Logo key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default LogoSection;