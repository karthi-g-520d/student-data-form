var tableData = document.getElementById("tableData")
var id=1
function save()
{
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var gender = document.getElementsByName("gender");
    var course = document.getElementById("course")
    var mail = document.getElementById("mail")

    age=Number(age.value)
    console.log(course.value)
    
    // selection of gender
    if(gender[0].checked)
    {
        gender="Male"
    }
    if(gender[1].checked)
    {
        gender="Female"
    }

    //appending data
    var tr =document.createElement("tr")
    tr.innerHTML="<th>" + id + "</th>" + "<th>" + name.value + "</th>" + "<th>" + age + "</th>" +
     "</th>" + "<th>" + gender + "</th>" + "<th>" + course.value + "</th>" + "<th>" + mail.value + "</th>"
    tableData.append(tr)

    // sno increment
    id = id+1
}