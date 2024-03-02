// document.body.style.backgroundColor = 'red'
let nav = document.createElement('div')
let home = document.createElement('a')
let news = document.createElement('a')
let gallery = document.createElement('a')

document.body.style.backgroundImage = "url('radiant-gradient.png')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundColor = '#7822CC';
document.body.style.backgroundAttachment = 'fixed';

nav.style.backgroundColor = '#333'
nav.style.opacity = '70%'
nav.style.padding = "20px"
nav.style.overflow = 'hidden'
nav.style.borderRadius = '5px'
document.body.append(nav);

// home.style.float = 'left'
home.style.position = 'relative'
home.style.left = '10px'
home.style.opacity = '1000%'
home.style.backgroundColor = '#fff'
home.style.color = '#333'
home.style.borderRadius = '10px'
home.style.textAlign = 'center'
home.style.padding = '14px 16px'
home.style.textDecoration = 'none'
home.style.fontsize = '17px'
home.style.boxShadow = '20px 20px 50px 10px #fff';
home.textContent = "Home"
home.href = "google.com";
nav.append(home);

// gallery.style.float = 'left'
gallery.style.position = 'relative'
gallery.style.left = '600px'
gallery.style.opacity = '1000%'
gallery.style.backgroundColor = '#fff'
gallery.style.color = '#333'
gallery.style.borderRadius = '10px'
gallery.style.textAlign = 'center'
gallery.style.padding = '14px 16px'
gallery.style.textDecoration = 'none'
gallery.style.fontsize = '17px'
gallery.style.boxShadow = '20px 20px 50px 10px #fff';
gallery.textContent = "Gallery"
gallery.href = "google.com";
nav.append(gallery);

// news.style.float = 'left'
news.style.position = 'relative'
news.style.left = '1240px'
news.style.opacity = '1000%'
news.style.backgroundColor = '#fff'
news.style.color = '#333'
news.style.textAlign = 'center'
news.style.padding = '14px 16px'
news.style.textDecoration = 'none'
news.style.fontsize = '17px'
news.style.borderRadius = '10px'
news.style.boxShadow = '20px 20px 50px 10px #fff';
news.textContent = "News"
news.href = "google.com";
nav.append(news);


// let img1 = document.createElement('img')
// let img2 = document.createElement('img')
// let img3 = document.createElement('img')
// let img4 = document.createElement('img')

// gallery1.style.height = '800px'
// gallery1.style.height = '800px'
// gallery1.id('gallery1')
// document.body.append(gallery1)


// var src = document.getElementById("gallery1");
// src.appendChild(img);

let gallery1 = document.createElement('div');
gallery1.style.backgroundColor = '#333';
gallery1.style.padding = "20px";
gallery1.style.margin = "40px auto";
gallery1.style.width = "80%";
gallery1.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
gallery1.style.borderRadius = "8px";

let img = document.createElement('img')
img.src = "http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201705/529013874.jpg";
img.style.width = "100%";
img.style.maxWidth = "1000px";
img.style.height = "550px";
img.style.display = "block";
img.style.marginBottom = "20px";
img.style.marginLeft = "auto";
img.style.marginRight = "auto";
img.style.borderRadius = '10px';
img.style.boxShadow = '20px 20px 50px 10px black';

document.body.appendChild(gallery1);
gallery1.appendChild(img);

let footer = document.createElement('div')
footer.style.backgroundColor = '#333';
footer.style.opacity = '70%';
footer.style.padding = "20px";
footer.style.overflow = 'hidden';
footer.style.borderRadius = '5px';
footer.style.position = 'relative';
footer.style.bottom = '0px';
footer.textContent = "Chris Cornell is bae";
footer.style.color = "#f2f2f2";
footer.style.textAlign = "center";
document.body.appendChild(footer)