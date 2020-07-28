
var student1 = {id:1, phone:1740,name:"Maruf"}
var student2 = { id:2, phone:1234, name:"Tamim"}
//3 way to represent object property access.
var phoneProperty = "phone"
var phoneNo1 = student1.phone
var phoneNo2 = student1["phone"]
var phoneNo = student1[phoneProperty]
//Update phone number
student2.phone = 876
console.log(phoneNo)//1740
console.log(student2)//{ id:2, phone:1234, name:"Tamim"}