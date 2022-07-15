import "../App.css";

function JankenButton(props){
    return(
        <div>
            <button onClick={props.onClick}>{props.icon}</button>       
        </div>
    );
};

export default JankenButton;