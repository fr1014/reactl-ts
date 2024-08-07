import './MyFirstButton.css'
import logo from '../../assets/images/logo.png'

function MyButton() {
    return(
        <button>I`m a button</button>
    );
}

export default function MyFirstButton() {
    return(
        <div>
            <h1>Welcome to my first button</h1>
            <MyButton/>
            <p>Hello there.<br />How do you do?</p>
            <img className="avatar" src={logo} alt=''></img>
        </div>
    );
}