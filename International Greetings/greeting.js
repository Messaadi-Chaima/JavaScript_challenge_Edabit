const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	for(let i in GUEST_LIST){
        if(i == name){
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[i]}.`;
        }
    }
    return "Hi! I'm a guest.";
}