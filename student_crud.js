const fs = require("fs");

const create = ({id, name, degrees, comment}) => {
 let total = 0
 degrees.forEach((degree)=> {
     total+=degree
 })
 console.log('creating...', total)
 addStudent({id, name, degrees, total, comment})

}

const loadStudents = () => {
    try {
      const data = fs.readFileSync("students.json").toString();
      return JSON.parse(data)
    } catch (e) {
      return [];
    }
  };

  const addStudent = ({id, name, degrees, total, comment}) => {
    console.log('adding..')
    const students = loadStudents();
    const duplicateId = students.find((el) => {
      return el.id === id;
    });  
    if (!duplicateId) {
      students.push({
        id,
        name,
        degrees,
        total,
        comment
      });
      console.log(students)
      saveStudents(students);
      console.log("Saved Successfully");
    } else {
      console.log("Error duplicate title");
    }
  };
  const saveStudents = (students) => {
    const saveData = JSON.stringify(students);
    fs.writeFileSync("students.json", saveData);
  };


  ////////////////
  //delet
  const deleteStudent = (id) =>{
    const students = loadStudents();
    console.log(students)
    const studentsToKeep = students.filter((el)=>{
      
        return el.id !== id
    })
    // array 3 elemnt
    console.log(studentsToKeep) // [{title:'title1',body:'body1'}]

    if(students.length !== studentsToKeep.length)
    {
    saveStudents(studentsToKeep)
    console.log('Deleted sucessfully')
    }
    else {
    console.log('No id is found')
    }
}
// read
const readStudent = (id) =>{
  const students = loadStudents()
  const student = students.find((el)=>{
     
      return el.id === id
  })
  if(student){
      console.log(student.name)
  }
  else {
      console.log('Not found')
  }
}
// list

const listStudents = () =>{
  const students = loadStudents()
  students.forEach((el)=>{
      console.log(el.name)
  })
}

module.exports = {
create, 
deleteStudent,
readStudent,
listStudents
};