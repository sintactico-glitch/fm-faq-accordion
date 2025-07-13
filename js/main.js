/* 
1- get all icons by id
2 - get all the faq-content

3 - set up an event listener to match the different icons
4a - flip the values of show and hide based on the icon click
4b - change the src on the img of the icon

*/

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
    console.log("icon 1");
    $faqAnswer1.hidden = !$faqAnswer1.hidden;
  }

  if(e.target === $faqIcon2 || e.target === $faqHeader2) {
    console.log("icon 2")
    $faqAnswer2.hidden = !$faqAnswer2.hidden;
  }

  if(e.target === $faqIcon3 || e.target === $faqHeader3) {
    console.log("icon 3")
    $faqAnswer3.hidden = !$faqAnswer3.hidden;
  }

  if(e.target === $faqIcon4 || e.target === $faqHeader4) {
    console.log("icon 4")
    $faqAnswer4.hidden = !$faqAnswer4.hidden;
  }
})