import React from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout"

const FormStyles = styled.form`
    display: grid;
    
    .mapleSyrup {
        display: none;
    }

    fieldset {
        display: grid;
    }
    label {
        display: grid;
    }

    button {
        margin-top: 1rem;
    }
`;

export default function ContactPage() {
    return (
        <Layout>
            <h2>Contact</h2>
            <FormStyles>
                <fieldset>
                    <legend>Contact Form</legend>
                    <label htmlFor="name">
                        Name
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            /*value={values.name}*/
                            /*onChange={updateValue}*/
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            /*value={values.email}*/
                            /*onChange={updateValue}*/
                        />
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea
                            type="textarea"
                            name="message"
                            id="message"
                            /*value={values.email}*/
                            /*onChange={updateValue}*/
                        />
                    </label>
                    <input 
                        type="mapleSyrup"
                        name="mapleSyrup"
                        id="mapleSyrup"
                        /*value={values.mapleSyrup}*/
                        /*onChange={updateValue}*/
                        className="mapleSyrup"
                    />
                    <button type="submit">Submit</button>
                </fieldset>
            </FormStyles>
        </Layout>
    );
}