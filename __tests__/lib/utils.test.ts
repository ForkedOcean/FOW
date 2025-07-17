import { sanitizeInput, debounce, safeJsonParse } from '@/lib/utils'

describe('Utils', () => {
  describe('sanitizeInput', () => {
    it('removes dangerous characters', () => {
      const input = '<script>alert("xss")</script>'
      const result = sanitizeInput(input)
      expect(result).toBe('scriptalert("xss")/script')
    })

    it('removes javascript: protocol', () => {
      const input = 'javascript:alert("xss")'
      const result = sanitizeInput(input)
      expect(result).toBe('alert("xss")')
    })

    it('removes event handlers', () => {
      const input = 'onclick=alert("xss")'
      const result = sanitizeInput(input)
      expect(result).toBe('alert("xss")')
    })
  })

  describe('debounce', () => {
    jest.useFakeTimers()

    it('delays function execution', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn()
      expect(mockFn).not.toHaveBeenCalled()

      jest.advanceTimersByTime(100)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })
  })

  describe('safeJsonParse', () => {
    it('parses valid JSON', () => {
      const result = safeJsonParse('{"test": true}', {})
      expect(result).toEqual({ test: true })
    })

    it('returns fallback for invalid JSON', () => {
      const fallback = { error: true }
      const result = safeJsonParse('invalid json', fallback)
      expect(result).toBe(fallback)
    })
  })
})