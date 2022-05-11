//Get all the countries with population of less than 2 lacs using Filter function
var data=[]
    var req=new XMLHttpRequest();
    req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
    req.send();
    req.onload=function(){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}