const today = new Date();  // 現在の日時

// console.log(today.getMonth());  //現在の月（ｊｓの表現による 0-11）
// console.log(today.getMonth() + 1);  //一般的な月の表示に変換

// today.setMonth(today.getMonth() + 1, 0); // 末日は翌日の0日で取得できる
// console.log(typeof(today.getDate()));

const year = today.getFullYear();
const month = today.getMonth();
const firstDay = new Date(year, month, 1)
const firstDayOfWeek = firstDay.getDay();

const lastDayOfMonth = new Date(year, month +1, 0).getDate();


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

console.log(monthlyArray);
