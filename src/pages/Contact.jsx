import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import "./ContactPage.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      await emailjs.send(
        "service_yqznqwa",
        "template_ti6tfoo",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          comments: formData.comments,
        },
        "Maevv6RMC5TXA7COQ", // Replace with EmailJS Public Key
      );

      setSubmitted(true);
      setLoading(false);

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
      });
    } catch (err) {
      console.log("Email Error:", err);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="Delivering reliable solutions backed by engineering expertise."
        backgroundImage={images.about}
      />

      <div className="contact-page">
        <section className="contact-page__main section">
          <div className="container contact-page__main-inner">
            {/* LEFT INFO */}
            <div className="contact-page__info">
              <h3 className="contact-page__info-heading">Contact Address</h3>
              <p className="contact-page__address">
                <span>THINKERDYNE TECHNOLOGIES PRIVATE LIMITED</span>
                <br />
                No 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura,
                <br />
                Electronic City, Phase II, Bengaluru, Karnataka, India – 560100.
              </p>

              <h3 className="contact-page__info-heading">Let's Talk</h3>
              <p className="contact-page__phones">
                <a href="tel:+919620233838">+91 9620233838</a>
              </p>

              <h3 className="contact-page__info-heading">Email Us</h3>
              <p className="contact-page__emails">
                <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>
                <br />
                <a href="mailto:sales@thinkerdyne.com">sales@thinkerdyne.com</a>
              </p>

              <h3 className="contact-page__info-heading">Working Hours</h3>
              <p className="contact-page__hours">
                Monday to Saturday
                <br />
                09 am to 07 pm
              </p>
            </div>

            {/* FORM */}
            <div className="contact-page__form-wrap">
              <h2 className="contact-page__form-title">
                Discuss Your Project Requirements
              </h2>

              <p className="contact-page__form-subtitle">
                We operate in an industry built on trust. This can only be
                achieved through communication and experience.
              </p>

              <p className="contact-page__form-cta">Request a Call Back!</p>

              {submitted ? (
                <div className="contact-page__feedback contact-page__feedback--success">
                  Thank you! We have received your request and will get back to
                  you soon.
                </div>
              ) : (
                <form className="contact-page__form" onSubmit={handleSubmit}>
                  <div className="contact-page__row">
                    <div className="contact-page__field">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-page__field">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-page__row">
                    <div className="contact-page__field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-page__field">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-page__field">
                    <label>Comments</label>
                    <textarea
                      name="comments"
                      rows={3}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="contact-page__response-note-wrap">
                    <p className="contact-page__response-note">
                      We typically respond within 12 hours!!
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary contact-page__submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit Form"}
                  </button>

                  {error && (
                    <p className="contact-page__feedback contact-page__feedback--error">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="contact-page__map-section section section--alt">
          <div className="contact-page__map-wrap contact-page__map-wrap--full">
            <iframe
              title="Thinkerdyne Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9316968373914!2d77.68266419999999!3d12.847688099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d000dfa568b%3A0xfb0e30d0878a2ada!2sThinkerdyne%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771261621792!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </>
  );
}
