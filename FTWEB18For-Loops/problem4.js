// Sum from 1 to 50

// Sum of even numbers from 1 to 50;
// 2 + 4 + 6 +.........+50

var sum =0;
for(var i =1;i<=50;i++)
{
  if(i%2==0)
  {
    sum = sum + i;
  }  
  
} 
console.log(sum);