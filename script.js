//Get all the countries from Asia continent /region using Filter function
var data=[]
    var req=new XMLHttpRequest();
    req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
    req.send();
    req.onload=function(){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}