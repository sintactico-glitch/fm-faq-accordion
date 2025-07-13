document.addEventListener("click", (e)=> {
  const clickedElement = e.target;
  const $accordionTitle = clickedElement.closest(".accordion-item-title");
  const $accordionIcon = clickedElement.closest(".accordion-item-icon");

  if($accordionTitle || $accordionIcon) {
    const $accordionItem = clickedElement.closest(".accordion-item");

    const $faqTitle = $accordionItem.querySelector(".accordion-item-title");
    const $faqAnswer = $accordionItem.querySelector(".accordion-answer");

    // expands answer
    $faqAnswer.hidden = !$faqAnswer.hidden;

    // updates aria-expanded on accordion-item-title
    $faqAnswer.toggleAttribute("aria-expanded");

    // changes the image on .accordion-item-icon
    if(!$faqAnswer.hidden) {
      $accordionIcon.src = "./assets/images/icon-minus.svg";
    } else {
      $accordionIcon.src = "./assets/images/icon-plus.svg";
    }
  }

})