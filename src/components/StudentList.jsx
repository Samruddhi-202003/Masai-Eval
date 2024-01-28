import React from "react";
const StudentCard = ({ student }) => {
  const { image, firstName, lastName, email, phone } = student;
//       {/* render div containing image,firstName Lastname, email, phone. 
//       name,email,phone can be render on p tag individually after image. */}
//       {}
  return (
    <div className="studentCard">
      <img src={image} alt="Profile" />
      <div className="name">{`${firstName} ${lastName}`}</div>
      <p className="email">Email: {email}</p>
      <p className="phone">Phone: {phone}</p>
    </div>
  );
};

// StudentList component to render a list of students
const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <div className="student-container">
      {Array.isArray(students.users) &&
          students.users.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
      </div>
    </div>
  );
};

export default StudentList;
