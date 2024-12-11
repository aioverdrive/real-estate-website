const portraitEl = document.getElementById('portrait');
const amenitiesEl = document.getElementById('amenities-image');
const spaceTextEl = document.getElementById('space-text');
const mediaQuery = window.matchMedia("(max-width: 800px").matches;
// I GIVE UP I'll try again later tom kae this responsive AAAA
// function handleMediaChange(eventObj){
//     if (eventObj.matches){
//         portraitEl.classList.remove("left")
//         amenitiesEl.classList.remove("left")
//         spaceTextEl.classList.remove("left")
//         console.log("this worked")
//     }
//     else {
//         portraitEl.classList.add("left")
//         amenitiesEl.classList.add("left")
//         spaceTextEl.classList.add("left")
//     }
// }
// mediaQuery.addEventListener("change", handleMediaChange);

// handleMediaChange(mediaQuery)
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  
  // Select all elements with the fade-in-on-scroll class
  const images = document.querySelectorAll('.fade-in-on-scroll');
  
  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    images.forEach(image => {
      if (isInViewport(image)) {
        image.classList.add('visible'); // Add the visible class when in view
      }
    });
  });
  