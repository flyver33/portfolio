type PhoneMockupProps = {
  src: string
  alt?: string
  className?: string
  /** Чёлка-таблетка поверх верха экрана (страница кейса) */
  notch?: boolean
}

/* Мокап телефона: тёмный «корпус» вокруг светлого скриншота */
function PhoneMockup({ src, alt = '', className = '', notch = false }: PhoneMockupProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border-[3px] border-line bg-elevated p-1 shadow-(--shadow-card) ${className}`}
    >
      <img src={src} alt={alt} draggable={false} className="block w-full rounded-[14px]" />
      {notch && (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[10px] h-[14px] w-[38%] -translate-x-1/2 rounded-full bg-elevated"
        />
      )}
    </div>
  )
}

export default PhoneMockup
