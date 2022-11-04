function countTrue(arr) {
	let nbrTrue=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i] ===true){
            nbrTrue ++;
        }
    }
    return nbrTrue;
}