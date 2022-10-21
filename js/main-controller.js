'use strict'

function onInit() {
    addClick()
}

function onToggleMenu(ev) {
    ev.stopPropagation()
    if (document.querySelector('.main-nav').classList.contains('transform0')) {
        document.querySelector('.main-nav').classList.remove('transform0')
        document.querySelector('.black-screen').style.opacity = '0'
    }
    else {
        document.querySelector('.main-nav').classList.add('transform0')
        document.querySelector('.black-screen').style.opacity = '1'        
    }
    document.body.classList.toggle('menu-open')
}

function onChangeItem() {
    Array.from(document.querySelectorAll('li')).forEach(li => li.classList.remove('clicked'))
    this.classList.add('clicked')
}

function addClick() {
    const navItems = ['journal', 'about', 'work', 'contact']
    navItems.forEach((i) =>
        document.querySelector(`[name=${i}]`).addEventListener("click", onChangeItem))
}