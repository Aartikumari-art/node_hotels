// console.log("server file is running");
// var add=function(a,b){
//     return a+b;
// }
// var result=add(2,7);
// console.log(result);


// const sum=function(a,b,Aarti){
//     var result=a+b;
//     console.log('result:'+result);//main function work complete
//     Aarti();
// }
// sum(3,2,function(){
//     console.log('add completed');
// });


// sum(2,3,()=>console.log('add completed'));



// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.txt',' Hello  ' +user.username+ '!\n' ,()=>{ console.log('file is created');//fole(path,data,callback function)
// });

// console.log(fs);

const notes=require('./notes.js')
var _ = require('lodash');



console.log('server file is available');

var age=notes.age;
var result=notes.addNumber(age+18,10);
console.log(age);
console.log('result is now '+result);

var data=["Person","Person",1,2,1,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);
console.log(_.isString(3))