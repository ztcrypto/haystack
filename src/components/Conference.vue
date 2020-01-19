<template>
  <div class="conference">
    <div class="top-content" id="top-content">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text">
            <h1 class="wow fadeInLeftBig intro-text">{{ page.fields["intro-text"] }}</h1>
            <!--
            <div class="description wow fadeInLeftBig">
              <p>{{page.fields['description']}}</p>
            </div>
            -->
          </div>
          <div class="col-md-8 image-tbd">
            <img :src="page.fields['hero-image']" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <nav :class="'navbar navbar-dark navbar-expand-md navbar-no-bg ' + navbarClass">
      <div class="container">
        <a class="navbar-brand" href="/conference">
          <img :src="page.fields.logo" />
        </a>
        <div
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link scroll-link"
                href="#about"
                v-scroll-to="'#about'"
                @click="removeMobileMenu()"
              >About</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link scroll-link"
                href="#registration"
                v-scroll-to="'#registration'"
                @click="removeMobileMenu()"
              >Registration & Schedule</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link scroll-link"
                href="#speakers"
                v-scroll-to="'#speakers'"
                @click="removeMobileMenu()"
              >Past Speakers</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link scroll-link"
                href="#contact"
                v-scroll-to="'#contact'"
                @click="removeMobileMenu()"
              >Contact</a>
            </li>
          </ul>
          <div class="nav-logo container">
            <img width="90px" :src="page.fields.footerlogo" />
          </div>
        </div>
      </div>
    </nav>
    <div class="about-container section-container" id="about">
      <div class="container">
        <div class="row">
          <div class="col speakers section-description wow fadeIn">
            <h2>About</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p class="about-text" v-html="page.fields['about-text']"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="reg-container section-container" id="registration">
      <div class="container">
        <div class="row">
          <div class="col speakers section-description wow fadeIn">
            <h2>Registration & Schedule</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="reg-text">{{ page.fields["registration-intro"] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="speakers-container section-container" id="speakers">
      <div class="container">
        <div class="row">
          <div class="col speakers section-description wow fadeIn">
            <h2>Past Speakers</h2>
            <div class="divider-1 wow fadeInUp">
              <span></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-6 speakers-box wow fadeInUp"
            v-for="item in page.fields['past-speakers']"
            v-bind:key="item.key"
          >
            <div class="row speaker-text">
              <div class="col-md-12">
                <p class="speaker-name">
                  <span>{{ item.name }}</span>
                </p>
              </div>
              <div class="col-md-12">
                <p class="speaker-role">
                  <span>{{ item.role }}</span>
                </p>
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
            <p>
              <a :href="maillink" class="maillink">
                {{
                page.fields["contact-email"]
                }}
              </a>
            </p>
          </div>
          <div class="col-md-6 contact-form wow fadeInDown">
            <p>Newsletter</p>
            <p class="news-text">{{ page.fields["contact-description"] }}</p>
            <form
              action="https://haystack.us8.list-manage.com/subscribe/post?u=8015c7f0d2e7c73040a28ac30&amp;id=9305192d3c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate row"
              target="_blank"
              novalidate
            >
              <div class="col-md-6 px-3">
                <div class="mc-field-group">
                  <input
                    type="email"
                    value
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    placeholder="Your E-mail"
                  />
                </div>
              </div>
              <div class="col-md-6 px-3">
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_8015c7f0d2e7c73040a28ac30_9305192d3c"
                    tabindex="-1"
                    value
                  />
                </div>
                <div class="clear subscribe-div">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Begin Mailchimp Signup Form -->

    <!--End mc_embed_signup-->
    <div class="footer-container">
      <div class="container">
        <div class="row">
          <div class="col-md-6 footer-img-desk wow fadeInUp">
            <a href="http://haystack.vc">
              <img :src="page.fields.footerlogo" />
            </a>
          </div>
          <div class="col-md-6 copyright wow fadeInDown">
            <p>@2019 Haystack Management Company LLC All rights reserved.</p>
          </div>
          <div class="col-md-6 footer-img-mob wow fadeInUp">
            <a href="http://haystack.vc">
              <img width="43px" :src="page.fields.footerlogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "Conference",
  data() {
    return {
      page: {
        fields: {}
      },
      windowWidth: 0
    };
  },
  methods: {
    getPage() {
      butter.page
        .retrieve("*", "alignment-summit")
        .then(res => {
          this.page = res.data.data;
        })
        .catch(() => {});
    },
    removeMobileMenu() {
      if (screen.width < 720)
        document.getElementsByClassName("navbar-toggler")[0].click();
    }
  },
  computed: {
    maillink: function() {
      return "mailto:" + this.page.fields["contact-email"];
    },
    navbarClass() {
      if (this.windowWidth > 480) return "sticky-top";
      return "fixed-top";
    }
  },
  created() {
    this.getPage();
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mc_embed_signup {
  width: 100%;
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
.navbar {
  height: 20vh;
  background: white;
  -o-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -ms-transition: all 0.6s;
  transition: all 0.6;
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
  color: rgba(0, 0, 0, 0.49);
  border: 0;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(0, 0, 10, 0.99);
}

.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 10, 0.99);
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
.navbar-brand img {
  width: 200px;
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
  transition: all 0.4s;
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
.navbar-collapse .nav-logo {
  display: none;
}

.top-content {
  padding: 200px 0 0px 0;
  height: 80vh;
}

.top-content .text {
  color: #2f2f2f;
  text-align: left;
  margin-top: 50px;
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
  z-index: 9999;
}
.section-container .container {
  border-bottom: 1px solid #c4c4c4;
}

.about-container {
  background: linear-gradient(0.97deg, #fff 20.38%, #eee 191.38%);
  margin-bottom: 40px;
  padding-top: 100px;
}
.about-container .container {
  padding-bottom: 100px;
}
.about-container .container:before {
  content: "";
  display: block;
  margin-bottom: 40px;
  height: 40px;
  border-bottom: 1px solid #c4c4c4;
}
.about-container .about-text {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.49);
}
.reg-container {
  margin-bottom: 40px;
}
.reg-container .container {
  padding-bottom: 100px;
}
.reg-container .container .section-description {
  margin-bottom: 20px;
}
.reg-container .reg-text {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.49);
}
.section-description {
  margin-bottom: 100px;
}
.speakers-container .container {
  padding-bottom: 150px;
}
.speakers-box {
  padding-top: 30px;
  padding-right: 100px;
  font-family: Founders Grotesk;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 50px;
  letter-spacing: -0.02em;
}
.speakers-box .speaker-name {
  font-size: 32px;
  padding: 0 0 10px 0;
  color: #000;
  margin: 0;
}
.speakers-box .speaker-role {
  font-size: 32px;
  padding: 0 0 10px 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
}
.contact-box-container {
  margin-top: 100px;
  height: 400px;
  margin-bottom: 50px;
  border-bottom: none !important;
}
.contact-box .maillink {
  color: black;
}
.contact-box .maillink:hover,
.contact-form .maillink:focus {
  text-decoration: none !important;
  color: #777;
}
.contact-form .news-text {
  color: rgba(0, 0, 0, 0.5);
}

.contact-form p {
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
}
.contact-form #mce-EMAIL {
  width: 100%;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 0px;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  outline: none;
  color: black;
}
.contact-form #mce-responses {
  color: rgb(59, 97, 61);
  font-size: 20px;
}
.contact-form #mc-embedded-subscribe {
  border: none;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #607aba;
  outline: none;
  background: none;
  margin: 0px;
}
.contact-form .subscribe-div {
  margin-top: 15px !important;
}
.contact-form #mc-embedded-subscribe:hover,
.contact-form #mc-embedded-subscribe:focus {
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
  color: #c4c4c4;
  margin-bottom: 50px;
}
@media (min-width: 1400px) {
  .container {
    width: 1700px;
    max-width: calc(100vw - 380px);
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .about-us-box-text {
    padding-right: 0;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .navbar-expand-md .navbar-nav .nav-link {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
  .top-content {
    padding: 180px 0;
  }
  .section-description p {
    padding: 0;
  }

  .speakers-box .speakers-box-icon {
    width: 50px;
    height: 50px;
    font-size: 26px;
    line-height: 50px;
    border-radius: 18px;
  }
}

@media (max-width: 767px) {
  body,
  h1,
  h2,
  h3,
  h4,
  p {
    font-size: 23.6544px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
  .navbar {
    padding: 0px;
    padding-top: 20px;
    height: auto;
    z-index: 9999;
  }
  .navbar-brand {
    padding-left: 15px;
  }
  .navbar-toggler {
    padding-right: 15px;
  }
  .navbar-dark .navbar-toggler:focus {
    background: #333;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .navbar-nav .nav-item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .navbar-collapse {
    background: #e0eef1;
  }
  .navbar-collapse .nav-logo {
    margin-top: 100px;
    margin-bottom: 10px;
    display: block;
  }

  .top-content {
    height: auto;
    padding: 40px 0;
  }
  .top-content .text .intro-text {
    font-size: 40px;
    width: 330px;
    line-height: 40px;
    margin-left: auto;
    margin-right: auto;
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
    margin-top: 100px;
    height: auto;
    position: relative;
    left: auto;
    top: auto;
  }
  .top-content .image-tbd img {
    width: 90%;
    margin-left: 5%;
    height: auto;
  }
  .about-container .about-text {
    font-size: 24px;
  }
  .speakers-box .speaker-text {
    margin-bottom: 20px;
  }
  .speakers-box:nth-child(2n) .row::before {
    content: none;
  }
  .contact-box-container {
    margin-top: 50px;
    height: 300px;
  }
  .contact-form p,
  .contact-form .news-text,
  .contact-form input {
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
  .top-content {
  }
  .top-content .top-big-link {
    margin-top: 25px;
  }
  .top-content .top-big-link a.btn {
    margin-top: 10px;
  }

  .section-description {
    margin-bottom: 60px;
  }

  .speakers-container {
    padding-bottom: 60px;
  }
  .speakers-box h3 {
    margin-top: 20px;
    padding-top: 10px;
  }

  .about-us-box {
    margin-top: 80px;
  }
  .about-us-box:last-child {
    margin-top: 50px;
  }
  .about-us-box-text {
    padding-right: 0;
  }

  .more-speakers-box h3 {
    margin-top: 20px;
    padding-top: 10px;
  }

  .portfolio-box-image {
    max-width: 540px;
    margin: 0 auto;
  }

  .blog-box-image {
    max-width: 540px;
    margin: 0 auto;
  }
  .blog-box h3 {
    margin-top: 30px;
  }

  .footer-right {
    padding-top: 10px;
  }
  .footer-bottom {
    padding-top: 20px;
  }
}
/* Retina-ize images/icons */

@media only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2/1),
  only screen and (min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
  /* logo */
  .navbar-brand {
    /* background-image: url(../img/logo@2x.png) !important; background-repeat: no-repeat !important; background-size: 136px 39px !important;*/
  }
  .navbar-brand img {
    width: 159px;
  }
}
</style>
