/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase - DONE
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration - DONE
  output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);

  // TODO - filter by tags,
  if (!filters.tags.length == 0) {
    for (let tag of filters.tags) output = output.filter(trip => trip.tags.includes(tag));
  }

  // TODO - sort by cost descending (most expensive goes first) - DONE
  output.sort(function(a, b) {
    let aCost = a.cost;
    let bCost = b.cost;
    aCost = aCost.replace('$', '');
    bCost = bCost.replace('$', '');
    aCost = parseFloat(aCost.replace(/,/g, ''), 10);
    bCost = parseFloat(bCost.replace(/,/g, ''), 10);
    return bCost - aCost;
  });
  //console.log('output: ', output);
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
