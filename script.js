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
    
    // Profile card interactivity
    const contactButton = document.getElementById('contactButton');
    const profileImage = document.getElementById('profileImage');
    
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Thanks for your interest! Please reach out via email or social media.');
            contactButton.textContent = 'Message Sent!';
            contactButton.style.background = '#27ae60';
            contactButton.style.color = 'white';
            
            setTimeout(() => {
                contactButton.textContent = 'Contact Me';
                contactButton.style.background = '';
                contactButton.style.color = '';
            }, 2000);
        });
    }
    
    // Add click effect to profile image
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            const randomRotation = Math.floor(Math.random() * 360);
            profileImage.style.transform = `rotate(${randomRotation}deg) scale(1.1)`;
            
            setTimeout(() => {
                profileImage.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        });
        
        profileImage.style.cursor = 'pointer';
        profileImage.title = 'Click me!';
    }
});

