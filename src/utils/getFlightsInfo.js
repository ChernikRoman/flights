export default function getFlightsInfo(flights) {
  if(flights.length === 0) return

  const flightsInfo = {
    transfer: {},
    minPrice: [],
    prices: [],
  };

  flights.forEach(elm => {
    flightsInfo[elm.flight.carrier.caption] = {caption: elm.flight.carrier.caption, uid:elm.flight.carrier.uid}
    if(elm.flight.legs[0].segments.length + elm.flight.legs[1].segments.length === 2) flightsInfo.transfer.direct = true;
    if(elm.flight.legs[0].segments.length + elm.flight.legs[1].segments.length === 3) flightsInfo.transfer.oneConnection = true;
    if(elm.flight.legs[0].segments.length + elm.flight.legs[1].segments.length === 4) flightsInfo.transfer.twoConnection = true;
    flightsInfo.minPrice.push({airline: elm.flight.carrier.caption, price: elm.flight.price.total.amount})
  });

  flightsInfo.minPrice.forEach((elm)=>{
    flightsInfo.prices.push(elm.price)
    flightsInfo[elm.airline].price === undefined
       ? flightsInfo[elm.airline].price = +elm.price
       : flightsInfo[elm.airline].price > +elm.price && (flightsInfo[elm.airline].price = +elm.price)
  })

  // const prices = flightsInfo.minPrice.map((elm) => {
  //   return elm.price
  // })

  const carriersArr = [];
  for(let key in flightsInfo) {
    if(key !== 'minPrice' && key !== 'transfer' && key !== 'prices') {
      carriersArr.push(flightsInfo[key])
    }
  }

  return {
    carriers: carriersArr,
    transfer: flightsInfo.transfer,
    minPrice: Math.min(...flightsInfo.prices),
    maxPrice: Math.max(...flightsInfo.prices)
  }
}