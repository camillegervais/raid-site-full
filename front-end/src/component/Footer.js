import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return (
        <div className="container-footer">
            <Link to='/contact' className='footer-button'>Contact</Link>
            <div className='social-media'>
                <p>Follow us on social media</p>
                <div className='social-media-icons'>
                    <a href='https://www.facebook.com/RAIDCentraleSupelec/'><i className="fab fa-facebook"></i>Facebook</a>
                    <a href='https://www.instagram.com/raidcentralesupelec/'><i className="fab fa-instagram"></i>Instagram</a>
                    <a href='https://www.linkedin.com/company/raid-centralesupelec/'><i className="fab fa-linkedin"></i>Linkedin</a>
                </div>
            </div>
            <div className='engagements'>
                <p>Our engagements</p>
                <div className='engagement-list'>
                    <a className="engagement_ic" href='#'>Engagement 1</a>
                    <a className="engagement_ic" href='#'>Engagement 2</a>
                    <a className="engagement_ic" href='#'>Engagement 3</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;