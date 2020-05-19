import React from 'react';
import ReactDOM from 'react-dom';

function App1() {
  return(
  <div>
    <p>Here it is.....</p>
  </div>
  );
}

function App2() {
  return(
  <div>
    <p>Here App2.....</p>
  </div>
  );
}

function App3() {
  return(
  <div>
    <p>Here App2.....</p>
  </div>
  );
}

ReactDOM.render([<App1 />,<App2 />],document.getElementById('root1'), () => {
  alert('invoked');
});
ReactDOM.render(<App2 />,document.getElementById('root2'));
ReactDOM.render(<App3 />,document.getElementsByClassName('root3')[0]);
