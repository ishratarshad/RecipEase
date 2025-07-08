import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        padding: '60px 20px',
        maxWidth: '650px',
        margin: '60px auto',
        backgroundColor: '#fff0f5',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(255, 192, 203, 0.25)',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      <h2
        style={{
          color: '#ff80ab',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '2rem'
        }}
      >
        Contact Us
      </h2>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#555',
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        We'd love to hear from you! Drop us a message and our team will get back to you soon.
      </p>

      <form>
        <div style={{ padding: '0 12px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#444',
                fontWeight: '500'
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#444',
                fontWeight: '500'
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#444',
                fontWeight: '500'
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#ff80ab',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              width: '100%',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ff5c99')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ff80ab')}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;