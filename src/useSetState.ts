import { useRef, useCallback } from "react";


const useSetState = <T extends object>(initialState: T = {} as T): [T, (changeState: Partial<T>) => void] => {
  const stateRef = useRef(initialState)

  const setState = useCallback((changeState: Partial<T>) => {
    Object.assign(stateRef.current, changeState)
  }, [stateRef])

  return [
    stateRef.current,
    setState
  ]
}

export default useSetState