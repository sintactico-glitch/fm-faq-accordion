/* 
Detect if the click was on the .accordion-question to make sure the entire element is clickable and activates the functionality
*/

document.addEventListener("click", (e)=> {
  const clickedElement = e.target;
  const $accordionTitle = clickedElement.closest(".accordion-item-title");
  const $accordionIcon = clickedElement.closest(".accordion-item-icon");

  if($accordionTitle || $accordionIcon) {
    const $accordionItem = clickedElement.closest(".accordionItem");

    const $faqTitle = $accordionItem.querySelector(".accordion-item-title");
    const $faqAnswer = $accordionItem.querySelector(".")

  }

})