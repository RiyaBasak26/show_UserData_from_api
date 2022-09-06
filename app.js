const url = " https://reqres.in/api/users?page=1";

async function getValue(api) {
  try {
    let response = await fetch(api);
    let data = await response.json();
    console.log("data", data);
    //   return data;
    showUserData(data);
  } catch {
    console.log("error");
  }
}
getValue(url);
function showUserData(resp) {
  let tRow = `<tr>
        <th class="id"> ID </th>
        <th class="email"> Email Adress </th>
        <th class="firstname"> First Name </th>
        <th class="lastname">Last Name</th>
        <th>Show Detail</th>
    </tr>`;
  for (let i of resp.data) {
    tRow += "<tr>";
    tRow += `<td>${i.id} </td>`;
    tRow += `<td>${i.email}</td>`;
    tRow += `<td>${i.first_name}</td>`;
    tRow += `<td>${i.last_name}</td>`;
    tRow+=`<td><button>show User Detail</button></td>`
    tRow +="</tr>";
  }
  document.getElementById("userTable").innerHTML = tRow;
 
}