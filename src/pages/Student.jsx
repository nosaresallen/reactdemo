export default function Student ({firstname, lastname, grade, deleteStudent, studentID}){

    return (
        <section>
    
            <div className="alert alert-light">{lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
            <button onClick={()=>{
                deleteStudent(studentID, firstname, lastname)
            }} className="btn btn-danger btn-sm float-end">Delete</button>
            <button className="btn btn-success btn-sm float-end me-2">Edit</button>
            </div>
        </section>
    )
}