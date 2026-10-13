import { useEffect, useRef, useState } from 'react'

/**
 * Adds the `is-visible` class to elements with the `animate-on-scroll` class
 * when they enter the viewport. Returns a ref to attach to a container.
 */
export function useScrollAnimation() {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current || document
    const elements = root.querySelectorAll('.animate-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}

/**
 * Typing effect that cycles through an array of words.
 * @param {string[]} words - Words to cycle through
 * @param {number} typeSpeed - ms per character while typing
 * @param {number} deleteSpeed - ms per character while deleting
 * @param {number} pauseTime - ms to pause at full word before deleting
 */
export function useTypingEffect(words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    let timeout

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1)
          }
          return currentWord.substring(0, prev.length + 1)
        })
      }, isDeleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime])

  return text
}

/**
 * Tracks whether the page has been scrolled past a threshold.
 * @param {number} threshold - Scroll position in px
 */
export function useScrollPosition(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
