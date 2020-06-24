export default function formatDate(date) {
  const time = new Date(date);

  let dayNum = time.getDay();
  let day;
  switch (dayNum) {
    case 0:
      day = 'Sun';
      break;
    case 1:
      day = 'Mon';
      break;
    case 2:
      day = 'Tues';
      break;
    case 3:
      day = 'Wed';
      break;
    case 4:
      day = 'Thur';
      break;
    case 5:
      day = 'Fri';
      break;
    case 6:
      day = 'Sat';
      break;
    default:
      day = '';
  }
  let amPm = 'AM';
  let hour = time.getHours();
  if (hour > 12) {
    hour -= 12;
    amPm = 'PM';
  }

  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let label = `${day} ${
    time.getMonth() + 1
    }/${time.getDate()} ${hour}:${minutes} ${amPm}`;
  return label;
}
