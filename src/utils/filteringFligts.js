export default function filteringFlights(flights, settings) {
  console.log(settings)
  function filteringByTransfer(elm) {
    let rules = [];
    if(settings.transfer.direct) rules.push(2);
    if(settings.transfer.oneConnection) rules.push(3);
    if(settings.transfer.twoConnection) rules.push(4);
    return elm.flight.legs[0].segments.length + elm.flight.legs[1].segments.length <= Math.max(...rules);
  }

  function filteringByPrice(elm) {
    return settings.minPrice <= +elm.flight.price.total.amount && +elm.flight.price.total.amount <= settings.maxPrice;
  }

  function filteringByCarrier(elm) {
    return settings.carriers.some((i) => i.uid === elm.flight.carrier.uid);
  }

  return flights
    .filter(filteringByTransfer)
    .filter(filteringByPrice)
    .filter(filteringByCarrier)
}
