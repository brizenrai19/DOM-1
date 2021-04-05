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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaH1 = document.getElementsByClassName("cta-text")[0].getElementsByTagName('h1')[0];
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaBtn = document.getElementsByClassName("cta-text")[0].getElementsByTagName('button')[0];
ctaBtn.innerHTML = siteContent["cta"]["button"];

let navItems = document.querySelectorAll("header nav a");
let index = 0;
navItems.forEach(item => {
  let itemIndex = index+1;
  let itemValue = "nav-item-" + itemIndex;
  item.innerHTML = siteContent["nav"][itemValue];
  index ++;
})

let contents = document.querySelectorAll(".text-content > h4,p");

let mainContentData = siteContent["main-content"];
let counter = 0;
for(let i=0; i<Object.entries(mainContentData).length; i++){
  if(Object.entries(mainContentData)[i][0] != "middle-img-src"){
    contents[counter].innerHTML = Object.entries(mainContentData)[i][1];
    counter+=1;
  }
  else{
    document.getElementById("middle-img").src = Object.entries(mainContentData)[i][1];
  }
}

let contactSection = document.getElementsByClassName("contact")[0].children;
let contactData = siteContent["contact"];
for(let i=0; i<contactSection.length; i++){
  if(Object.entries(contactData)[i][0] == "address"){
    let data = Object.entries(contactData)[i][1];
    let index = data.indexOf("Street") + "Street".length;
    let formattedString = data.substring(0,index) + "<br/>" + data.substring(index,data.length);
    contactSection[i].innerHTML = formattedString;
  }
  else{
    contactSection[i].innerHTML = Object.entries(contactData)[i][1];
  }
}

let footerPara = document.getElementsByTagName("footer")[0].children;
footerPara.innerHTML = siteContent["footer"]["copyright"];


