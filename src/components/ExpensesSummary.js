import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        <h1>Viewing {props.expensesCount} {
            props.expensesCount === 1 ? 'expense' : 'expenses'
        } totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);