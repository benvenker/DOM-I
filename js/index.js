const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Display nav items
const navItems = document.querySelectorAll("nav a");

navItems.forEach((navItem, i) => {
  return (navItem.textContent = siteContent.nav[`nav-item-${i}`]);
});

// CTA
const h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

// Features Content
const featuresTitle = document.querySelector(".text-content:nth-child(1) h4");
console.log(featuresTitle);
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector(".text-content:nth-child(1) p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

// About Content
const aboutTitle = document.querySelector(".text-content:nth-child(2) h4");
console.log(aboutTitle);
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(".text-content:nth-child(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Middle Image
const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];
