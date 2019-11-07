<template>
  <div class="portfolio">
    <nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
      <div class="container">
          <a class="navbar-brand" href="/"><img src="logo.png"/></a>
          <div class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link scroll-link" href="#about-us" v-scroll-to="'#about-us'" @click="removeMobileMenu()">About Us</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link scroll-link" href="#portfolio" v-scroll-to="'#portfolio'" @click="removeMobileMenu()">Portfolio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link scroll-link" href="#team" v-scroll-to="'#team'" @click="removeMobileMenu()">Team</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link scroll-link" href="#contact" v-scroll-to="'#contact'" @click="removeMobileMenu()">Contact</a>
                  </li>
              </ul>
              <div class="nav-logo container">
                  <img width="90px" src="frame.png"/>
              </div>
          </div>
      </div>
    </nav>
    <div class="top-content" id="top-content">
      <div class="container">  
          <div class="row">
              <div class="col-md-6 text">
                  <h1 class="wow fadeInLeftBig intro-text">{{page.fields['intro-text']}}</h1>
                  <div class="description wow fadeInLeftBig">
                      <p>{{page.fields['description']}}</p>
                  </div>
              </div>
              <div class="col-md-6 text">
                  <div class="image-tbd"></div>
              </div>
          </div>
        </div>            
    </div>
    <div class="hero-container section-container" id="about-us">
      <div class="container">
      </div>
    </div>
    <div class="services-container section-container" id="portfolio">
      <div class="container">
          <div class="row">
              <div class="col services section-description wow fadeIn">
                  <h2>Select Investments</h2>
                  <div class="divider-1 wow fadeInUp"><span></span></div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6 services-box wow fadeInUp" v-for="item in page.fields.investments" v-bind:key="item.key">
                  <div class="row">
                      <div class="col-md-12">
                          <p class="service-text">
                            <span>{{item.name}}</span>{{item.explanation}}
                          </p>
                      </div>
                      <div class="col-md-12">
                          <img :src="item.logo"/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <div class="about-us-container section-container section-container-gray-bg" id="team">
      <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8 about-us-box wow fadeInLeft">
                <div class="about-us-box-text">
                    <h3>About Us</h3>
                    <div class="about-us-individual">
                      <h4>{{page.fields['team-intro']}}</h4>
                      <p class="medium-paragraph">
                          {{page.fields['team-description']}}
                      </p>
                      <div class="about-box-divider"></div>
                    </div>
                    <div class="about-us-individual" v-for="item in page.fields['team-member']" v-bind:key="item.key">
                      <h4>{{item.name}}</h4>
                      <p class="medium-paragraph">
                          {{item.role}}<br>
                          {{item.explanation}}
                      </p>
                      <div class="about-box-divider"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="contact-container section-container" id="contact">
      <div class="container contact-box-container">
          <div class="row">
              <div class="col-md-6 contact-box wow fadeInUp">
                  <p>{{page.fields['contact-email']}}</p>
              </div>
              <div class="col-md-6 contact-form wow fadeInDown">
                  <p>Newsletter</p>
                  <p class="news-text">{{page.fields['contact-description']}}</p>
                  <div class="row">
                    <div class="col-xs-6 px-3">
                      <input name="email" placeholder="Your Email" class="form-control"/>
                    </div>
                    <div class="col-xs-6 px-3">
                      <a href="javascript;;" class="form-control">Subscribe</a>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <div class="footer-container">
      <div class="container">
          <div class="row">
              <div class="col-md-6 footer-img-desk wow fadeInUp">
                  <img src="frame.png"/>
              </div>
              <div class="col-md-6 copyright wow fadeInDown">
                  <p>@2019 Haystack Management Company LLC All rights reserved.</p>
              </div>
              <div class="col-md-6 footer-img-mob wow fadeInUp">
                  <img width="43px" src="frame.png"/>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Portfolio',
  data() {
    return {
      page: {
        fields: {}
      }
    }
  },
  methods: {
    getPage() {
      butter.page.retrieve('*', 'portfolio')
        .then((res) => {
          this.page = res.data.data

        }).catch(() => {
        })
    },
    removeMobileMenu() {
      if(screen.width < 720)
        document.getElementsByClassName('navbar-toggler')[0].click()
    }
  },
  created() {
    this.getPage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    padding-top: 80px;
    background: white;
    -o-transition: all .6s;
    -moz-transition: all .6s;
    -webkit-transition: all .6s;
    -ms-transition: all .6s;
    transition: all .6s;
    backface-visibility: hidden;
}
 
