
///class to create the object (person, album, movie)***Model
//take arguments
class Element { 
    constructor(name, atomicNumber, atomicMass){
        this.name = name;
        this.atomicNumber = atomicNumber;
        this.atomicMass = atomicMass;
    }
    /* calculateProtons(){
        return this.massNumber - this.atomicNumber;
    } */
}
///**View class fro the UI which contains methods
//clear field methods

//remove something/object (remove avenger)

//creates/insert the html for the UI display
function eventListeners(){
    form.addEventListener('submit', displayPeriodicElement);
    display.addEventListener('click', removeElement);
    form.addEventListener('submit', function(){
        console.log('test');
    });
}
eventListeners();

function displayPeriodicElement(e){
    const form = document.querySelector('#element-form');
    const userName = document.querySelector('#name');
    const userAtomicNumber = document.querySelector('#atomicNumber');
    const userAtomicMass = document.querySelector('#atomicMass');
    const display = document.querySelector('.display');
    if (userName.value||useratomicNumber.value||useratomicMass.value === '') {
        alert('Error: Missing Info')
      } else {
        let html = ' <div class="display-element"><div class="display-name">%name%</div><div class="display-atomicNumber">%atomicNumber%</div><div class="display-atomicMass">%atomicMass%</div><div class="remove-element"><p class="remove-element">Remove Element &#10006; </p></div></div>';

    let newHtml = html.replace('%name%', userName.value);
    newHtml = newHtml.replace('%atomicNumber%', userAtomicNumber.value);
    newHtml = newHtml.replace('%atomicMass%', userAtomicMass.value);
    display.insertAdjacentHTML('beforeend', newHtml);
    init();
    e.preventDefault();

      }
      
}

function removeElement(e) {
    if(e.target.parentElement.classList.contains('remove-element')){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement);
    }
}
function init(){
    userName.value = '';
    userAtomicMass.value = '';
    userAtomicNumber.value = '';
}
init();





//controller combines ui and model
//event handler with function
//get values



//instaniate new class/object element with vairable name


//instaniate new UI const ui = new UI()

//call relevent methods


//seperate event handler for removing/deleting
