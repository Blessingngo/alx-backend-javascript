export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const innerTask = true; // renamed to avoid ESLint warning
    const innerTask2 = false; // renamed to avoid ESLint warning
  }

  return [task, task2];
}
