/* 
* Condition Loops
* This will loop / iterate something you might want if it met certain conditions
* Example if variable with the name 'cat' equals to 1, then it will
* iterate / loop the 'cat' variable until it reaches 10
* The usage for this script will be added below
*/

/* ================ USAGE ======================
* To run the function, enter runConditionLoops(); without anything in it.
* To use the function, enter conditionLoops(); , the params will be added soon. 
* Another function will be added in the next version 
*/ 

function runConditionLoops() {
 return new conditionLoops();
 if(!window.runConditionLoops) {
  console.log("You can't use this code without running the core function!");
 }
 function conditionLoops(type) {
  conditional = type;
  if(conditional === 'variable') {
   function cLVar(varname,condition,callback) {
    variablename = varname;
    if(condition) {
     for(var i=0;i<variablename.length;i++) {
      callback.call(this,window);
     }
    }
    }
   }
  }
  if(conditional === 'array') {
   function cLArr(arrname,condition,callback) {
    arrayname = arrname;
    if(condition) {
     for(var i=0;i<arrayname.length;i++) {
      callback.call(this,window);
     }
    }
    }
   }
  }
 }
}
