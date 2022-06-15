import { replaceWhitespaceWithHyphen } from '../utils/replaceWhitespaceWithHyphen.js';
import { transformTimeframeIntoPeriod } from '../utils/transformTimeframeIntoPeriod.js';

export function createActivityCard(activity, timeframe){
  
  //Container
  const container = document.querySelector(".container");

  // Activity Article
  const activityArticle = document.createElement('article');
  const title = replaceWhitespaceWithHyphen(activity.title).toLowerCase();
  activityArticle.className = `activity activity--${title}`;

  // Activity Details Div
  const activityDetailsDiv = document.createElement('div');
  activityDetailsDiv.className = 'activity__details';

  // Activity Header Div
  const activityHeaderDiv = document.createElement('div');
  activityHeaderDiv.className = 'activity__header';

  const activityHeaderTitle = document.createElement('h2');
  const activityHeaderTitleContent = document.createTextNode(activity.title);
  activityHeaderTitle.append(activityHeaderTitleContent);

  const activityHeaderImageElement = document.createElement('img');
  activityHeaderImageElement.src = '/assets/images/icon-ellipsis.svg';
  activityHeaderImageElement.alt = 'Three white circles separated by whitespace';

  activityHeaderDiv.append(activityHeaderTitle);
  activityHeaderDiv.append(activityHeaderImageElement);

  // Activity Time Div
  const activityTimeDiv = document.createElement('div');
  activityTimeDiv.className = 'activity__time';

  const spanCurrent = document.createElement('span');
  spanCurrent.className = 'activity__time--current';
  const spanCurrentContent = `${activity.timeframes[timeframe].current}hrs`;
  spanCurrent.append(spanCurrentContent);

  const spanPrevious = document.createElement('span');
  spanPrevious.className = 'activity__time--previous';
  const spanPreviousContent = `
    ${transformTimeframeIntoPeriod(timeframe)} - ${activity.timeframes[timeframe].previous}hrs
   `;
  spanPrevious.append(spanPreviousContent);

  activityTimeDiv.append(spanCurrent);
  activityTimeDiv.append(spanPrevious);

  // Append Header and Time Divs to Details Div
  activityDetailsDiv.append(activityHeaderDiv);
  activityDetailsDiv.append(activityTimeDiv);

  // Append Details Div to Article
  activityArticle.append(activityDetailsDiv)

  // Append Article to Container
  container.append(activityArticle);
}