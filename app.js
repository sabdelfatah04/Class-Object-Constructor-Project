class Element {
  constructor(name, atomicNumber, yearDiscovered) {
    this.name = name;
    this.atomicNumber = atomicNumber;
    this.yearDiscovered = yearDiscovered;
    this.discovered = function(){
       return new Date().getFullYear() - this.yearDiscovered;
   }}
}
class UI {
  addPeriodicElement(element) {

      let html =
        ' <div class="display-element"><div class="display-name">%name%</div><div class="display-atomicNumber">%atomicNumber%</div><div class="display-yearDiscovered">%yearDiscovered%</div><div class="display-discovered">%discovered%</div><div class = "remove-element">X Remove Element</div>';
      const currentYear = new Date().getFullYear();
      const discovered = currentYear - yearDiscovered.value;
      let newHtml = html.replace('%name%', element.name);
      newHtml = newHtml.replace('%atomicNumber%', element.atomicNumber);
      newHtml = newHtml.replace('%yearDiscovered%', element.yearDiscovered);
      newHtml = newHtml.replace('%discovered%', discovered);
      document
        .querySelector(".display")
        .insertAdjacentHTML('beforeend', newHtml);
        console.log(discovered);
    }
  
  reset() {
    document.getElementById('name').value = "";
    document.getElementById('atomicNumber').value = "";
    document.getElementById('yearDiscovered').value = "";
  }

  removeElement(target) {
    if (target.className === "remove-element"){
      target.parentElement.remove();
      }
  }

}

document.getElementById('form').addEventListener('submit', function(e) {

  
  const name = document.getElementById("name").value;
  const atomicNumber = document.getElementById("atomicNumber").value;
  const yearDiscovered = document.getElementById("yearDiscovered").value;

  const element = new Element(name, atomicNumber, yearDiscovered);
  //console.log(element);

  const ui = new UI();
  console.log(ui);
 if (name ==='' || atomicNumber ==='' || yearDiscovered ===''){
    alert ('Error:Missing Info')
  } else {
  ui.addPeriodicElement(element);
  ui.reset();
   }
e.preventDefault();
});

document.querySelector(".display").addEventListener("click", function(e){
  const ui = new UI();
  ui.removeElement(e.target);
  ui.reset();
  e.preventDefault();
}
)



