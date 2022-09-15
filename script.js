
const validateage = (x) => {
    x.preventDefault();
    element = document.getElementById("dob");
    console.log(element);
    let bornday = new Date(element.value);
    let today = new Date();

    let age = today.getFullYear() - bornday.getFullYear();

    if(age < 18 || age > 55){
        element.setCustomValidity("your age must be in between 18 - 55");
        element.reportValidity();
    }else{
        element.setCustomValidity('');
        displayentries();
}
    }


let userform = document.getElementById("User-Form")

const retrieveEntries =() => {
    let entries = localStorage.getItem("user-entries");
    if(entries){
        entries = JSON.parse(entries);
    }else{
        entries=[];
    }
    return entries;
}

let Entries = retrieveEntries();

const displayentries = () =>{
    const entries = retrieveEntries();

    const tableEntries = entries.map((entry) => {
        const nameCell = `<td>${entry.name}</td>`;
        const emailCell = `<td>${entry.email}</td>`;
        const passwordCell = `<td>${entry.password}</td>`;
        const dobCell = `<td>${entry.dob}</td>`;
        const acceptTermsCell = `<td>${entry.acceptTerms}</td>`;

        const row = `<tr> ${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell} </tr>`;
        return row;

    }).join("\n");

    const table = `<table align='center' cellpadding='10'><tr><th>Name</th><th>Email</th><th>Password</th><th>Date of Birth</th><th>Accept Terms and Conditions</th></tr>${tableEntries}</table>`;

    let details = document.getElementById("user-entries");
    details.innerHTML = table;

}
const saveuserform = event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        acceptTerms
    };

    Entries.push(entry);
    localStorage.setItem("user-entries", JSON.stringify(Entries));
    
}

userform.addEventListener("submit", saveuserform);
userform.addEventListener("submit", validateage);
displayentries();
