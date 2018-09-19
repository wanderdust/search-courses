import React from "react";
import axios from "axios"


export class ContactPage extends React.Component {
    state = {
        name: "",
        email: "",
        text: "",
        isFormValidated: false,
        error: false
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
        const isNameFieldEmpty = this.state.name.trim() === "";
        const isEmailValidated = /^.+@.+\..+$/.test(this.state.email);
        const isTextFieldEmpty = this.state.text.trim() === "";

        const isFormValidated = isEmailValidated && !isNameFieldEmpty && !isTextFieldEmpty;
        this.setState(() => ({isFormValidated}));
    }

    handleOnSubmit (e) {
        e.preventDefault();

        axios.post("/api/contactus", {
            name: this.state.name,
            email: this.state.email,
            text: this.state.text
        }).then((res) => {
            this.setState(() => ({error: false}));
            this.props.history.push("/");
        }).catch((err) => {
            this.setState(() => ({error: true}));
            console.log("Error sending email");
        });
    }

    render () {
        return (
            <div>
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
                        <button className="button" type="submit" disabled={!this.state.isFormValidated} >Send</button>
                    </div>
              </form>
            </div>
        );
    }
};

export default ContactPage;