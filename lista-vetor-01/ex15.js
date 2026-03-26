let a = [1, 2, 3, 4, 5, 6, 7, ]
let crescente = true;

for(let i = 0; i < a.length; i++)   {
    if(a[i]>a[i+1])  {
        crescente = false
}}

if(crescente)  {
   console.log("crescente");
} else {
    console.log("nao crescente")
}