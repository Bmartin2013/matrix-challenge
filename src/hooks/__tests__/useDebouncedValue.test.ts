import { renderHook, act } from '@testing-library/react';
import { useDebouncedValue } from '@/hooks';

jest.useFakeTimers();

test('prompts after delay', () => {
  const { result, rerender } = renderHook(
    ({ value, delay }) => useDebouncedValue(value, delay),
    { initialProps: { value: '', delay: 300 } }
  );

  rerender({ value: 'h', delay: 300 });
  rerender({ value: 'ho', delay: 300 });
  rerender({ value: 'hol', delay: 300 });
  rerender({ value: 'hola', delay: 300 });

  expect(result.current).toBe(''); 

  act(() => { jest.advanceTimersByTime(299); });
  expect(result.current).toBe('');

  act(() => { jest.advanceTimersByTime(1); });
  expect(result.current).toBe('hola');
});
