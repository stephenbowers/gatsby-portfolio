import React, { useState }  from "react"
import axios from "axios";
import styled from "styled-components";
import SEO from '../components/SEO';

const FormStyles = styled.div`
    margin-left: auto;
    margin-right: auto;

    .col-md-8, .mt-5 {
      display: flex;
      flex-direction: column;
    }

    .form {
      display: grid;
      grid-template-columns: 600px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }
    
    .mapleSyrup {
      display: none;
    }

    fieldset {
      display: grid;
      border-radius: 10px;
    }

    input, textarea {
      display: relative;
      margin-bottom: .75rem;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      max-width: 90%;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1.25rem;
      border: 1px solid black;
    }

    input:focus {
      background-color: var(--yellow);
    }

    textarea:focus { 
      background-color: var(--yellow);
    }

    .error-message {
      margin-top: .5rem;
      color: red;
      text-align: center;
    }

    button {
      margin-top: .5rem;
      font-size: 1.5rem;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
      background-color: var(--yellow);
    }
    button:hover {
      background-color: var(--blue);
    }
    button:active {
      transform: translate(0, 5%);
      background-color: #abd6de;
    }

    @media (max-width: 800px) {
      .form {
        grid-template-columns: 400px;
      }
    }

    @media (max-width: 550px) {
      .form {
        grid-template-columns: 250px;
      }
    }
    `;

const MyForm = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/ee32c79d-5560-4a7b-a18b-1a5eef2db6ec",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
      <>
      <SEO title={"Contact"} />
        <FormStyles>
            <div className="col-md-8 mt-5">
                <h2>Contact</h2>
                <form className="form" onSubmit={handleOnSubmit}>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea name="message" form="form" placeholder="Your Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </FormStyles>
      </>
    );
  };

  export default MyForm;