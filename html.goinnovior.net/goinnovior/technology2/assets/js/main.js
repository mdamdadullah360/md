
$(document).ready(function () {
    $(".read-more").click(function () {
      $(this).prev().slideToggle();
      if ($(this).text() == "read more") {
        $(this).text("read less");
      } else {
        $(this).text("read more");
      }
    });
  });
  

























// const readMore = document.querySelector(".read-more-btn");
// const text = document.querySelector(".text");




// readMore.addEventListener('click', (e) => {
//     text.classList.toggle('show-more');
//     if (readMore.innerHTML == "Read More") {
//         readMore.innerHTML = "Read Less";
//     } else {
//         readMore.innerHTML = "Read More";
//     }

// })


// const parentContainer = document.querySelector('.read-more-container');

// parentContainer.addEventListener('click', event => {

//     const current = event.target;

//     const isReadMoreBtn = current.className.includes('read-more-btn');

//     if (!isReadMoreBtn) return;

//     const currentText = event.target.parentNode.querySelector('.read-more-text');

//     currentText.classList.toggle('read-more-text--show');

//     current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

// })