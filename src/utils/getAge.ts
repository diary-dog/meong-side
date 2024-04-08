const getAge = (bonsOfYear: number) =>
  new Date().getFullYear() - bonsOfYear + 1;

export default getAge;
