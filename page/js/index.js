// import { toggleMobileNav } from './nav'
import $ from "jquery";
import { NavBarController } from './navbar'

window.onload = (function () {

    const ig = $('.icon-social-ig')
    const fb = $('.icon-social-fb')
    const tw = $('.icon-social-tw')

    // Animation to the social media buttons
    ig.on('click', heartEffect)
    tw.on('click', heartEffect)
    fb.on('click', heartEffect)
    // Simulate funcionality
    simulateFunctionality()
    // NavBar Controll
    NavBarController.init()

})

// Funcionality 
export function simulateFunctionality () {

    let email = $('#exampleEmailInput')

    /* Actual page */
    $('#breadcrumbs a:last-child').on('click', (e) => {
        e.preventDefault()
    }).css({ 'color': 'black', 'cursor': 'default' })
    /* Change language */
    $('.langauge').on('click', (e) => {
        console.log('changed!')
    })
    /* Submit form */
    $('#subscribe').on('click', (e) => {
        e.preventDefault()
        let emailValue = email.val().trim()
        if (/[a-zA-Z0-9]+@[a-zA-z]+\.[a-zA-Z]+/.test(emailValue)) {
            alert('Subscribed succesfully!')
            if (email.hasClass('animate__shakeX')) {
                email.removeClass('animate__shakeX').removeClass('animate__animated')
            }
        } else {
            email
                .addClass('animate__shakeX')
                .addClass('animate__animated')
            setTimeout(function () {
                email.removeClass('animate__animated').removeClass('animate__shakeX');
            }, 1000);
        }
    })
}
// HeartEffect to elements
export function heartEffect(e) {
    e.preventDefault()
    $(e.target)
        .addClass('animate__animated')
        .addClass('animate__heartBeat')
    setTimeout(function () {
        $(e.target).removeClass('animate__animated').removeClass('animate__heartBeat');
    }, 2000);
}