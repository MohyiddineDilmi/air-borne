import React from 'react';
import './footer.css';
import logoPath from '../../assets/erelys_logo.svg';
import styles from '../../modules/styles.module.css';
import ContactUs from '../components/ContactUs';
import { useTranslation } from 'react-i18next';



export default function Footer() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const footer_data = [
    {
      title: t('vision'),
      description: t('vision_description'),
    },
    {
      title: t('mission'),
      description: t('mission_description'),
    },
    {
      title: t('values'),
      description: t('values_description')
    },
  ];

  return (
    <div
      style={{
        maxWidth: '1980px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="footer-container">
        <img
          src={logoPath}
          alt="air-borne-logo"
          style={{ width: '200px', padding: '1rem' }}
        />
        <div className="text-container">
          {footer_data.map((data, index) => (
            <div className="text-item" key={index}>
              <h2 className={styles.title_white}> {data.title} </h2>
              <p className={styles.text_no_margin}> {data.description} </p>
            </div>
          ))}
        </div>

        <div className="contact-container">
          <h2 className={styles.title_white}>{t('contact_us')}</h2>
          <ContactUs />
          <p className={styles.text_no_margin}>
            © 2023 Erelys. All rights reserved.
            <br />
            Canada, Privacy Policy.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
