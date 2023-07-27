import React from "react";
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";

function Home() {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="portfolio-intro">
          <div className="portfolio-intro-image">
            <img src={introdata.your_img_url} />
          </div>
          <div className="portfolio-text">
            <h1>{introdata.title}</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h2>
            <p>{introdata.description}</p>
            <div className="portfolio-btn-container">
              <a href="#portfolio">
                <div id="portfolio-btn" className="animated-portfolio-btn btn ">
                  My Portfolio
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
              <a href="#contact">
                <div id="contact-btn" className="animated-portfolio-btn btn">
                  Contact Me
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}
export default Home;
