function solve(numbers) {
    const nums = numbers.filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
    console.log(nums.join(', '))
}
solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])