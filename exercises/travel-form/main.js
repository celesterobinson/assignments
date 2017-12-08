var doStuff = function() {
    var firstName = document.getElementsByName('firstName')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;
    var age = document.getElementsByName('age')[0].value;
    var gender = document.querySelector('input[name=gender]:checked').value;
    var destination = document.getElementsByName('destination')[0].value;
    var dietary;
    var vege = document.getElementsByName('dietary')[0];
    var lact = document.getElementsByName('dietary')[1];
    var kosher = document.getElementsByName('dietary')[2];    
    if ((vege.checked && lact.checked) && kosher.checked) {
        dietary = 'Vegetarian, Lactose Free, Kosher';
    } else if (vege.checked && lact.checked) {
        dietary = 'Vegetarian, Lactose Free';
    } else if (vege.checked && kosher.checked) {
        dietary = 'Vegetarian, Kosher';
    } else if (lact.checked && kosher.checked) {
        dietary = 'Lactose, Kosher';
    } else if (vege.checked) {
        dietary = 'Vegetarian';
    } else if (lact.checked) {
        dietary = 'Lactose Free';
    } else if (kosher.checked) {
        dietary = 'Kosher';
    } else {
        dietary = "None";
    }
    alert("First name: " + firstName + "\n" + "Last name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Destination: " + destination + "\n" + "Dietary Restrictions: " + dietary);
}