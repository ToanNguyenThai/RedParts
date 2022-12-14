import React from "react";

export default function Footer() {
  return (
    <footer className="site__footer">
      <div className="site-footer">
        <div className="decor site-footer__decor decor--type--bottom">
          <div className="decor__body">
            <div className="decor__start" />
            <div className="decor__end" />
            <div className="decor__center" />
          </div>
        </div>
        <div className="site-footer__widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="site-footer__widget footer-contacts">
                  <h5 className="footer-contacts__title">Contact Us</h5>
                  <div className="footer-contacts__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer in feugiat lorem.
                  </div>
                  <address className="footer-contacts__contacts">
                    <dl>
                      <dt>Phone Number</dt>
                      <dd>+1 (800) 060-07-30</dd>
                    </dl>
                    <dl>
                      <dt>Email Address</dt>
                      <dd>red-parts@example.com</dd>
                    </dl>
                    <dl>
                      <dt>Our Location</dt>
                      <dd>715 Fake Street, New York 10021 USA</dd>
                    </dl>
                    <dl>
                      <dt>Working Hours</dt>
                      <dd>Mon-Sat 10:00pm - 7:00pm</dd>
                    </dl>
                  </address>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2">
                <div className="site-footer__widget footer-links">
                  <h5 className="footer-links__title">Information</h5>
                  <ul className="footer-links__list">
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        About Us
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Delivery Information
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Brands
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Contact Us
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Returns
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Site Map
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2">
                <div className="site-footer__widget footer-links">
                  <h5 className="footer-links__title">My Account</h5>
                  <ul className="footer-links__list">
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Store Location
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Order History
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Wish List
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Newsletter
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Specials
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Gift Certificates
                      </a>
                    </li>
                    <li className="footer-links__item">
                      <a href className="footer-links__link">
                        Affiliate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <div className="site-footer__widget footer-newsletter">
                  <h5 className="footer-newsletter__title">Newsletter</h5>
                  <div className="footer-newsletter__text">
                    Enter your email address below to subscribe to our
                    newsletter and keep up to date with discounts and special
                    offers.
                  </div>
                  <form action className="footer-newsletter__form">
                    <label
                      className="sr-only"
                      htmlFor="footer-newsletter-address"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="footer-newsletter__form-input"
                      id="footer-newsletter-address"
                      placeholder="Email Address..."
                    />
                    <button className="footer-newsletter__form-button">
                      Subscribe
                    </button>
                  </form>
                  <div className="footer-newsletter__text footer-newsletter__text--social">
                    Follow us on social networks
                  </div>
                  <div className="footer-newsletter__social-links social-links">
                    <ul className="social-links__list">
                      <li className="social-links__item social-links__item--facebook">
                        <a
                          href="https://themeforest.net/user/kos9"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="social-links__item social-links__item--twitter">
                        <a
                          href="https://themeforest.net/user/kos9"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="social-links__item social-links__item--youtube">
                        <a
                          href="https://themeforest.net/user/kos9"
                          target="_blank"
                        >
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li className="social-links__item social-links__item--instagram">
                        <a
                          href="https://themeforest.net/user/kos9"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="social-links__item social-links__item--rss">
                        <a
                          href="https://themeforest.net/user/kos9"
                          target="_blank"
                        >
                          <i className="fas fa-rss" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-row">
              <div className="site-footer__copyright">
                {/* copyright */}
                Powered by HTML ??? Designed by{" "}
                <a href="https://themeforest.net/user/kos9" target="_blank">
                  Kos
                </a>
                {/* copyright / end */}
              </div>
              <div className="site-footer__payments">
                <img src="/images/payments.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
