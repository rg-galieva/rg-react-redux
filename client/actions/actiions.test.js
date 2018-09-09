import { draftAction } from 'client/actions';
import { DRAFT } from 'client/actions/constants';


describe('draft', () => {
  it('has the correct type', () => {
    const action = draftAction();

    expect(action.type).toEqual(DRAFT);
  });

  it('has the correct payload', () => {
    const action = draftAction('Test data');

    expect(action.payload).toEqual('Test data');
  });
});
