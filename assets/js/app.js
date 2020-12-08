const darkL = document.querySelector('.logo-l')
const darkM = document.querySelector('.logo-m')

darkL.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
darkM.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'slow' } })
const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })
tl.to('.illus', { display: 'block', opacity: 1, duration: 3, delay: 1 })
tl.to('#y-1', { x: '200px', repeat: -1, yoyo: true, duration: .8 }, '-=5')
tl.to(' #y-2', { x: '150px', repeat: -1, yoyo: true, duration: .5 }, '-=5')
tl.to('#y-3', { x: '50px', repeat: -1, yoyo: true, duration: .6 }, '-=5')
tl.to('#r-1', { x: '100px', repeat: -1, yoyo: true, duration: .6 }, '-=5')

tl2.from('.hero-img img', { y: '-20%', opacity: 0, duration: 2, delay: 1 })
    .from('.hero-head', { y: '100%', opacity: 0, duration: 1 }, '-=2')
    .from('.hero-btns .btn', { y: '100%', stagger: .3, opacity: 0, duration: 0.2 }, '-=1')
    .from('nav', { display: 'none', duration: 1, opacity: 0 }, '-=2')
    .from('.blue', { display: 'none', opacity: 0, duration: 3 }, '-=2')
