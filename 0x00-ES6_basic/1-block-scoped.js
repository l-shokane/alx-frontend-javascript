export default function taskBlock(trueOrFalse) {
    let task = false;  // Use 'let' to avoid hoisting issues
    let task2 = true;  // Use 'let' to avoid hoisting issues
  
    if (trueOrFalse) {
      let task = true;  // This is block-scoped and won't affect the outer 'task'
      let task2 = false;  // This is block-scoped and won't affect the outer 'task2'
    }
    return [task, task2];
  }
  