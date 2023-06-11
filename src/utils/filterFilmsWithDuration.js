export default function filterFilmsWithDuration(films) {
  if (!films || !Array.isArray(films)) {
    console.log("Это не массив");
    return [];
  }
  return films.filter((film) => film.duration <= 40);
}
