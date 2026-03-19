// ========================================
// EmailJS Configuration & Form Handling
// ========================================

// Initialize EmailJS when document loads
(function(){
  emailjs.init("vTAKL68e1jxA9PTn2"); // استبدل بـ Public Key الخاص بك
})();

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const formMessage = document.getElementById('formMessage');
      
      // Disable button and show loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formMessage.style.display = 'none';
      
      // Get form data
      const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        company: document.getElementById('company').value || 'Not provided',
        message: document.getElementById('message').value,
        to_email: 'ceo@ecolandegypt.com'
      };
      
      // Send email using EmailJS
      emailjs.send('service_hlba7xs', 'template_0h4ru8o', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          
          // Show success message
          formMessage.textContent = 'Thank you! Your message has been sent successfully. We will contact you soon.';
          formMessage.style.display = 'block';
          formMessage.style.backgroundColor = '#d4edda';
          formMessage.style.color = '#155724';
          formMessage.style.border = '1px solid #c3e6cb';
          formMessage.style.padding = '15px';
          formMessage.style.borderRadius = '5px';
          formMessage.style.marginBottom = '15px';
          
          // Reset form
          contactForm.reset();
          
          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request quote';
          
          // Hide message after 5 seconds
          setTimeout(function() {
            formMessage.style.display = 'none';
          }, 5000);
          
        }, function(error) {
          console.log('FAILED...', error);
          
          // Show error message
          formMessage.textContent = 'Sorry, something went wrong. Please try again or contact us directly.';
          formMessage.style.display = 'block';
          formMessage.style.backgroundColor = '#f8d7da';
          formMessage.style.color = '#721c24';
          formMessage.style.border = '1px solid #f5c6cb';
          formMessage.style.padding = '15px';
          formMessage.style.borderRadius = '5px';
          formMessage.style.marginBottom = '15px';
          
          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request quote';
        });
    });
  }
});



// ========================================
// Original Script.js Code
// ========================================

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', function () {
    navList.classList.toggle('show');
    toggle.setAttribute(
      'aria-expanded',
      navList.classList.contains('show')
    );
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navList.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Product tabs
  const tabs = document.querySelectorAll('.product-tabs li');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const id = tab.dataset.tab;
      panels.forEach(p =>
        p.classList.toggle('active', p.id === id)
      );
    });
  });

  
  // Hero background slider
  const slides = document.querySelectorAll('.hero-slides .slide');
  let currentSlide = 0;

  if (slides.length) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // Mobile dropdowns
  document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.parentElement;

        document.querySelectorAll('.has-dropdown.open')
          .forEach(item => {
            if (item !== parent) item.classList.remove('open');
          });

        parent.classList.toggle('open');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    const menuOpen = navList.classList.contains('show');
    const clickedToggle = toggle.contains(e.target);
    const clickedMenu = navList.contains(e.target);

    if (menuOpen && !clickedToggle && !clickedMenu) {
      navList.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

});

document.querySelectorAll('.nav-toggle').forEach((toggle, i) => {
  const navList = document.querySelectorAll('.nav-list')[i];

  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
});

// Dropdown يفتح بالكليك على الموبايل واللابتوب التاتش
document.addEventListener('DOMContentLoaded', function() {
  
  // كل الـ dropdowns
  const dropdowns = document.querySelectorAll('.dropdown > a');
  
  dropdowns.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // يمنع الرابط يشتغل
      
      const parent = this.parentElement;
      const menu = parent.querySelector('.dropdown-menu');
      
      // يفتح/يقفل القائمة
      if (menu) {
        // يقفل أي dropdown تاني مفتوح
        document.querySelectorAll('.dropdown').forEach(function(otherDropdown) {
          if (otherDropdown !== parent) {
            otherDropdown.classList.remove('open');
            const otherMenu = otherDropdown.querySelector('.dropdown-menu');
            if (otherMenu) otherMenu.classList.remove('show');
          }
        });
        
        // يفتح/يقفل الحالي
        menu.classList.toggle('show');
        parent.classList.toggle('open');
      }
    });
  });
  
  
  // الـ sub-dropdowns
  const subDropdowns = document.querySelectorAll('.dropdown-sub > a');
  
  subDropdowns.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const parent = this.parentElement;
      const menu = parent.querySelector('.dropdown-submenu');
      
      if (menu) {
        // يقفل أي submenu تاني مفتوح
        parent.parentElement.querySelectorAll('.dropdown-sub').forEach(function(otherSub) {
          if (otherSub !== parent) {
            otherSub.classList.remove('open');
            const otherMenu = otherSub.querySelector('.dropdown-submenu');
            if (otherMenu) otherMenu.classList.remove('show');
          }
        });
        
        // يفتح/يقفل الحالي
        menu.classList.toggle('show');
        parent.classList.toggle('open');
      }
    });
  });
  
  // يقفل القوائم لما تدوس برة
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-sub')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown.open').forEach(function(dropdown) {
        dropdown.classList.remove('open');
      });
      document.querySelectorAll('.dropdown-submenu.show').forEach(function(submenu) {
        submenu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-sub.open').forEach(function(sub) {
        sub.classList.remove('open');
      });
    }
  });
});