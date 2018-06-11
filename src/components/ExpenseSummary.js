import React from 'react';
import numeral from 'numeral';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

export class ExpenseSummary extends React.Component {
	render() {
		return (
			<div>
				<h1>Viewing {this.props.expenses.length} {this.props.expenses.length === 1 ? 'expense' : 'expenses'} totalling {numeral(getTotalExpenses(this.props.expenses) / 100).format('$0,0.00')}</h1>
			</div>
		)	
	}
}

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);