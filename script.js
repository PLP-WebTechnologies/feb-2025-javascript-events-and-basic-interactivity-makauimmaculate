// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // --- Tab Functionality ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        // Activate the clicked tab and its content
        button.classList.add('active');
        const tabToShow = document.getElementById(button.getAttribute('data-tab'));
        tabToShow.classList.add('active');
      });
    });
  
    // --- Button Interactions ---
    const colorButton = document.getElementById('colorButton');
    // Click toggles text color
    colorButton.addEventListener('click', function() {
      this.style.color = (this.style.color === 'blue' ? 'red' : 'blue');
    });
    // Hover changes background color
    colorButton.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#e0e0e0';                                       
    });
    colorButton.addEventListener('mouseout', function() {
      this.style.backgroundColor = '';
    });
    // Double-click reveals a secret
    colorButton.addEventListener('dblclick', function() {
      alert('🎉 Your are amazing🎉');
    });
    // Long-press detection (mouse)
    let pressTimer;
    colorButton.addEventListener('mousedown', function() {
      pressTimer = setTimeout(() => {
        alert('👀 Long press detected!');
      }, 1000);
    });
    colorButton.addEventListener('mouseup', function() {
      clearTimeout(pressTimer);
    });
    // Long-press detection (touch)
    colorButton.addEventListener('touchstart', function() {
      pressTimer = setTimeout(() => {
        alert('👀 Long press (touch) detected!');
      }, 1000);
    });
    colorButton.addEventListener('touchend', function() {
      clearTimeout(pressTimer);
    });
  
    // --- Keypress Detection ---
    const keyStatus = document.getElementById('keyStatus');
    document.addEventListener('keydown', function(event) {
      keyStatus.textContent = 'Key pressed: ' + event.key;
    });
  
    // --- Slideshow (Gallery) ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    function showSlide(index) {
      // Wrap the index if out of bounds
      if (index < 0) {
        currentSlide = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }
      // Hide all slides, then display the current one
      slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
      });
    }
    // Initialize slideshow
    showSlide(currentSlide);
    // Next/Prev button event listeners
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  
    // --- Form Validation ---
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formStatus = document.getElementById('formStatus');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for demo purposes
      let valid = true;
      // Name validation
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
      } else {
        nameError.textContent = '';
      }
      // Email validation
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
      } else if (!emailInput.checkValidity()) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
      // Password validation
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        valid = false;
      } else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }
      // Display overall form status
      if (valid) {
        formStatus.textContent = '✅ Form submitted successfully!';
      } else {
        formStatus.textContent = '⚠️ Please fix errors before submitting.';
      }
    });
  
    // Real-time feedback as the user types
    emailInput.addEventListener('input', function() {
      if (emailInput.checkValidity()) {
        emailError.textContent = '';
      } else {
        emailError.textContent = 'Invalid email format.';
      }
    });
    passwordInput.addEventListener('input', function() {
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password too short.';
      } else {
        passwordError.textContent = '';
      }
    });
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim() !== '') {
        nameError.textContent = '';
      }
    });
  });
  