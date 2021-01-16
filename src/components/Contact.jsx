import React, { useState } from 'react';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErr('Please fill the form completely');
      setTimeout(() => {
        setErr('');
      }, 1500);
      return;
    }

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setShow(true);
      } else {
        alert('Something went wrong try again');
      }
    };
    xhr.send(data);
  };

  const { name, email, message } = formData;
  return (
    <section className="contact" id="contact">
      <div className="heading">Contact</div>

      <div className="container">
        <div className="text">Get in touch using the form below</div>
        {!show ? (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/meqpvybl"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                type="text"
                onChange={handleChange}
                value={message}
              />
            </div>
            {err && <div className="error">{err}</div>}
            <button className="btn btn-submit" type="submit">
              Send
            </button>
          </form>
        ) : (
          <div className="success-message">
            Your message is sent successfully.
          </div>
        )}
      </div>
    </section>
  );
}
