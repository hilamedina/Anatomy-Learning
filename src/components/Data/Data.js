import axios from 'axios';

let organs = [];
const getData = async () => {
  console.log('organsData.data');
  axios
    //axios.get ==> put the url of my mocked api
    .get('https://61c7b1a2903185001754749c.mockapi.io/products')
    .then((organsData) => {
      console.log('got response');
      //use what we get in axios.get
      organs = organsData.data;
    })
    .catch((error) => {
      console.log('error');
    });
};
export const getOrganInfo = (organ) => {
  const nameFind = organs.find((organName) => {
    return organName.name === organ;
  });
  console.log(nameFind);
  return nameFind;
};

getData();
