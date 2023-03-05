import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let currentTime: any = new Date()
  return (...args) => {
    const nowTime: any = Date.now()
    if (nowTime - currentTime > delay) {
      func(...args)
      currentTime = Date.now()
    }
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timer: any = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
