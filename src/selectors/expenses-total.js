export default (expenses) => {
    return expenses.reduce((prevVal, e) => prevVal + e.amount, 0);
}