import Student from "./Student";
import { useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import firebaseApp from "./firebase.Config";

function Home (){

    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        grade: '',
    });
    const [studentList, setStudentList] = useState([]);
    // const [savedStudentList, setSavedStudentList] = useState([]);

    useEffect(()=>{
        

        //Initialize Cloud firesotre and get a reference to the service
        const db = getFirestore(firebaseApp);

        try {  
            // Reading and displaying data from firestore
            onSnapshot(collection(db, 'students'), snapshot => {

                const newStudentList = [];

                snapshot.forEach(student => {
                    const tempStudent = student.data();
                    tempStudent["student_id"] = student.id;
                    newStudentList.push(tempStudent);
                });
                setStudentList(newStudentList);
                
            });

        }catch(e){
            alert('Could not fetch student data!');
        }
        

        
    },[])

    const addStudent = () => {

        //Initialize Cloud firesotre and get a reference to the service
        const db = getFirestore(firebaseApp);

        if(student.firstname === '' || student.lastname === '' || student.grade === ''){
            alert("Missing fields!");
        }else{
            setStudentList(
                studentList => [
                    ...studentList, student
                ]  
            );

            // Adding data to firestore
            // Appending from existing data
            addDoc(collection(db, 'students'), student);
            
            setStudent({
                firstname: '',
                lastname: '',
                grade: '',
            });

            

        }

    }

    const deleteStudent = (studentID, firstname, lastname) => {
        const db = getFirestore(firebaseApp);
        confirm(`Are you sure you want to delete ${firstname} ${lastname}?`).then(
            deleteDoc(doc(db, 'students', studentID))
        )
        
    }

    return(
        <section>
            <h1 className="fw-bold mb-5">🧑🏻‍🎓Student Records</h1>
            <p>This is a list of student records.</p>
            <hr />
            <div className="mb-5 p-5 border">
                <div className="row">
                    <div className="col-md-5">
                        <label htmlFor="firstname">Firstname:</label>
                        <input className="form-control" 
                            onChange={(e)=>setStudent({
                                ...student,
                                firstname: e.target.value
                            })} 
                            value={student.firstname}
                            type="text" name="firstname" id="firstname" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="Lastname">Lastname:</label>
                        <input className="form-control"
                            onChange={(e)=>setStudent({
                                ...student,
                                lastname: e.target.value
                            })} 
                            value={student.lastname}
                            type="text" name="lastname" id="lastname" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="grade">Grade:</label>
                        <input className="form-control" 
                            onChange={(e)=>setStudent({
                                ...student,
                                grade: e.target.value
                            })} 
                            value={student.grade}
                            type="number" name="number" id="number" min={0} max={100}/>
                    </div>
                    <div className="col-md-2">
                        <button onClick={()=>{addStudent()}} className="btn btn-dark mt-3">Add +</button>
                    </div>
                    <div className="alert alert-light mt-3">
                    <h3 className="mt-3 fw-bold">{student.firstname} {student.lastname} <span className="badge bg-dark text-white">{student.grade}</span></h3>
                    </div>
                </div>
                
            </div>

            {
                studentList.map((studentRecord) => (
                    <Student
                        key={studentRecord.id}
                        firstname={studentRecord.firstname}
                        lastname={studentRecord.lastname}
                        grade={studentRecord.grade}
                        deleteStudent={deleteStudent}
                        studentID={studentRecord.student_id}
                        
                        
                    />
                ))
            }

        </section>
    )
}

export default Home  