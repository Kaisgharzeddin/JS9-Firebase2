// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuiok8K_JQEsgI_ga_xRC7YW3qQEuavjE",
  authDomain: "js9-firebase2.firebaseapp.com",
  projectId: "js9-firebase2",
  storageBucket: "js9-firebase2.firebasestorage.app",
  messagingSenderId: "748004861899",
  appId: "1:748004861899:web:5e7c46a80d5dc92e07b84e",
  measurementId: "G-XDFT8G703Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

let id = document.getElementById('id');
let name = document.getElementById('name');
let age = document.getElementById('age');
let findID = document.getElementById('findID');
let findName = document.getElementById('findName');
let findAge = document.getElementById('findAge');

let insBtn = document.getElementById('insert');
let updBtn = document.getElementById('update');
let remBtn = document.getElementById('remove');
let findBtn = document.getElementById('find');


function InsertData () {
    set(ref(db, "People/" + id.value),{
        Name: name.value,
        ID: id.value,
        Age: age.value
    })
    .then(() => {
        alert("Data stored successfully")
    })
    .catch((error) => {
        alert(error)
    })
}

function UpdateData () {
    update(ref(db, "People/" + id.value), {
        Name: name.value,
        Age: age.value
    })
    .then(() => {
        alert("Data updated successfully");
    })
    .catch((error) => {
        alert(error);
    });
}

function RemoveData () {
    remove(ref(db, "People/" + id.value))
    .then(() => {
        alert("Data removed successfully")
    })
    .catch((error) => {
        alert(error)
    })
}

function FindData () {
    const dbref = ref(db)

    get(child(dbref, "People/" + findID.value))
    .then((snapshot) => {
        if(snapshot.exists) {
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No data found");
        }
    })
    .catch((error) => {
        alert(error)
    })
}

insBtn.addEventListener("click", InsertData);
updBtn.addEventListener("click", UpdateData);
remBtn.addEventListener("click", RemoveData);
findBtn.addEventListener("click", FindData);