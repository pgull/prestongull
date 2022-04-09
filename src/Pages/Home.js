import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { portfolioEntries } from "../PortfolioEntries";
import locomotiveScroll from "locomotive-scroll";
import Cursor from "../Components/Cursor";
import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const scrollRef = useRef(null); 

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  }, []);

  return (
    <>
      <Cursor />
      {Object.keys(portfolioEntries).map((key) => {
        return (
          <div
            className="home-backdrop"
            data-scroll
            data-scroll-sticky
            style={{
              backgroundImage: `url(${portfolioEntries[key].backdropImage})`,
              opacity: hoveredProject === portfolioEntries[key].route ? 0.5 : 0,
            }}
          />
        );
      })}
      <div className="scroll-wrap" ref={scrollRef}>
        <div className="page-wrap light">
          {/* <div
          className="hero-plate-container"
          data-scroll
          data-scroll-speed="10"
          data-scroll-position="top"
        >
          <div className="hero-plate-right" />
        </div>
        <div className="hero-plate-left" data-scroll
          data-scroll-speed="15"
          data-scroll-position="top"/> */}
          <div
            className={`c-grid d-col-6 top-hero ${hoveredProject && 'unfocused'}`}
            data-scroll
            data-scroll-speed="-5"
            data-scroll-position="top"
            style={{ marginTop: "15vh", marginBottom: "25vh" }}
          >
            <br className="d-span-1" />
            <div className="display d-span-5">
              <h1 className="display">
                <Slide bottom cascade delay={300}>
                  Pres&shy;ton
                </Slide>
              </h1>
              <h1 className="display" style={{ textAlign: "right" }}>
                <Slide bottom cascade delay={400}>
                  — Gull
                </Slide>
              </h1>
            </div>
            <div className="pg-logo-container">
              <Slide bottom>
                <img
                  src="https://res.cloudinary.com/preston-gull/image/upload/v1649438065/pg-logo_vxd4om.svg"
                  alt=""
                  className="pg-logo"
                />
              </Slide>
            </div>

            <div className="d-span-2" style={{ overflow: "hidden" }}>
              <Fade bottom delay={300}>
                <p className="sans">
                  I'm a designer in many media. I am currently doing digital
                  product design for Latitude while living in beautiful Asheville, NC, USA.
                </p>
              </Fade>
            </div>
          </div>
          <div className="layout v g-2">
            <div className={`c-grid d-col-6 work-row-header ${hoveredProject && 'unfocused'}`}>
              <p className="d-span-1 sans">—</p>
              <p className="d-span-5 sans">Selected Work</p>
            </div>
            {Object.keys(portfolioEntries).map((key, index) => {
              return (
                <div className={`c-grid d-col-6 work-row ${hoveredProject && 'unfocused'} ${hoveredProject && hoveredProject === portfolioEntries[key].route && 'focused'}`}>
                  <p className="d-span-1 sans">0{index + 1}</p>
                  <h1
                    className="d-span-4"
                    onMouseEnter={() =>
                      setHoveredProject(portfolioEntries[key].route)
                    }
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Slide ratio={2} bottom cascade delay={100}>
                      {key}
                    </Slide>
                  </h1>
                  <div className={`arrow-right ${hoveredProject === portfolioEntries[key].route && 'hovered'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
