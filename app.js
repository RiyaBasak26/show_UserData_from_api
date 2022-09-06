const url = " https://reqres.in/api/users?page=1";
const modal=document.getElementById("modal");
const body= document.getElementsByTagName("body");

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
    tRow+=`<td><button class="show-detail" onclick=userModal(${JSON.stringify(i)})>show User Detail</button></td>`
    tRow +="</tr>";
  }
  document.getElementById("userTable").innerHTML = tRow;
 
}
function userModal(i)
{
    modal.style.display="flex";
    console.log("dsfdsgd",i);
    let userDetail=`<div id="modalContent"><div> <img src="${i.avatar}" alt=""></div>
           <div class="label"> <label>Email:</label>
            <span>${i.email}</span>
            </div>
            <div class="label">
            <label> Name:</label>
            <span>${i.first_name}  ${i.last_name}</span>
            </div>
            <button class="close" onclick="closeModal()" >
            close
            </button>
             </div>`
             modal.innerHTML=userDetail;
}
function closeModal()
{
    modal.style.display="none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }