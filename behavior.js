gsap.timeline({
  scrollTrigger: {
    trigger: 'svg',
    start: '0% 20%',
    markers: true
  }
}).fromTo('.outer_frame', 
    { 'stroke-dashoffset': '1300px' },
    { 'stroke-dashoffset': '0', duration: 3, stagger: .2 })
  .fromTo('.logo_svg', 
    { 'stroke-dashoffset': '1300px' },
    { 'stroke-dashoffset': '0', duration: 2, stagger: .2 })
  .to('.outer_frame',
    { autoAlpha: 0, duration: 1, ease: 'power.inOut' }, 6)
  .to('.logo_svg',
    { autoAlpha: 0, duration: 1, ease: 'power.inOut' }, 6)