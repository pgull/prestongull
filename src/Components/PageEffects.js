import { useRef, useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import Cursor from "./Cursor";

const Page = ({ element }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });

  return (
    <>
      <Cursor />
      <div className="scroll" ref={scrollRef}>
        {element}
      </div>
    </>
  );
};

export default Page;
