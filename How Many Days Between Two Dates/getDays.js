function getDays(date1, date2) {
	let date_1 = new Date(date1);
    let date_2 = new Date(date2);
    let Diff = date_2.getTime() - date_1.getTime();
    let Total = Diff / (1000 * 3600 * 24);
    return Total;
}



