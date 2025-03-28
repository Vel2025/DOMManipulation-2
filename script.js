// // import "./styles.css";


// //Part-1
// // var menuLinks = [
// //     { text: 'about', href: '/about' },
// //     { text: 'catalog', href: '/catalog' },
// //     { text: 'orders', href: '/orders' },
// //     { text: 'account', href: '/account' },
// //   ];

var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1> DOM Manipulation</h1>`
mainEl.classList.add(`flex-ctr`);


// //Part-2
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// //Part-3
menuLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);

});


// //DOM Manipulation Part-2

// // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// // Set the height subMenuEl element to be "100%".
// // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
// // Add the class of flex-around to the subMenuEl element.


let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';



let topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.matches('a')) {
    return;
  }
  console.log(e.target.textContent)

  topMenuLinks.forEach(link => link.classList.remove("active"));

  let clickedOn = e.target
  clickedOn.classList.add("active");

  let linkData = menuLinks.find(link => link.text === clickedOn.textContent)


  if (linkData && linkData.subLinks) {
    subMenuEl.style.top = "100%";
    buildSubmenu(linkData.subLinks);

  } else {
    subMenuEl.style.top = "0";
  }

  if (clickedOn.textContent === "about") {
    mainEl.innerHTML = `<h1>${clickedOn.textContent}</h1>`;
    subMenuEl.style.top = 0;
  }
})



function buildSubmenu(subLinks) {

  subMenuEl.innerHTML = "";

  subLinks.forEach(link => {
    let a = document.createElement('a')
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  })

}

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.matches("a")) return;

  console.log("Submenu item clicked:", e.target.textContent);
  subMenuEl.style.top = "0";
  topMenuLinks.forEach(link => link.classList.remove("active"));
  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  mainEl.innerHTML = mainEl.innerHTML.toUpperCase();

})
