export const generateApiURL = (base: string) => {
  return `${process.env.REACT_APP_API_URL}?access_key=${process.env.REACT_APP_API_ACCESS_KEY}&base=${base}`;
};
