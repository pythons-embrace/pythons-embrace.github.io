class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>

      <div class="row footer-main">

          <div class="col-six tab-full left footer-desc">

            <div class="footer-logo">
              <a class="site-logo" href="/">
                  <img src="/images/logo.webp" alt="Python's Embrace">
                  <span class="logo-text">Python's Embrace</span>
              </a>
            </div>

          </div>

          <div class="col-six tab-full right">

              <h4>Our Courses</h4>

              <ul class="center-wrapped">
                <li><a href="/courses/beginners.html">Python for Biologists</a></li>
                <li><a href="/courses/data_exploration.html">Data Exploration</a></li>
                <li><a href="/courses/image_analysis.html">Image Analysis</a></li>
                <li><a href="/courses/machine_learning.html">Machine Learning</a></li>
                <li><a href="/courses/workflows.html">Data Workflows</a></li>
              </ul>

          </div>

      </div> <!-- end footer-main -->

      <div class="row footer-bottom">

          <div class="col-twelve">
              <div class="copyright">
                  <span>© Copyright Chas Nelson 2023</span> 
                  <span>Site Template by <a href="https://www.colorlib.com/">Colorlib</a></span>	
              </div>

              <div class="go-top">
                  <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
              </div>
          </div>

      </div> <!-- end footer-bottom -->

  </footer> <!-- end footer -->
            `;
    }
  }
  
  customElements.define('footer-section', Footer);
  