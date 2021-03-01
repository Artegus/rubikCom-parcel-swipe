// import { toggleMobileNav } from './nav'
import $ from "jquery";
import { NavBarController } from './navbar'

window.onload = (function () {

    const email = $("#exampleEmailInput")
    const ig = $('.icon-social-ig')
    const fb = $('.icon-social-fb')
    const tw = $('.icon-social-tw')

    NavBarController.init()
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
        if (email.val() != '') {
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
    /* Social media animations */

    ig.on('click', heartEffect)
    tw.on('click', heartEffect)
    fb.on('click', heartEffect)


})

function heartEffect(e) {
    e.preventDefault()
    console.log(e.target)
    $(e.target)
        .addClass('animate__animated')
        .addClass('animate__heartBeat')
    setTimeout(function () {
        $(e.target).removeClass('animate__animated').removeClass('animate__heartBeat');
    }, 2000);
}