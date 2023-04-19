"use strict"

//Selectors
const form = document.querySelector("form");
const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastname");
const users = document.querySelector(".users");

//Event Listeners
form.addEventListener("submit", regester);
document.addEventListener("DOMContentLoaded", getUsers);

//Functions
function regester(e) {
    e.preventDefault();
    const fullName = `${firstName.value}-${lastName.value}`;
    saveToLocalStorage(fullName);
    form.reset();
}

function saveToLocalStorage(fullName) {
    const userlist = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    userlist.push(fullName);
    localStorage.setItem("users", JSON.stringify(userlist));
}

function getUsers() {
    const userlist = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    userlist.forEach(element => {
        const span = document.createElement("span");
        span.innerHTML = `${element} , `;
        users.appendChild(span);
    });
}