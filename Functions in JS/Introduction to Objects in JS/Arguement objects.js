function findmax(){
var i;
var max = 0;
for (i=0; i <arguments.length; i++){
    if (arguments [i]>max) {
        max=arguments[i];
    }
}
return max;
}
console.log (findmax(1,2,3,4,64));