function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams(-99, 99, 10));      
console.log(getArrayParams(1, 2, 3, -100, 10)); 
console.log(getArrayParams(5));

function summElementsWorker(...args) {
  if (args.length === 0) return 0;
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}


function differenceMaxMinWorker(...args) {
  if (args.length === 0) return 0;
  let max = Math.max(...args);
  let min = Math.min(...args);
  
  return max - min;
}


function differenceEvenOddWorker(...args) {
  if (args.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  
  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (args.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  
  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
return countEven === 0 ? 0 : sumEven / countEven;
}
console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10)); 

console.log(differenceMaxMinWorker()); 
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))


function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  
  for (let arr of arrOfArr) {
    const result = func(...arr);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}

function summElementsWorker(...args) {
  if (args.length === 0) return 0;
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}

function differenceMaxMinWorker(...args) {
  if (args.length === 0) return 0;
  let max = Math.max(...args);
  let min = Math.min(...args);
  return max - min;
}

function differenceEvenOddWorker(...args) {
  if (args.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...args) {
  if (args.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (let num of args) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  return countEven === 0 ? 0 : sumEven / countEven;
}


const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));       
console.log(makeWork(arr, differenceMaxMinWorker));     
console.log(makeWork(arr, differenceEvenOddWorker));  
console.log(makeWork(arr, averageEvenElementsWorker));  

