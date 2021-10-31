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
        
        //Insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetleft.innerHTML = `${amount}`;
  }
  //Displays a message (correct or invalid)
  printMessage(message, className) {
      const messageWrapper = document.createElement('div');
      messageWrapper.classList.add('text-center', 'alert', className);
      messageWrapper.appendChild(document.createTextNode(message));

      //Insert into HTML
      document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

      //Clear the error
      setTimeout(function() {
            document.querySelector('.primary .alert').remove();
            //addExpenseForm.reset();
     }, 3000);

  }
  //Displays the expenses from the form into the list
  addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        // create a li
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        //Create the template
        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;

     // Insert into the HTML
     expensesList.appendChild(li);
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
        //Read the input values
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === '') {
            html.printMessage('There was error, all the fields are mandatory', 'alert-danger' );
               } else {
                //Add the expenses into the list
                html.addExpenseToList(expenseName, amount);
        }

    });
}