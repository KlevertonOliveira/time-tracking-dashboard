import { createActivityCard } from './services/createActivityCard.js';
import { fetchData } from './services/fetchData.js';

fetchData()
  .then((content) => {
    content.forEach(activity => {
      createActivityCard(activity, 'weekly');
    })
  })
  .catch((error) => console.log(error));

// Update timeframe displayed content dinamically based on button's click event

const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');

dailyButton.addEventListener('click', ()=>{
  updateCurrentTimeframe(dailyButton.id)
}); 

weeklyButton.addEventListener('click', ()=>{
  updateCurrentTimeframe(weeklyButton.id)
}); 

monthlyButton.addEventListener('click', ()=>{
  updateCurrentTimeframe(monthlyButton.id)
});

function removePreviousTimeframeCards(){
  const container = document.querySelector('.container');
  Array.from(container.children).forEach(card=>{
    if(card.classList.contains('activity')){
      card.remove();
    }
  })
}

function addTimeframeCards(id){
  fetchData()
  .then((content) => {
    content.forEach(activity => {
      createActivityCard(activity, id);
    })
  })
  .catch((error) => console.log(error));
}

function updateCurrentTimeframe(id){

  removePreviousTimeframeCards();

  switch(id){
    case 'daily':
      dailyButton.classList.add('current');
      weeklyButton.classList.remove('current');
      monthlyButton.classList.remove('current');
      break;

    case 'monthly':
      dailyButton.classList.remove('current');
      weeklyButton.classList.remove('current');
      monthlyButton.classList.add('current');
      break;

    default:
      dailyButton.classList.remove('current');
      weeklyButton.classList.add('current');
      monthlyButton.classList.remove('current');
      break;
  }

  addTimeframeCards(id);
}