import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Root from './Root.component';

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Root)
);
