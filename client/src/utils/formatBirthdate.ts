const formatBirthdate = (birthdate: any) => {
  const date = new Date(birthdate);
  const year = date.getFullYear();
  let month: any = date.getMonth() + 1;
  let day: any = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

export { formatBirthdate };
