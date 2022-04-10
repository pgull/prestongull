import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Cursor from "react-animated-cursor";
import { portfolioEntries } from "../PortfolioEntries";
import locomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Frame from "../Components/Frame";

const Box = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.0009;
    ref.current.rotation.y += 0.0009;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <icosahedronBufferGeometry args={props.geometry} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={props.color}
        wireframeLinewidth={10}
        flatShading={!props.wireframe}
      />
    </mesh>
  );
};

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
      <Frame />
      <Cursor color='255,255,255' clickables={['.clk']}/>
      {Object.keys(portfolioEntries).map((key) => {
        return (
          <div
            className="home-backdrop"
            style={{
              backgroundImage: `url(${portfolioEntries[key].backdropImage})`,
              opacity: hoveredProject === portfolioEntries[key].route ? 1 : 0,
            }}
          >
            <div className="home-backdrop" />
          </div>
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
            className={`three-canvas-container ${
              hoveredProject && "unfocused"
            }`}
            data-scroll
            data-scroll-speed="-5"
            data-scroll-position="top"
          >
            <div className="three-canvas-animator">
              <Canvas className="three-canvas">
                <ambientLight color={"red"} intensity={0.5}/>
                <perspectiveCamera position={[-10, 0, 0]}/>
                <pointLight position={[1, 1, 1]} intensity={2} castShadow />
                <Box
                  position={[-3, -0.501, 0]}
                  wireframe
                  geometry={[2, 0, 0]}
                  color={"orange"}
                />
                <Box
                  position={[-3, -0.501, 0]}
                  wireframe
                  geometry={[1.999, 0, 0]}
                  color={"orange"}
                />
                <Box
                  position={[-3, -0.501, 0]}
                  wireframe
                  geometry={[1.99, 0, 0]}
                  color={"orange"}
                />
              </Canvas>
            </div>
          </div>
          <div
            className={`c-grid d-col-6 top-hero ${
              hoveredProject && "unfocused"
            }`}
            data-scroll
            data-scroll-speed="-3"
            data-scroll-position="top"
            style={{ marginTop: "15vh", marginBottom: "25vh" }}
          >
            <br className="d-span-1" />
            <div className="display d-span-5">
              <h1 className="display" style={{letterSpacing: '-0.06em'}}>
                <Slide bottom cascade delay={300}>
                  Pres&shy;ton
                </Slide>
              </h1>
              <h1 className="display" style={{ textAlign: "right", letterSpacing: '-0.1em', marginRight: '-0.045em', paddingRight: '8px' }}>
                <Slide bottom cascade delay={400}>
                  —Gull
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
                  product design for Latitude while living in beautiful
                  Asheville, NC, USA.
                </p>
              </Fade>
            </div>
          </div>
          <div className="layout v g-2 work-table">
            <div
              className={`c-grid d-col-6 work-row-header ${
                hoveredProject && "unfocused"
              }`}
            >
              <p className="d-span-1 sans">↓</p>
              <p className="d-span-5 sans">Selected Work</p>
            </div>
            {Object.keys(portfolioEntries).map((key, index) => {
              return (
                <div
                  className={`c-grid d-col-6 work-row ${
                    hoveredProject && "unfocused"
                  } ${
                    hoveredProject &&
                    hoveredProject === portfolioEntries[key].route &&
                    "focused"
                  }`}
                >
                  <p className="d-span-1 sans">0{index + 1}</p>
                  <h1
                    className="d-span-4 clk"
                    onMouseEnter={() =>
                      setHoveredProject(portfolioEntries[key].route)
                    }
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Slide ratio={2} bottom cascade delay={100}>
                      {key}
                    </Slide>
                  </h1>
                  <div
                    className={`arrow-right ${
                      hoveredProject === portfolioEntries[key].route &&
                      "hovered"
                    }`}
                  />
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
