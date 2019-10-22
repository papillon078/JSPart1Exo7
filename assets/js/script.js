function calc(){
  let shoeSize = document.getElementById('shoeSize').value;
  let birthYear = document.getElementById('yearOfBirth').value;
  let regexSize = /^[0-9]{2}$/;
  let regexYear = /^[0-9]{4}$/;
  // debut de la condition
  if (regexSize.test(shoeSize) && regexYear.test(birthYear)){
    let result = (shoeSize*2+5)*50-birthYear+1766;
    alert (result);
  }
  else{alert ('Un ou plusieurs de vos nombres ne suivent pas la demande');}
}
