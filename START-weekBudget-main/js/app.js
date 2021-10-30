// Classes





//Variables
const addExpenseForm = document.querySelector('#add-expense');

let budget, userBudget;



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
        }
    })
   
     //When a new expense is added
    addExpenseForm.eventListener('submit', function(e) {
        e.preventDefault();
    });
}