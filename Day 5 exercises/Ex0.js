// 0. Choose a public api, make a call and get the result by using both then method and async/await as well.

const getResult = async () => {
    fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  };
  
  getResult();
  
  ////
  
  const getApi = async () => {
    try {
    const res = await fetch('https://catfact.ninja/fact');
    console.log(res);
    } catch(err) {
      console.log(err);
    }
  };
  
  getApi();
  
  
  