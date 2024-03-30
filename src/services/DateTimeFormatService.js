
export function formatDateWithTime(date) {
    // Get the date components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    
    // Get the time components
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    // Construct the formatted string
    const dateString = `${year}-${month}-${day}`;
    const timeString = `${hours}:${minutes}`;
    const formattedDateTime = `${dateString}, ${timeString}`;
    
    return formattedDateTime;
}

export function parseDateFromString(dateString) {
    const [datePart, timePart] = dateString.split(', '); // Split the string into date and time parts
    const [year, month, day] = datePart.split('-').map(Number); // Parse date components
    const [hours, minutes] = timePart.split(':').map(Number); // Parse time components
    
    // Create a new Date object using the parsed components
    const parsedDate = new Date(year, month - 1, day, hours, minutes);
    
    return parsedDate;
}

export function getDateString(dateString) {
    const [datePart, timePart] = dateString.split(', '); // Split the string into date and time parts
    return datePart;
}


