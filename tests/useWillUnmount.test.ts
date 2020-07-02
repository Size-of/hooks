import { renderHook } from "@testing-library/react-hooks"
import { useWillUnmount } from "../src"

it('组件unmount时执行一次', () => {
  const fn = jest.fn()
  const { unmount } = renderHook(() => useWillUnmount(fn))

  expect(fn).not.toHaveBeenCalled()
  unmount()
  expect(fn).toHaveBeenCalledTimes(1)
})