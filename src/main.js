const typed = new Typed(".fe-txts", {
  strings: ["Frontend Developer", "Photographer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

const sections = document.querySelectorAll('section') 
const navLinks = document.querySelectorAll('nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset - 10 && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('text-cyan-500');
        links.classList.remove('border-b-2');
        links.classList.remove('border-cyan-500');
        document.querySelector('nav a[href*=' + id + ']').classList.add('text-cyan-500');
        document.querySelector('nav a[href*=' + id + ']').classList.add('border-b-2');
        document.querySelector('nav a[href*=' + id + ']').classList.add('border-cyan-500');
      })
    }
  });
};

// const hoverGit = document.getElementById('hover-git')
// const logoGit = document.querySelectorAll('#logo-git')

// console.log(logoGit[0].style.color)

// hoverGit.addEventListener('mouseenter', () => {
//   logoGit[1].style.color = "#ffffff"
// })

// hoverGit.addEventListener('mouseleave', () => {
//   logoGit[1].style.color = "#52b3d0"
// })