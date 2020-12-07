const darkL = document.querySelector('.logo-l')
const darkM = document.querySelector('.logo-m')

darkL.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
darkM.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const tl = gsap.timeline({ defaults: { ease: 'slow' } })

tl.to('#y-1', { x: '200px', repeat: -1, yoyo: true, duration: .8 })
tl.to('#y-2', { x: '150px', repeat: -1, yoyo: true, duration: .5 })
tl.to('#y-3', { x: '50px', repeat: -1, yoyo: true, duration: .6 })
tl.to('#r-1', { x: '100px', repeat: -1, yoyo: true, duration: .6 })