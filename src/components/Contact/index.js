import { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    }) 

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value)
            console.log(isValid)

            if(!isValid){
                setErrorMessage('Not valid email')
            } else {
                if(e.target.value.length === 0){
                    setErrorMessage(`${e.target.name} is required` )
                } else{
                    setErrorMessage('')    
                }
                
            }
        
        console.log('Error Message:', errorMessage)
        }

        if(!errorMessage){
            setFormState({
                ...formState, [e.target.name]:e.target.value
            })
        }
    }

    

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState)
    }

    console.log(formState)
    //JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm