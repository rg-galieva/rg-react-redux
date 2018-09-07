import React from 'react';
import PropTypes from 'prop-types';

const NoMatch = ({ history }) => (
  <div>
    <h3>
          Sorry, no match for:
      <code>{history.location.pathname}</code>
    </h3>
    <button
      className="is-emph"
      type="button"
      tabIndex={0}
      onClick={history.goBack}
      onKeyPress={history.goBack}
    >
          Back
    </button>
  </div>
);

NoMatch.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
};

export default NoMatch;
