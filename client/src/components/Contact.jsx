import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        padding: '100px 20px',
        maxWidth: '900px',
        margin: '100px auto',
        background: 'linear-gradient(145deg, #fff0f5 0%, #ffe6eb 50%, #ffd6e0 100%)',
        borderRadius: '32px',
        boxShadow: '0 30px 80px rgba(255, 105, 180, 0.2), 0 10px 30px rgba(255, 105, 180, 0.1)',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
          borderRadius: '50%',
          opacity: '0.08',
          zIndex: '0'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #ff69b4, #ff80ab)',
          borderRadius: '50%',
          opacity: '0.08',
          zIndex: '0'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #ff80ab, #ff69b4)',
          borderRadius: '50%',
          opacity: '0.05',
          zIndex: '0'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10px',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #ff5c99, #ff80ab)',
          borderRadius: '50%',
          opacity: '0.05',
          zIndex: '0'
        }}
      />

      <div style={{ position: 'relative', zIndex: '1' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 24px',
              background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
              borderRadius: '50px',
              marginBottom: '24px',
              boxShadow: '0 8px 25px rgba(255, 128, 171, 0.3)'
            }}
          >
            <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>Let's Connect</span>
          </div>

          <h2
            style={{
              background: 'linear-gradient(135deg, #ff69b4, #ff80ab)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
              fontSize: '3rem',
              fontWeight: '800',
              letterSpacing: '-1px',
              lineHeight: '1.1'
            }}
          >
            Get in Touch
          </h2>

          <p
            style={{
              fontSize: '1.3rem',
              color: '#666',
              marginBottom: '40px',
              lineHeight: '1.7',
              maxWidth: '650px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Have a question about our recipes or want to share your cooking experience? We'd love to hear from you!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '50px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 15px 40px rgba(255, 128, 171, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 50px rgba(255, 128, 171, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 128, 171, 0.3)';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '16px', color: '#333', margin: '0 0 5px 0', fontWeight: '600' }}>Email Us</h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>Quick response guaranteed</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 15px 40px rgba(255, 128, 171, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 50px rgba(255, 128, 171, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 128, 171, 0.3)';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" fill="white"/>
                  <circle cx="7" cy="9" r="1" fill="white"/>
                  <circle cx="12" cy="9" r="1" fill="white"/>
                  <circle cx="17" cy="9" r="1" fill="white"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '16px', color: '#333', margin: '0 0 5px 0', fontWeight: '600' }}>Chat with Us</h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>Real-time support</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  boxShadow: '0 15px 40px rgba(255, 128, 171, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.05)';
                  e.target.style.boxShadow = '0 20px 50px rgba(255, 128, 171, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 128, 171, 0.3)';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.1 13.34L10.91 10.53C11.23 10.21 11.6 9.99 12 9.99C12.4 9.99 12.77 10.21 13.09 10.53L15.9 13.34C16.33 13.77 16.1 14.44 15.51 14.44H8.49C7.9 14.44 7.67 13.77 8.1 13.34ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                  <path d="M15 6H9C8.45 6 8 6.45 8 7V8H7V7C7 5.9 7.9 5 9 5H15C16.1 5 17 5.9 17 7V8H16V7C16 6.45 15.55 6 15 6Z" fill="white"/>
                  <path d="M12 16C13.1 16 14 15.1 14 14C14 12.9 13.1 12 12 12C10.9 12 10 12.9 10 14C10 15.1 10.9 16 12 16Z" fill="white"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '16px', color: '#333', margin: '0 0 5px 0', fontWeight: '600' }}>Recipe Help</h4>
              <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>Cooking guidance</p>
            </div>
          </div>
        </div>

        {isSubmitted && (
          <div
            style={{
              background: 'linear-gradient(135deg, #d4edda, #c3e6cb)',
              color: '#155724',
              padding: '20px',
              borderRadius: '16px',
              marginBottom: '40px',
              textAlign: 'center',
              border: '2px solid #c3e6cb',
              boxShadow: '0 8px 25px rgba(21, 87, 36, 0.1)',
              transform: 'scale(1.02)',
              animation: 'slideIn 0.6s ease-out'
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(255, 105, 180, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '12px',
                color: '#333',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              style={{
                width: '100%',
                padding: '18px 20px',
                border: '2px solid #f0f0f0',
                borderRadius: '16px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                backgroundColor: '#fafafa',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff80ab';
                e.target.style.backgroundColor = '#fff';
                e.target.style.boxShadow = '0 0 0 4px rgba(255, 128, 171, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#f0f0f0';
                e.target.style.backgroundColor = '#fafafa';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '12px',
                color: '#333',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '18px 20px',
                border: '2px solid #f0f0f0',
                borderRadius: '16px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                backgroundColor: '#fafafa',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff80ab';
                e.target.style.backgroundColor = '#fff';
                e.target.style.boxShadow = '0 0 0 4px rgba(255, 128, 171, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#f0f0f0';
                e.target.style.backgroundColor = '#fafafa';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '40px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '12px',
                color: '#333',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your recipe questions or share your cooking experience..."
              rows="6"
              style={{
                width: '100%',
                padding: '18px 20px',
                border: '2px solid #f0f0f0',
                borderRadius: '16px',
                fontSize: '1rem',
                resize: 'vertical',
                minHeight: '140px',
                transition: 'all 0.3s ease',
                backgroundColor: '#fafafa',
                boxSizing: 'border-box',
                fontFamily: 'Poppins, sans-serif',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff80ab';
                e.target.style.backgroundColor = '#fff';
                e.target.style.boxShadow = '0 0 0 4px rgba(255, 128, 171, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#f0f0f0';
                e.target.style.backgroundColor = '#fafafa';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '20px 50px',
              background: 'linear-gradient(135deg, #ff80ab, #ff5c99)',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.3s ease',
              boxShadow: '0 15px 40px rgba(255, 128, 171, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 20px 50px rgba(255, 128, 171, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 15px 40px rgba(255, 128, 171, 0.3)';
            }}
          >
            Send Message ✨
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
