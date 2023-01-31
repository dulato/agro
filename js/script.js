let app = document.getElementById('back_app');
let btn = document.getElementById('search_btn');
btn.addEventListener('click', function() {
    let navbar = document.querySelector('.navbar_content');
    let content = document.querySelector('.navbar_body');
    let navContent = document.querySelector('.nav_bottom_content');
    let menu = document.getElementById('nav_list');
    let searcher = document.getElementById('nav_bottom_form');

    btn.classList.toggle('searching');
    if (btn.classList.contains('searching')) {
        navbar.classList.add('searching');
        app.classList.add('searching');
    
        content.append(searcher);
        navContent.append(menu);
    }
});

let x = document.getElementById('nav_form_span');
x.addEventListener('click', function() {
    let navbar = document.querySelector('.navbar_content');
    let content = document.querySelector('.navbar_body');
    let navContent = document.querySelector('.nav_bottom_content');
    let menu = document.getElementById('nav_list');
    let searcher = document.getElementById('nav_bottom_form');

    btn.classList.remove('searching');
    navbar.classList.remove('searching');
    app.classList.remove('searching');

    content.append(menu);
    navContent.append(searcher);
});

let li = document.getElementById('nav_link_arrow');
li.addEventListener('click', function() {
    let modalLi = document.querySelector('.li');
    li.classList.toggle('open');
    if (li.classList.contains('open')) {
        modalLi.classList.add('open');
        app.classList.add('searching');
    } else {
        modalLi.classList.remove('open');
        app.classList.remove('searching');
    }
});


let menuParts = document.querySelectorAll('.li_left_li');
for (let m = 0; m < menuParts.length; m++) {
    menuParts[m].addEventListener('click', function() {
        let liParts = document.querySelectorAll('.li_right_list')
        for (let i of menuParts) {
            i.classList.remove('open');
        }

        for (let j of liParts) {
            j.classList.remove('open');
        }

        menuParts[m].classList.add('open');
        liParts[m].classList.add('open');
    });
}

let search = document.getElementById('search_button');
let burger = document.querySelector('.menu_burger');
let menulist = document.querySelector('.navbar_foot');

search.addEventListener('click', function() {
    let navBot = document.querySelector('.nav_bottom');
    let lim = document.querySelector('.lim');

    search.classList.toggle('searching');

    if (search.classList.contains('searching')) {
        menulist.classList.remove('open');
        lim.classList.remove('open');
        burger.classList.remove('open');
        navBot.classList.add('searching');
        app.classList.add('searching');
    }
    else {
        navBot.classList.remove('searching');
        app.classList.remove('searching');
    }
});

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    let lim = document.querySelector('.lim');
    let navBot = document.querySelector('.nav_bottom');

    if (burger.classList.contains('open')) {
        menulist.classList.add('open');
        search.classList.remove('searching');
        navBot.classList.remove('searching');
        app.classList.remove('searching');
    }
    else {
        menulist.classList.remove('open');
        lim.classList.remove('open');
    }
});

let innerLink = document.getElementById('nav_adaptive_arrow');
innerLink.addEventListener('click', function() {
    let lim = document.querySelector('.lim');
    menulist.classList.remove('open');
    lim.classList.add('open');
});


let lies = document.querySelectorAll('.li_top_li');
let ules = document.querySelectorAll('.li_bottom_list');
for (let li = 0; li < lies.length; li++) {
    lies[li].addEventListener('click', function() {
        for (const item of lies) {
            item.classList.remove('open');
        }
        for (const item of ules) {
            item.classList.remove('open');
        }

        lies[li].classList.add('open');
        ules[li].classList.add('open');
    });
}

app.addEventListener('click', function() {
    let navbar = document.querySelector('.navbar_content');
    let content = document.querySelector('.navbar_body');
    let navContent = document.querySelector('.nav_bottom_content');
    let menu = document.getElementById('nav_list');
    let searcher = document.getElementById('nav_bottom_form');
    let modalLi = document.querySelector('.li');
    let navBot = document.querySelector('.nav_bottom');

    btn.classList.remove('searching');
    navbar.classList.remove('searching');
    app.classList.remove('searching');
    modalLi.classList.remove('open');
    li.classList.remove('open');
    navBot.classList.remove('searching');
    search.classList.remove('searching');
    
    content.append(menu);
    navContent.append(searcher);
});
