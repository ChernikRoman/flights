export default function timeConverter(time) {
  let hours = Math.trunc(time/60);
  let minutes = time % 60;
  return `${hours} ч ${minutes} м`;
}
