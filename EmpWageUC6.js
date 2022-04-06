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

function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

MAX_HRS_IN_MONTH = 160;
NUM_OF_WORKING_DAYS = 20;
TotalempHrs =0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (TotalempHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);
    TotalempHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(TotalempHrs);
console.log(" total Days : " + totalWorkingDays + " Total Hrs : " + TotalempHrs + " Emp Wage : " +empWage);

//UC7
//UC7-A

TotalempWage = 0;
function sum(dailyWage){
    TotalempWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7-A - Total Days : " + totalWorkingDays + " Total Hrs : " + TotalempHrs + " Emp Wage : "+TotalempWage);

function totalWage(TotalempWage, dailyWage)
{
    return TotalempWage + dailyWage;
}
console.log("UC-A - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWage));

//UC7-B
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7-B Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7-C
function fulltimeWage(dailyWage) 
{
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7-C - Daily Wage Filter when full time wage Earned");
console.log(fullDayWageArr);

//UC7-D
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7-D First time Fulltime Wage was earned on Day : " + mapDayWithWageArr.find(findFulltimeWage));

//UC7-E
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7-E - Check All Element have Full time Wage : " + fullDayWageArr.every(isAllFulltimeWage));

//UC7-F
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7-F - check if any part time wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7-G
function totalDaysWorked(NUM_OF_WORKING_DAYS, dailyWage)
{
    if(dailyWage > 0)
    return NUM_OF_WORKING_DAYS++;
    return NUM_OF_WORKING_DAYS;
}

console.log("UC7-G - Number of Days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked,0));