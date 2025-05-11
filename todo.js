const form = document.querySelector("#todoForm");
const input = document.querySelector("#itemInput");
const list = document.querySelector("#todoList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", function () {
        li.classList.toggle("purchased");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); 
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});
