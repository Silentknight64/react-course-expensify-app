import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

class ExpenseDashboardPage extends React.Component {
	render() {
		return (
			<div>
				<ExpenseSummary />
				<ExpenseListFilters />
				<ExpenseList />
			</div>		
		)	
	}
}

export default ExpenseDashboardPage;
