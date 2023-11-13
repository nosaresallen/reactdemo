import { updateDoc } from "firebase/firestore"

export default function Student ({firstname, lastname, grade, deleteStudent, studentID, updateStudent}){

    return (
        <section>
    
            <div className="alert alert-light">{lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
            <button onClick={()=>{
                deleteStudent(studentID, firstname, lastname)
            }} className="btn btn-danger btn-sm float-end">Delete</button>
            <button onClick={()=>{
                updateStudent(studentID, firstname, lastname, grade)
            }}
            className="btn btn-success btn-sm float-end me-2">Edit</button>
            </div>
        </section>
    )
}