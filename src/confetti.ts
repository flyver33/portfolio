import type { CSSProperties } from 'react'

/* Вектор полёта конфетти: откуда (относительно финальной позиции) элемент
   вылетает, плюс финальный поворот и задержка. Работает в паре с классом
   .confetti (см. index.css) — используется в hero, about и карточках кейсов. */
export const fly = (fx: number, fy: number, rot: number, delay: number): CSSProperties =>
  ({
    '--fx': `${fx}px`,
    '--fy': `${fy}px`,
    '--rot': `${rot}deg`,
    '--d': `${delay}ms`,
  }) as CSSProperties
