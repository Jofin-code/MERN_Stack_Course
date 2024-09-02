export default function Product() {
    function displayPhones() {
        fetch('https://api.restful-api.dev/objects')
        .then((response) => response.json())
        .then((name) => {console.log(name);})
        }
 return(
    <div>
        <button onClick={displayPhones()} style={{marginTop: "25%"}}>View Phones</button>
    </div>
 )
}