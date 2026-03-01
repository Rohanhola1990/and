'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cur-dot')
    const ring = document.getElementById('cur-ring')
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let visible = false

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = (mx - 4) + 'px'
      dot.style.top  = (my - 4) + 'px'
      if (!visible) {
        visible = true
        dot.style.opacity  = '1'
        ring.style.opacity = '0.45'
      }
    }
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; visible = false }
    const onEnter = () => { dot.style.opacity = '1'; ring.style.opacity = '0.45'; visible = true }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    let raf
    const animRing = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = (rx - 17) + 'px'
      ring.style.top  = (ry - 17) + 'px'
      raf = requestAnimationFrame(animRing)
    }
    raf = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cur-dot" />
      <div id="cur-ring" />
    </>
  )
}
