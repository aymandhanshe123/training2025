
/*hamberger */
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("show"); 
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("show"); 
  });
});
/*darkmode light mode */
document.addEventListener("DOMContentLoaded", () => {
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const enableDarkmode = () => {
      document.body.classList.add('darkmode') 
      localStorage.setItem('darkmode', 'active')
  }

  const disableDarkmode = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null)
  }

  if(darkmode === "active") enableDarkmode()

  themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode')
      darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  })
});





