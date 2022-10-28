import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

const Results = (props) => {
  return (
    <>
    <section data-testid='headers'>
    {props.headers ?
      (<>
        <span className="history">History
        <JSONPretty data={props.history}/>
        </span>
        <span className="headers">Headers
        <JSONPretty data={props.headers}/>
        </span>
        <span className="results">Results
        <JSONPretty data={props.data}/>
        </span>
        
      </>) :
      (<span>Buffering........</span>)
    }
  </section>
   
  </>
  );
}
export default Results;





