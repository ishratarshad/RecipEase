import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <p>If you have questions or feedback, feel free to reach out to our team.</p>

      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Name</label><br />
          <input type="text" name="name" style={{ width: '100%', padding: '8px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email</label><br />
          <input type="email" name="email" style={{ width: '100%', padding: '8px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Message</label><br />
          <textarea name="message" rows="5" style={{ width: '100%', padding: '8px' }} required />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
