export function randomKey() {
  return parseInt(Math.random() * (999999 - 100000) + 100000);
}

export function getNowTime(startTime, endTime) {
  var date = new Date(startTime * 1000);
  const month = (date.getMonth() + 1).toString().padStart(2, 0); //开始的月份
  const startDay = date.getDate(); //开始的日期
  const distanceStartDay = Math.ceil((endTime - startTime) / (60 * 60 * 24));
  return (
    month +
    "/" +
    startDay.toString().padStart(2, 0) +
    "-" +
    (startDay + distanceStartDay).toString().padStart(2, 0)
  );
}
