const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
function getWorkingHours(empCheck)
{
    switch(empCheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        return empHrs;
      
        case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        return empHrs;
        default:
            empHrs=0;
            return empHrs;

    }
}

const NUM_OF_WORKING_DAYS=2;
let empHrs1=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs1 += getWorkingHours(empCheck);

}
let TotalempWage=empHrs1*WAGE_PER_HOUR;
console.log("Total emp wage "+ TotalempWage);
