import styles from "./Filter.module.scss";

export interface FilterProps {
  options: string[];
  register: any;
  name: string;
  errors:any
}

const Filter = ({ options, register, name,errors }: FilterProps) => {
  return (
    <div>
      <select {...register( name )}>
        <option value="all">All</option>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
      {errors.eventName && <span>This field is required</span>}
    </div>
  );
};

export default Filter;
