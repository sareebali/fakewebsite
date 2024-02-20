// Get the current count from local storage or set it to 0
let count = parseInt(localStorage.getItem('visitorCount')) || 0;

// Update the counter on the webpage
document.getElementById('counter').innerText = count;

// Increment the count when the page loads
count++;

// Update the counter on the webpage
document.getElementById('counter').innerText = count;

// Save the updated count to local storage
localStorage.setItem('visitorCount', count);
