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
            date: 'Jan 14 - 15, 2017',
            content: `
            <div class='title'>Competition: Tribox Open Winter 2017 </div>
            <div class='location'>Location: Kawasaki, Japan</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/TriboxOpenWinter2017">More information</a></div>
            `,
        },
        {
            date: 'Feb 18, 2017',
            content: `
            <div class='title'>Competition: Dallas Winter Variation 2017 </div>
            <div class='location'>Location: Dallas, Texas, United States</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/DallasWinterVariation2017">More information</a></div>
            `,
        },
        {
            date: 'Feb 12, 2017',
            content: `
            <div class='title'>Competition: Cube-E-Mania Open 2017</div>
            <div class='location'>Location: Dhanbad, Jharkhand, India</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/CubeEManiaOpen2017">More information</a></div>
            `,
        },
        {
            date: 'Jul 13 - 16, 2017',
            content: `
            <div class='title'>Competition: ${trophy} World Rubik's Cube Championship 2017</div>
            <div class='location'>Location: Paris, France</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/WC2017">More information</a></div>
            `,
        },
        {
            date: 'Sep 16 - 17, 2017',
            content: `
            <div class='title'>Competition: Tembleque Open 2017</div>
            <div class='location'>Location: Tembleque, Toledo, Spain</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/TemblequeOpen2017">More information</a></div>
            `,
        },
        {
            date: 'Oct 28, 2017',
            content: `
            <div class='title'>Competition: San Ramon Cubed 2017</div>
            <div class='location'>Location: San Ramon, California, United States</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/SanRamonCubed2017">More information</a></div>
            `,
        },
        {
            date: 'Nov 24 - 26, 2017',
            content: `
            <div class='title'>Competition: MPEI Open 2017</div>
            <div class='location'>Location: Moscow, Russia</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/MPEIOpen2017">More information</a></div>
            `,
        },
        {
            date: 'Dec 26, 2017',
            content: `
            <div class='title'>Competition: Kyrgyzstan Open 2017</div>
            <div class='location'>Location: Bishkek, Kyrgyzstan</div>
            <div class='more-information'><a target="_blank" href="https://www.worldcubeassociation.org/competitions/KyrgyzstanOpen2017">More information</a></div>
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
