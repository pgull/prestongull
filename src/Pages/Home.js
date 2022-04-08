import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="page-wrap light">
      <div className="c-grid d-col-6">
        <br className="d-span-2" />
        <div className="display d-span-6" style={{ textAlign: "right" }}>
          <h1 className="display">
          <Slide bottom cascade>
            Pres&shy;ton
          </Slide>
          </h1>
          <h1 className="display">
          <Slide bottom cascade delay={300}>
            —Gull
          </Slide>
          </h1>
        </div>
        <div className="pg-logo-container">
        <Slide bottom delay={150}>
          <img src="https://res.cloudinary.com/preston-gull/image/upload/v1649438065/pg-logo_vxd4om.svg" alt="" className="pg-logo"/>
        </Slide>
        </div>
        <Fade bottom delay={300}>
        <p
          className="d-span-2"
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
        >
          I'm a designer in many media. Currently, I'm doing digital product
          design for Latitude while in Asheville, USA.
        </p>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
