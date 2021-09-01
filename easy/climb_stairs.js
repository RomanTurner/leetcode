var climbStairs = function (n) {
  if (n === 1) return 1;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/*
Fib(n)=Fib(n−1)+Fib(n−2)

Now we just have to find nth number of the fibonacci series having 11 and 22 their first and second term respectively, i.e. Fib(1)=1Fib(1)=1 and Fib(2)=2Fib(2)=2.
*/

function fibClimb(n) {
    if (n == 1) {
        return 1; 
    }
    let first = 1;
    let second = 2;
    for (let i = 0; i <= n; i++){
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}