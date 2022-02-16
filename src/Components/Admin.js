function Admin(){
    var people  =  []
    var name = ""
    function addUser(){
        people.push(name)
        console.log("....people",  people)
    }
    function getName(e){
        name = e.target.value
    }
    return (
        <div>
            <input onChange={getName} class="form-control" placeholder="Enter Name"></input>
            <button onClick={addUser} class="btn btn-primary">Add User</button>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {people.map((each,index)=>{
           return  <tr>
  <th scope="row">{index+1}</th>
  <td>{each}</td>
           <td><button className="btn btn-warning">Mark Attendance</button></td>
         </tr>
           })}
   
  </tbody>
</table>
           
          
        </div>
    )
}

export default Admin

// i want to show a label for size of any array 