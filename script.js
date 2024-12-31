document.addEventListener("DOMContentLoaded", function () {
  const menuRef = document.getElementById('menuRef');
  const openMenuButton = document.getElementById('openMenuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  
  const links = {
    home: {
      link: document.getElementById('homeLink'),
      underline: document.getElementById('underline-home')
    },
    about: {
      link: document.getElementById('aboutLink'),
      underline: document.getElementById('underline-about')
    },
    services: {
      link: document.getElementById('servicesLink'),
      underline: document.getElementById('underline-services')
    },
    work: {
      link: document.getElementById('workLink'),
      underline: document.getElementById('underline-work')
    },
    contact: {
      link: document.getElementById('contactLink'),
      underline: document.getElementById('underline-contact')
    }
  };
  document.getElementById('resume-btn').addEventListener('click', function() {
    window.open('assets/Pallavi Shelavale Resume.pdf', '_blank'); // adjust path to your resume
});


  let currentMenu = 'home';

  // Initially hide all underlines
  Object.values(links).forEach(item => {
    item.underline.style.display = 'none';
  });

  // Show underline for the default selection
  links[currentMenu].underline.style.display = 'block';

  // Function to open the menu
  openMenuButton.addEventListener('click', function () {
    menuRef.style.right = '0';
  });

  // Function to close the menu
  closeMenuButton.addEventListener('click', function () {
    menuRef.style.right = '-350px';
  });

  // Function to handle navigation menu selection
  function handleMenuSelection(menu) {
    if (currentMenu === menu) return;

    // Hide underline of the previous selection
    links[currentMenu].underline.style.display = 'none';
    
    // Show underline for the new selection
    links[menu].underline.style.display = 'block';
    
    currentMenu = menu;
  }

  // Add event listeners to each link
  links.home.link.addEventListener('click', () => handleMenuSelection('home'));
  links.about.link.addEventListener('click', () => handleMenuSelection('about'));
  links.services.link.addEventListener('click', () => handleMenuSelection('services'));
  links.work.link.addEventListener('click', () => handleMenuSelection('work'));
  links.contact.link.addEventListener('click', () => handleMenuSelection('contact'));
});




document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll(".anchor-link");

  // Smooth scroll functionality for anchor links
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust the offset value if needed
          behavior: "smooth"
        });
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const Service_Data = [
    { s_no: "01", s_name: "Web Design", s_desc: "Creating visually appealing and user-friendly website..." },
    { s_no: "02", s_name: "Frontend Development", s_desc: "Building responsive and interactive web..." },
    { s_no: "03", s_name: "Frontend with React.js", s_desc: "Developing responsive user interfaces..." },
    { s_no: "04", s_name: "API Integration", s_desc: "Integrating third-party APIs and building custom APIs..." },
    { s_no: "05", s_name: "Website Optimization", s_desc: "Improving  performance and load times..." },
    { s_no: "06", s_name: "Database Management", s_desc: "Handling data storage using MongoDB..." },
  ];

  const servicesContainer = document.getElementById('services-container');

  Service_Data.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service-format');

    const serviceNumber = document.createElement('h3');
    serviceNumber.textContent = service.s_no;

    const serviceName = document.createElement('h2');
    serviceName.textContent = service.s_name;

    const serviceDesc = document.createElement('p');
    serviceDesc.textContent = service.s_desc;

    const readMoreDiv = document.createElement('div');
    readMoreDiv.classList.add('service-readmore');

    // const readMoreText = document.createElement('p');
    // readMoreText.textContent = 'Read More';

    // const arrowIcon = document.createElement('img');
    // arrowIcon.src = 'assets/arrow_icon.svg';
    // arrowIcon.alt = '';

    // readMoreDiv.appendChild(readMoreText);
    // readMoreDiv.appendChild(arrowIcon);

    serviceDiv.appendChild(serviceNumber);
    serviceDiv.appendChild(serviceName);
    serviceDiv.appendChild(serviceDesc);
    serviceDiv.appendChild(readMoreDiv);

    servicesContainer.appendChild(serviceDiv);
  });
});





const mywork_data = [
  {
    w_no: 1,
    w_name: "Web design",
    w_img: 'assets/project1.png',
    w_link: 'https://idyllic-kleicha-6f5521.netlify.app' 
},
{
    w_no: 2,
    w_name: "Web design",
    w_img: 'assets/project2.png',
    w_link: 'https://glittering-cajeta-7454cd.netlify.app' 
},
{
    w_no: 3,
    w_name: "Web design",
    w_img: 'assets/project3.png',
    w_link: 'https://beamish-kheer-5d9e30.netlify.app' 
},
{
    w_no: 4,
    w_name: "Web design",
    w_img: 'assets/project4.png',
    w_link: '#'
},
{
    w_no: 5,
    w_name: "Web design",
    w_img: 'assets/project5.png',
    w_link: '#' 
},
{
    w_no: 6,
    w_name: "Web design",
    w_img: 'assets/project6.png',
    w_link: 'https://noteverse-app.netlify.app/' 
}
];


const myworkContainer = document.getElementById('myworkContainer');


mywork_data.forEach((work, index) => {
  const linkElement = document.createElement('a'); 
  linkElement.href = work.w_link; 
  linkElement.target = '_blank'; 

  const imgElement = document.createElement('img');
  imgElement.src = work.w_img;
  imgElement.alt = `Work Image ${index + 1}`;
  imgElement.style.cursor = 'pointer';

  linkElement.appendChild(imgElement);
  myworkContainer.appendChild(linkElement);
});




document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "27a75bb0-a52f-4dd4-a2bf-d0c9cac4c978");

  const object = {};
  formData.forEach((value, key) => object[key] = value);
  const json = JSON.stringify(object);

  try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: json
      });
      const res = await response.json();

      if (res.success) {
          alert(res.message);
      } else {
          alert('There was an error submitting the form.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
  }
});

