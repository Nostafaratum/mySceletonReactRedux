import React from 'react';

const NoDataRow = ({ cols }) => (
  <table>
    <tbody>
      <tr className="table_title">
        <th colSpan={cols} className="text-center">
          Nothing to show
        </th>
      </tr>
    </tbody>
  </table>
);

export default NoDataRow;
