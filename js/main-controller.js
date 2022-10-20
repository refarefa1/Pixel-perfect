'use strict'

function onInit() {
    addClick()
}

function onChangeItem() {
    Array.from(document.querySelectorAll('li')).forEach(li=>li.classList.remove('clicked'))
    this.classList.add('clicked')
}

function addClick() {
    const navItems = ['journal', 'about', 'work', 'contact']
    navItems.forEach((i) => 
    document.querySelector(`[name=${i}]`).addEventListener("click", onChangeItem))
}