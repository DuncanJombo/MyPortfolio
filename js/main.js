import { initializeTheme, toggleTheme } from './theme.js';

// Theme initialization
const currentTheme = initializeTheme();

// Navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// Define projects array
const projects = [
    {
        title: 'Client Portfolio Website',
        description: 'A sleek and responsive client portfolio website showcasing projects and skills, built with HTML, CSS, and JavaScript. Designed to highlight professional achievements and attract potential clients.',
        image: './assets/project-imgs/client1.png',
        demoLink: 'https://meggie.netlify.app/',
        githubLink: '://github.com/lenardjombo/Satsified-Clients'
    },
    {
        title: 'Client Portfolio Website',
        description: 'A modern and interactive portfolio website developed using HTML, CSS, and JavaScript. Features dynamic sections to display work samples, client testimonials, and contact information.',
        image: './assets/project-imgs/client2.png',
        demoLink: 'https://mawora.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/Satsified-Clients'
    },
    {
        title: 'AI Blogger',
        description: 'An AI-powered blogging tool by extracting and summarizing video insights into blog-ready text for easy content creation and sharing.',
        image: './assets/project-imgs/aiblogger.png',
        demoLink: 'https://github.com/lenardjombo/AI-Blogger',
        githubLink: 'https://github.com/lenardjombo/AI-Blogger'
    },
    {
        title: 'CastMovies',
        description: 'A movie discovery app, CastMovies, that leverages the TMDB API to fetch and display movie metadata.',
        image: './assets/project-imgs/castmovies.png',
        demoLink: 'https://castmovies.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/CastMovies'
    },
    {
        title: 'Vibes',
        description: 'A music streaming app, Vibes, that fetches songs using an API and plays them seamlessly in a YouTube-style interface.',
        image: './assets/project-imgs/vibez.png',
        demoLink: 'https://vibezyt.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/Vibes'
    },
    {
        title: 'Graduation Present',
        description: 'A personalized web-based gift to celebrate my uncle\'s master\'s degree graduation.',
        image: './assets/project-imgs/grad-present.png',
        demoLink: 'https://nicodemus.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/Graduation-Present'
    },
    {
        title: 'TextWarp',
        description: 'A typing test web app that allows users to measure their typing speed and accuracy.',
        image: './assets/project-imgs/typing-test.png',
        demoLink: 'https://text-warp.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/Text-Warp'
    },
    {
        title: 'AI Life Coach',
        description: 'An AI-powered life coach web app designed to offer personalized advice and guidance.',
        image: './assets/project-imgs/ai-life-coach.png',
        demoLink: 'https://ailifecoach.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/AI-LifeCoach'
    },
    {
        title: 'CastNotes',
        description: 'CastNotes is an intuitive web app that mimics the concept of \'casting\' your thoughts into organized notes.',
        image: './assets/project-imgs/castnotes.png',
        demoLink: 'https://castnotes.netlify.app/',
        githubLink: 'https://github.com/lenardjombo/CastNotes'
    }
];



// Render projects when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts(); // Assuming this function is defined elsewhere
    renderProjects();
});


document.addEventListener('DOMContentLoaded', () => {
    renderProjects(); // Make sure this is called after DOMContentLoaded
});

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid'); // Make sure the .projects-grid exists in your HTML
    projectsGrid.innerHTML = ''; // Clear any existing content
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'service-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 0.5rem;">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <a href="${project.demoLink}" class="demo-link" target="_blank">
                    <i class="fas fa-video"></i>
                </a>
                <a href="${project.githubLink}" class="github-link" target="_blank">
                    <i class="fab fa-github"></i> 
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard); // Add the new project card to the grid
    });
}

const blogPosts = [
    {
        title: "Getting Started with Web Development",
        excerpt: "A comprehensive guide for beginners looking to start their web development journey...",
        date: "June 15, 2024",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2dyYW1taW5nJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",
        link: "https://medium.com/@leonardjombo6/getting-started-with-any-programming-language-97814bdecba2"
    },
    {
        title: "Becoming a Java Software Developer in 2024",
        excerpt: "Becoming a Java software developer is a rewarding journey that requires a structured approach...",
        date: "May 22, 2024",
        readTime: "2 min read",
        imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmF8ZW58MHx8MHx8fDA%3D",
        link: "https://medium.com/@leonardjombo6/how-to-become-a-java-software-developer-in-2024-ae656832bf4d"
    },
    {
        title: "Design Principles for Modern Websites",
        excerpt: "Explore key design principles that enhance can go a long way to advance your programming skills...",
        date: "April 10, 2024",
        readTime: "4 min read",
        imageUrl: "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGphdmElMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
        link: "https://medium.com/@leonardjombo6/design-principles-in-modern-programming-d275e141b315"
    }
];

// Function to create blog post cards
function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-container');
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        
        blogCard.innerHTML = `
            <img src="${post.imageUrl}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                </div>
                <a href="${post.link}" class="read-more">Read More</a>
            </div>
        `;
        
        blogContainer.appendChild(blogCard);
    });
}



// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Theme toggle button click handler
document.querySelector('#theme-toggle').addEventListener('click', () => {
    const newTheme = toggleTheme();
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});


//contact form submission
