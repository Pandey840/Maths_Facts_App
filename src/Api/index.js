export const fetchMathApi = () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('http://numbersapi.com/random/math', config).then((res) =>
    res.text()
  );
};
