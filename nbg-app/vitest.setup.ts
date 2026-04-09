// nbg-app/vitest.setup.ts
import '@testing-library/jest-dom'

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  constructor(_cb: IntersectionObserverCallback, _opts?: IntersectionObserverInit) {}
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
