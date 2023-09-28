import React from "react";
import styles from "../contact/contact.module.css";

function Contact() {
  return (
    <>
      <section className="contact_section">
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-12 text-center pb-5">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle"></p>
            </div>
            <div className="col-12 contact-form">
              <div className="row">
                <div className="col-lg-7 mb-5">
                  <div className="row g-3">
                    <form onsubmit="sendemail(); return false;">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Your Name..."
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter E-mail..."
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="number"
                          id="phone"
                          className="form-control"
                          placeholder="Enter Number..."
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          id="class"
                          className="form-control"
                          placeholder="Enter Complaint..."
                          required=""
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <textarea
                          id="message"
                          className="form-control"
                          placeholder="Enter About You..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <button type="submit" className="btn main-btn">
                          Send Message
                        </button>
                      </div>
                    </form>
                    {/* </form>></form>

          <div class="col-md-6 mb-4" onsubmit="sendemail()">

            <input type="text" class="form-control" placeholder="Your Name..." required>

          </div>

          <div class="col-md-6 mb-4">

            <input type="email" class="form-control" placeholder="Enter E-mail..." required>

          </div>

          <div class="col-md-6 mb-4">

            <input type="number" class="form-control" placeholder="Enter Number..." required>

          </div>

          <div class="col-md-6 mb-4">

            <input type="text" class="form-control" placeholder="Enter Class..." required>

          </div>

          <div class="col-12 mb-4">

            <textarea class="form-control" placeholder="Enter About You..."></textarea>

          </div>

          <div class="col-12 mb-4">

            <button type="submit" class="btn main-btn">Send Message</button>

          </div> */}
                  </div>
                </div>
                <div className="col-lg-5 mb-5 color">
                  <div className="content-box ms-sm-5">
                    <ul className="info-box clearfix">
                      <li>
                        <i className="fas fa-phone-alt" />
                        <p>Any Question? Call Us</p>
                        <div>
                          <a>+92-309-5449342</a>
                        </div>
                      </li>
                      <li>
                        <i className="fas fa-envelope-open" />
                        <p>Any Question? E-mail Us</p>
                        <div>
                          <a>noumannawaz359@gmail.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
