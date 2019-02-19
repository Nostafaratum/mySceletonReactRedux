import React from 'react';
import T from 'prop-types';

const AlertTemplate = ({ classNames, condition, id, styles, customFields: { title, message }, handleClose }) => (
  <div className={`${classNames} notification ${condition === 'error' ? 'red2' : 'green2'}`} id={id} style={styles}>
    <i className="s-alert-close " id="close_btn" onClick={handleClose} />
    <p className="notification_title">
      {condition === 'error' && (
        <span className="fa_wrap">
          <i className="fa fa-exclamation-triangle" />
        </span>
      )}
      {condition === 'success' && (
        <span className="fa_wrap">
          <i className="fa fa-check-circle" />
        </span>
      )}
      {title}
    </p>
    <p className="notification_desc">{message}</p>
  </div>
);

AlertTemplate.propTypes = {
  classNames: T.string,
  condition: T.string,
  id: T.number,
  styles: T.shape({}),
  customFields: T.shape({
    title: T.string,
    message: T.string,
  }),
  handleClose: T.func,
};

AlertTemplate.defaultProps = {
  classNames: '',
  condition: '',
  id: 0,
  styles: {},
  customFields: {
    title: '',
    message: '',
  },
  handleClose: () => {},
};

export default AlertTemplate;
