import React, { useEffect, useState, useRef } from "react";
import "./WorkTimeline.css";
import { worktimeline } from "../../content_option";

function WorkTimeline() {
  const [experienceTitleIntersecting, setExperienceTitleIntersecting] =
    useState(false);
  const [timelineIntersecting, setTimelineIntersecting] = useState(false);

  const experienceTitleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const experienceTitleObserver = new IntersectionObserver(([entry]) => {
      setExperienceTitleIntersecting(entry.isIntersecting);
    });
    experienceTitleObserver.observe(experienceTitleRef.current);
    return () => experienceTitleObserver.disconnect();
  }, []);

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(([entry]) => {
      setTimelineIntersecting(entry.isIntersecting);
    });
    timelineObserver.observe(timelineRef.current);
    return () => timelineObserver.disconnect();
  }, []);
  return (
    <div className="work-timeline-container">
      <div
        className={`work-timeline-header ${
          experienceTitleIntersecting ? "show" : ""
        }`}
        ref={experienceTitleRef}
      >
        <h1>Experience</h1>
        <hr />
      </div>
      <div
        className={`work-timeline ${
          timelineIntersecting ? "fade-in-top" : ""
        }`}
        ref={timelineRef}
      >
        <div className="entries">
          {worktimeline.map((data, i) => {
            return (
              <div
                className={`entry ${i % 2 === 0 ? "body-left" : ""}`}
                key={i}
              >
                <h2 className={`experience-title ${i % 2 === 0 ? "left" : ""}`}>
                  {data.date}
                </h2>
                <div className="body">
                  <h3>{data.jobtitle}</h3>
                  <h4>{data.where}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default WorkTimeline;
