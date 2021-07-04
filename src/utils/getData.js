const API = 'https://randomuser.me/api/';

const getData = async () => {
  const response = await fetch(API);
  return (await response.json()).results[0];
};

export default getData;
