const rightArrow = document.getElementById('right-arrow');
const programAnchor = document.getElementById('program-link');

const dropdown = document.getElementById('dropdown');
const laptopDropdown = document.getElementById('dropdown-content');
const mobileSubMenu = document.getElementById('mobile-submenu');
const returnBtn = document.getElementById('return');

window.addEventListener('resize', function() {
    if(this.window.innerWidth < 1200) {
        console.log('max-width: 1199px')
        laptopDropdown.style.display = 'none';
        rightArrow.style.display = 'inline-block';
        programAnchor.href = '#'

        programAnchor.addEventListener('click', function() {
          mobileSubMenu.style.display = 'block';
        })
        
        returnBtn.addEventListener('click', function() {
            mobileSubMenu.style.display = 'none';
        })
    }
    else {
        laptopDropdown.style.display = 'block';
        rightArrow.style.display = 'none';
        programAnchor.href = 'programs.html'
    }
})


window.onscroll = function() {myFunction()};

var navbar = document.getElementById('nav');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}