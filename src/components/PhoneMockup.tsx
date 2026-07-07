type PhoneMockupProps = {
  src: string
  alt?: string
  className?: string
}

/* Мокап телефона: тёмный «корпус» вокруг светлого скриншота */
function PhoneMockup({ src, alt = '', className = '' }: PhoneMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-[22px] border-[3px] border-line bg-elevated p-1 shadow-(--shadow-card) ${className}`}
    >
      <img src={src} alt={alt} draggable={false} className="block w-full rounded-[14px]" />
    </div>
  )
}

export default PhoneMockup
