const ProgressBar = ({
  bgcolor,
  completed,
  arrayOfOrgans,
  onDelete,
  returnToBody,
}) => {
  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'purple',
    fontWeight: 'bold',
  };

  return (
    <div className="Progress-Div">
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <br />
      <div className="Map-Div">
        <h1> You Learn</h1>
        <div>
          {arrayOfOrgans.map((txt) => (
            <p key={txt}>
              <button onClick={() => onDelete(txt)}>␡</button>
              {txt}
            </p>
          ))}
        </div>
      </div>
      <button className="Button" onClick={() => returnToBody()}>
        ⮐
      </button>
    </div>
  );
};

export default ProgressBar;
