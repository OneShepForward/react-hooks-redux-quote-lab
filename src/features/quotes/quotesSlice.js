import { v4 as uuid } from "uuid";

const id = uuid();

// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    
    case "quotes/remove":
      {
        const newState = state.filter((quote) => quote.id !== action.payload)
        return newState;
      }
      
    case "quotes/upvote":
      return state.map((quote) => {
          if (quote.id === action.payload) {
            return {
              ...quote,
              votes: quote.votes + 1,
          }; 
        } else {
          return quote;
        }
      });
      
    case "quotes/downvote":
      return state.map((quote) => {
          if (quote.id === action.payload && quote.votes && quote.votes > 0) {
            return {
              ...quote,
              votes: quote.votes - 1,
          }; 
        } else {
          return quote;
        }
      });

    default: 
      return state;
    }
}
