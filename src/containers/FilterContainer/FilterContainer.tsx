import React, { useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { getLabelArray, getLocationArray } from "../../services/utils";

const FilterContainer = () => {
    const { events } = useContext(CalendarContext);
    const [locations, setLocations] = useState<string[]>([]);
    const [labels, setLabels] = useState<string[]>([]);
    useEffect(() => {
        const locationArr = getLocationArray(events);
        const labelArr = getLabelArray(events);
        setLocations(locationArr);
        setLabels(labelArr);
     }, [events]);

  return (
    <div>
      <div>
        <div>By Location:</div>
        <Filter options={locations} />
      </div>
      <div>
        <div>By Label:</div>
        <Filter options={labels}/>
      </div>
    </div>
  );
};

export default FilterContainer;
