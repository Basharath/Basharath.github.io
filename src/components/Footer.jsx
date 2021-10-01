import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="social-icons">
        <a
          href="https://twitter.com/wahVinci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/basharath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/14894918/hashbender"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a
          href="https://linkedin.com/in/basharathonline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Basharath
      </div>
    </footer>
  );
}
