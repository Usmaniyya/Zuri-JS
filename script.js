// var name = document.querySelector('.name');

const myDetails = {
    firstName: 'Usman',
    lastName: 'Yahaya',
    height: '1.68m',
    country: 'Nigeria'
}
var full_name = myDetails.firstName + ' ' + myDetails.lastName;

console.log(`Name: ${full_name}`);
console.log(`Height: ${myDetails.height}`);
console.log(`Country: ${myDetails.country}`);