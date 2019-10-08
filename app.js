
///class to create the object (person, album, movie)***Model
//take arguments
class Element { 
    constructor(name, atomicNumber, massNumber){
        this.name = name;
        this.atomicNumber = atomicNumber;
        this.massNumber = massNumber;
    }
    calculateProtons(){
        return this.massNumber - this.atomicNumber;
    }
}



///**View class fro the UI which contains methods
//clear field methods

//remove something/object (remove avenger)

//creates/insert the html for the UI display

const form = document.querySelector('#hero-form');// could also getElementById
const userAlias = document.querySelector('#alias');
const userPowers = document.querySelector('#powers');
const userFullName = document.querySelector('#full-name');
const userFirstAppearance = document.querySelector('#first-appearance');
const userImage = document.querySelector('#image');
const display = document.querySelector('.display');

function eventListeners(){
    form.addEventListener('submit', displayAvengerMember);
    display.addEventListener('click', removeAvenger);
    form.addEventListener('submit', function(){
        console.log('test');
    });
}
eventListeners();

function displayPeriodicElement(e){
    if (userAlias.value||userPowers.value||userFullName.value||userFirstAppearance.value||userImage.value === '') {
        alert('Error: Missing Info')
      } else {
        let html = ' <div class="display-element"><div class="display-name">%name%</div><div class="display-atomicNumber">%atomicNumber%</div><div class="display-atomicMass">%atomicNumber%</div><div class="remove-element"><p class="remove-element">Remove Element &#10006; </p></div></div>';

    let newHtml = html.replace('%alias%', userAlias.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    init();
    e.preventDefault();

      }
      
}

function removeAvenger(e) {
    if(e.target.parentElement.classList.contains('remove-avenger')){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement);
    }
}
function init(){
    userAlias.value = '';
    userPowers.value = '';
    userFullName.value = '';
    userFirstAppearance.value = '';
    userImage.value = '';
}
init();





//controller combines ui and model
//event handler with function
//get values



//instaniate new class/object element with vairable name


//instaniate new UI const ui = new UI()

//call relevent methods


//seperate event handler for removing/deleting
