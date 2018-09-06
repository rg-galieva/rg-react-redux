import React from 'react';

const NoMatch = ({ history }) => (
  <div>
    <h3>
          Sorry, no match for:
      <code>{history.location.pathname}</code>
    </h3>
    <a
      className="is-emph"
      role="button"
      onClick={history.goBack}
    >
          Back
    </a>
  </div>
);

export default NoMatch;
