//1
//called test function by myInterval
var test = function testMyInterval(){
  console.log("i'm over here!");
}
//myInterval function
function myInterval(someFunc, timer) {
  setTimeout(myInterval(someFunc, timer), 0)
}



//2
