// ejercicios//
// numero 1 //
function num(x) {
  for(var i=0;i<=x;i++){
    console.log(i);
  }
}
num(255);

//numero 2 //
function par(x) {
    for(var i=2;i<=x;i=i+2){
      console.log(i);
    }
  }
  par(1000);

  //numero 3//
  function imp(x) {
    for(var i=1;i<=x;i=i+2){
      console.log(i);
    }
  }
imp(5000);
//numero 4//
function sum(x) {
    var sum=0;
    for(var i=0;i<x.length;i++){
      sum=sum+x[i];
    }
    return sum;
  }
console.log( sum([4,2,3]) )
//numero 5//
function may(x) {
    var may=0;
    for(var i=0;i<x.length;i++){
      if (x[i]>may){
          may=x[i]
      }
    }
    return may;
  }
console.log( may([4,2,3]) )
// numero 6//
function prom(x) {
    var prom=0;
    for(var i=0;i<x.length;i++){
          prom=prom+x[i]
    }
    return(prom/x.length)
  }
  console.log(prom([4,2,3]))
  //numero 7///
  function imp(x) {
    var imp=[]
    for(var i=1;i<=x;i=i+2){
      imp.push(i);
    }
    return imp
  }
console.log(imp(50));
//numero 8//
function may(x) {
    var num= y;
    var may=[];
    for(var i=0;i<x.length;i++){
        if (x[i]>num){
            may.push(x[i]);
        }
    }
    return may.length
  }
y=3;
console.log(may([1,3,5,7]));
//numero 9//
function cuad(x) {
    var cuad=[];
    for(var i=0;i<x.length;i++){
          cuad.push(x[i]*x[i]);
    }
    return cuad;
  }
  console.log(cuad([1,5,10,-2]))
//numero 10//
function pos(x) {
    var pos=[];
    for(var i=0;i<x.length;i++){
        if (x[i]>=0){
            pos.push(x[i])
        }
        if (x[i]<0){
            pos.push(0)
        }
    }
    return pos;
  }
  console.log(pos([1,5,10,-2]));
//numero 11//
function varios(x) {
    may=0;
    men=0;
    sum=0;
    for(var i=0;i<x.length;i++){
        sum=x[i]+sum
        if (x[i]>=may){
            may=x[i]
        }
        if (x[i]<men){
            men=x[i]
        }
        
    }
    console.log (may);
    console.log(men)
    return(sum/x.length)
  }
  console.log(varios([1,5,10,-2]));
  //numero 12//
  function squareValue(x){
    var arr=(x);
    var rev= arr.reverse ();
    return rev
   }
   y = squareValue([1,5,10,-2]);
   console.log(y);
   //numero 13 //
   function pos(x) {
    var pos=[];
    for(var i=0;i<x.length;i++){
        if (x[i]>=0){
            pos.push(x[i])
        }
        if (x[i]<0){
            pos.push('Dojo')
        }
    }
    return pos;
  }
  console.log(pos([-1,-3,2]));
///// tengo que decir que las ultimas 3 me ayudo la jocelyn no pude crearlas u.u////