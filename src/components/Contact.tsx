import {useState} from 'react';
import './Contact.css';

function Contact(){

    const [name , setName] = useState('');
    const [email ,  setEmail] = useState('');
    const [message  ,setMessage]= useState('');
    const [isSent , setIsSent] = useState(false);

    return (
        <main className="page-section">
          <h2>Contact Us</h2>
    
          {isSent ? (
            <p className="contact-success">Thanks, {name}! We got your message.</p>
          ) : (
            <form
            className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true);
              }}
            >
              <label className="contact-label">
                Name
                <input 
                className="contact-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
    
              <label className="contact-label">
                Email
                <input className="contact-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
    
              <label className="contact-label">
                Message
                <textarea
                className="contact-input contact-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
    
              <button className="contact-button" type="submit">Send</button>
            </form>
          )}
        </main>
      );
    }


export default Contact;