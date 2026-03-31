// Step 9
const container = document.querySelector('.left-container');
const newContainerHTML = `
    <div class="selector-container">
  <a href="#" class="selector-item" aria-label="Change the country">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
        <g fill="none" fill-rule="evenodd">
          <path fill="#F79A59" d="M1.994 2A1.992 1.992 0 0 0 0 4v2h16V4c0-1.105-.895-2-1.994-2H1.994Z"></path>
          <path fill="#F6F9FC" d="M0 6h16v4H0z"></path>
          <path fill="#EAEEF3" fill-rule="nonzero" d="M15 10V6h1v4h-1ZM0 6h1v4H0V6Z"></path>
          <path fill="#24B47E" d="M0 10v2c0 1.105.895 2 1.994 2h12.012A1.992 1.992 0 0 0 16 12v-2H0Z"></path>
          <path fill="#555ABF" fill-rule="nonzero" d="M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
        </g>
      </svg>
    </div>
    <span>India</span>
  </a>

  <a href="#" class="selector-item" aria-label="Change the language">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 16 16" width="16" height="16">
        <path
          d="M11.6 13.1l-2 2.5c-.3.3-.7.3-.9 0-.1-.1-.2-.3-.2-.5v-2c-2.5-.5-4-2.3-4-4.4 0-2.5 2.1-4.5 5.5-4.5s5.5 2 5.5 4.5c-.1 2.3-1.7 4.1-3.9 4.4z"
          fill="#6B7280"
        ></path>
      </svg>
    </div>
    <span>English (United States)</span>
  </a>
</div>

  `;
container.insertAdjacentHTML('afterend', newContainerHTML);
// Step 9 End

// Step 11
var footerhtml = document.querySelector(".footer");
var feedbackhtml = document.querySelector(".feedback-container");
var hideElements = ['site-docs-right-panel-container','.footer','.feedback-container'];
window.addEventListener('articleDetailsLoaded', function(event) {
  var articleId = event.detail.articleId;

  if (footerhtml) footerhtml.style.display = 'none';
  if (feedbackhtml) feedbackhtml.style.display = 'none';

  if (articleId === "8ced6e88-b691-472d-b601-803ade6167fc") {
    hideElements.forEach(function(selector) {
      $(selector).hide();
    });
    const target1 = document.querySelector('.resources-wrapper');
    if (target1) target1.insertAdjacentElement('afterend', feedbackhtml);
  }
  
  if (articleId === "f836dac9-c562-46fa-86e5-7bc06e790ba3") {
    $('.footer').hide();
    $('.feedback-container').hide();

    const target1 = document.querySelector('#articleContent');
    if (target1) target1.insertAdjacentElement('afterend', feedbackhtml);
  }
  feedbackhtml.style.display = '';
  if (footerhtml) {
    const target2 = document.querySelector('.feedback-container');
    if (target2) {
      target2.insertAdjacentElement('afterend', footerhtml);
      footerhtml.style.display = '';
    }
  }
});
// Step 11 End



