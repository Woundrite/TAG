let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.garbage', 3 , {y: -400})
    .to('.rock', 3 , {y: -100}, '-=3')
    .to('.logo', 3 , {y: -300}, '-=3')
    // .fromTo('.img',{y: -50}, {y: 0, duration: 3}, '-=3')
    .to('.notes', 3 , {top: '0%'}, '-=3');


let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '100%',
    triggerHook : 0,
})
.setTween(timeline)
.setPin('section')
.addTo(controller);