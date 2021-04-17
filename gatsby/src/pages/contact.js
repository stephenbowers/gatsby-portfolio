import React from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm';
import useSubmit from '../utils/useSubmit';
import SEO from '../components/SEO';

const ContactStyles = styled.div`
    .success-message {
        background-color: #a7e8b0;
        color: green;
        border-radius: 5px;
        text-align: center;
    }

    @media (max-width: 400px) {
        padding: 0 1rem;
    }
`;

const FormStyles = styled.form`
    display: grid;
    
    .mapleSyrup {
        display: none;
    }

    fieldset {
        display: grid;
        border-radius: 10px;
    }

    label {
        display: grid;
    }

    .error-message {
        margin-top: .5rem;
        color: red;
        text-align: center;
    }

    button {
        margin-top: .5rem;
        font-size: 1rem;
        border-radius: 5px;
    }
    button:hover {
        background-color: #c2f3fc;
    }
    button:active {
        transform: translate(0, 5%);
        background-color: #abd6de;
    }

    @media (max-width: 400px) {
        padding: 0 1rem;
    }
`;

export default function ContactPage() {
    const { values, updateValue } = useForm({
        name: '',
        email: '',
        message: '',
        mapleSyrup: '',
    });

    const {
        error,
        loading,
        message,
        submitForm,
    } = useSubmit({
        values,
    });

    return (
        <>
            <SEO title={"Contact"} />
            <h2>Contact</h2>
            <ContactStyles>
            {message ? <p className="success-message">{message}</p> : ''}
            </ContactStyles>
            <FormStyles onSubmit={submitForm}>
                <fieldset disabled={loading}>
                    <legend>Contact Form</legend>
                    <label htmlFor="name">
                        Name
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={updateValue}
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={updateValue}
                        />
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea
                            type="textarea"
                            name="message"
                            id="message"
                            value={values.message}
                            onChange={updateValue}
                        />
                    </label>
                    <input 
                        type="mapleSyrup"
                        name="mapleSyrup"
                        id="mapleSyrup"
                        value={values.mapleSyrup}
                        onChange={updateValue}
                        className="mapleSyrup"
                    />
                    <div className="error-message">
                        {error ? <p>Error: {error}</p> : ''}
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </fieldset>
            </FormStyles>
        </>
    );
}