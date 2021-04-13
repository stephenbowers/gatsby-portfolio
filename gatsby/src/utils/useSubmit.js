import { useState } from "react";

export default function useSubmit({ values }) {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Runs when contact form submitted
    async function submitForm(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Gather all data
        const body = {
            name: values.name,
            email: values.email,
            message: values.message,
            mapleSyrup: values.mapleSyrup,
        };

        // Send this data to the serverless function
        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/submitContact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const text = JSON.parse(await res.text());

        // Check if everything worked
        if(res.status >= 400 && res.status < 600) {
            setLoading(false);
            setError(text.message);
        } else {
            // It worked
            setLoading(false);
            setMessage('Successfully submitted!');
            //TODO: Reset form
        }
    }

    return {
        error,
        loading,
        message,
        submitForm,
    }
}