.navbar.navbar-no-bg {
    background: white;
}
 
.navbar-dark .navbar-nav {
    font-size: 24px;
    color: white;
    font-weight: 300;
    line-height: 29px;
}
 
.navbar-dark .navbar-nav .nav-link {
  color:rgba(0, 0, 0, 0.49);
  border: 0;
}
 
.navbar-dark .navbar-nav .nav-link:hover {
  color:rgba(0, 0, 10, 0.99);
}
 
.navbar-dark .navbar-nav .nav-link:focus {
  color:rgba(0, 0, 10, 0.99);
  outline: 0;
}
 
.navbar-expand-md .navbar-nav .nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
 
.navbar-brand {
  width: 136px;
  border: 0;
}
.navbar-toggler {
  background: white;
  padding: 0px;
  }
.navbar-toggler span {
  height: 2px;
  margin-bottom: 5px;
  width: 24px;
  background-color: #808793;
  display: block;
}
.navbar .navbar-toggler[aria-expanded="false"] span {
  height: 2px;
  margin-bottom: 5px;
  width: 24px;
  background-color: #808793;
  display: block;
  transition: all .4s;
}
.navbar .navbar-toggler[aria-expanded="true"] span:first-child {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
  transform: rotate(-45deg);
}
.navbar .navbar-toggler[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -5px);
}
.navbar-collapse .nav-logo{display:none}

.top-content {
    padding: 400px 0 200px 0;
}
 
.top-content .text {
    color: #2f2f2f;
    text-align: left;
}
 
.top-content .text .intro-text {
    margin-top: 25px;
    font-weight: 300;
    font-size: 56px;
    line-height: 56px;
    color: #2f2f2f;
}
 
.top-content .description {
    margin: 30px 0 10px 0;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;

    color: #808793;
}
 
.top-content .description p {
    opacity: 0.8;
}
 
.top-content .top-big-link {
    margin-top: 45px;
}
.top-content .image-tbd {
  width: 700px;
  height: 700px;
  position: absolute;
  top: -75px;
  left: calc(100% - 700px);
  background: #ccc;
}
.section-container .container {
  border-bottom: 1px solid #C4C4C4
}

