
    function get(parametro){
        fetch('http://localhost/api/backend/'+parametro)
        .then(valor=>valor.json())
        .then(valor=>{
            var resultado = document.getElementById('resultados');
            resultado.innerHTML ='';
            for(let dato of valor){
                resultado.innerHTML +=`
                
                <li>ID: ${dato.id} - Nombre: ${dato.nombre} - Apellido: ${dato.apellido} - Edad: ${dato.edad}</li>
                
                `;
            }
        });
    }
    function filtrar(){
        var id = document.getElementById('campo').value;
        fetch('http://localhost/api/backend/'+id)
        .then(valor=>valor.json())
        .then(valor =>{
            var resultado = document.getElementById('resultados');
            resultado.innerHTML ='';
            for(let dato of valor){
                resultado.innerHTML +=`
                
                <li>ID: ${dato.id} - Nombre: ${dato.nombre} - Apellido: ${dato.apellido} - Edad: ${dato.edad}</li>
                
                `;
            }
        })
    }
    function eliminar(){
        var apoyo = document.getElementById('campoEliminar').value;
        var id = 'eliminar'+apoyo;
        fetch('http://localhost/api/backend/'+id)
    }

    function post(){
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var edad = document.getElementById('edad').value;
        var apoyo ="post";
        var concatenador = ";";

        fetch('http://localhost/api/backend/'+apoyo+concatenador+nombre+concatenador+apellido+concatenador+edad); 
    }