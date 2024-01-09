function maxContiguousSubArrSum(arr) {
    if (!arr.length) {
        return 0;
    }

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Examples
const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Output:", maxContiguousSubArrSum(input1));

const input2 = [-1, -2, -3, -4, -5];
console.log("Output:", maxContiguousSubArrSum(input2));

const input3 = [1, 2, 3, 4, 5];
console.log("Output:", maxContiguousSubArrSum(input3));

const input4 = [2, -1, 4, -2, 5, -3, 6, -4, 7];
console.log("Output:", maxContiguousSubArrSum(input4));
