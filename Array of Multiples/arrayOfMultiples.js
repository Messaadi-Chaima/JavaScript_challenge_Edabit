function arrayOfMultiples (num, length) {
    let arr= [];
    let i=1;
    while(i<=length){
        arr[i]= num*i;
        i +=1;
    }
    arr.shift();
    return arr;
}
