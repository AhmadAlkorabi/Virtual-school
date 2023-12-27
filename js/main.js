
let ulItem = document.querySelector('.sections ul')
let iconNavBar = document.querySelector(".sections>i")
iconNavBar.onclick = (e) => {
    ulItem.classList.toggle('active')
    e.stopPropagation();// Prevent the click event from bubbling up to the document
}
document.addEventListener('click', function (event) {
    // Check if the click event occurred outside of the sidebar
    if (event.target !== ulItem && !ulItem.contains(event.target)) {
        // If the click occurred outside of the sidebar, remove the sidebar
        ulItem.classList.remove('active');
    }
});




let chooseBut = document.querySelectorAll('.aboutUs .option li')
let story = document.querySelectorAll('.aboutUs .content .story')
chooseBut.forEach((item , index) => {
    item.addEventListener("click", () => {
        
        // Remove the 'active' class from all li elements
        chooseBut.forEach((li) => {
            li.classList.remove("active");
        });
        story.forEach((div) => {
            div.style.display = 'none'
        })
        story[index].style.display = "flex";
        // Add the 'active' class to the clicked li element
        item.classList.add("active");

    });
});



// Set the target date 100 days from now
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

// Update the timer every second
setInterval(updateTimer, 1000);

function updateTimer() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the remaining time in milliseconds
    const remainingTime = targetDate - currentDate;

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the remaining time on the webpage
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}


let x = document.querySelector(".main-title")
x.addEventListener("click", () => {
    x.style.width="200px"
})