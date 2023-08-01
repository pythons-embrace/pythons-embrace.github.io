class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="s-header">

      <div class="header-logo">
          <a class="site-logo" href="/">
              Python's Embrace
          </a>
      </div>

      <nav class="header-nav">

          <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>

          <div class="header-nav__content">
              <h3>Navigation</h3>
              
              <ul class="header-nav__list">
                  <li class="current"><a class="smoothscroll"  href="/" title="home">Home</a></li>
                  <li><a class="smoothscroll"  href="#about" title="about">About</a></li>
                  <li><a class="smoothscroll"  href="/#courses" title="courses">Courses</a></li>
                  <li><a class="smoothscroll"  href="/#clients" title="reviews">Reviews</a></li>
                  <li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>
              </ul>

          </div> <!-- end header-nav__content -->

      </nav>  <!-- end header-nav -->

      <a class="header-menu-toggle" href="#0">
          <span class="header-menu-text">Menu</span>
          <span class="header-menu-icon"></span>
      </a>

  </header> <!-- end s-header -->
            `;
    }
  }
  
  customElements.define('header-section', Header);
  