/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */


// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_FILTER = createActionName('CHANGE_FILTER');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeFilter = payload => ({ payload, type: CHANGE_FILTER });

// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };

    case CHANGE_FILTER:
      if (action.payload.checked && !statePart.tags.includes(action.payload.tag)) {
        return {
          ...statePart,
          tags: [...statePart.tags, action.payload.tag],
        };
      } else return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !==action.payload.tag),
      };

    // TODO - handle other action types
    default:
      return statePart;
  }
}
