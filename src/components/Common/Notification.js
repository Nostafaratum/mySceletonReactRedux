import Alert from 'react-s-alert';

const Notification = (type: 'success' | 'error', message: string) => {
  Alert[type](null, {
    customFields: {
      title: type[0].toUpperCase() + type.slice(1),
      message: message || 'Something went wrong',
    },
  });
};

export default Notification;
