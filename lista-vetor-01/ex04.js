let nums = [3, 90, 80, 7, 50]
let media = 0;
let soma = 0;

for (let i = 0; i < nums.length; i++) {
    soma = soma + nums[i];


}

media = soma / nums.length;

console.log(media);