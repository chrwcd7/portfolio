import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface ContactLinksProps {
  showLabel?: boolean;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ showLabel = false }) => {
  return (
    <div className="flex flex-row gap-2">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://linkedin.com/in/chris-pap"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 sm:w-4 sm:h-4" />
        {showLabel && 'LinkedIn'}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/chrwcd7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 sm:w-4 sm:h-4" />
        {showLabel && 'GitHub'}
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:chrispapoutsakis@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 sm:w-4 sm:h-4" />
        {showLabel && 'Email'}
      </Link>
    </div>
  );
};

export default ContactLinks;
