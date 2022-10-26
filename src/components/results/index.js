import React from 'react';

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'
const Results = ({ data }) => {
  return (
    <section data-testid='results'>
      {data ?
        (<>
          <span className="results">Results
          <JSONPretty data={data}/>
          </span>
        </>) :
        (<span>.......Doing The Thing........</span>)
      }
    </section>
  );
}
export default Results;
