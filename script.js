const citasMedicas = ["2024-03-15","2024-03-20","2024-03-15", "2024-04-01"];

function citaCercana(fechaPaciente){
    if (citasMedicas.length === 0)
        return null;
    let fechaPacienteDate = new Date(fechaPaciente);
    let citaCercana = citasMedicas[0];
    let diferenciaMin = Math.abs(new Date(citaCercana) - fechaPacienteDate);

    for (let i = 1; i < citasMedicas.length; i++){
        let fechaCita = new Date(citasMedicas[i]);
        let diferencia = Math.abs(fechaCita - fechaPacienteDate);

        if(diferencia < diferenciaMin){
            citaCercana = citasMedicas[i];
            diferenciaMin = diferencia;
        }

    }

}