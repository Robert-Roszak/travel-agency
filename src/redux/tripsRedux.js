/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  // TODO - filter by tags,
  console.log(output);
  console.log(filters);
  if (filters.tags) {
    output = output.filter(trip => trip.tags.every(tag => filters.tags.includes(tag)));
  }

  console.log('output: ', output);

  // TODO - sort by cost descending (most expensive goes first)
  /* for (let trip of output) {
    console.log('trip: ', trip);
    console.log('each trip cost: ', trip.cost);
  } */


  var byCost = output.slice(0);
  byCost.sort(function(a,b) {
    a.cost = a.cost.substring(1);
    b.cost = b.cost.substring(1);
    a.cost = parseInt(a.cost);
    b.cost = parseInt(b.cost);
    console.log('a.cost: ', a.cost);
    console.log('b.cost: ', b.cost);
    console.log('a.cost - b.cost: ', a.cost - b.cost);
    return a.cost - b.cost;
  });
  console.log('by cost:');
  console.log(byCost);


  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
