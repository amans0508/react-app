// Import the React and React DOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me!';
}

//Create React Components
const App = () => {
    //const buttonText = 'Click Me!';
    return (
        <div>
            <label className ="label" for ="name">Enter Name</label>
            <input id = "name" type ="text" />
    <button style = {{backgroundColor: 'blue' , color : 'white' }}>{getButtonText()}</button>
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
);