document.addEventListener('DOMContentLoaded', function() {
    //Homepage
    const starContainer = document.createElement('div');
  starContainer.id = 'sky';
  document.getElementById('star-animation').appendChild(starContainer);

  // Function to generate random positions
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Create stars
  for (let i = 0; i < 60; i++) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    star.setAttribute("cx", getRandom(0, window.innerWidth));
    star.setAttribute("cy", getRandom(0, window.innerHeight));
    star.setAttribute("r", Math.random() * 1.2);
    star.setAttribute("fill", "white");
    starContainer.appendChild(star);
  }

  // Create shooting stars
  const shootingStarsContainer = document.createElement('div');
  shootingStarsContainer.id = 'shootingstars';
  document.getElementById('star-animation').appendChild(shootingStarsContainer);

  for (let i = 0; i < 60; i++) {
    const wish = document.createElement('div');
    wish.className = 'wish';
    wish.style.left = `${getRandom(0, window.innerWidth)}px`;
    wish.style.top = `${getRandom(0, window.innerHeight)}px`;
    shootingStarsContainer.appendChild(wish);
  }

  // Animations
  anime({
    targets: "#sky circle",
    opacity: [
      { duration: 700, value: 0 },
      { duration: 700, value: 1 }
    ],
    easing: "linear",
    loop: true,
    delay: (el, i) => 50 * i
  });

  anime({
    targets: "#shootingstars .wish",
    easing: "linear",
    loop: true,
    delay: (el, i) => 1000 * i,
    opacity: [
      { duration: 700, value: 1 }
    ],
    width: [
      { value: "150px" },
      { value: "0px" }
    ],
    translateX: 350
  });
    // Load skills
    const skills = {
        softSkills: [
            'Team Collaboration',
            'Problem Solving',
            'Creativity',
            'Flexibility',
            'Adaptability',
            'Emotional Intelligence'
        ],
        hardSkills: [
            'Unity',
            'Unreal Engine 5',
            'Game Designing',
            'Version Control (Git)'
        ]
    };

    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar-nav a, .navbar-brand').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect (if you want to keep it)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    const skillsSection = document.getElementById('skills');
    
    // Function to create skill list
    function createSkillList(skillType, skillArray) {
        const skillList = document.createElement('ul');
        skillList.className = 'list-group';
        
        skillArray.forEach(skill => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = skill;
            skillList.appendChild(li);
        });
        
        return skillList;
    }

    // Create and append soft skills
    const softSkillsTitle = document.createElement('h3');
    softSkillsTitle.textContent = 'Soft Skills';
    skillsSection.appendChild(softSkillsTitle);
    skillsSection.appendChild(createSkillList('soft', skills.softSkills));

    // Create and append hard skills
    const hardSkillsTitle = document.createElement('h3');
    hardSkillsTitle.textContent = 'Hard Skills';
    skillsSection.appendChild(hardSkillsTitle);
    skillsSection.appendChild(createSkillList('hard', skills.hardSkills));

    // Load projects
    const projects = [
        { 
            name: 'How to train your friends', 
            description: 'เป็นเกมแนว Turn-Based ที่พัฒนาขึ้นด้วย MonoGame ผู้เล่นสามารถจัดการทีมของตัวเองเพื่อไปต่อกรกับศัตรูได้ มีตัวละครให้เลือกมากสุด 7 ตัว',
            images: ['Picture/Project1_Title.png', 'Picture/Project1_GP.png','Picture/Project1_GP2.png'],
            link: 'https://drive.google.com/file/d/1Hii2p3ArKYN8VA2kw5Tr-ZURkIjObzDC/view?usp=sharing'
        },
        { 
            name: 'Roots of Mystery', 
            description: 'เกมแนว Puzzle สืบสวนคดีฆาตรกรรมในโลกของเหล่าสรรพสัตว์ ได้รับรางวัล Hornorable Mention ในงาน Global Game Jam 2023',
            images: ['Picture/Project2_Menu.png', 'Picture/Project2_GP1.png', 'Picture/Project2_GP2.png'],
            link: 'https://amiyaa.itch.io/roots-of-mystery'
        },
        { 
            name: 'Man & Machine', 
            description: 'เกมแนว Strategy แบบ Real-time มีแรงบันดาลใจจาก Red Alert 2 ผู้เล่นจะต้องคอยสร้างและอัพเกรดฐานพร้อมสร้างยูนิทเพื่อถล่มฐานศัตรูให้ราบคาบ',
            images: ['Picture/Project3_Menu.png', 'Picture/Project3_GP1.png', 'Picture/Project3_GP2.png'],
            link: 'https://gitlab.com/SolidaS-Kawaii/project_rts_heresy'
        }
    ];

    const projectsContainer = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-4';
        div.innerHTML = `
            <div class="card project-card">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
                <div id="carousel-${project.name.replace(/\s+/g, '')}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${project.images[0]}" class="d-block w-100 project-image" alt="${project.name} - Image 1">
                        </div>
                        <div class="carousel-item">
                            <img src="${project.images[1]}" class="d-block w-100 project-image" alt="${project.name} - Image 2">
                        </div>
                        <div class="carousel-item">
                            <img src="${project.images[2]}" class="d-block w-100 project-image" alt="${project.name} - Image 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${project.name.replace(/\s+/g, '')}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${project.name.replace(/\s+/g, '')}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-body">
                    <a href="${project.link}" class="btn btn-primary" target="_blank">Learn More</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(div);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
