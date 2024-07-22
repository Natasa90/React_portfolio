import React from 'react'; 

const ContactFormsStyle = {
    width: '80px',
    display: 'flex',
    flexFlow: 'column wrap',
    gap: '5px'
}

export const ContactForms = () => {
    
    return (
        <>
            <h2>Let's get in touch!</h2>
            <div style={ContactFormsStyle} id="contact">
                <label htmlFor="name">Full name:</label>
                <input type="text" id="name"></input>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email"></input>
                <label htmlFor="message">Message:</label>
                <input type="text" id="message"></input>
            </div>
        </>
    )
}

