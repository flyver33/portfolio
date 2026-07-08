type BrowserMockupProps = {
  src: string
  alt?: string
  className?: string
}

/* Мокап окна браузера: тёмная рамка с тремя точками над светлым скриншотом.
   Как и PhoneMockup, позиционируется снаружи через className */
function BrowserMockup({ src, alt = '', className = '' }: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border-[3px] border-line bg-elevated shadow-(--shadow-card) ${className}`}
    >
      <div className="flex gap-1.5 border-b border-line px-2.5 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
      </div>
      <img src={src} alt={alt} draggable={false} className="block w-full" />
    </div>
  )
}

export default BrowserMockup
