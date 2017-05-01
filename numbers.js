//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function sum(a,b,c){
    var total = Number(a) + parseInt(b) + Number(c)
    return total;
}
sum(num10, string8, one)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

function divBy3(num){
  var arr = 0
    for (i=20; i < arr.length ; i++){
        if(num % 3 == 0 && num> 19 && num <101){
            return num;
        }
    }
}
/////// HELP 

function divBy3 (num) {
if (num % 3===0 && num > 19 && num <101) {
  document.write(num);
}
}

divBy3()

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
function averageScore(){
  var sum=0;
      for(var i=0; i < scores.length ; i++){
          sum = sum + scores[i];
          var averageOfScores = sum / scores.length;
}
         return ("The average of the scores is : " + averageOfScores);
}
  averageScore()   