const  User={name: "sam",email:"sam@gamil.com",place :"kochi"}

function Profile() {
  return (
    <div>
      <h1>{User.name}</h1>
      <h1>{User.email}</h1>
      <h1>{User.place}</h1>
    </div>
  )
}

export default Profile
