export default (expenses) => {
	let total = 0;
	if(expenses.length === 0) {
		total = 0;
	} else {	
		expenses.map((expense) => {
			total += expense.amount;
		});
	}
	return total;
};