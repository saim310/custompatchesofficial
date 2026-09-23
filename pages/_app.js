import { useState, useEffect } from 'react';
import RequirementModal from '../components/RequirementModal'; // Update path if needed

import '../styles/font-awesome.min.css';
import '../styles/flaticon.css';
import '../styles/themify-icons.css';
import 'react-modal-video/scss/modal-video.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/style.css';
import '../styles/responsive.css';
import FloatingContactWidget from '../components/FloatingContactWidget';

function MyApp({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Opens the modal automatically when any page loads
    setIsModalOpen(true);
  }, []);

  return (
    <>
    <FloatingContactWidget/>
      <Component {...pageProps} />
      <RequirementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default MyApp;