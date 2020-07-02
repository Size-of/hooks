import { useEffect } from 'react'

const useWillUnmount = (fn: () => any): void => {
  useEffect(() => fn, [])
}

export default useWillUnmount
