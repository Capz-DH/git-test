const buttons = document.querySelectorAll('.option');

divs.forEach(el => el.addEventListener('click', event => {
    console.log(event.target.getAttribute("data-key"));
  }));