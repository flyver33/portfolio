type MonitorMockupProps = {
  src: string
  alt?: string
  className?: string
}

/* Мокап монитора: скриншот в тёмной рамке на ножке с основанием.
   Ширину и позицию задаёт className */
function MonitorMockup({ src, alt = '', className = '' }: MonitorMockupProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border-[3px] border-line bg-elevated p-1.5 shadow-(--shadow-card)">
        <img src={src} alt={alt} draggable={false} className="block w-full rounded-[9px]" />
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-8 w-[9%] bg-line [clip-path:polygon(10%_0,90%_0,100%_100%,0_100%)]"
      />
      <div aria-hidden="true" className="mx-auto h-2.5 w-[22%] rounded-full bg-line" />
    </div>
  )
}

export default MonitorMockup
