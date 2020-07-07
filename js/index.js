const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//console log test
console.log('Hello! This is a test! If you see me, this is working !')

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Create selectors to point your data into elements
const cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent["cta"]["img-src"]);

const middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Update the HTML with the JSON data

//Navigation
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

//Green text
navLinks.forEach(function(link) {
  return link.style.color = "green";
});

//prepend and append two navi items 
const nav = document.querySelector('nav');
const homeLink = document.createElement('a');
homeLink.href = "index.html";
homeLink.textContent = "Home";
homeLink.style.color = "green";
nav.prepend(homeLink);

const faq = document.createElement('a');
faq.href = "";
faq.textContent = "FAQ";
faq.style.color = "green";
nav.appendChild(faq);

//Header
const header = document.querySelector('.cta h1');
header.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];
 
//Main Content

//titles
const contentTitles = document.querySelectorAll('.main-content h4');

contentTitles[0].textContent = siteContent['main-content']['features-h4'];
contentTitles[1].textContent = siteContent['main-content']['about-h4'];
contentTitles[2].textContent = siteContent['main-content']['services-h4'];
contentTitles[3].textContent = siteContent['main-content']['product-h4'];
contentTitles[4].textContent = siteContent['main-content']['vision-h4'];

//content
const para = document.querySelectorAll('.main-content p');

para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];

//contact
const contactHeader = querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contact = querySelectorAll('.contact p');
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

//footer
const footer = querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];