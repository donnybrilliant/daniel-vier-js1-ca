export function formatDate(date) {
  const [year, month, day] = date.split("-");
  return [month, day, year].join("/");
}
