import React from 'react';

import './styles.css';

type Props = {
    title: string;
    data: string;
}

const ResultContainer = ( { title, data } : Props) => {
    return (
      <div className="data-row-container">
          <p className="result-title">{title}:</p>
          <p className="result-data">
              {data}
          </p>
      </div>
    );
};

export default ResultContainer;
