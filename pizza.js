// Function to dynamically add student ID and name
function addStudentInfo() {
    const studentInfoContainer = document.getElementById('student-info');
    const studentId = "200538493"; 
    const studentName = "Manridh Kaur"; 
    studentInfoContainer.innerText = `Student ID: ${studentId} | Name: ${studentName}`;
}
// Function to submit the pizza order
function submitOrder() {
    // Retrieve form values
    const orderId = document.getElementById('orderId').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const size = document.getElementById('size').value;

    const toppings = [];
    if (document.getElementById('greenPepper').checked) toppings.push('Green Pepper');
    if (document.getElementById('onion').checked) toppings.push('Onion');
    if (document.getElementById('olive').checked) toppings.push('Olive');
    if (document.getElementById('tomato').checked) toppings.push('Tomatoes');

    const deliveryMode = document.querySelector('input[name="delivery"]:checked');

    // Create a Pizza object
    const pizza = new Pizza(orderId, name, address, email, phone, size, toppings, deliveryMode);

    // Display pizza description
    document.getElementById('pizza-description').innerText = pizza.getDescription();
}

// Pizza class
class Pizza {
    constructor(orderId, name, address, email, phone, size, toppings, deliveryMode) {
        this.orderId = orderId;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.size = size;
        this.toppings = toppings;
        this.deliveryMode = deliveryMode ? deliveryMode.value : '';
    }

    // Method to get pizza description
    getDescription() {
        return `Order ID: ${this.orderId}\nName: ${this.name}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone: ${this.phone}\nSize: ${this.size}\nToppings: ${this.toppings.join(', ')}\nDelivery Mode: ${this.deliveryMode}`;
    }
}
// Call the function to add student information when the page loads
addStudentInfo();