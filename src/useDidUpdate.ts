import { useRef, useEffect } from 'react'

const useDidUpdate = (fn: () => any, deps: any[]): void => {
  const mountedRef = useRef(false)

  useEffect(() => {
    if (mountedRef.current) {
      fn()
    }

    if (!mountedRef.current) {
      mountedRef.current = true
    }
  }, deps)
}

export default useDidUpdate
