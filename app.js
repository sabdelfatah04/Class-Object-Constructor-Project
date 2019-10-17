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
  addPeriodicElement(e) {
    if (
      userName.value ||
      userAtomicNumber.value ||
      userAtomicMass.value === ""
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
    if (e.target.parentElement.classList.contains("remove-element")) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target.parentElement);
    }
  }

  reset() {
    userName.value = "";
    userAtomicMass.value = "";
    userAtomicNumber.value = "";
  }
}

/* function eventListeners() {
  form.addEventListener("submit", displayPeriodicElement);
  display.addEventListener("click", removeElement);
}
 */
document.getElementById("form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value;
  const atomicNumber = document.getElementById("atomicNumber").value;
  const atomicMass = document.getElementById("atomicMass").value;

  const element = new Element(name, atomicNumber, atomicMass);
  console.log(element);

  const ui = new UI();
  console.log(ui);

  ui.addPeriodicElement(element);

  ui.reset();

  e.preventDefault();
});



