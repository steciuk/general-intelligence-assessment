export function chooseRandom<T>(arr: T[], num: number, unique = false): T[] {
  if (unique && num > arr.length) {
    throw new Error("Cannot pick more unique items than the array has");
  }

  const result: T[] = [];

  if (!unique) {
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * arr.length);
      result.push(arr[index]);
    }
  } else {
    const copy = [...arr];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy[index]);
      copy.splice(index, 1);
    }
  }

  return result;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}

export function randomInt(min: number, max: number): number {
  if (min > max) {
    throw new Error("Max must be greater than min");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
