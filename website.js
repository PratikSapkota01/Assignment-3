// Toggle Day/Night Mode
document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("toggle-mode");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Toggle Day Mode";
    } else {
        button.textContent = "Toggle Night Mode";
    }

    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("display-name").textContent = `Welcome, ${name}!`;
    }
});

// Display Name on Page
document.getElementById("enter-name").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    if (name) {
        document.getElementById("display-name").textContent = `Welcome, ${name}!`;
    } else {
        document.getElementById("display-name").textContent = "Please enter your name.";
    }
});

// Images and Descriptions for Each Impact
const images = {
    efficiency: {src: 'C:/Users/ACER/OneDrive/assignment 3/efficiency.jpg', description: 'Increases Efficiency by automating tasks.'},
    learning: {src: 'C:/Users/ACER/OneDrive/assignment 3/learning.png', description: 'Provides learning support by offering instant explanations.'},
    creativity: {src: 'C:/Users/ACER/OneDrive/assignment 3/creativity.png', description: 'Helps in brainstorming and content creation.'},
    misinformation: {src: 'C:/Users/ACER/OneDrive/assignment 3/Misinformation.png', description: 'Potentially spreads misinformation if not fact-checked.'},
    jobImpact: {src: 'C:/Users/ACER/OneDrive/assignment 3/job impact.jpg', description: 'Automation might replace some jobs in the future.'}
};

// Update Slider Function
function updateSlider(category) {
    const imageElement = document.getElementById("slider-image");
    const descriptionElement = document.getElementById("slider-description");

    imageElement.src = images[category].src;
    descriptionElement.textContent = images[category].description;
}

// Button Event Listeners for Navigation
document.getElementById("efficiency-btn").addEventListener("click", function() {
    updateSlider("efficiency");
});

document.getElementById("learning-btn").addEventListener("click", function() {
    updateSlider("learning");
});

document.getElementById("creativity-btn").addEventListener("click", function() {
    updateSlider("creativity");
});

document.getElementById("misinformation-btn").addEventListener("click", function() {
    updateSlider("misinformation");
});

document.getElementById("job-impact-btn").addEventListener("click", function() {
    updateSlider("jobImpact");
});
