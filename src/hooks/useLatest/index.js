import { useEffect, useRef } from 'react'

function useLatest(value) {
  const valRef = useRef()
  useEffect(() => {
    valRef.current = value
  }, [value])

  return valRef
}
export default useLatest
