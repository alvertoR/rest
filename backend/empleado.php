<?php

include_once 'conexion.php';

class Empleado extends Conexion{
    
    function obtenerEmpleados(){
    
        $query = $this->connect()->query('select*from empleados');
        
        return $query;    
    }

    function getEmpleado($id){
        $query = $this->connect()->prepare('select*from empleados where id= :id');
        $query->execute([':id' => $id]);

        return $query;
    }

    function deleteEmpleado($id){
        $query = $this->connect()->prepare('delete from empleados where id= :id');
        $query->execute([':id' => $id]);
        return $query;
    }
}

?>