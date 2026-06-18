

function Profile() {

    // let student = ["Sadhika", "Shwetha"]
    let student = [{ name: "Sadhika", place: "ekm", branch: "Cse" }, { name: "Shwetha", place: "cruz", branch: "Cse" }]

    return (
        <div>
            <h1>Students Info</h1>
            <ol>{
                student.map(function (name, index) {
                    return <li key={index}>
                        <h2>Name:{name.name}</h2>
                        <h3>Place:{name.place}</h3>
                        <h3>Branch:{name.branch}</h3>
                    </li>
                })
            }
            </ol>
            
        </div>
    )
}

export default Profile