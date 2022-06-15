import { replaceWhitespaceWithHyphen } from '../utils/replaceWhitespaceWithHyphen.js';
import { transformTimeframeIntoPeriod } from '../utils/transformTimeframeIntoPeriod.js';

export function createActivityCard(activity, timeframe){
  
  //Container
  const container = document.querySelector(".container");

  // creating activity article
  const activityArticle = document.createElement('article');
  const title = replaceWhitespaceWithHyphen(activity.title).toLowerCase();
  activityArticle.className = `activity activity--${title}`;

  // creating activityDetails div
  const activityDetailsDiv = document.createElement('div');
  activityDetailsDiv.className = 'activity__details';

  // creating activityHeader div
  const activityHeaderDiv = document.createElement('div');
  activityHeaderDiv.className = 'activity__header';

  // creating activityHeader h2 title
  const activityHeaderTitle = document.createElement('h2');
  const activityHeaderTitleContent = document.createTextNode(activity.title);
  activityHeaderTitle.append(activityHeaderTitleContent);

  // creating activityHeader image
  const activityHeaderImageElement = document.createElement('img');
  activityHeaderImageElement.src = './assets/images/icon-ellipsis.svg';
  activityHeaderImageElement.alt = 'Three white circles aligned horizontally.';
  console.log(activityHeaderImageElement);

  // Appending h2 and image to activityHeader div
  activityHeaderDiv.append(activityHeaderTitle);
  activityHeaderDiv.append(activityHeaderImageElement);

  // creating activityTime div
  const activityTimeDiv = document.createElement('div');
  activityTimeDiv.className = 'activity__time';

  // Adding span with 'current' value of current selected timeframe information
  const spanCurrent = document.createElement('span');
  spanCurrent.className = 'activity__time--current';
  const spanCurrentContent = `${activity.timeframes[timeframe].current}hrs`;
  spanCurrent.append(spanCurrentContent);

  // Add span with 'previous' value of current selected timeframe information
  const spanPrevious = document.createElement('span');
  spanPrevious.className = 'activity__time--previous';
  const previousTimeframeDescription = transformTimeframeIntoPeriod(timeframe);
  const spanPreviousContent = `
    ${previousTimeframeDescription} - ${activity.timeframes[timeframe].previous}hrs
   `;
  spanPrevious.append(spanPreviousContent);

  // Appending spanCurrent and spanPrevious to activityTime div
  activityTimeDiv.append(spanCurrent);
  activityTimeDiv.append(spanPrevious);

  // Appending activityHeader and activityTime divs to activityDetails div
  activityDetailsDiv.append(activityHeaderDiv);
  activityDetailsDiv.append(activityTimeDiv);

  // Appending activityDetails div to activity article
  activityArticle.append(activityDetailsDiv)

  // Append activity article to Container
  container.append(activityArticle);
}