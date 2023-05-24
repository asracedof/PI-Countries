export default function validate({ name, difficulty, duration, season, countries, types }) {
    const errors = {};
  
    if (!name.match(/^[a-zA-Z\s]+$/)) {
      errors.name = "The activity name cannot contain numbers or special characters.";
    }
  
    if (isNaN(difficulty) || difficulty < 1 || difficulty > 5) {
      errors.difficulty = "Difficulty must be a number between 1 and 5.";
    }
  
    if (isNaN(duration) || duration < 1 || duration > 24) {
      errors.duration = "Duration must be a number between 1 and 24.";
    }
  
    if (!season) {
      errors.season = "You must select a season.";
    }
  
    if (countries.length === 0) {
      errors.countries = "You must select at least one country.";
    }
  
    if (!types) {
      errors.types = "You must select an activity type.";
    }
  
    return errors;
  }
  