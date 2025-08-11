import {parseArgs} from 'node:util';

// コマンドライン引数の設定
const {
  values: {
    strMonth,
  }
} = parseArgs({
  options: {
    strMonth: {
      type: 'string',
      short: 'm',
      default: ''
    }
  }
});

// -m オプションのバリデーション
let specifiedMonth;
if (strMonth) {
  specifiedMonth = Number(strMonth);
  if (!Number.isInteger(specifiedMonth) || specifiedMonth < 1 || specifiedMonth > 12) {
    console.error(
      `-m オプションには 1 - 12 の整数を指定してください(入力値: ${specifiedMonth})`
    );
    process.exit(1);
  }
}

const today = new Date();  // 現在の日時
const year = today.getFullYear();  // 年
const month = strMonth ? specifiedMonth -1 : today.getMonth();  // 月

// 1日の曜日を取得
const firstDayOfWeek = new Date(year, month, 1).getDay();
// 月の末日を取得
const lastDayOfMonth = new Date(year, month +1, 0).getDate();

// カレンダー作成
const monthlyArray = [];  // カレンダー用配列
let dateCount = 1;  // 日付

while (dateCount <= lastDayOfMonth) {
  const weeklyArray = [];  // 7日分の配列
  // 1週間分の日付を配列に追加
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
  // カレンダー用配列に追加
  monthlyArray.push(weeklyArray);
}

// view calendar
const BLANK = ' ';
const WEEKHEADER = ['日', '月', '火', '水', '木', '金', '土'];
console.log(`${BLANK.repeat(6)}${month + 1}月${BLANK}${year}`)
console.log(WEEKHEADER.join(BLANK));

// 1週間毎に出力
monthlyArray.forEach(week => {
  const line = week
    .map(day => day === '' ? BLANK.repeat(2): String(day).padStart(2, BLANK))
    .join(BLANK);
  console.log(line);
});
