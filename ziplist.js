var a = [1,2,3,4,5];
var b = [6,7,8,9,10];

function ziplist(list1,list2){
   const listTotal = [];
   for(let i = 0;i < list1.length;i++){
     listTotal.push(list1[i],list2[i]);
   }
   return listTotal;
}

console.log(ziplist(a,b));

function  zipListTheSimpleWay(list1,list2){
  return _.flatten(_.zip(list1,list2));
}

console.log(zipListTheSimpleWay(a,b));