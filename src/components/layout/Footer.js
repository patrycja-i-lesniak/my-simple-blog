import React from 'react';
import {BsGithub} from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="page-footer grey darken-3">
    
          <div className="footer-copyright">
            <div className="container">
            © 2022 Coded by Patrycja Leśniak
            <a className="grey-text text-lighten-4 right" href="https://github.com/patrycja-i-lesniak"><BsGithub className='github'/></a>
            </div>
          </div>
        </footer>
  )
}
