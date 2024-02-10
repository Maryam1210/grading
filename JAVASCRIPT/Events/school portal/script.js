var allStudents =[]

function submit(){
    var firstName = document.getElementById("firstName").value 
    var secondName = document.getElementById("secondName").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if(firstName === "" || secondName=== "" || email === "" || password === "" ){
        err.style.display = "block"
        setTimeout(()=>{
            err.style.display = "none"
        },2000);
    }else{
        sub.style.display ="block"
        setTimeout(()=>{
            sub.style.display = "none"
        },4000)
        window.location.href = 'dashboard.html'
        var studentsObjects ={firstName,secondName,email,password}
        allStudents.push(studentsObjects);
        localStorage.setItem('stud', JSON.stringify(allStudents))

        did.style.display = "block"
    cart()
        counting.innerHTML = allStudents.length;

        // show.innerHTML = ""
        document.getElementById("firstName").value = ""
        document.getElementById("secondName").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""       
    }
}
function del(index){
    allStudents.splice(index,1)
    cart()
}
