import styles from "./Filter.module.scss"
import { useEffect, useState } from "react";

export interface FilterProps {
  options: string[];
}



const Filter = ({ options }: FilterProps) => {
//   const [currentOptions, setCurrentOptions] = useState<string[]>([]);
//   useEffect(() => {
//     setCurrentOptions(options);
//   }, []);
  return (
    <div>
          <select name="" id="">
              <option value="" className={styles.empty_option}></option>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
