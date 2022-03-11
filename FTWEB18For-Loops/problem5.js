// Average of sum of even numbers

var sum_even =0;
var count =0;

for(var i =1; i<=100;i++)
{

  if(i%2==0)
  {
    sum_even = sum_even + i;
    count++;
  }  
  
  
}  
var average = sum_even/count;

console.log(average);
//console.log(count);
