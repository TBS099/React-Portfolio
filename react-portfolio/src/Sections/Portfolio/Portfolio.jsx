import React from "react";
import "./Portfolio.css";
import { dataportfolio } from "../../content_option";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      portfolioSectionIntersect: false,
    };

    this.portfolioSectionRef = React.createRef();

    this.handlePortfolioSectionIntersection =
      this.handlePortfolioSectionIntersection.bind(this);
  }

  componentDidMount() {
    //Intersection Observer for portfolio Section
    const portfolioSectionobserver = new IntersectionObserver(([entry]) => {
      this.setState({ portfolioSectionIntersect: entry.isIntersecting });

      if (entry.isIntersecting) {
        this.portfolioSectionRef.current.classList.add("section-animation");
      } else {
        this.portfolioSectionRef.current.classList.remove("section-animation");
      }
    });
    portfolioSectionobserver.observe(this.portfolioSectionRef.current);
    this.portfolioSection = portfolioSectionobserver;
  }

  componentWillUnmount() {
    if (this.portfolioSection) {
      this.portfolioSection.disconnect();
    }
  }

  handlePortfolioSectionIntersection([entry]) {
    this.setState({ portfolioSectionIntersect: entry.isIntersecting });
  }

  render() {
    return (
      <section
        id="portfolio"
        className="portfolio"
        ref={this.portfolioSectionRef}
      
      >
        <div className="my-portfolio">
          <div className="portfolio-heading">
            <h1>My Projects</h1>
            <hr />
          </div>
          <div className="portfolio-list-container">
            {dataportfolio.map((data, i) => {
              return (
                <div className="portfolio-card" key={i}>
                  <div className="canvas-border">
                    <svg>
                      <defs></defs>
                      <rect
                        id="rect-grad"
                        className="rect-gradient"
                        fill="none"
                        stroke="var(--text-color)"
                        strokeLinecap="square"
                        strokeWidth="4"
                        strokeMiterlimit="30"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                  </div>
                  <div className="canvas-img-wrapper">
                    <a
                      className="portfolio-link"
                      href={data.link}
                      target="_blank"
                    >
                      <img className="canvas-img" src={data.img} alt="" />
                    </a>
                  </div>
                  <div className="canvas-copy">
                    <span className="canvas-copy-subtitle">
                      {data.linkName}
                    </span>
                    <strong className="canvas-copy-title">
                      {data.projectName}
                    </strong>
                    <span className="canvas-copy-details">{data.tags}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
