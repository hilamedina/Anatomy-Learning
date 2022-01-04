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
  console.log('hila', arrayOfOrgans);
  return (
    <div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <br />
      <h1> done orangs</h1>
      <div>
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
