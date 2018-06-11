import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

const emptyExpenses = [];
const oneExpense = [{ id: '1', description: 'test', amount: 595}]

test('should return 0 for no expenses as 0', () => {
	const total = getExpensesTotal(emptyExpenses);
	expect(total).toBe(0);
});

test('should return total of 595 for the single expense', () => {
	const total = getExpensesTotal(oneExpense);
	expect(total).toBe(595);
});

test('should return total of 114,195 for all 3 test expenses', () => {
	const total = getExpensesTotal(expenses);
	expect(total).toBe(114195);
});