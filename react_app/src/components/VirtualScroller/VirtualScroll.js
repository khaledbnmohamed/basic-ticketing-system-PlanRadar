import React, { useRef, useState, useEffect } from "react";

const VirtualScroll = (props) => {
  const totalHeight = +props.rowHeight * +props.totalElements + "px";
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", scroll);

    return () => {};
  });
  let startNodeele = Math.max(0, Math.floor(scrollTop / +props.rowHeight));

  let visibleItems = props.items.slice(
    startNodeele,
    startNodeele + props.visibleItemsLength
  );
  let transformValue = `translateY(${startNodeele * +props.rowHeight}px)`;

  const scroll = () => {
    setScrollTop(scrollRef.current.scrollTop);
  };
  const scrollContainerStyle = {
    height: props.height,
    overflowY: "scroll",
  };
  const totalHeightStyle = { height: totalHeight };
  const mainContainerStyle = { transform: transformValue };
  return (
    <div
      className="scrollContainer"
      ref={scrollRef}
      style={scrollContainerStyle}
    >
      <div style={totalHeightStyle}>
        <div className="main-container" style={mainContainerStyle}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default React.memo(VirtualScroll);
