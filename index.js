//Create a function named combineUsers and assign the following arguments:
  //...args (a rest argument) Containing an indeterminite amount of arrays
  //args will take the form of an array of array
  //Each internal array are arrays of usernames (strings)

  require('datejs');

function comebineUsers(...args) {
   const combinedObject = { 
  users: [] 
   }; 

  for (let arr of args) {
    combinedObject.users.push(...arr); 
    
  }

  const today = new Date(); 
  const month = today.getMonth() +1;
  const day = today.getDate(); 
  const year = today.getFullYear();
  const formattedDate = `${month}/${day}/${year}`; 
  
  combinedObject.merge_date = formattedDate;

  console.log(combinedObject); 
}

module.exports = { comebineUsers };