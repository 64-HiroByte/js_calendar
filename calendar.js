const today = new Date();  // 現在の日時
const year = today.getFullYear();
const month = today.getMonth();
const firstDay = new Date(year, month, 1)
const firstDayOfWeek = firstDay.getDay();
const lastDayOfMonth = new Date(year, month +1, 0).getDate();

// create calemdar
const monthlyArray = [];
let dateCount = 1;

while (dateCount <= lastDayOfMonth) {
  const weeklyArray = [];
  
  for (let i = 0; i < 7; i++) {
    if (monthlyArray.length === 0 && i < firstDayOfWeek) {
      weeklyArray.push('');
    } else if (dateCount <= lastDayOfMonth) {
      weeklyArray.push(dateCount);
      dateCount++
    } else {
      weeklyArray.push('');
    }
  }

  monthlyArray.push(weeklyArray);
}

// view calendar
const BLANK = ' ';
const WEEKHEADER = ['日', '月', '火', '水', '木', '金', '土'];
console.log(`${BLANK.repeat(6)}${month + 1}月${BLANK}${year}`)
console.log(WEEKHEADER.join(BLANK));

monthlyArray.forEach(week => {
  const line = week
    .map(day => day === '' ? BLANK.repeat(2): String(day).padStart(2, BLANK))
    .join(BLANK);
  console.log(line);
});
