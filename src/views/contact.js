import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  
    return (
      <div id='contact-section' className='container'>
        <h2 className='heading'>Contact Me</h2>
        <hr />
        <ul id='contact-info'>
            <li> <a href='https://github.com/Mirnes420/'  rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/>  Github</a></li>
            <li> <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfVPNHtGHmSPjnHtXwgWfcqTtQJkwsJdkMrxnDJjXNSTjhqKJrvLxgLhPGgwCsdwTWbq'  rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope} className='icon'/> Email</a></li>
            <li> <a href='https://www.linkedin.com/in/mirnes-nuhanovic/'  rel="noreferrer" target='_blank' ><FontAwesomeIcon icon={faLinkedin} className='icon'/>  LinkedIn</a></li>
        </ul>
      </div>
    );
  };

export default ContactMe;