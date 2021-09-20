import React from 'react';
import {useInView} from "react-intersection-observer";

function VirtualScrollChild({height, children}) {
    const [ref, inView] = useInView();
    const style = {
        height: `${height}px`,
        overflow: 'hidden'
    };
    return (
        <div style={style} ref={ref}>
            {inView ? children : null}
        </div>
    );
}

export default VirtualScrollChild;
