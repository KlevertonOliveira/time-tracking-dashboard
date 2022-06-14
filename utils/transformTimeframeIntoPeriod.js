export function transformTimeframeIntoPeriod(timeframe){
  switch(timeframe){
    case 'monthly':
      return 'Last Month';

    case 'weekly':
      return 'Last Week';
      
    default:
      return 'Yesterday';
  }
}