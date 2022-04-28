export default function bestPriceConverter(prices) {
  const bestPrice = {
    direct: {},
    directArr: [],
    oneConnection: {},
    oneConnectionArr: [],
  }

prices.result.bestPrices.DIRECT.bestFlights.forEach((elm)=>{
  if (!bestPrice.direct.hasOwnProperty(elm.carrier.caption)) {
    bestPrice.direct[elm.carrier.caption] = +elm.price.amount.slice(0, -3);
  } else if (+bestPrice.direct[elm.carrier] > +elm.price.amount) {
    bestPrice.direct[elm.carrier.caption] = +elm.price.amount.slice(0, -3);
  }
})

for (let key in bestPrice.direct) {
    bestPrice.directArr.push({[key]: bestPrice.direct[key]})
}

prices.result.bestPrices.ONE_CONNECTION.bestFlights.forEach((elm)=>{
  if (!bestPrice.oneConnection.hasOwnProperty(elm.carrier.caption)) {
    bestPrice.oneConnection[elm.carrier.caption] = +elm.price.amount.slice(0, -3);
  } else if (+bestPrice.oneConnection[elm.carrier] > +elm.price.amount) {
    bestPrice.oneConnection[elm.carrier.caption] = +elm.price.amount.slice(0, -3);
  }
})

for (let key in bestPrice.oneConnection) {
  bestPrice.oneConnectionArr.push({[key]: bestPrice.oneConnection[key]})
}

delete bestPrice.direct;
delete bestPrice.oneConnection;

return bestPrice;
}
