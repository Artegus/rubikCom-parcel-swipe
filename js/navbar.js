import $ from "jquery";
// Global variables - hide nav on scroll down
// NavaBar Controller 
const NavBarController = (function () {

    var lastScrollTop = 0
    var scrolled = false
    var delta = 5;
    var navbarHeight

    const toggleMobileNav = (e) => {
        e.preventDefault()
        if ($("nav").hasClass("mobile")) {
            $("nav").removeClass("mobile");
        }
        else {
            $("nav").addClass("mobile");
        }
    }

    function hasScrolled() {
        var st = $(window).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) // make sure user scrolled more than delta
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            if (!$("nav").hasClass("mobile")) {
                $('nav').removeClass("nav-show").addClass("nav-hide");
            }
        }
        else {
            if (st + $(window).height() < $(document).height()) {
                $("nav").removeClass("nav-hide").addClass("nav-show");
            }
        }

        lastScrollTop = st;
    }

    return {
        init() {            

            navbarHeight = $('nav').outerHeight()

            $('.open-menu').on('click', toggleMobileNav)
            /* Redirect home */
            $('.logo').on('click', () => {
                window.location.href = "index.html"
            })
            /* Change language */
            $('.language').on('click', () => {
                console.log('changed!')
            })
            // hide mobile nav when clicking outside of nav area
            $('html').on('click', () => {
                $('nav').removeClass('mobile')
            })

            $("nav").on('click', (e) => {
                e.stopPropagation();
            });

            $(window).on('scroll', () => {
                scrolled = true;
            });

            setInterval(function () {
                if (scrolled) {
                    hasScrolled( delta, navbarHeight)
                    scrolled = false;
                }
            }, 250)
        }
    }

})()

export { NavBarController }
