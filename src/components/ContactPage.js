import React from "react";
import axios from "axios";
import MetaTags from 'react-meta-tags';


export class ContactPage extends React.Component {
    state = {
        name: "",
        email: "",
        text: "",
        isFormValidated: false,
        error: false,
        formSendInProgress: false,
        isMessageSent: false
    }

    onNameChange (e) {
        const name = e.target.value;
        this.setState(() => ({name}));
    }

    onEmailChange (e) {
        const email = e.target.value;
        this.setState(() => ({email}));
    }

    onTextChange (e) {
        const text = e.target.value;
        this.setState(() => ({text}));
    }

    isFormValidated () {
        const isNameFieldNotEmpty = this.state.name.trim() !== "";
        const isEmailValidated = /^.+@.+\..+$/.test(this.state.email);
        const isTextFieldNotEmpty = this.state.text.trim() !== "";

        const isFormValidated = isEmailValidated && isNameFieldNotEmpty && isTextFieldNotEmpty;
        this.setState(() => ({isFormValidated}));
    }

    handleOnSubmit (e) {
        e.preventDefault();
        this.setState(() => ({formSendInProgress: true}));

        axios.post("/api/contactus", {
            name: this.state.name,
            email: this.state.email,
            text: this.state.text
        }).then((res) => {
            this.setState(() => ({formSendInProgress: false}));
            this.setState(() => ({isMessageSent: true}));
        }).catch((err) => {
            this.setState(() => ({error: true}));
            this.setState(() => ({formSendInProgress: false}));
            console.log("Error sending email");
        });
    }

    render () {
        return (
            <div className="contact-form-container">
                <MetaTags>
                    <title>Contact Us | CourseSearch</title>
                    <meta name="description" content="Do you have any questions? Get in contact with us." />
                    <meta property="og:title" content="Contact Us | CourseSearch" />
                    <meta property="og:url" content="https://www.coursesearch.net/contact"/>
                    <meta name="twitter:title" content="Contact Us | CourseSearch"/>
                </MetaTags>
                
                <form
                    className="contact-form"
                    onKeyUp={this.isFormValidated.bind(this)}
                    onSubmit={this.handleOnSubmit.bind(this)}
                    >
                        <h2>Contact form</h2>
                        {this.state.error && <p className="error-message">Error while sending your message</p>}
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                            placeholder="Your name *"
                            className="text-input contact-form__input"
                        />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                            placeholder="Your email adress *"
                            className="text-input contact-form__input"
                        />
                        <textarea
                            type="textarea"
                            value={this.state.text}
                            onChange={this.onTextChange.bind(this)}
                            placeholder="Type your message here... *"
                            className="textarea contact-form__input"
                        />
                        <div>
                            <button className="button" type="submit" disabled={!this.state.isFormValidated || this.state.formSendInProgress} >
                                {this.state.formSendInProgress ? "Sending..." : "Send"} 
                            </button>
                        </div>
                        {this.state.isMessageSent && <p className="success-message">Your message has been sent! We will get back to you as soon as possible</p>}
                </form>
            </div>
        );
    }
};

export default ContactPage;