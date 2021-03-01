import $ from 'jquery'
import './jquery.roadmap.min.js';
import { NavBarController } from './navbar'
import { heartEffect, simulateFunctionality } from './index'
import { simulateSubmitForm } from './contestFirst'

window.onload = (function () {

    const ig = $('.icon-social-ig')
    const fb = $('.icon-social-fb')
    const tw = $('.icon-social-tw')
    // Animation to the social media buttons
    ig.on('click', heartEffect)
    fb.on('click', heartEffect)
    tw.on('click', heartEffect)
    // Simulate funcionality
    simulateFunctionality()
    simulateSubmitForm()
    // NavBar Controll
    NavBarController.init()

    var trophy = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.408 18c.498-3.947 5.592-7.197 5.592-17h-14c0 9.803 5.105 13.053 5.604 17h2.804zm-3.614-11.472l1.46-.202.643-1.326.643 1.326 1.46.202-1.063 1.021.26 1.451-1.3-.695-1.3.695.26-1.451-1.063-1.021zm-3.803 4.128c.286.638.585 1.231.882 1.783-4.065-1.348-6.501-5.334-6.873-9.439h4.077c.036.482.08.955.139 1.405h-2.689c.427 2.001 1.549 4.729 4.464 6.251zm10.009 10.963v1.381h-8v-1.381c1.941 0 2.369-1.433 2.571-2.619h2.866c.193 1.187.565 2.619 2.563 2.619zm8-18.619c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076z"/></svg>`
    // Events for timeLine
    var myEvents = [
        {
            date: 'Jan 13 - 14, 2018',
            content: `
            <div class='title'>Competition: Liechtenstein Open 2018 </div>
            <div class='location'>Location: Vaduz, Liechtenstein</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/LiechtensteinOpen2018">More information</a></div>
            `,
        },
        {
            date: 'Mar 24 - 25, 2018',
            content: `
            <div class='title'>Competition:  Bekubes Open 2018</div>
            <div class='location'>Location: San Jose, Costa Rica</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/BekubesOpen2018">More information</a></div>
            `,
        },
        {
            date: 'Feb 3 - 4, 2018',
            content: `
            <div class='title'>Competition: Inquivesta Cube Open 2018</div>
            <div class='location'>Location: Nadia, West Bengal, India</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/InquivestaCubeOpen2018">More information</a></div>
            `,
        },
        {
            date: 'Mar 2 - 3, 2018',
            content: `
            <div class='title'>Competition: Dhaka Spring Open 2018</div>
            <div class='location'>Location: Dhaka, Bangladesh</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/DhakaSpringOpen2018">More information</a></div>
            `,
        },
        {
            date: 'Jul 19 - 22, 2018',
            content: `
            <div class='title'>Competition: ${trophy} WCA European Championship 2018</div>
            <div class='location'>Location: Madrid, Spain</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/Euro2018">More information</a></div>
            `,
        },
        {
            date: 'Sep 8 - 9, 2018',
            content: `
            <div class='title'>Competition: Champagne Open 2018</div>
            <div class='location'>Location: Reims, France</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/ChampagneOpen2018">More information</a></div>
            `,
        },
        {
            date: 'Dec 1 - 2, 2018',
            content: `
            <div class='title'>Competition: Ugine Jeu et Jouet 2018 </div>
            <div class='location'>Location: Ugine, France</div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/UgineJeuetJouet2018">More information</a></div>
            `,
        },
        {
            date: 'Jan 20 - 21, 2018',
            content: `
            <div class='title'>Competition: Caribe Challenge 2018</div>
            <div class='title'>Competition: Cartagena, Colombia</div>
            <div class='location'>Location: </div>
            <div class='more-information'><a href="https://www.worldcubeassociation.org/competitions/CaribeChallenge2018">More information</a></div>
            `,
        },
    ]
    // TimeLine
    $('#my-timeline').roadmap(myEvents, {
        eventsPerSlide: 4,
        slide: 1,
        orientation: 'auto',
        roatClass: 'roadmap',
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z"/></svg>',
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z"/></svg>',
        eventTemplate: 
            '<div class="event event-custom">' +
                '<div class="event__date">####DATE###</div>' +
                '<div class="event__content">####CONTENT###</div>' +
            '</div>'
    });


})
