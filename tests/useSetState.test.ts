import { renderHook, act } from '@testing-library/react-hooks'
import { useSetState } from '../src';

it('初始化state', () => {
  const { result } = renderHook(() => useSetState({ a: 1 }))
  const [ state, setState ] = result.current
  expect(setState).toBeDefined()
  expect(state).toEqual({ a: 1 })
})

it('更新state', () => {
  const {result} = renderHook(() => useSetState({ a: 1 }))
  const [ state, setState ] = result.current
  const tempSetState = setState
  act(() => setState({ a: 2, b: 3 }))

  expect(setState).toEqual(tempSetState)
  expect(state).toEqual({ a: 2, b: 3 })
})
