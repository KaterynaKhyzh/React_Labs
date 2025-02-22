import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/SendInquiry.css';

function SendInquiry() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <section className="send-inquiry">
            <div className="send-inquiry-left">
                <h1>Building stellar websites for early startups</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                </p>
            </div>

            <div className="send-inquiry-right">
                <h2>Send Inquiry</h2>
                <p className="send-inquiry-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>
                <form className="inquiry-form" onSubmit={handleSubmit(onSubmit)}>
                      {errors.name && <p className="error-message">{errors.name.message}</p>}
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name', { required: 'Your name is required' })}
                        className="form-input"
                    />

                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        className="form-input"
                    />

                    {errors.figmaUrl && <p className="error-message">{errors.figmaUrl.message}</p>}
                    <input
                        type="text"
                        placeholder="Paste your Figma design URL"
                        {...register('figmaUrl', { required: 'Figma URL is required', pattern: {
                            value: /^(ftp|http|https):\/\/[^ "]+$/,
                            message: 'Invalid URL',
                        } })}
                        className="form-input"
                    />

                    <button type="submit" className="submit-button">Send an Inquiry</button>
                </form>
                <a href="/" className="get-in-touch-link">Get in touch with us →</a>
            </div>
        </section>
    );
}

export default SendInquiry;