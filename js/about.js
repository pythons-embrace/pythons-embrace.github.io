class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id='about' class="s-about">

        <div class="row section-header has-bottom-sep" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead subhead--dark">Hello There</h3>
                <h1 class="display-1 display-1--light">Embrace Python and embrace better science</h1>
            </div>
        </div> <!-- end section-header -->

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p>Python's Embrace is the work of Dr Chas Nelson and Miks Kundegorski - one biologist who found themself in computing; and one computer scientist who found themself in a field! We are passionate about sharing our knowledge and experience with others and helping them to develop their skills in Python and data science.
                </p>
            </div>
        </div> <!-- end about-desc -->
  
        <div class="row about-desc block-1-2 block-tab-full">

            <div class="col-block service-item" data-aos="fade-up">
                <div class="about-avatar">
                    <img src="../images/avatars/cjn.jpg">
                </div>
                <div class="about-bio">
                    <h3 class="h2">Dr Chas Nelson</h3>
                    <p><a href="https://www.chasnelson.co.uk">Dr Chas Nelson</a> is an International Data Consultant working with Fjelltopp Ltd and various UN Organisations. Chas has taught computer science topics to a wide variety of groups and comes prepared with an undergraduate degree in biology (and physics) and a PhD in computer science, specifically bioimage analysis. Chas uses Python daily and has an interest in building courses that enable participants to go on and continue learning after the course.
                    </p>
                </div>
            </div>

            <div class="col-block service-item" data-aos="fade-up">
                <div class="about-avatar">
                    <img src="../images/avatars/mixmixmix.jpg">
                </div>
                <div class="about-bio">
                    <h3 class="h2">Miks Kundegorski</h3>
                    <p><a href="https://mixmixmix.github.io">Mikolaj (Miks) Kundegorski</a> is a Software Engineer at Fjelltopp Ltd and Health Informatics Consultant with the UN Organisations. His background spans from physics to computer vision and he is currently working towards his PhD in modelling of collective animal behaviour at the University of Glasgow. He uses Python to solve a wide variety of problems in international development and academia and is passionate about sharing his expertise.
                    </p>
                </div>
            </div>

        </div><!-- end services-list -->

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p>Between them, Chas and Miks will be able to fully support your learning throughout the course and provide you with the tools to continue developing your skills after the course.
                </p>
            </div>
        </div> <!-- end about-desc -->
  
        <div class="row about-stats stats block-1-3 block-m-1-2 block-mob-full" data-aos="fade-up">
                
            <div class="col-block stats__col ">
                <div class="stats__count">21</div>
                <h5>Courses Run</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">1034</div>
                <h5>New Pythonistas</h5> 
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">1990</div>
                <h5>Cups of Coffee</h5>
            </div>
  
        </div> <!-- end about-stats -->
  
        <div class="about__line"></div>
  
    </section> <!-- end s-about -->
          `;
  }
}

customElements.define('about-us-section', About);
