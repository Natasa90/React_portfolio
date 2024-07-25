import { Input } from '../input'
import { useState } from 'react'


export const ContactForm = () => {

    const [name, setName] = useState('')

    const updateName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const usersName = event.target.value; 
        setName(usersName); 

    }

    const [email, setEmail] = useState(''); 

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const usersEmail = event.target.value; 
        setEmail(usersEmail)

    }

    const [message, setMessage] = useState('')

    const updateMessage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const usersMessage = event.target.value; 
        setMessage(usersMessage); 
    }

    console.log(name);
    console.log(email);
    console.log(message); 

    return(
        <>
            <Input name='name' handleOnChange={updateName}/>
            <Input name='email' handleOnChange={updateEmail}/>
            <Input name='message' handleOnChange={updateMessage}/>
        </>
    )




}

