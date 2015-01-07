function AlumnosController($scope){
        $scope.alumnos =[{
            nombres: "Juan Perez",
            telefono: "963258741",
            curso: "Ingles Intermedio"
        },
        {
            nombres: "Maria Gomez",
            telefono: "9632522341",
            curso: "Ingles Avanzado"
        },
        {
            nombres: "Pedro Lucas",
            telefono: "9632524541",
            curso: "Ingles Avanzado"
        },
        {
            nombres: "Lucia Mendez",
            telefono: "9632552341",
            curso: "Ingles Básico"
        },
        {
            nombres: "Luis Carlos",
            telefono: "9632152231",
            curso: "Ingles Intermedio"
        },
        ];

        $scope.Save=function(){
            $scope.alumnos.push({
                nombres:$scope.nuevoAlumno.nombres,
                telefono:$scope.nuevoAlumno.telefono,
                curso:$scope.nuevoAlumno.curso
            });
        };
        $scope.formVisibility=false;
        $scope.ShowForm=function(){
            $scope.formVisibility=true;
            console.log($scope.formVisibility);
        };
}
