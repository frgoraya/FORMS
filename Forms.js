var studentList = [];
function addEvent() {
  let stfn = document.getElementById("studentFirstName").value;
  let stln = document.getElementById("stLastName").value;
  const fafn = document.getElementById("fatherFirstName").value;
  const faln = document.getElementById("fatherLastName").value;
  const age = document.getElementById("age").value;
  const contact = document.getElementById("contact").value;
  const gender = document.getElementById("gender").value;
  const form = {
    studentFirstName: stfn,
    stLastName: stln,
    fatherFirstName: fafn,
    fatherLastName: faln,
    age: age,
    contact: contact,
    gender: gender,
  };

  // Push form object to student list
  studentList.push(form);
  document.getElementById("studentFirstName").value = "";
  document.getElementById("stLastName").value = "";
  document.getElementById("fatherFirstName").value = "";
  document.getElementById("fatherLastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("gender").value = "";

  // print stduent list

  prepareStudentList()
}

function prepareStudentList() {
  let tables = "";
//   document.getElementById("box").innerHTML = ''
  for (i = 0; i < studentList.length; i++) {
    tables += "<tr>";
    // tables += "<td>" {counter-increment: serial} "</td>"
    tables += "<td>" + studentList[i].studentFirstName + "</td>";
    tables += "<td>" + studentList[i].stLastName + "</td>";
    tables += "<td>" + studentList[i].fatherFirstName + "</td>";
    tables += "<td>" + studentList[i].fatherLastName + "</td>";
    tables += "<td>" + studentList[i].age + "</td>";
    tables += "<td>" + studentList[i].contact + "</td>";
    tables += "<td>" + studentList[i].gender + "</td>";
    tables += "</tr>";
    
  }
  
  document.getElementById("studentData").innerHTML = tables;
  
  console.log(studentList);
}
