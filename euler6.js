// difference of sum of squares vs sum numbers squared
// first, sum of squares
let sum1=0;
for(i=1;i<=100;i++){
	sum1 = sum1 + (i*i)
}
// sum of numbers, squared (this ones easy, i know its 5050^2 already)
let sum2=0;
let num=0;
for(i=1;i<=100;i++){
	num = num + i
}
sum2=num*num
sum1=sum2-sum1
console.log(sum1)