import React from 'react';
import T from 'prop-types';
import loader from '../../img/spinner.gif';

export const PreloaderInTable = ({ cols }) => (
  <tr className="table_row with_spiner">
    <th colSpan={cols}>
      <img src={loader} className="spiner" alt="Preloader" />
    </th>
  </tr>
);

PreloaderInTable.propTypes = {
  cols: T.number.isRequired,
};

export const PreloaderOnAllPage = () => (
  <div className="content">
    <div className="spiner">
      <i>
        <img src={loader} className="preloader" alt="sometext" />
      </i>
    </div>
  </div>
);
