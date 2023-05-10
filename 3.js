function simulateData1(str) {

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(str);

      }, 2000);
    });
  }
  
  function simulateData2(str) {


    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(str);

      }, 3000);
    });
  }
  
  Promise.all([simulateData1("messi"), simulateData2("ronaldo")])

    .then(([result1, result2]) => {

      if (result1.length > result2.length) {

        console.log(result1);
      } else {



        console.log(result2);

      }
    })
    .catch((error) => {
        
      console.log(error);

    });