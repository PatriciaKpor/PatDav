import { useEffect, useRef, useState } from 'react'

function RevealSection({ as: Component = 'section', className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={`${className} transform transition duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default RevealSection
