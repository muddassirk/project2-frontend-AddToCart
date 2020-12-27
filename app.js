// let arr = []

function signUpForm() {

    let name = document.getElementById("names").value;
    let email = document.getElementById("emails").value;
    let gender = document.getElementById("gender").value;
    let number = document.getElementById("numbers").value;
    let nationality = document.getElementById("Nationality").value;
    let passwords = document.getElementById("passwords").value;

    var user = {
        name: name,
        email: email,
        gender: gender,
        number: number,
        nationality: nationality,
        passwords: passwords,
    }
    // arr.push(user)

    const Http = new XMLHttpRequest();
    // const url = 'http://192.168.40.60:3000/signup';
    // const url = 'http://192.168.0.105:3000/signup';
    const url = 'https://own-project.herokuapp.com/signup';
    Http.open("POST", url);
    // Http.send(user);
    Http.setRequestHeader("Content-Type", "application/json");
    // Http.send(JSON.stringify({ name: "John Rambo", time: "2pm" }));
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        document.getElementById("show").innerHTML = Http.responseText;
        // alert(Http.responseText)

    }
    return false;

}



function LoginForm() {

    let loginEmail = document.getElementById("loginEmail").value;
    let loginPass = document.getElementById("loginPass").value;

 

    const Http = new XMLHttpRequest();
    // const url = 'http://192.168.40.60:3000/login';
    // const url = 'http://192.168.0.105:3000/login';
    const url = 'https://own-project.herokuapp.com/login';


    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json")

    Http.send(JSON.stringify({
        email: loginEmail,
        password: loginPass
    }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
        document.getElementById("res").innerHTML = Http.responseText;

        let res = JSON.parse(Http.responseText);
        console.log(res);
        localStorage.setItem("userData", JSON.stringify(res) )

        // let res1 = JSON.stringify(res);
        // let res1 = JSON.stringify(Http.responseText);

        // document.getElementById("res").innerHTML = res1;
        // console.log(res1)
        // localStorage.setItem("res", res1)
        // document.getElementById("one").innerHTML = res1.name;
        // localStorage.setItem("name", res1.name)
        
        window.location.href = "shopping.html"
        
        // document.getElementById("daashbord").innerHTML = Http.responseText;

    }
    return false;
}
