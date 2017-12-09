var doStuff = function() {
    var firstName = document.getElementsByName('firstName')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;
    var age = document.getElementsByName('age')[0].value;
    var gender = document.querySelector('input[name=gender]:checked').value;
    console.log(gender);
    var destination = document.getElementsByName('destination')[0].value;
    var dietary;
    var vege = document.getElementsByName('dietary')[0].checked;
    var lact = document.getElementsByName('dietary')[1].checked;
    var kosher = document.getElementsByName('dietary')[2].checked;    
    if ((vege && lact) && kosher) {
        dietary = 'Vegetarian, Lactose Free, Kosher';
    } else if (vege && lact) {
        dietary = 'Vegetarian, Lactose Free';
    } else if (vege && kosher) {
        dietary = 'Vegetarian, Kosher';
    } else if (lact && kosher) {
        dietary = 'Lactose, Kosher';
    } else if (vege) {
        dietary = 'Vegetarian';
    } else if (lact) {
        dietary = 'Lactose Free';
    } else if (kosher) {
        dietary = 'Kosher';
    } else {
        dietary = "None";
    }
    alert("First name: " + firstName + 
    "\n" + "Last name: " + lastName + 
    "\n" + "Age: " + age + 
    "\n" + "Gender: " + gender + 
    "\n" + "Destination: " + destination + 
    "\n" + "Dietary Restrictions: " + dietary);
}