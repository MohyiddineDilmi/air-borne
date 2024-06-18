import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../assets/erelys_logo.svg';
import { useTranslation } from 'react-i18next';

const styles = {
  appBarContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2% 10% 2% 10%',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  logoImg: {
    height: '2rem',
  },
  responsive: {
    '@media screen and (max-width: 768px)': {
      appBarContainer: {
        flexDirection: 'column',
        alignItems: 'center', // Center the items horizontally
        justifyContent: 'center', // Center the items vertically
        padding: '2rem 5%',
      },
      logoImg: {
        padding: '1rem',
      },
    },
  },
};

const sections = ['About Us', 'Technologies', 'Services', 'Contact Us'];

function AppBar() {
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      style={{
        ...styles.appBarContainer,
        ...styles.responsive['@media screen and (max-width: 768px)']
          .appBarContainer,
      }}
    >
      <div>
        <Link to="/">
          <img src={logoPath} alt="air-borne-logo" style={styles.logoImg} />
        </Link>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
    </nav>
  );
}

export default AppBar;
