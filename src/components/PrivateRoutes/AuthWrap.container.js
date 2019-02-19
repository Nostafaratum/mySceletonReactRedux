import { connect } from 'react-redux';
import AuthWrap from './AuthWrap.component';

const mapStateToProps = state => ({
  auth: state.admin.auth,
});

export default connect(mapStateToProps)(AuthWrap);
