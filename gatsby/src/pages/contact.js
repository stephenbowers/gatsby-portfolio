import React, { useState }  from "react"
import axios from "axios";
import styled from "styled-components";
import SEO from '../components/SEO';

const FormStyles = styled.div`
    .form {
        display: grid;
    }
    
    .mapleSyrup {
        display: none;
    }

    fieldset {
        display: grid;
        border-radius: 10px;
    }

    input {
        margin-bottom: .75rem;
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

    @media (max-width: 550px) {
        padding: 0 1rem;
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
                    <input type="text" name="message" placeholder="Your Message" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </FormStyles>
      </>
    );
  };

  export default MyForm;