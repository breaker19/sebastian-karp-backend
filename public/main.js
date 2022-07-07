import { writeFile } from 'fs';
const socket = io.connect();
socket.on('messages', (data) => {
    console.log(data);
});

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
     
            <strong style="color: red;">${elem.producto}</strong>:
            <em style="color: blue;">${elem.precio}</em>
            <p>${elem.info}</p>
            </div>`)

    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
function addMessage(e) {
    const mensaje = {
        producto: document.getElementById("name").value,
        precio: document.getElementById('price').value,
        info: document.getElementById('description').value,
    };
    socket.emit('new-message', mensaje);
    return false;
}





socket.on("messages", function (data) {
    render(data);
  });
//save the information in pruebas.json with the information of the form in index.html

// fs.writeFileSync('./pruebas.json', JSON.stringify(addMessage())

//     , (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('The file has been saved!');
//         }
//     }
//     )
