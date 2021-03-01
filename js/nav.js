import $ from "jquery";
// toggle mobile navigation
function toggleMobileNav(e) {
    e.preventDefault()
	if( $("nav").hasClass("mobile") ) {
		$("nav").removeClass("mobile");
	}
	else {
		$("nav").addClass("mobile");
	}
}

export { toggleMobileNav }



