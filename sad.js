// document.body.style.backgroundColor = 'red'
let nav = document.createElement('div')
let home = document.createElement('a')
let news = document.createElement('a')
let gallery = document.createElement('a')

nav.style.backgroundColor = '#333'
nav.style.padding = "20px"
nav.style.overflow = 'hidden'
nav.style.borderRadius = '5px'
document.body.append(nav);

// home.style.float = 'left'
home.style.position = 'relative'
home.style.left = '10px'
home.style.backgroundColor = '#fff'
home.style.color = '#333'
home.style.borderRadius = '10px'
home.style.textAlign = 'center'
home.style.padding = '14px 16px'
home.style.textDecoration = 'none'
home.style.fontsize = '17px'
home.textContent = "Home"
home.href = "google.com";
nav.append(home);

// gallery.style.float = 'left'
gallery.style.position = 'relative'
gallery.style.left = '20px'
gallery.style.backgroundColor = '#fff'
gallery.style.color = '#333'
gallery.style.borderRadius = '10px'
gallery.style.textAlign = 'center'
gallery.style.padding = '14px 16px'
gallery.style.textDecoration = 'none'
gallery.style.fontsize = '17px'
gallery.textContent = "Gallery"
gallery.href = "google.com";
nav.append(gallery);

// news.style.float = 'left'
news.style.position = 'relative'
news.style.left = '30px'
news.style.backgroundColor = '#fff'
news.style.color = '#333'
news.style.textAlign = 'center'
news.style.padding = '14px 16px'
news.style.textDecoration = 'none'
news.style.fontsize = '17px'
news.style.borderRadius = '10px'
news.textContent = "News"
news.href = "google.com";
nav.append(news);

let gallery1 = document.createElement('div')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')
let img4 = document.createElement('img')

gallery1.style.height = '800px'
gallery1.style.height = '800px'
gallery1.id('gallery1')
document.body.append(gallery1)

var img = document.createElement("img");
img.src = "./images/Chris.jpg";
var src = document.getElementById("gallery1");
src.appendChild(img);