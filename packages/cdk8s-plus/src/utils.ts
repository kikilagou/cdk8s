import { Lazy } from 'constructs';

export function lazy<T>(producer: () => T): T {
  return Lazy.anyValue({ produce: () => producer() }) as unknown as T;
}


export function undefinedIfEmpty<T>(obj: T): T | undefined {
  if (typeof(obj) === 'string' && obj === '') { return undefined; }
  if (Array.isArray(obj) && obj.length === 0) { return undefined; }
  if (typeof(obj) === 'object' && Object.keys(obj).length === 0) { return undefined; }
  return obj;
}