//Print the total population of countries using reduce function
var data=[]
    var req=new XMLHttpRequest();
    req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
    req.send();
    req.onload=function(){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}