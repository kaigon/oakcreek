var u = new Url();
console.log(u);
if(u.query.section){
	$('html,body').animate({
        scrollTop: $('.' + u.query.section).offset().top
    }, 0);
}


// smooth scroll navigation
$('[data-scrollto]').click(function() {
    var target = $(this).data('scrollto');
    var mobile = $('.nav-popout');
    if (mobile.hasClass('open')) {
        $(mobile).removeClass('open');
    }
    $('html,body').animate({
        scrollTop: $('.' + target).offset().top
    }, 1000);

    window.history.pushState(null, null, '?section='+target);

});

// add classes to body based on elements' locations
// uses the waypoints.js vendor plugin
var waypoints = $('section').waypoint(function(direction) {
    var target = this.element.className;
    if (direction === "up") {
        var previous = $('.' + target).prev('section').attr('class');
        $('body').attr('data-viewing', previous);
    } else if (direction === "down") {
        $('body').attr('data-viewing', target);
    }
}, {
    offset: '44'
});


// detects when <header> is gone from view and enables menu button
// also uses the waypoints.js vendor plugin
var waypoints = $('.header').waypoint(function(direction) {

    if (direction === "up") {
        $('.nav-popout').addClass('full').removeClass('open');
    } else if (direction === "down") {
        $('.nav-popout').removeClass('full');
    }
}, {
    offset: function() {
        return -this.element.clientHeight;
    }
});
