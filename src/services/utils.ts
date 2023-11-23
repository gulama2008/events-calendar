export const calculateNumOfDaysForCurrentMonth = (date: Date): number => {
  const currentNumOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  return currentNumOfDays;
};

export const calculateNumOfDaysForPreviousMonth = (date: Date): number => {
  const numOfDaysForPreviousMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  return numOfDaysForPreviousMonth;
};

export const generateDaysArray = (num: number): number[] => {
  if (num === 0) {
    return [];
   }
  const daysArray = [];
  for (let i = 1; i <= num; i++) {
    daysArray.push(i);
  }
  return daysArray;
};

export const generateDaysArrayForPreviousMonth = (
  lastDay: number,
  numOfDays: number
): number[] => {
  const daysArray = [];
  if (numOfDays === 0) {
    return [];
  }
  for (let i = lastDay; i > lastDay - numOfDays; i--) {
    daysArray.unshift(i);
  }
  return daysArray;
};

// export const generateDaysArrayForNextMonth = (
//   numOfDays: number
// ): number[] => {
//   const daysArray = [];
//   if (numOfDays === 0) {
//     return [];
//   }
//   for (let i = 1; i<=numOfDays; i++) {
//     daysArray.push(i);
//   }
//   return daysArray;
// };

export const getFirstDayOfMonth = (date: Date): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return firstDay;
};

export const getLastDayOfMonth = (date: Date): number => {
  const lastDateOfMonth = calculateNumOfDaysForCurrentMonth(date);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    lastDateOfMonth
  ).getDay();
  return lastDay;
};
