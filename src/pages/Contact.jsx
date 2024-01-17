import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const captchaRef = useRef(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [validCaptcha, setValidCaptcha] = useState(null);

  const sendEmail = () => {
    if (validCaptcha) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (validCaptcha) {
      setFormState('submitting');
      try {
        await sendEmail(data);

        setFormState('success');
        setTimeout(() => {
          setFormState('idle');
          reset();
          captchaRef.current.reset();
        }, 2000);
      } catch (error) {
        console.log(error);
        setFormState('idle');
      }
      reset();
      captchaRef.current.reset();
      setValidCaptcha(null);
    } else {
      setValidCaptcha(false);
      return;
    }
  });

  const captchaChange = () => {
    captchaRef.current.getValue()
      ? setValidCaptcha(true)
      : setValidCaptcha(false);
  };

  return (
    <div className='contact'>
      <form
        className='form'
        onSubmit={onSubmit}
        ref={formRef}
      >
        <h4>Hi! If you want to contact me, please complete the form below.</h4>
        <div className='form-row'>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='name'
              id='name'
              autoComplete='off'
              placeholder='Name'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                minLength: {
                  value: 2,
                  message: 'Please enter a valid name',
                },
              })}
            />
            {errors.name && (
              <span className='error'>{errors.name.message}</span>
            )}
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              className='form-control'
              id='email'
              autoComplete='off'
              placeholder='Email'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Please enter your email',
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <span className='error'>{errors.email.message}</span>
            )}
          </div>
        </div>
        <textarea
          name='message'
          id='message'
          className='form-control'
          placeholder='Message'
          cols='30'
          rows='10'
          {...register('message', {
            required: {
              value: true,
              message: 'Please enter a message',
            },
            minLength: {
              value: 10,
              message: 'Please enter a valid message',
            },
          })}
        ></textarea>
        {errors.message && (
          <span className='error'>{errors.message.message}</span>
        )}
        <div>
          <ReCAPTCHA
            className='recaptcha'
            ref={captchaRef}
            sitekey={recaptchaSiteKey}
            onChange={captchaChange}
          />
          {validCaptcha === false && (
            <span className='error'>Please check the captcha</span>
          )}
        </div>
        <button
          className='form-button'
          type='submit'
          disabled={formState === 'submitting'}
        >
          {formState === 'submitting' ? 'Sending...' : 'Send'}
        </button>
        {formState === 'success' && (
          <span className='success'>Message sent!</span>
        )}
      </form>
    </div>
  );
};
