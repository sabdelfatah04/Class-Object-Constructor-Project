class Element { 
    constructor(name, atomicNumber, atomicMass){
        this.name = name;
        this.symbol = atomicNumber;
        this.atomicMass = atomicMass;
    }
    /* calculateProtons(){
        return this.massNumber - this.atomicNumber;
    } */
}
function eventListeners(){
    //const new element = new Element(d,d,d);
    //const kjg = document.getElementById('jkfh').value;
    //console.log(ui);
    //ui.addEventListener(element);
    //-reset&delete
    const form = document.getElementById('#element-form').value;
    const userName = document.getElementById('#name').value;
    const userAtomicNumber = document.getElementById('#atomicNumber').value;
    const userAtomicMass = document.getElementById('#atomicMass').value;

    const new element = new Element(name, AtomicNumber, AtomicNumber)
    
    form.addEventListener('submit', displayPeriodicElement);
    display.addEventListener('click', removeElement);

    eventListeners();
}
class UI {    
function displayPeriodicElement(e){ 
    if (userName.value||useratomicNumber.value||useratomicMass.value === '') {
        alert('Error: Missing Info')
      } else {
    
    let html = ' <div class="display-element"><div class="display-name">%name%</div><div class="display-atomicNumber">%atomicNumber%</div><div class="display-atomicMass">%atomicMass%</div><div class="remove-element"><p class="remove-element">Remove Element &#10006; </p></div></div>';

    let newHtml = html.replace('%name%', userName.value);
    newHtml = newHtml.replace('%atomicNumber%', userAtomicNumber.value);
    newHtml = newHtml.replace('%atomicMass%', userAtomicMass.value);
    document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);

    e.preventDefault();

    }

function removeElement(e) {
    if(e.target.parentElement.classList.contains('remove-element')){
        e.target.parentElement.parentElement.remove();
        console.log(e.target.parentElement);
    }
}
removeElement(e);

function reset(){
    userName.value = '';
    userAtomicMass.value = '';
    userAtomicNumber.value = '';
}
reset();      

}





//controller combines ui and model
//event handler with function
//get values



//instaniate new class/object element with vairable name


//instaniate new UI const ui = new UI()

//call relevent methods


//seperate event handler for removing/deleting
