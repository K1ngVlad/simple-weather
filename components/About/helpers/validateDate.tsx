const validateDate = (date: string) => {
  const length = date.length;
  const format = date.slice(length - 2, length);
  if (format === 'AM') {
    const newDate = date.slice(0, 5);
    return newDate;
  }
  if (format === 'PM') {
    const hours = Number(date.slice(0, 2)) + 12;
    const newDate = `${hours}${date.slice(2, 5)}`;
    return newDate;
  }
  return date;
};

export { validateDate };
