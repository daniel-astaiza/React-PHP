function cargarDatos() {
    fetch("http://localhost/Myproyecto/Api/api.php")
        .then(response => response.json())
        .then(data => {
            const tablaDatos = document.getElementById("tablaDatos");
            tablaDatos.innerHTML = "";
            data.forEach(row => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${row.id}</td>
                    <td>${row.nombre}</td>
                    <td>${row.descripcion}</td>
                    <td>
                        <button type="button" class="btn btn-success" onclick="traerDatos(${row.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Editar
                        </button>
                        <button class="btn btn-small btn-danger" onclick="eliminarClase(${row.id})">Eliminar</button>
                    </td>
                `;
                tablaDatos.appendChild(tr);
            });
        });
  }
  
  function eliminarClase(id) {
    fetch("http://localhost/Myproyecto/Api/api.php?id=" + id)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            cargarDatos();
        });
  }
  
  function agregarClase() {
      const id = document.getElementById("id").value;
      const nombre = document.getElementById("nombre").value;
      const descripcion = document.getElementById("descripcion").value;
      fetch(`http://localhost/Myproyecto/Api/api.php?id=${id}&nombre=${nombre}&descripcion=${descripcion}`)
          .then(response => response.text())
          .then(data => {
              cargarDatos();
              console.log(data);
              limpiarF();
          })
          .catch(error => console.error('Error al agregar la clase:', error));
    }
  
  function limpiarF() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
  }
  
  function guardarClase(id, nombre, descripcion) {
      fetch(`http://localhost/Myproyecto/Api/api.php?id=${id}&nombre=${nombre}&descripcion=${descripcion}`)
          .then(response => response.text())
          .then(data => {
              console.log(data);
              limpiarF();
              cargarDatos();
          })
          .catch(error => console.error('Error al guardar la clase:', error));
    }
  function traerDatos(id) {
      fetch(`http://localhost/Myproyecto/Api/api.php?id=${id}`)
          .then(response => response.json())
          .then(data => {
              document.getElementById("id").value = data.id;
              document.getElementById("nombre").value = data.nombre;
              document.getElementById("descripcion").value = data.descripcion;
    
              var boton = document.getElementById("btnAgregar");
              boton.onclick = function () {
                  var id = document.getElementById("id").value;
                  var nombre = document.getElementById("nombre").value;
                  var descripcion = document.getElementById("descripcion").value;
                  if (id) {
                      guardarClase(id, nombre, descripcion);
                  } else {
                      agregarClase();
                  }
              };
          })
          .catch(error => console.error('Error al traer los datos:', error));
    }
    
  
  
  cargarDatos();


  