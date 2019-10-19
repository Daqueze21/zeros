module.exports = function zeros(expression) {
 //1 separate values 
  let arr = expression.split('*');
  let devideOnTwo = 0;
  let devideOnFive = 0;
  
  // 2 counting zeros
  arr.forEach(zeroCount);
  
  function zeroCount (val){
    let step;
    let number;  
    
    if (val.endsWith('!!')){
      step = 2;
      number = val.slice(0, -2);
    }else {
      step = 1;
      number = val.slice(0, -1);
    }
    
    while(number > 0){
      let two = number;
      let five = number;
     
      while(two % 2 == 0){
        devideOnTwo++;
        two /= 2;
      }
      while (five % 5 == 0) {
        devideOnFive++;
        five /= 5;
      }
       number -= step; 
    }    
    
  }

  return Math.min(devideOnTwo, devideOnFive); 
}
