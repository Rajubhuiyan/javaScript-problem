var speech = 'i am a good person. I dont snore at night';
var count = 0;
for (var i = 0; i < speech.length; i++){
    var charector = speech[i];
    if(charector == " " && speech[i-1] !=" "){
        count++;
    } 
}
count++;
console.log(count);