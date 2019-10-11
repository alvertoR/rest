<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

include 'apiempleados.php';

$empleado = new Apiempleados();

$peticion = $_GET['variable'];

if(is_numeric($peticion)){
    

    $valor = $empleado->getById($peticion);

    echo json_encode($valor);

}else if($peticion == 'empleados'){
   $valor = $empleado->getAll();

   echo json_encode($valor);
}

$apoyo = substr($peticion,0,-1);


if($apoyo == 'eliminar'){
    $valor = explode("eliminar",$peticion);
    $id;

    foreach($valor as $resultado){
        $id=$resultado;
    }

    $empleado->deleteById($id);
}


?>