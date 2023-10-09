$(document).click(function (e) {
  var container = $(".dropdown-menu");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("show");
  }
});

var lang = {
  html: "90%",
  css: "90%",
  javascript: "70%",
  php: "55%",
  wordpress: "65%",
  bootstrap: "75%",
  laravel: "35%",
  javascript: "70%",
  php: "55%",
  wordpress: "65%",
  bootstrap: "75%",
  laravel: "35%",
};

var multiply = 4;

$.each(lang, function (language, pourcent) {
  var delay = 700;
  setTimeout(function () {
    $("#" + language + "-pourcent").html(pourcent);
  }, delay * multiply);

  multiply++;
});

const skillsDiv = document.getElementById("skills-div");

function animateSkillsDiv(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillsDiv.classList.add("show");

      observer.unobserve(skillsDiv);
    }
  });
}

const observer = new IntersectionObserver(animateSkillsDiv, {
  threshold: 0.3, // Adjust this threshold as needed to control when the animation triggers
});

observer.observe(skillsDiv);

// ens skill-div

document.addEventListener("DOMContentLoaded", function () {
  const rotatingImage = document.getElementById("rotating-image");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    let rotateAngle =
      st * 0.5; /* Adjust the factor to control the rotation speed */

    // Limit the rotation angle to 90 degrees
    rotateAngle = Math.min(rotateAngle, 90);

    rotatingImage.style.transform = `rotateY(${rotateAngle}deg)`;
    lastScrollTop = st <= 0 ? 0 : st;
  });
});

let prevScrollY = window.pageYOffset || document.documentElement.scrollTop;
const scrollDiv = document.getElementById("scroll-div");
const container2 = document.getElementById("container2");

function handleScroll() {
  const currentScrollY =
    window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the distance between container2 and the top of the viewport
  const container2Top = container2.getBoundingClientRect().top;

  // Calculate the threshold based on the height of container2 (80% in this case)
  const threshold = container2.offsetHeight * 0.2;

  // Show the scroll div when the top of container2 is about to pass above the viewport
  if (container2Top <= -threshold) {
    // Scrolling down, show the div
    scrollDiv.style.display = "block";
    scrollDiv.style.transition = "opacity 2.1s ease";
    scrollDiv.style.opacity = "1";
  } else {
    // Scrolling up or container2 is not yet visible, hide the div
    scrollDiv.style.opacity = "0";
    // Use 'setTimeout' to set display to 'none' after the transition finishes
    setTimeout(() => {
      scrollDiv.style.display = "none";
    }, 100);
  }

  prevScrollY = currentScrollY;
}

window.addEventListener("scroll", handleScroll);

document.getElementById("submit-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set up the request
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Set up the event handler for when the request is completed
  xhr.onload = function () {
    if (xhr.status === 200) {
      showSuccessPopup();
    } else {
      alert("Failed to send email. Please try again later.");
    }
  };

  // Send the request with the form data
  xhr.send(
    `name=${encodeURIComponent(name)}&company=${encodeURIComponent(
      company
    )}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(
      message
    )}`
  );
});

function showSuccessPopup() {
  const popup = document.getElementById("success-popup");
  popup.style.display = "block";

  setTimeout(function () {
    popup.style.display = "none";
  }, 10000);
}
