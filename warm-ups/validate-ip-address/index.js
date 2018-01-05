function validate(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    return (false)  
  }  



  //or

const validate = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
    return arr.every((num) => {
        if(num.length > 3)
            return false;
        num = Number(num);
        if(!(num < 256 && num >= 0)) 
            return false;
        return true;
        
    })
}

console.log(validate('255.16.254.1'));