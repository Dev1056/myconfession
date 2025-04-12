document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const forceMsg = document.getElementById('forceMsg');
    const screens = document.querySelectorAll('.screen');
    const bgMusic = document.getElementById('bgMusic');
    
    let noHoverCount = 0;
    
    // Button events
    yesBtn.addEventListener('click', () => {
        screens[0].classList.add('hidden');
        screens[1].classList.remove('hidden');
        
        // Animate proposal
        setTimeout(() => {
            document.querySelector('.stick-woman').classList.add('kick-animation');
            
            setTimeout(() => {
                screens[1].classList.add('hidden');
                screens[2].classList.remove('hidden');
                bgMusic.play();
                startFireworks();
            }, 1500);
        }, 2000);
    });
    
    noBtn.addEventListener('mouseover', function() {
        noHoverCount++;
        
        if(noHoverCount >= 5) {
            forceMsg.style.display = 'block';
            noBtn.disabled = true;
        } else {
            // Move button randomly
            noBtn.style.transform = translate(${Math.random()*100-50}px, ${Math.random()*100-50}px);
        }
    });
});

function startFireworks() {
    // Fireworks animation code here
    console.log("Fireworks started!");
}