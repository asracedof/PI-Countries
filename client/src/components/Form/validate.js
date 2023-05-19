export default function validate({name, difficulty, duration, season, countries}){
    var errors = {};
    
    if(name?.length === 0) errors.name = "Se necesita el nombre de la actividad";
    if(difficulty > 5 || difficulty < 1) errors.difficulty = "La dificultad debe ser entre 1 y 5";
    if(duration?.length === 0) errors.duration = "La duracion necesita un tiempo para la actividad";
    if(duration === "2 horas") errors.duration = "La duración necesita un tiempo no mayor a 2 horas";
    if(season?.length === 0) errors.season = "Se necesita la temporada de la actividad";
    if(countries?.length === 0) errors.countries = "Se necesitan uno o más países para crear la actividad" 

    return errors;
}