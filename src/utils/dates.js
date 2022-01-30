import moment from "moment";
import _ from "lodash";

const getAllDaysInMonth = (month, year) => {
  let startDate = moment(new Date(year, month, 1));
  let endDate = moment(new Date(year, month)).endOf("month");

  let currentDate = startDate.clone();
  const dates = [];
  while (currentDate.isSameOrBefore(endDate)) {
    dates.push(currentDate.format())
    currentDate = currentDate.clone().add(1, 'days');
  }

  return dates;
}

const getMonthMatrix = (month, year, weekdays = _.range(0, 7)) => {
  let dates = getAllDaysInMonth(month, year);

  const result = [];

  while (!_.isEmpty(dates)) {
    const days = []
    for (const weekday of weekdays) {
      if (moment(dates[0]).weekday() === weekday) {
        days.push(dates.shift());
      } else {
        days.push(undefined);
      }
    }

    result.push(days);
  }

  return result;
}

export {
  getAllDaysInMonth,
  getMonthMatrix,
}
