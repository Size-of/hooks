import { renderHook } from '@testing-library/react-hooks'
import { useDidMount } from '../src'

it('didmount 只执行一次', () => {
  const fn = jest.fn()
  const { rerender } = renderHook(() => useDidMount(fn))

  expect(fn).toHaveBeenCalledTimes(1)

  rerender()

  expect(fn).toHaveBeenCalledTimes(1)
})