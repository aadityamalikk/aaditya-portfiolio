import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExpand, FaCompress, FaEye } from 'react-icons/fa';
import './CertificateViewer.css';

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  certificateName: string;
  issuer: string;
  date: string;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  certificateName,
  issuer,
  date
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `${certificateName.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="certificate-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={`certificate-modal ${isFullscreen ? 'fullscreen' : ''}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="certificate-header">
              <div className="certificate-info">
                <h3>{certificateName}</h3>
                <p>Issued by {issuer} • {date}</p>
              </div>
              <div className="certificate-actions">
                <motion.button
                  className="action-btn"
                  onClick={toggleFullscreen}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? <FaCompress /> : <FaExpand />}
                </motion.button>
                <motion.button
                  className="action-btn download-btn"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download Certificate"
                >
                  <FaDownload />
                </motion.button>
                <motion.button
                  className="action-btn close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Close"
                >
                  <FaTimes />
                </motion.button>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="certificate-content">
              {isLoading && (
                <div className="certificate-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading certificate...</p>
                </div>
              )}
              <iframe
                src={certificateUrl}
                title={certificateName}
                className="certificate-iframe"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Certificate Button Component
interface CertificateButtonProps {
  certificateName: string;
  issuer: string;
  date: string;
  certificateUrl: string;
  icon?: React.ReactNode;
}

export const CertificateButton: React.FC<CertificateButtonProps> = ({
  certificateName,
  issuer,
  date,
  certificateUrl,
  icon = <FaEye />
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <motion.button
        className="certificate-btn"
        onClick={() => setIsViewerOpen(true)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="certificate-btn-icon">
          {icon}
        </div>
        <div className="certificate-btn-content">
          <h4>{certificateName}</h4>
          <p>{issuer}</p>
          <span className="certificate-date">{date}</span>
        </div>
        <div className="certificate-btn-arrow">
          <FaEye />
        </div>
      </motion.button>

      <CertificateViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        certificateUrl={certificateUrl}
        certificateName={certificateName}
        issuer={issuer}
        date={date}
      />
    </>
  );
};

export default CertificateViewer;