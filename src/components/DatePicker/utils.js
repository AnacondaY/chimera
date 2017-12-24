import { MODE_DATE, MODE_MONTH, MODE_YEAR } from './constants';
export function getDayCount(year: Number, month: Number): Number{
    if(month === 3 || month === 5 || month === 8 || month === 10){
        return 30;
    }
    if(month === 1){
        if(!year % 4){
            return 29;
        }else{
            return 28;
        }
    }
    return 31;
}

export function getFirstDayOfMonth(date: Date): Number{
    const tmpDate = new Date(date.getTime());
    tmpDate.setDate(1);
    return tmpDate.getDay();
}


export function parseDate(date: Date): Object {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
        timestamp: date.getTime()
    };
}

export function equalDate(date1: Date, date2: Date): Boolean {
    const { year: y1, month: m1, date: d1 } = parseDate(date1 || new Date());
    const { year: y2, month: m2, date: d2 } = parseDate(date2 || new Date());
    return y1 === y2 && m1 === m2 && d1 === d2; 
}

export function compareDate(date1: Date, date2: Date): Boolean {
    const { year: y1, month: m1 } = parseDate(date1);
    const { year: y2, month: m2 } = parseDate(date2);
    return y1 > y2 || m1 > m2;
}

export function formatDate(d: Date, mode: String): String{
    let { year, month, date } = parseDate(d);
    month += 1;
    if(month < 10){
        month = `0${month}`;
    }
    if(date < 10){
        date = `0${date}`;
    }
    return mode === MODE_DATE ? `${year}-${month}-${date}` : mode === MODE_MONTH ? `${year}-${month}` : `${year}`;
}

export function prevDate(date: Date) {
    const { month, year } = parseDate(date);
    const ndate = new Date(date);
    if(month === 0){
        ndate.setMonth(11);
        ndate.setFullYear(year - 1);
    }else{
        ndate.setMonth(month - 1);
    }
    return ndate;
}

export function nextDate(date: Date){
    const { month, year } = parseDate(date);
    const ndate = new Date(date);
    if(month === 11){
        ndate.setMonth(0);
        ndate.setFullYear(year + 1);
    }else{
        ndate.setMonth(month + 1);
    }
    return ndate;
}
