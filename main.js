import { createActivity } from './services/createActivity.js';
import { fetchData } from './services/fetchData.js';

fetchData()
  .then((content) => {
    console.log(content);

    content.forEach(activity => {
      createActivity(activity, 'monthly');
    })
  })
  .catch((error) => console.log(error));
