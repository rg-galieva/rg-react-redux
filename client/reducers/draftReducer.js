import { DRAFT } from 'client/actions/constants';

export default (state, action) => {
  switch (action.type) {
    case DRAFT:
      return [...state, action.payload];

    default:
      return state;
  }
};
