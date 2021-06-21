const a1 = [ 'live', 'strong', 'arp'];
const a2 = ['lively', 'alive', 'harp', 'sharp', 'strong'];
function arraySort(a1, a2){
let r = [];
let substr = [];
a2.forEach((item2) => {
    a1.forEach((item1) => {
        if(item2.includes(item1)){
            substr.push(item1);
        }
    });
});
// for(let j = 0; j < a2.length; j++){
//     for(let i = 0; i < a1.length; i++){
//         if(a2[j].includes(a1[i])){
//             substr.push(a1[i]);
//         }
//     }
// }
let uniqueSubstr = substr.filter((item, index) => {
    return substr.indexOf(item) === index;
});

r = uniqueSubstr.sort((a, b) => {
    // return a - b;
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
});
return r;
}
console.log(arraySort(a1, a2));
