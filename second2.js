function isAdult(obj) {

    
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
            if (obj.age >= 18) {
    
                resolve(obj.name);
    
            } else {
    
    
                reject(new Error("არაა სრულწლოვანი"));
        }
    
    }, 2000);
    });
  }

  

  async function handleObject(obj) {
  
    try {
      const result = await isAdult(obj);
  
      console.log("ობიექტის სახელი:", result);
      
  
    } catch (err) {
      console.log(err);
  
    }
  }
  

  handleObject({ name: "Kevin", age: 20 });
  
  handleObject({ name: "Kevin", age: 17 });
