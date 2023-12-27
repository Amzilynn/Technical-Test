import React from "react";


const Footer = () => {
  return (
    <div className="footer-wrapper">  
     <div className="contact-container">
      <div className="contact-title">
          <h2>Prendre Contact</h2>
        </div>
        <div className="contact-form">
          <div className="form-field">
            <input type="text" placeholder="Nom et prénom" />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Adresse email" />
          </div>
          <div className="form-field">
            <textarea placeholder="Votre message"></textarea>
          </div>
          <div className="form-field">
            <button>Envoyer</button>
          </div>
        </div>
      </div>
            <div className="white-circle"></div> 

      </div>
  );
};

export default Footer;