export function useFormattedDate(date) {
  const weekDay = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ][date.getDay()];

  const day = date.getDate();

  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ][date.getMonth()];

  const year = date.getFullYear();

  return `${weekDay}, ${day} de ${month} de ${year}`;
}
