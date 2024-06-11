function updateSkillProgress(skill, percent) {
    const progressBar = document.getElementById(skill + 'Progress').querySelector('div');
    
    
    let currentWidth = parseInt(progressBar.style.width, 10) || 0;


    const targetWidth = percent;

    
    const animationSpeed = 10; 

    function animate() {
        if (currentWidth < targetWidth) {
            currentWidth++;
            progressBar.style.width = currentWidth + '%';
            setTimeout(animate, animationSpeed);
        }
    }

    animate();
}


updateSkillProgress('html', 80); 
updateSkillProgress('css', 70);
updateSkillProgress('csharp', 65);
updateSkillProgress('c', 62);
updateSkillProgress('java', 65);
updateSkillProgress('mysql', 75);


document.querySelectorAll('.container .left_side, .container .right_side').forEach(element => {
    element.addEventListener('mouseover', function() {
        
        element.style.transform = 'scale(1.1)'; 
        element.style.transition = 'transform 0.3s ease'; 
    });

    element.addEventListener('mouseout', function() {
        element.style.transform = 'scale(1)'; 
    });
});


let backgroundColors = ["rgb(161, 194, 205)", "#003147"]; 
let index = 0; 

function changeBackgroundAndBoxColor() {
    
    document.body.style.transition = "background-color 2s ease"; 
    document.body.style.backgroundColor = backgroundColors[index]; 
    let leftSide = document.querySelector('.container .left_side');
    leftSide.style.transition = "background-color 2s ease"; 

    
    index++;
    if (index >= backgroundColors.length) {
        index = 0; 
    }

    
    setTimeout(function() {
        leftSide.style.backgroundColor = backgroundColors[index]; 
    }, 0); 
}


setInterval(changeBackgroundAndBoxColor, 5000); 
