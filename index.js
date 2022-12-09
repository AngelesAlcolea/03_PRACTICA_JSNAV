const buttonElement = document.querySelector("#addTransaction");

buttonElement.addEventListener("click", () => {
    const concept = document.querySelector("#concept");
    const quantity = document.querySelector("#quantity");

    let transaction = {
        concept: concept.value,
        quantity: Number(quantity.value)
    };

    localStorage.setItem("transaction", transaction.concept + " " + transaction.quantity);
    localStorage.setItem("quantity", transaction.quantity);

    const textFromLocalStorage = localStorage.getItem("transaction");

    if (textFromLocalStorage !== null && textFromLocalStorage != 0) {
        const newTransaction = document.createElement("p");
        newTransaction.textContent = textFromLocalStorage;
        const transactionListElement = document.querySelector("#transactionList");
        transactionListElement.appendChild(newTransaction);
    }
});

const balanceFromLocalStorage = localStorage.getItem("quantity");

if (localStorage.getItem("quantity") > 0) {
    const incomeFromLocalStorage = localStorage.getItem("quantity");
    const expenseFromLocalStorage = 0;
    const incomeElement = document.querySelector("#incomesIndex");
    const expenseElement = document.querySelector("#expensesIndex");
    expenseElement.textContent = expenseFromLocalStorage + " €";
    incomeElement.textContent = incomeFromLocalStorage + " €";
} else {
    const expenseFromLocalStorage = localStorage.getItem("quantity");
    const incomeFromLocalStorage = 0;
    const incomeElement = document.querySelector("#incomesIndex");
    const expenseElement = document.querySelector("#expensesIndex");
    expenseElement.textContent = expenseFromLocalStorage + " €";
    incomeElement.textContent = incomeFromLocalStorage + " €";
}

const balanceElement = document.querySelector("#balanceIndex");
balanceElement.textContent = balanceFromLocalStorage + " €";