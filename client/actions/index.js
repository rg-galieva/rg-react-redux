import { DRAFT } from 'client/actions/constants';

// eslint-disable-next-line import/prefer-default-export
export function draftAction(payload) {
  return {
    type: DRAFT,
    payload,
  };
}
