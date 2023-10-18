import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedBar() {

    const now = 60;
    const label = "Loading Your Report";
    return (
        <>
            <div className="container">
                <div id="progressHeader">
                    {label}
                </div>
                <ProgressBar animated now={now} label={`${now}%`}/>
            </div>
        </>
    );
}

export default AnimatedBar;