.hero-container {
  background: linear-gradient(0.97deg, #FFFFFF 20.38%, #D8D8D8 191.38%);
  margin-bottom: 40px;
}
.hero-container .container {
  height: 500px;
}
.services-box {
  margin-bottom: 200px;
  padding-top: 30px;
  padding-right: 100px;
  font-family: Founders Grotesk;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: -0.02em;
}
.services-box:nth-child(2n) .row::before {
  border-left: 1px solid #C4C4C4;
  content: "";
  width: 1px;
  height: calc(100% - 30px);
  top: 30px;
  left: 0;
  position: absolute;
}
 
.services-box .service-text {
  margin-bottom: 60px;
  padding: 0 0 10px 0;
  color: rgba(0, 0, 0, 0.5);
}
.services-box p span {
  color: black;
}

.about-us-box {
    margin-top: 100px;
}
 
.about-us-box-text {
    padding-right: 30px;
    text-align: left;
}
 
.about-us-box-text h3 {
  margin-top: 0;
  font-weight: 300;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-bottom: 100px;
}
.about-us-individual h4 {
  font-weight: 300;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: -0.02em;
  margin-top: 50px;
}
.about-us-individual p {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #808793;
  margin-bottom: 50px;
}
.about-box-divider {
  border-bottom: 1px solid #C4C4C4;
  width: 100px;
}
.about-us-individual:last-child .about-box-divider {
  border:none;
}
.about-us-box-img img {
    border-radius: 4px;
}
.contact-box-container {
  margin-top: 100px;
  height: 400px;
  border-bottom: none !important;
}
.contact-form p {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
}
.contact-form .news-text {
  color: rgba(0, 0, 0, 0.5);
}
.contact-form input {
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0px;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
}
.contact-form input:focus {
  box-shadow: none;
}
.contact-form a {
  border: none;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #607ABA;
}
.contact-form a:hover, .contact-form a:focus{
  text-decoration: none;
  color: #1b6ae4;
}

.footer-container .footer-img-desk {
  display: block;
}
.footer-container .footer-img-mob {
  display: none;
}
.copyright p {
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: -0.02em;
  color: #C4C4C4;
  margin-bottom: 50px;
}
@media (min-width: 1400px){
  .container {
    width: 1700px;
    max-width: calc(100vw - 380px);
  }   
}
@media (min-width: 992px) and (max-width: 1199px) {
 
    .about-us-box-text { padding-right: 0; }
     
}
 
@media (min-width: 768px) and (max-width: 991px) {
 
    .navbar-expand-md .navbar-nav .nav-link { padding-left: 0.6rem; padding-right: 0.6rem; }
 
    .top-content { padding: 180px 0; }
 
    .section-description p { padding: 0; }
 
    .services-box .services-box-icon { width: 50px; height: 50px; font-size: 26px; line-height: 50px; border-radius: 18px; }
 
    .about-us-box { margin-top: 80px; }
    .about-us-box:last-child { margin-top: 50px; }
    .about-us-box-text { padding-right: 0; }
 
    .more-services-box .more-services-box-icon { width: 50px; height: 50px; font-size: 26px; line-height: 50px; border-radius: 18px; }
 
    .portfolio-box h3:hover i { padding-left: 10px; }
 
    .blog-box h3:hover i { padding-left: 10px; }
 
}
 
@media (max-width: 767px) {
 
  body, h1, h2, h3, h4, p {
    font-size: 23.6544px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
  .top-content .text .intro-text {
    font-size: 31.5392px;
    line-height: 31px;
  }
  .top-content .text .description {
    margin: 0;
    font-size: 18.0224px;
    line-height: 22px;
  }
  .hero-container .container {
    height: 0px;
  }
  .top-content .image-tbd {
    width: 100%;
    height: 300px;
    position: relative;
    left: auto;
    top: auto;
  }
  .services-box { margin-bottom: 70px; }
  .services-box .service-text { margin-bottom: 20px; }
  .services-box:nth-child(2n) .row::before {
    content: none;
  }
  .about-us-individual h4 {
    font-size: 23.6544px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
  .about-us-individual p {
    font-size: 18.0224px;
    line-height: 22px;
    letter-spacing: -0.02em;
  }

  .contact-box-container {
    height: 300px;
  }
  .contact-form p, .contact-form .news-text, .contact-form input {
    font-size: 18.0224px;
    line-height: 22px;
    letter-spacing: -0.02em;
  }
  .contact-form a {
    font-size: 18.0224px;
    line-height: 22px;
    letter-spacing: -0.02em;
  }
  .footer-container .footer-img-desk {
    display: none;
  }
  .footer-container .footer-img-mob {
    display: block;
  }
  .copyright p {
    font-size: 14.6432px;
    line-height: 18px;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }
  .navbar {padding: 0px; padding-top:20px; }
  .navbar-brand {padding-left: 15px;}
  .navbar-toggler {padding-right: 15px;}
  .navbar-dark .navbar-toggler:focus { background: #333; }
  .navbar-expand-md .navbar-nav .nav-link { padding-top: 0.3rem; padding-bottom: 0.3rem; }
  .navbar-nav .nav-item {margin-top: 10px; margin-bottom:10px;}
  .navbar-collapse {background: #e0eef1; }
  .navbar-collapse .nav-logo{margin-top: 100px; margin-bottom: 10px; display:block}

  .top-content { padding: 140px 0; }
  .top-content .top-big-link { margin-top: 25px; }
  .top-content .top-big-link a.btn { margin-top: 10px; }

  .section-description p { padding: 0; }

  .services-container { padding-bottom: 60px; }
  .services-box h3 { margin-top: 20px; padding-top: 10px; }

  .about-us-box { margin-top: 80px; }
  .about-us-box:last-child { margin-top: 50px; }
  .about-us-box-text { padding-right: 0; }

  .more-services-box h3 { margin-top: 20px; padding-top: 10px; }

  .portfolio-box-image { max-width: 540px; margin: 0 auto; }

  .blog-box-image { max-width: 540px; margin: 0 auto; }
  .blog-box h3 { margin-top: 30px; }

  .footer-right { padding-top: 10px;}
  .footer-bottom { padding-top: 20px; }
 
} 
/* Retina-ize images/icons */
 
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {
 
    /* logo */
    .navbar-brand {
       /* background-image: url(../img/logo@2x.png) !important; background-repeat: no-repeat !important; background-size: 136px 39px !important;*/
    }
    .navbar-brand img {
       width: 159px;
    }
 
}
</style>
