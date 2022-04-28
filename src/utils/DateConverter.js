export default class DateConverter {
  constructor(date) {
    this.date = new Date(date);
  }

  _setDay() {
    let day;
    switch(this.date.getDay()) {
      case 0:
        day = 'вс';
        break
      case 1:
        day = 'пн';
        break
      case 2:
        day = 'вт';
        break
      case 3:
        day = 'ср';
        break
      case 4:
        day = 'чт';
        break
      case 5:
        day = 'пт';
        break
      case 6:
        day = 'сб';
        break
      default:
        break
    }
    this.day = day;
  }

  _setMonth() {
    let month;
    switch(this.date.getMonth()) {
      case 0:
        month = 'янв.';
        break
      case 1:
        month = 'фев.';
        break
      case 2:
        month = 'мар.';
        break
      case 3:
        month = 'апр.';
        break
      case 4:
        month = 'май.';
        break
      case 5:
        month = 'июн.';
        break
      case 6:
        month = 'июл.';
        break
      case 7:
        month = 'авг.';
        break
      case 8:
        month = 'сен.';
        break
      case 9:
        month = 'окт.';
        break
      case 10:
        month = 'ноя.';
        break
      case 11:
        month = 'дек.';
        break
      default:
        break
    }
    this.month = month;
  }

  getDate() {
    this._setDay();
    this._setMonth();
    return `${this.date.getDate()} ${this.month} ${this.day}`;
  }

  getTime() {
    return `${this.date.getHours()}:${this.date.getMinutes()}`
  }
}