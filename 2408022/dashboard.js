  console.log("dashboard.js is loaded!");
let income = 0;
let expense = 0;   
let balance = 0;

function addTransaction() {
    let type = document.getElementById("type").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let description = document.getElementById("desc").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a positive number !");
        return;
    }
    if (type === "income") {
        income += amount;
    } else {
        expense += amount;
    }
    balance = income - expense;
    updateSummary();
    displayTransaction(description, amount, type);
}

function updateSummary() {
    document.querySelector(".card:nth-child(1) h4").textContent = `Balance: $${(income-expense).toFixed(2)}`;
    document.querySelector(".card:nth-child(2) h4").textContent = `Income: $${income.toFixed(2)}`;
    document.querySelector(".card:nth-child(3) h4").textContent = `Expense: $${expense.toFixed(2)}`;
}

function displayTransaction(description, amount, type) {
    let transactionList = document.getElementById("transactionlist");
    let li = document.createElement("li");
    li.textContent = `${description}: ${type === "income" ? "+" : "-"}$${amount.toFixed(2)}`;
    transactionList.appendChild(li);
}  
function logout() {
    window.location.href = "main.html";
}          
               






