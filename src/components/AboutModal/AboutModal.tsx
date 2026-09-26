import React from 'react';
import './AboutModal.css';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className="about-backdrop" onClick={onClose} role="presentation">
      <div
        className="about-modal"
        data-theme={theme}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="About Mhar Tenorio"
      >
        {/* Traffic light close */}
        <div className="about-header">
          <button
            type="button"
            className="about-close-btn"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal content */}
        <div className="about-body">
          <div className="about-icon-wrapper">
            <div className="about-avatar">
              <span className="avatar-text">MT</span>
            </div>
          </div>

          <h2 className="about-name">Mhar Tenorio</h2>
          <p className="about-role">Software Engineer III @ Squarespace</p>
          <p className="about-sub">Stanford University (M.S. &amp; B.S. Computer Science)</p>

          <div className="about-specs">
            <div className="spec-row">
              <span className="spec-label">Location</span>
              <span className="spec-value">New York, NY</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Specialization</span>
              <span className="spec-value">Front-End, HCI, UI/UX</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Portfolio OS</span>
              <span className="spec-value">macOS Sequoia (v2026.1)</span>
            </div>
          </div>

          <div className="about-actions">
            <a
              href="https://www.linkedin.com/in/mhartenorio/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-action-btn primary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mhartenorio"
              target="_blank"
              rel="noopener noreferrer"
              className="about-action-btn secondary"
            >
              GitHub
            </a>
            <button
              type="button"
              className="about-action-btn default"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
