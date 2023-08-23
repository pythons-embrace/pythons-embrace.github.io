class ContactForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <section id="contact" class="s-contact">

      <div class="overlay"></div>
      <div class="contact__line"></div>

      <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
              <h3 class="subhead">Contact Us</h3>
              <h1 class="display-2 display-2--light">Book one of our existing courses or reach out for a custom one</h1>
          </div>
      </div>

      <div class="row contact-content" data-aos="fade-up">
          
          <div class="contact-primary">

              <h3 class="h6">Send Us A Message</h3>

              <form
                name="contactForm"
                id="contactForm"
                action="https://formspree.io/f/maygobva"
                method="POST"
              >
                <fieldset>
                    <div class="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Your Name" value="" minlength="2" required="true" aria-required="true" class="full-width">
                    </div>
                    <div class="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email" value="" required="" aria-required="true" class="full-width">
                    </div>
                    <div class="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width">
                    </div>
                    <div class="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                    </div>
                    <div class="form-field">
                        <button class="full-width btn--primary" type="submit">Send</button>
                    </div>
                    </fieldset>
              </form>

          </div> <!-- end contact-primary -->

      </div> <!-- end contact-content -->

  </section> <!-- end s-contact -->
            `;
    }
  }
  
  customElements.define('contact-section', ContactForm);
  