import {  useEffect } from "react";
import Ticket from "./Ticket";
import VirtualScrollChild from "./VirtualScroller/VirtualScrollChild";
import './VirtualScroller/VirtualScroll.css';
import {useInView} from "react-intersection-observer";


function Tickets({ tickets, onTglStatus }) {
  const [lastRowRef, lastRowInView] = useInView();
  let ticketsArray = []
  tickets.map(ticket => ticketsArray.push(<Ticket ticket={ticket} onTglStatus={onTglStatus} />))
  const renderRows = () => {
    return ticketsArray.map((child,i) => {
        if (i === tickets.length - 1) {
            return (
              <div ref={lastRowRef} key={i}>
                <VirtualScrollChild height={150}>
                        {child}
                    </VirtualScrollChild>
                </div>
            );
        }
        return (
          <VirtualScrollChild key={i} height={150}>
              {child}
          </VirtualScrollChild>
        );
    });
};

    // if last row is in view, call the last row handler
    useEffect(() => {
      if (lastRowInView) { console.log("last row in view")};
  }, [lastRowInView]);


  return (
    <div className="card">
      <div className="row">
          <div className={"virtual-scroll-container"}>
            {renderRows()}
            </div>
        </div>
    </div>
  );
}

export default Tickets;
