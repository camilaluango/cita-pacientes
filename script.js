const citasMedicas = ["2024-03-15","2024-03-20","2024-03-15", "2024-04-01"];
const fechaPaciente = "2024-03-22"

function encontrarcitaCercana(fechaPaciente){
    if (citasMedicas.length === 0)
        return null;

    let fechaPacienteDate = Date.parse(fechaPaciente);
    let citaCercana = citasMedicas[0];
    let diferenciaMin = Math.abs(Date.parse(citaCercana) - fechaPacienteDate);

    for (let i = 1; i < citasMedicas.length; i++){
        let fechaCita = Date.parse(citasMedicas[i]);
        let diferencia = Math.abs(fechaCita - fechaPacienteDate);

        if(diferencia < diferenciaMin){
            citaCercana = citasMedicas[i];
            diferenciaMin = diferencia;
        } else {
            break;
        }

    }
    return citaCercana;

}

console.log(encontrarcitaCercana(fechaPaciente));