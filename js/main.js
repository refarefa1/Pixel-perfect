'use strict'

function onToggleMenu(ev) {
    ev.stopPropagation()
    const isOpen = document.querySelector('.main-nav').classList.toggle('open')
    document.querySelector('.black-screen').style.opacity = isOpen ? 1 : -1
    document.querySelector('.black-screen').style.pointerEvents = isOpen ? 'auto' : 'none'
}

function onRenderModal(elCard){
    document.querySelector('.modal').innerHTML = `
        <button class="btn-close" onclick="onCloseModal()"></button>
        <img class="card-image flex full" src="img/img${elCard}.jpg" alt="">
        <div class="card-text flex flex-column">
            <h2>DUIS AUTE IRURE DOLOR IN HENDERIT IN VOLUPTATE.</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
                doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur...</p>
            <h3>Join us to get access to the latest stories!</h3>
            <form class="flex flex-column align-center">
                <input type="email" placeholder="mail@example.com">
                <button class="btn-submit">Submit</button>
            </form>
        </div>
    `
    document.querySelector('.modal').style.opacity = '1'
    document.querySelector('.black-screen').style.opacity = '1'
}

function onCloseModal(){
    document.querySelector('.modal').innerHTML = ''
    document.querySelector('.modal').style.opacity = '0'
    document.querySelector('.black-screen').style.opacity = '0'
}

