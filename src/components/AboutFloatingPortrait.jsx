function AboutFloatingPortrait({ imageSrc, alt }) {
  return (
    <div className="relative mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-[var(--accent)] shadow-[0_8px_32px_rgba(125,211,252,0.25)] md:absolute md:right-10 md:top-24 md:h-[240px] md:w-[240px] animate-float-rotate">
      <img src={imageSrc} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}

export default AboutFloatingPortrait
