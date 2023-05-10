function isAdult(person) {

    
    return new Promise((resolve, reject) => {
    
    
        if (person && person.age >= 18) {
        
            setTimeout(() => {
    


        
                resolve(person.name);
        
            }, 2000);
      } 
      else {
        reject("არ არის სრულწლოვანი");
      
    }
    
});

}
  
  isAdult({ name: "Kevin", age: 20 })

  .then((result) => {

    console.log(result); 

})
    .catch((err) => {
      console.log(err);
    });
  
  isAdult({ name: "Kevin", age: 17 })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err); 
    });