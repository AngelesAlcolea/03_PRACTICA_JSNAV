const buttonElement = document.querySelector("#addTransaction");

buttonElement.addEventListener("click", () => {
    const concept = document.querySelector("#concept");
    const quantity = document.querySelector("#quantity");

    let transaction = {
        concept: concept.value,
        quantity: quantity.value
    };

    localStorage.setItem("transaction", transaction.concept + " " + transaction.quantity);

    const transactionListElement = document.querySelector("#transactionList");

    transactionListElement.textContent = transaction.concept + " " + transaction.quantity;

    concept.value = "";
    quantity.value = "";
});

const textFromLocalStorage = localStorage.getItem("transaction");

if (textFromLocalStorage !== null) {
    const transactionListElement = document.querySelector("#transactionList");

    transactionListElement.textContent = textFromLocalStorage;
}