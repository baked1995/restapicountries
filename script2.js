//Print the following details name, capital, flag using forEach function.
var data=[]
    var req=new XMLHttpRequest();
    req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
    req.send();
    req.onload=function(){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}
