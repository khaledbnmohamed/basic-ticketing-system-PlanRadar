import React, { useRef, useState, useEffect } from "react";

const VirtualScroll = ({
  rowHeight,
  height,
  totalElements,
  items,
  visibleItemsLength,
}) => {
  const totalHeight = +rowHeight * +totalElements + "px";
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", scroll);

    return () => {};
  });
  let startNodeele = Math.max(0, Math.floor(scrollTop / +rowHeight));

  let visibleItems = items.slice(
    startNodeele,
    startNodeele + visibleItemsLength
  );
  let transformValue = `translateY(${startNodeele * +rowHeight}px)`;

  const scroll = () => {
    setScrollTop(scrollRef.current.scrollTop);
  };
  const scrollContainerStyle = {
    height: height,
    overflowY: "scroll",
  };

  return (
    <div
      className="scrollContainer"
      ref={scrollRef}
      style={scrollContainerStyle}
    >
      <div style={{ height: totalHeight }}>
        <div className="main-container" style={{ transform: transformValue }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default React.memo(VirtualScroll);
