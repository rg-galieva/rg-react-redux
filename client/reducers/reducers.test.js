import draftReducer from 'client/reducers/draftReducer';
import { DRAFT } from 'client/actions/constants';

it('handles actions of type DRAFT', () => {
  const action = {
    type: DRAFT,
    payload: 'Test data',
  };

  const newState = draftReducer([], action);

  expect(newState).toEqual(['Test data']);
});

it('handles action with unknown type', () => {
  const newState = draftReducer([], { type: 'unknown' });

  expect(newState).toEqual([]);
});
