function timeToEat(input){
const breakfast=[6,60];
const lunch=[11,60];
const dinner=[18,60];
let time=input.slice(0,5).split(/[/s:]/);
for(let i=0; i<time.length; i++){
   time[i]=Number(time[i]);
}
if(input.includes("p.m.") && time[0]!=12){
    time[0]+=12;
}
let result=time.map(function(item,index){
    if(index==0 && item>=0 && item<7 ){
       return item=breakfast[0]-item;
    }else if(index==0 && item>=7 && item<12){
       return item=lunch[0]-item;
    }else if(index==0 && item>=12 && item<24){
       return item=dinner[0]-item;
    }
    if(index==1 && item<60 && item>0){
       return item=60-item;
    }else if(index==1 && item==0){
        return item=60-1;
    }
})
if(result[1]==59){
   result[0]++;
   result[1]=0;
}
return result;
}
console.log(timeToEat("2:00 p.m."));
console.log(timeToEat("5:50 a.m."));
console.log(timeToEat("12:50 p.m."));