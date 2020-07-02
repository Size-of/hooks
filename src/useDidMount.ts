import { useEffect } from 'react'

const useDidMount = (fn: () => any): void => {
  useEffect(() => {
    fn()
  }, [])
}

export default useDidMount
