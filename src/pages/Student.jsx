export default function Student ({firstname, lastname, grade}){

    return (
        <section>
            <div className="alert alert-light">{lastname}, {firstname} <span className="badge bg-dark">{grade}</span>
            <button className="btn btn-danger btn-sm float-end">Delete</button>
            <button className="btn btn-success btn-sm float-end me-2">Edit</button>
            </div>
        </section>
    )
}