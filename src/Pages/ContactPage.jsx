import axios from 'axios';
import React, { useState } from 'react';


function ContactPage(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };


    const handleSend = (e) => {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/contact`, formState)
            .then(response => {
                setResponseMessage('Message sent successfully!');
                console.log(response.data);
                setFormState({ name: '', email: '', message: '' });
            })
            .catch(error => {
                setResponseMessage('Failed to send message.');
                console.error(error);
            });
    }





    return (
        <main className='h-screen=full mt-16'>
            <div className='bg-cover bg-center h-70 ' style={{ backgroundImage: "url('image/Contact.jpg')" }}>
                <h1 className='text-white flex flex-row justify-center items-center p-24 text-3xl font-bold'>CONTACT US</h1>
            </div>

            <div className='h-2/3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-20 gap-6 -mt-28 '>

                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16 ' src="/icons/mail_icon.png" alt="" />
                    <h1 className='mt-4'>Email Us</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/location-icon.png" alt="" />
                    <h1 className='mt-4'>Our address</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/time_icon.png" alt="" />
                    <h1 className='mt-4'>opening Hours</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/call_icon.png" alt="" />
                    <h1 className='mt-4'>Call Us</h1>
                </div>

            </div>

            <section className='h-3/5 '>
                    
                        <div className='grid justify-center'>
                            <h1 className='justify-center text-2xl'>Contact Us</h1>
                            <p className='text-lg underline'>Fill the form</p>
                        </div>
                        <form className='grid  justify-center gap-4' onSubmit={handleSend}>
                <input className='border border-green-300 mt-4 shadow-md rounded-md  py-2' type="text" id='name' name='name' placeholder='Your name*' value={formState.name}
                    onChange={handleChange} />
                <input className='border  border-green-300 shadow-md rounded-md py-2' type="email" id='email' name='email' placeholder='enter your email*' value={formState.email}
                    onChange={handleChange} />
                <textarea className='border border-green-300  px-28 py-12 shadow-md' id="message" name='message' placeholder='Type your message*'    value={formState.message}
                    onChange={handleChange}></textarea>
                <button className='bg-yellow-400 hover:bg-blue-700 mb-4 p-2 rounded-2xl text-xl ' type="submit">send</button>
                {responseMessage && <p className='text-center mt-4'>{responseMessage}</p>}






            </form>
            </section>




        </main>
    );
}

export default ContactPage;