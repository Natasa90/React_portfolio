import { useState } from 'react'
import { SubmitButton } from '../submitButton';



const inputStyle = {
    width: '300px',
    display: 'flex',
    flexFlow: 'column wrap',
    gap: '5px'
}

export const FormData = () => {

    interface Inquiry {
        name: string; 
        email: string; 
        message: string; 

    }

    const [form, setForm] = useState<Inquiry>({
        name: '',
        email: '',
        message: ''
    })

    const updateForm = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = event.target;
        setForm ({
            ...form, 
            [name]: value
        })
    }

    console.log(form);

    return (
        <div style={inputStyle}>
            <h2>Let's get in touch!</h2>
           <input 
                type='text'
                name='name'
                value={form.name}
                onChange={updateForm}
                placeholder='Name:'
           /> 
           <input
                type='text'
                name='email'
                value={form.email}
                onChange={updateForm}
                placeholder='Email:'
           />  
           <input
                type='text'
                name='message'
                value={form.message}
                onChange={updateForm}
                placeholder='Your message:'
           />
           <SubmitButton/>
        </div>
    )
}
    
