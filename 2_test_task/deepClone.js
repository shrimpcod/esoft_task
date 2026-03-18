function deepClone(value, visited = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (visited.has(value)) {
    return visited.get(value);
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    visited.set(value, clonedMap);
    value.forEach((val, key) => {
      clonedMap.set(deepClone(key, visited), deepClone(val, visited));
    });
    return clonedMap;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    visited.set(value, clonedSet);
    value.forEach((val) => {
      clonedSet.add(deepClone(val, visited));
    });
    return clonedSet;
  }

  if (Array.isArray(value)) {
    const clonedArr = [];
    visited.set(value, clonedArr);
    for (let i = 0; i < value.length; i++) {
      clonedArr[i] = deepClone(value[i], visited);
    }
    return clonedArr;
  }

  const clonedObj = Object.create(Object.getPrototypeOf(value));
  visited.set(value, clonedObj);

  const keys = [
    ...Object.getOwnPropertyNames(value),
    ...Object.getOwnPropertySymbols(value),
  ];

  for (const key of keys) {
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    if ("value" in descriptor) {
      descriptor.value = deepClone(descriptor.value, visited);
    }
    Object.defineProperty(clonedObj, key, descriptor);
  }

  return clonedObj;
}
