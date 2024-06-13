import React from "react";
export default function Contact () {
    return (
        <><h1>Contact Us</h1><div className="contact-form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" rows={4} required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div></>
          );
};