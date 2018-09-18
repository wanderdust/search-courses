import React from "react";


export class ContactPage extends React.Component {
    render () {
        return (
            <div>
              <form className="contact-form">
                    <h2>Contact form</h2>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="text-input contact-form__input"
                    />
                    <input
                        type="text"
                        placeholder="Your email adress"
                        className="text-input contact-form__input"
                    />
                    <textarea
                        type="textarea"
                        placeholder="Type your message here..."
                        className="text-input contact-form__input"
                    />
                     <div>
                        <button className="button" type="submit">Send</button>
                    </div>
              </form>
            </div>
        );
    }
};

export default ContactPage;