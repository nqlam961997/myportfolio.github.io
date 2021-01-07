
window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const collapseHeader = document.querySelectorAll(".collapsible-header");
const handleAddClickByMenu = document.querySelector(".menu-icon");
const handleAddClickOnNavItems= document.querySelector(".nav-items ");
const currentNavLink = document.querySelectorAll(".nav-link");

// currentNavLink.forEach(currentNavLink => {
//   currentNavLink[0].classList.add('link');
//   currentNavLink.addEventListener("click",()=>{
//     const currentNavLinkAddLink = document.querySelector(".nav-link .link");
//     if(currentNavLinkAddLink && currentNavLinkAddLink !== currentNavLink){
//       currentLinkCollapseNavLink.classList.toggle('link');
//     }
//     collapseNavLink.classList.toggle("link");
//   })
// })


collapseHeader.forEach(collapseHeader => {
  collapseHeader.addEventListener("click", () => {
    const currentActiveCollapseHeader = document.querySelector(".collapsible-header.active");
    if (currentActiveCollapseHeader && currentActiveCollapseHeader !== collapseHeader) {
      currentActiveCollapseHeader.classList.toggle("active");
      currentActiveCollapseHeader.nextElementSibling.style.maxHeight = 0;
    }

    collapseHeader.classList.toggle("active");
    const collapseBody = collapseHeader.nextElementSibling;
    if (collapseHeader.classList.contains("active")) {
      collapseBody.style.maxHeight = collapseBody.scrollHeight + "px";
    } else {
      collapseBody.style.maxHeight = 0;
    }
  })
})

handleAddClickByMenu.addEventListener("click",()=>{
  handleAddClickByMenu.classList.toggle("toggle");
  handleAddClickOnNavItems.classList.toggle("clicked");
})

// SCROLL SECTION ACTIVE LINK
// const sections = document.querySelectorAll('section[id]');

// window.addEventListener('scroll',scrollActiveLink);

// function scrollActiveLink(){
//   const scrollY = window.pageYOffset;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id');
    
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       document.querySelectorAll('nav-item a[href*=' + sectionId + ']').classList.add('active-link');
//     }else{
//       document.querySelectorAll('nav-item a[href*=' + sectionId + ']').classList.remove('active-link');
//     }
//   })
// }

// SCROLL REVEAL ANIMATION
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 2000,
//   reset: true,
// })

// SCROLL ABOUT
// sr.reveal('about-me-figure-col',{origin: 200, delay: 200})
// sr.reveal('about-me-info-col',{delay: 400})
