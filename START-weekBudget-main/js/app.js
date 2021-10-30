// Classes

class Budget {
    constructor(budget) {
        this.budget =  Number( budget );
        this.budgetleft = this.budget;
    }
}

//Everything related to HTML
class HTML{

    //Insert the budget when them user submits it
    insertBudget(amount) {
        console.log(amount);
        //Insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetleft.innerHTML = `${amount}`;

    }
}
//Variables
const addExpenseForm = document.querySelector('#add-expense'),
    budgetTotal = document.querySelector('span#total'),
    budgetleft = document.querySelector('span#left');

let budget, userBudget;

// Instanciate the HTML CLASS
const html = new HTML();

//Event Listeners
eventListeners();
function eventListeners() {  

    
    //App Init
    document.addEventListener('DOMContentLoaded', function() {
        //Ask the visitkor the weekly budget
        userBudget = prompt(' What\'s your budget for this week? ');
        // validate the userBudget
        if(userBudget === null || userBudget === '' || userBudget === '0' ) {
            window.location.reload();
        } else {
            // Budget is valid then instanciate the budget lass
            budget = new Budget(userBudget);

            // Instanciate HTML Class
            html.insertBudget(budget.budget);
        }
    })
   
     //When a new expense is added
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}