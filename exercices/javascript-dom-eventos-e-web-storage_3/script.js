function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

function createNumberDayWeek() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const liElement = document.createElement('li');
    days.appendChild(liElement);
    
    if ([24, 25, 31].includes(day)) {
      liElement.className = ('day holiday');
    } else if ([4, 11, 18, 25].includes(day)) {
      liElement.className = ('day friday');
    } else {
      liElement.className = 'day';
    }

    liElement.innerText = day;
  }
}
createNumberDayWeek();
