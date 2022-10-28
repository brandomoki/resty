function History(props) {
  return (

    <section className="history-results">
      <h3 className="h3-history">History</h3>
      {(props.history.map((reqHistory, index) =>
        <div className="history" key={index} >
          <span>{reqHistory.method}</span>
          <p>{reqHistory.url}</p>
        </div>
      ))}
    </section>
  );
}

export default History;