document.addEventListener('DOMContentLoaded', function() {
            // --- Navigation Toggle Logic ---
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');

            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('hidden');
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
                navToggle.setAttribute('aria-expanded', !isExpanded);
            });

            // Close menu when a link is clicked (for mobile)
            document.querySelectorAll('#nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    if (!navMenu.classList.contains('hidden')) {
                        navMenu.classList.add('hidden');
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });

            // --- Form Submission and Modal Logic ---
            const userForm = document.getElementById('user-form');
            const modal = document.getElementById('thank-you-modal');
            const modalText = document.getElementById('modal-text');
            const modalCloseBtn = document.getElementById('modal-close-btn');

            userForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const nameInput = document.getElementById('name');
                const name = nameInput.value;

                modalText.textContent = `Thank you, ${name}! Your information has been submitted.`;
                modal.classList.remove('hidden');
            });

            modalCloseBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });

            // --- Dynamic Stories Accordion Logic ---
            const storiesData = [
                {
                    title: "Finding My Voice Again",
                    content: "For a long time, I felt like a ghost in my own life. I was silent, and my story was invisible. But Warriors in Pink helped me find my voice. With their support, I began to share my experiences, and with every word, I felt a piece of myself returning. Now, I speak not just for myself, but for others who are still in the shadows. We are not defined by our past; we are defined by our strength and our ability to rise."
                },
                {
                    title: "A New Beginning",
                    content: "Leaving my past behind seemed impossible. The world felt cold and unforgiving. But here, I found a warmth I never thought I'd feel again. The kindness of the volunteers and the understanding of other survivors showed me that a new beginning isn't just a dream. It's a reality waiting for me. I am on a new path, and I am not walking it alone."
                },
                {
                    title: "Scars Don't Define Us",
                    content: "I used to hide my scars, both visible and invisible. They were a constant reminder of the pain I had endured. But through the stories shared here, I learned that my scars are not a sign of weakness, but a testament to my survival. They are proof of my resilience, my courage, and my strength. I am a warrior, and my scars are my stripes."
                }
            ];

            const storiesContainer = document.getElementById('stories-container');

            storiesData.forEach((story, index) => {
                const storyElement = document.createElement('div');
                storyElement.classList.add('border-b', 'border-pink-200', 'pb-4');
                storyElement.innerHTML = `
                    <div class="flex justify-between items-center cursor-pointer py-2 px-4 bg-pink-100 hover:bg-pink-200 rounded-md transition-colors duration-200" role="button" aria-expanded="false" aria-controls="story-content-${index}">
                        <h3 class="font-semibold text-lg text-pink-700">${story.title}</h3>
                        <svg class="accordion-arrow h-5 w-5 text-pink-500 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div id="story-content-${index}" class="story-content hidden mt-2 px-4 py-2 text-gray-700 leading-relaxed">
                        <p>${story.content}</p>
                    </div>
                `;
                storiesContainer.appendChild(storyElement);
            });

            // Add event listeners for the new accordion elements
            document.querySelectorAll('#stories-container [role="button"]').forEach(button => {
                button.addEventListener('click', () => {
                    const content = document.getElementById(button.getAttribute('aria-controls'));
                    const arrow = button.querySelector('.accordion-arrow');

                    const isExpanded = button.getAttribute('aria-expanded') === 'true';

                    if (isExpanded) {
                        content.classList.add('hidden');
                        arrow.classList.remove('rotated');
                        button.setAttribute('aria-expanded', 'false');
                    } else {
                        content.classList.remove('hidden');
                        arrow.classList.add('rotated');
                        button.setAttribute('aria-expanded', 'true');
                    }
                });
            });

            // --- Active Nav Link Highlighting ---
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            if (link.getAttribute('href') === `#${entry.target.id}`) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });
        document.addEventListener('DOMContentLoaded', () => {

    // Existing code for other modals...
    const thankYouModal = document.getElementById('thank-you-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // This is the new code for the email sign-up form
    const signupForm = document.getElementById('community-form');
    const signupModal = document.getElementById('signup-modal');
    const signupModalCloseBtn = document.getElementById('modal-close-btn-signup');
    
    // Function to show the sign-up modal
    function showSignupModal() {
        signupModal.classList.remove('hidden');
        signupModal.classList.add('flex');
    }

    // Function to hide the sign-up modal
    function hideSignupModal() {
        signupModal.classList.add('hidden');
        signupModal.classList.remove('flex');
    }

    // Event listener for the sign-up form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the form from refreshing the page
        
        // In a real application, you would send the form data to a server here.
        // For this example, we just show the modal immediately.

        showSignupModal();
        
        // Optional: Clear the form field after submission
        signupForm.reset();
    });

    // Event listener to close the sign-up modal when the close button is clicked
    signupModalCloseBtn.addEventListener('click', hideSignupModal);

    // Event listener to close the modal if the user clicks outside of it
    signupModal.addEventListener('click', (e) => {
        if (e.target === signupModal) {
            hideSignupModal();
        }
    });
});
 

