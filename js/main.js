let $faqIcon1 = document.querySelector("#faq-icon-1");
let $faqIcon2 = document.querySelector("#faq-icon-2");
let $faqIcon3 = document.querySelector("#faq-icon-3");
let $faqIcon4 = document.querySelector("#faq-icon-4");

const $faqHeader1 = document.querySelector("#faq-header-1");
const $faqHeader2 = document.querySelector("#faq-header-2");
const $faqHeader3 = document.querySelector("#faq-header-3");
const $faqHeader4 = document.querySelector("#faq-header-4");

const $faqAnswer1 = document.querySelector("#faq-content-1");
const $faqAnswer2 = document.querySelector("#faq-content-2");
const $faqAnswer3 = document.querySelector("#faq-content-3");
const $faqAnswer4 = document.querySelector("#faq-content-4");

document.addEventListener("click", (e)=> {
  if(e.target === $faqIcon1 || e.target === $faqHeader1) {
    $faqAnswer1.hidden = !$faqAnswer1.hidden;

    if(!$faqAnswer1.hidden) {
      $faqIcon1.src = "./assets/images/icon-minus.svg"; 
    } else {
      $faqIcon1.src = "./assets/images/icon-plus.svg";
    }
  }

  if(e.target === $faqIcon2 || e.target === $faqHeader2) {
    $faqAnswer2.hidden = !$faqAnswer2.hidden;

    if(!$faqAnswer2.hidden) {
      $faqIcon2.src = "./assets/images/icon-minus.svg"; 
    } else {
      $faqIcon2.src = "./assets/images/icon-plus.svg";
    }
  }

  if(e.target === $faqIcon3 || e.target === $faqHeader3) {
    $faqAnswer3.hidden = !$faqAnswer3.hidden;

    if(!$faqAnswer3.hidden) {
      $faqIcon3.src = "./assets/images/icon-minus.svg"; 
    } else {
      $faqIcon3.src = "./assets/images/icon-plus.svg";
    }
  }

  if(e.target === $faqIcon4 || e.target === $faqHeader4) {
    $faqAnswer4.hidden = !$faqAnswer4.hidden;

    if(!$faqAnswer4.hidden) {
      $faqIcon4.src = "./assets/images/icon-minus.svg"; 
    } else {
      $faqIcon4.src = "./assets/images/icon-plus.svg";
    }
  }
})