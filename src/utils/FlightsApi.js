class FlightsApi {
  constructor({baseURL}) {
      this.baseURL = baseURL;
  }

  _checkResponse(response) {
      if(response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }

  getFlights() {
      return fetch(`${this.baseURL}`, {
          method: 'GET',
      })
        .then(this._checkResponse)
  }
}

const flightsApi = new FlightsApi({
  baseURL: 'https://api-flights.vercel.app/flights',
  // baseURL: 'http://localhost:3000/flights',
});

export default flightsApi;