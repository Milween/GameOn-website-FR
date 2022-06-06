class InputElement {
  constructor (elt, errorMessage) {
    this.elt = elt;
    this.parent = elt.parentElement;
    this.errorMessage = errorMessage;
 }

 displayError() {
   this.parent.setAttribute("data-error-visible", "true");
   this.parent.setAttribute("data-error", this.errorMessage);
 }

 removeDisplayError() {
   this.parent.removeAttribute("data-error-visible");
   this.parent.removeAttribute("data-error");
  }
}