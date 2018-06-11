import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses, { noExpenses, oneExpense } from '../fixtures/expenses';

test('should render ExpenseSummary correctly with 0 expenses', () => {
	const wrapper = shallow(<ExpenseSummary expenses={noExpenses} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with 1 expense', () => {
	const wrapper = shallow(<ExpenseSummary expenses={oneExpense} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with 3 expenses', () => {
	const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
})