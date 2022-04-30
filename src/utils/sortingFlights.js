export default function sortingFlights(flights, setting) {
  const sortingFunctions = {
    sortByMinPrice(a, b) {
      if(+a.flight.price.total.amount > +b.flight.price.total.amount) return 1;
      if(+a.flight.price.total.amount === +b.flight.price.total.amount) return 0;
      if(+a.flight.price.total.amount < +b.flight.price.total.amount) return -1;
    },
    sortByMaxPrice(a, b) {
      if(+a.flight.price.total.amount > +b.flight.price.total.amount) return -1;
      if(+a.flight.price.total.amount === +b.flight.price.total.amount) return 0;
      if(+a.flight.price.total.amount < +b.flight.price.total.amount) return 1;
    },
    sortByDuration(a, b) {
      if(a.flight.legs[0].duration + a.flight.legs[1].duration > b.flight.legs[0].duration + b.flight.legs[1].duration) return 1;
      if(a.flight.legs[0].duration + a.flight.legs[1].duration === b.flight.legs[0].duration + b.flight.legs[1].duration) return 0;
      if(a.flight.legs[0].duration + a.flight.legs[1].duration < b.flight.legs[0].duration + b.flight.legs[1].duration) return -1;
    }
  }

  return flights.sort(sortingFunctions[setting])
}