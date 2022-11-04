function makePlusFunction(baseNum) {
    return(
  function Plus(x){
      return Number(baseNum + x);
  });
}