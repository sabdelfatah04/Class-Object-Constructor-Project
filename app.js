class Element {
  constructor(name, atomicNumber, atomicMass) {
    this.name = name;
    this.atomicNumber = atomicNumber;
    this.atomicMass = atomicMass;
  }
  /* calculateProtons(){
        return this.massNumber - this.atomicNumber;
    } */
}
class UI {
  addPeriodicElement(_element) {
    if (
      name ||
      atomicNumber ||
      atomicMass === ""
    ) {
      alert("Error: Missing Info");
    } else {
      let html =
        ' <div class="display-element"><div class="display-name">%name%</div><div class="display-atomicNumber">%atomicNumber%</div><div class="display-atomicMass">%atomicMass%</div><div class="remove-element"><p class="remove-element">Remove Element &#10006; </p></div></div>';

      let newHtml = html.replace("%name%", userName.value);
      newHtml = newHtml.replace("%atomicNumber%", userAtomicNumber.value);
      newHtml = newHtml.replace("%atomicMass%", userAtomicMass.value);
      document
        .querySelector(".display")
        .insertAdjacentHTML("beforeend", newHtml);
    }
  }
  
  removeElement(e) {
    if (EventTarget.className ==="remove-element"){
      EventTarget.parentElement.remove();
      }
    }


  reset() {
    document.getElementById('name').value = "";
    document.getElementById("atomicNumber").value;
    document.getElementById("atomicMass").value;
  }

}

function eventListeners() {
  form.addEventListener("submit", ui.addPeriodicElement);
  display.addEventListener("click", removeElement);
}
 
document.getElementById("form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value;
  const atomicNumber = document.getElementById("atomicNumber").value;
  const atomicMass = document.getElementById("atomicMass").value;

  const element = new Element(name, atomicNumber, atomicMass);
  //console.log(element);

  const ui = new UI();
  console.log(ui);

  ui.addPeriodicElement(element);

  ui.reset();

  e.preventDefault();
});
document.querySelector(".display").addEventListener("click", function(e){
  const ui = new UI();
  ui.addPeriodicElement(element);
  ui.reset();
  e.preventDefault();
}
)



