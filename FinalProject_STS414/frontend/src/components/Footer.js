import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Thrills newsletter to receive our best games and software deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubcribe at any time.

                </p>
                <form>
                    <input text="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>

                </form>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Games</h2>
                        <Link to='/games/category/RPG'>RPG</Link>
                        <Link to='/games/category/Fantasy'>Fantasy</Link>
                        <Link to='/games/category/FPS'>FPS</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Softwares</h2>
                        <Link to='/softwares/category/Internet'>Internet</Link>
                        <Link to='/softwares/category/Communication'>Communication</Link>
                        <Link to='/softwares/category/Productivity'>Productivity</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social</h2>
                        <Link to=''>Instagram</Link>
                        <Link to=''>Facebook</Link>
                        <Link to=''>Youtube</Link>
                        <Link to=''>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Pro Gamers<i className="fas fa-gamepad"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Pro Gamers © 2021
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>

                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>

                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>

                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
