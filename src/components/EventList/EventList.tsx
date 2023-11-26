import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";

const EventList = () => {
  const { currentEventList } = useContext(CalendarContext);
  return (
    <div>
      {currentEventList &&
        currentEventList.event.map((e: string) => {
          return <div >{e}</div>;
        })}
    </div>
  );
};

export default EventList;
