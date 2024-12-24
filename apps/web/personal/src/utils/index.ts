import { gsap } from 'gsap'

export const createParticleEffect = (parent: HTMLDivElement | null) => {
  if (!parent) return
  const particles = [...Array(10)].map(() => {
    const particle = document.createElement('span')
    particle.className = 'particle absolute'
    parent.appendChild(particle)
    return particle
  })

  particles.forEach(particle => {
    gsap.fromTo(
      particle,
      { opacity: 0, scale: 0, x: 0, y: 0 },
      {
        opacity: 1,
        scale: 1,
        x: gsap.utils.random(-15, 15),
        y: gsap.utils.random(-15, 15),
        duration: 0.6,
        ease: 'power1.out',
        onComplete: () => {
          particle.remove()
        },
      }
    )
  })
}
