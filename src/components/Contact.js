import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Contact.css';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        // Додайте логіку для відправки даних на сервер
        reset(); // Очищення форми після відправлення
    };

    return (
        <div className="contact-page">
            <section className="contact">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>

                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <p className="error-message">{errors.name.message}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <p className="error-message">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Provide context"
                                    {...register('subject')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-subject">Subject</label>
                                <select
                                    id="select-subject"
                                    {...register('selectSubject', { required: 'Select a subject' })}
                                >
                                    <option value="">Select Subject</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                    
                                </select>
                                {errors.selectSubject && <p className="error-message">{errors.selectSubject.message}</p>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Write your question here"
                                {...register('message', { required: 'Message is required' })}
                            ></textarea>
                            {errors.message && <p className="error-message">{errors.message.message}</p>}
                        </div>

                        <button type="submit" className="send-message-button" id="sendMessageButton">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;