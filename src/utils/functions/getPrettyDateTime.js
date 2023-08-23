
export default function getPrettyDateTime(dateISOString) {
    console.log("Getting pretty dateTime"); 
    const date = new Date(dateISOString);
    
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' }; 
    
    const prettyDateString = (date.toLocaleString("en-US", dateOptions)) 
    const prettyTimeString = (date.toLocaleTimeString("en-US", timeOptions)) 
    // console.log({
      // prettyDateString, prettyTimeString
    // })
    const prettyDateTimeString = `${prettyDateString}, ${prettyTimeString}`
    return prettyDateTimeString;  
}
