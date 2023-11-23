export const calculateNumOfDays = (date: Date):number => {
  const currentNumOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  return currentNumOfDays;
};

export const generateDaysArray = (num:number) :number[]=> { 
    const daysArray = [];
    for (let i = 1; i <= num; i++) { 
        daysArray.push(i);
    }
    return daysArray;
}