//Print the country which use US Dollars as currency.
var data=[]
var req=new XMLHttpRequest();
req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
req.send();
req.onload=function(){
var data=JSON.parse(this.response);
var cur=[];
for(i=0;i<data.length;i++){
    if(data[i].currencies[0].code==="USD")
    {
        console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
    }
}
}