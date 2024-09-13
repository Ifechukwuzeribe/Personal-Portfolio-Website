// Animation on the home page
var typed = new Typed(".text", {
    strings: [
      "Fullstack Developer", // Strings to be typed out one by one
      "Web Developer",
      "Change Manager",
      "Technical Writer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  // Get the HTML element with the id "MenuItems"
  var MenuItems = document.getElementById("MenuItems");
  // Set the initial maximum height of the MenuItems to 0px (collapsed)
  MenuItems.style.maxHeight = "0px";
  
  // Function to toggle the menu height
  function menutoggle() {
      // Check if the current maxHeight of MenuItems is "0px"
      if(MenuItems.style.maxHeight == "0px") {
          // If it is, set the maxHeight to "200px" (expand the menu)
          MenuItems.style.maxHeight = "200px";
      } else {
          // Otherwise, set the maxHeight back to "0px" (collapse the menu)
          MenuItems.style.maxHeight = "0px";
      }
  }
  
  
  // Contact section
  function sendMail(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Retrieve values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Creates a mailto link with the provided form information
    const mailtoLink = `mailto:zeribeifechukwu@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
      message
    )}`;
  
    // Opens the user's default email client with the prefilled form data
    window.location.href = mailtoLink;
  }
  