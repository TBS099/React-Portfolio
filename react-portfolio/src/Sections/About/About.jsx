import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import WorkTimeline from "../../Components/WorkTimeline/WorkTimeline";
import { dataabout, aboutMe } from "../../content_option";

function About() {
  const [titleIntersecting, setTitleIntersecting] = useState(false);
  const [aboutMeIntersecting, setAboutMeIntersecting] = useState(false);

  const titleRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(([entry]) => {
      setTitleIntersecting(entry.isIntersecting);
    });
    titleObserver.observe(titleRef.current);
    return () => titleObserver.disconnect();
  }, []);

  useEffect(() => {
    const aboutMeObserver = new IntersectionObserver(([entry]) => {
      setAboutMeIntersecting(entry.isIntersecting);
    });
    aboutMeObserver.observe(aboutMeRef.current);
    return () => aboutMeObserver.disconnect();
  }, []);


  return (
    <section id="about" className="about">
      <div className="about-me">
        <div
          className={`title ${titleIntersecting ? "fade-in" : ""}`}
          ref={titleRef}
        >
          <h1>{dataabout.title}</h1>
          <hr />
        </div>
        <div
          className={`about-description-section ${
            aboutMeIntersecting ? "fade-in" : ""
          }`}
          ref={aboutMeRef}
        >
          {aboutMe.map((data, i) => {
            return (
              <p className="about-description" key={i}>
                {data}
              </p>
            );
          })}
        </div>
        <div className="timeline-container">
          <WorkTimeline />
        </div>
      </div>
    </section>
  );
}
export default About;
