const users = JSON.parse(localStorage.getItem("users")) || [];

function showAddUserForm() {
  document.getElementById("add-user-form").style.display = "block";
}

function hideAddUserForm() {
  document.getElementById("add-user-form").style.display = "none";
}

function addUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const funcao = document.getElementById("funcao").value;
  const id = generateRandomId();

  const user = {
    id,
    name,
    email,
    password,
    funcao,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  renderUserTable();
  hideAddUserForm();
}

function generateRandomId() {
  const randomId = Math.floor(Math.random() * 100000);
  return randomId;
}

function editUser(index) {
    const user = users[index];
    document.getElementById("edit-user-index").value = index;
    document.getElementById("edit-name").value = user.name;
    document.getElementById("edit-email").value = user.email;
    document.getElementById("edit-password").value = user.password;
    document.getElementById("edit-funcao").value = user.funcao;
    document.getElementById("edit-user-form").style.display = "block";
}

function saveUser(event) {
    event.preventDefault();

    const index = document.getElementById("edit-user-index").value;
    const name = document.getElementById("edit-name").value;
    const email = document.getElementById("edit-email").value;
    const password = document.getElementById("edit-password").value;
    const funcao = document.getElementById("edit-funcao").value;

    users[index] = { ...users[index], name, email, password, funcao };
    localStorage.setItem("users", JSON.stringify(users));

    renderUserTable();
    cancelEdit();
}

function cancelEdit() {
    document.getElementById("edit-user-index").value = "";
    document.getElementById("edit-name").value = "";
    document.getElementById("edit-email").value = "";
    document.getElementById("edit-password").value = "";
    document.getElementById("edit-funcao").value = "";
    document.getElementById("edit-user-form").style.display = "none";
}

function deleteUser(index) {
    if (confirm("Deseja realmente excluir este usuário?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUserTable();
    }
}

function renderUserTable() {
    const tbody = document.getElementById("user-table-body");
    tbody.innerHTML = "";
  
    users.forEach((user, index) => {
      const tr = document.createElement("tr");
  
      const tdId = document.createElement("td");
      tdId.innerText = user.id;
      tr.appendChild(tdId);
  
      const tdName = document.createElement("td");
      tdName.innerText = user.name;
      tr.appendChild(tdName);
  
      const tdEmail = document.createElement("td");
      tdEmail.innerText = user.email;
      tr.appendChild(tdEmail);
  
      const tdfuncao = document.createElement("td");
      tdfuncao.innerText = user.funcao;
      tr.appendChild(tdfuncao);
  
      const tdActions = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.innerText = "Editar";
      editButton.addEventListener("click", () => editUser(index));
      tdActions.appendChild(editButton);
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Excluir";
      deleteButton.addEventListener("click", () => deleteUser(index));
      tdActions.appendChild(deleteButton);
  
      tr.appendChild(tdActions);
  
      tbody.appendChild(tr);
    });
  }

renderUserTable();


