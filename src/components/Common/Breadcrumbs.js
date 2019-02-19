import React from 'react';

const Breadcrumbs = ({ title, children }) => (
  <div className="breadcrumbs">
    <div className="col-sm-4">
      <div className="page-header float-left">
        <div className="page-title with_btn">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="page-header float-right">
        <div className="page-title">
          <ol className="breadcrumb text-right">
            {children}
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Breadcrumbs;
