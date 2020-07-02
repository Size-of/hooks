import { renderHook, act } from "@testing-library/react-hooks"
import { useDidUpdate } from "../src"

const fn = jest.fn()

it('mount时不执行', () => {
  const dep = false
  const { rerender } = renderHook(() => useDidUpdate(fn, [dep]))

  expect(fn).not.toHaveBeenCalled()
})

it('依赖项更改时，执行update', () => {
  let dep = false
  const { rerender } = renderHook(() => useDidUpdate(fn, [dep]))
  expect(fn).toHaveBeenCalledTimes(0)

  dep = true
  act(() => rerender())

  expect(fn).toHaveBeenCalledTimes(1)
})
