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
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let TotalempHrs=0;
let totalWorkingDays=0;
while(TotalempHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10)%3;
    TotalempHrs += getWorkingHours(empCheck);
}
let empWage = TotalempHrs * WAGE_PER_HOUR;
console.log("total Days: " + totalWorkingDays + " Total Hours : " + TotalempHrs + " Emp Wage : " + empWage);
