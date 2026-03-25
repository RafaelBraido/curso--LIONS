let nums = [57, 23, 43, 50, 67]
let aura = nums[0]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < aura) {

        aura  = nums[i]
    }
}
console.log("aura",aura)