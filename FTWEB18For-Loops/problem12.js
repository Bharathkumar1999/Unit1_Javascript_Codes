//Sum of even numbers from 1 to 50
//2+4+6+.........+50

var sum_even = 0;
var sum_odd = 0;

for(var i =1; i<=100; i++)
{
  if(i%2==0)
  {
    sum_even = sum_even + i;
  }
  else
  {
    sum_odd = sum_odd + i;
  }  
  
} 
console.log(sum_even);
console.log(sum_odd);
