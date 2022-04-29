export default function timeConverter(time) {
  let hours = Math.trunc(time/60);
  let minutes = time % 60;
  return `${hours < 10 ? '0' + hours : hours} ч ${minutes < 10 ? '0' + minutes : minutes} мин`;
}
