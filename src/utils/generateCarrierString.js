export default function generateCarrierString(carrier1, carrier2) {
  return carrier1 === carrier2 ? carrier1 : `${carrier1} и ${carrier2}`;
}