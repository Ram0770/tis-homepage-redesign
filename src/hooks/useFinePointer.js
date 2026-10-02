import { useEffect, useState } from 'react'

const query = '(hover: hover) and (pointer: fine)'

export default function useFinePointer() {
  const [fine, setFine] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return fine
}
