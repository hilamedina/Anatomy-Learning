import { AiFillDelete } from 'react-icons/ai';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import './Progress.css';
const ProgressBar = ({
  // bgcolor,
  completed,
  arrayOfOrgans,
  onDelete,
  returnToBody,
}) => {
  const containerStyles = {
    height: 20,
    width: '30%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: '10rem auto 5rem auto',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: 'red',
    borderRadius: 'inherit',
    textAlign: 'right',
  };
  // bgcolor

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
  };
  console.log(arrayOfOrgans);
  return (
    <div className="Progress-Div">
      <h1 className="Header"> Completed organs</h1>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      <br />
      <div className="Map-Div">
        <div className="Text-Container">
          {arrayOfOrgans.map((txt) => (
            <div className="text">
              <p key={txt}>
                <button className="Delete-Button" onClick={() => onDelete(txt)}>
                  <AiFillDelete />
                </button>
                {txt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div Button-Wrapper>
        <button className="Button-R" onClick={() => returnToBody()}>
          <AiOutlineArrowLeft className="Icon-Of" />
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
