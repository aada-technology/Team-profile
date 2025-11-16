// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    
    // Get button element
    const clickButton = document.getElementById('clickButton');
    const messageElement = document.getElementById('message');
    
    // Add click event listener to button
    if (clickButton) {
        clickButton.addEventListener('click', function() {
            messageElement.textContent = 'Button clicked! JavaScript is working.';
            messageElement.style.color = '#27ae60';
            
            // Optional: Add some animation or interaction
            clickButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                clickButton.style.transform = 'scale(1)';
            }, 100);
        });
    }
    
    // Example function
    function greetUser() {
        console.log('Welcome to the website!');
    }
    
    // Call the function
    greetUser();
    
    // Example: Add more interactive features here
    // You can add more event listeners, functions, and logic as needed
});

