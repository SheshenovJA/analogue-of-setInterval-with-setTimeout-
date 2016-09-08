//1

var test = function	testME(){
    console.log("this is interval, its work via setTimeout. Code looks shitty, but i tired as duck")
  };

function myInterval(arr, timer){

  timeoutTimer = setTimeout(
    function tick() {
      arr();
    timeoutTimer = setTimeout(tick, timer);
	 },
    timer);

};
myInterval(test, 4000)
//2

function myAssign(target, sources, options) {
  var target = target;
  for (var defPrpt in sources) {
    for (var propOpt in options) {
      if (defPrpt === propOpt) {
        target[propOpt] = options[propOpt];
      }
        target[defPrpt] = sources[defPrpt];
        target[propOpt] = options[propOpt];
    }
  }
  return target;
}

console.log(myAssign({}, {width: 100, height: 100}, {width: 150}))



//function recursion(c){
  //  setTimeout(function(c){
    //    c = c || 0;
    //    console.log(c++);
      //  recursion(c);
    //},0,c);
//
//recursion();
