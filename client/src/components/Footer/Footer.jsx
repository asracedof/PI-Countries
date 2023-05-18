import React from 'react';

const Footer = () => {
  return (
    <footer className= 'footer'>
       <div className="footer-content">
         <h4>PI Countries | Developed by Arlet Racedo &copy; {new Date().getFullYear()}</h4>
       </div>
       <a href = "https://www.linkedin.com/in/arlet-racedo-fernandez-38b076267/">
       <img className = "logoLI" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt = "LinkedIn"/>
       </a>
       <a href = "https://github.com/asracedof">
        <img className= 'logoGH' src ="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt = "Github"/>
       </a>
      </footer>
  );
};

export default Footer;
