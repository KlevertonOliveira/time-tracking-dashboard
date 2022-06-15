import { createActivityCard } from './services/createActivityCard.js';

async function addTimeframeActivityCards(timeframe){
  try {
    const response = await fetch("./assets/data/data.json");
    let data = await response.json();

    data.forEach(activity => {
      createActivityCard(activity, timeframe);
    })
  }
  catch (error) {
    console.log(error);
  }
}

function removePreviousTimeframeActivityCards(){
  const container = document.querySelector('.container');
  Array.from(container.children).forEach(card=>{
    if(card.classList.contains('activity')){
      card.remove();
    }
  })
}

addTimeframeActivityCards('weekly');

// Update timeframe content dinamically based on each timeframe button's click event

const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');

dailyButton.addEventListener('click', ()=>{
  updateCurrentTimeframeCards(dailyButton.id)
}); 

weeklyButton.addEventListener('click', ()=>{
  updateCurrentTimeframeCards(weeklyButton.id)
}); 

monthlyButton.addEventListener('click', ()=>{
  updateCurrentTimeframeCards(monthlyButton.id)
});

function updateCurrentTimeframeCards(timeframe){

  removePreviousTimeframeActivityCards();

  switch(timeframe){
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

  addTimeframeActivityCards(timeframe);
}