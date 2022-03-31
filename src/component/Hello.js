
export default function Hello() {

    function showname() {
        console.log("MIKE");
    } 
    return (
        <div>
            <h1> Hello </h1>
            <button onClick={showname}>Show name</button>
            
        </div>
    );
}