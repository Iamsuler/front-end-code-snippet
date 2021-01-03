let weeks = {
  formatDate: date => {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
  },
  getAllDays: function (date) {
    let daysArr = [];
    let now = date || new Date();
    let firstDay = new Date(now - now.getDay() * 86400000);
    let dayStr = '', monStr = '';

    console.log(now)

    for (let index = 0; index < 7; index++) {
      firstDay.setDate(firstDay.getDate() + index);
      monStr = Number(firstDay.getMonth());
      
      dayStr = this.formatDate(new Date(now.getFullYear(), monStr, firstDay.getDate()));

      daysArr.push(dayStr);
    }

    return daysArr;
  }
}

console.log(weeks.getAllDays(new Date('2018-7-29')));