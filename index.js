let form = document.querySelector(".form");
let input = document.querySelector(".input")
console.log(input)
let output = document.querySelector(".output");
let messege = document.querySelector(".message-container");

function getTodo(value) {
    let todo = document.createElement('div');
    let texEl = document.createElement('span');
    texEl.innerHTML = value;
    todo.appendChild(texEl);
    messege.classList.toggle('success');
    messege.textContent = "item Added";

    setTimeout(() => {
        messege.classList.toggle("success")
    }, 2000)

    let closeE1 = document.createElement('span');
    closeE1.innerHTML = "&times";
    closeE1.classList.add('delate')

    closeE1.addEventListener("click", () => {
        output.removeChild(todo);
        messege.classList.toggle('error');
        messege.textContent = "item Deleted"

        setTimeout(() => {
            messege.classList.toggle("error")
        }, 2000)
    })

    todo.appendChild(closeE1)
    todo.classList.add('todo')
    return todo;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let value = input.value;
    if (!value.trim()) return;
    output.appendChild(getTodo(value));
    input.value = ""; // added the code to clear the input value
})