const URL = '../../api/users1.json';


const getData = async (url: string) => {
  const response = await fetch(url);

  return response.json();
};

export const getUsers = () => {
  return getData(URL);
};
