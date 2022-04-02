//jshint esversion:6
module.exports.getdate=getdate
var getdate=function(){
let today1=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
let day=today1.toLocaleDateString("en-US",options)
return day;
}
module.exports.getday=getday
var getday=function(){
    let today1=new Date();
        let options={
            weekday:"long"
        }
    let day=today1.toLocaleDateString("en-US",options)
    return day;
    }