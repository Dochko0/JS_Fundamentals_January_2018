function binary(nums) {
    for (let obj in nums) {
        console.log(Math.log2(nums[obj]))
    }
}
binary([1,2,3,4]);