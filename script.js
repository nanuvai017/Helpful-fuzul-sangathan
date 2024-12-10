// Live Chat Button: Opens a chat window or alert for now
function openChat() {
    alert('লাইভ চ্যাট সেবা এখনো সক্রিয় করা হয়নি।');
}

document.querySelector('#chat-button').addEventListener('click', openChat);


// Scroll to Top Button: Enables smooth scrolling to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.innerText = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '30px';
scrollToTopButton.style.right = '30px';
scrollToTopButton.style.backgroundColor = '#ff8c00';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.padding = '15px';
scrollToTopButton.style.fontSize = '18px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';

document.body.appendChild(scrollToTopButton);

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener('click', scrollToTop);


// Dynamic Loading of Posts: For now, we simulate post loading when the page is scrolled down
function loadMorePosts() {
    let postsContainer = document.getElementById("posts");
    let newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
        <img src="https://via.placeholder.com/400" alt="Post Image">
        <p>নতুন পোস্ট এসেছে! এটি স্বয়ংক্রিয়ভাবে লোড হয়েছে।</p>
    `;
    postsContainer.appendChild(newPost);
}

window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        loadMorePosts();
    }
});


// Form Validation for Contact Form
document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.querySelector('[name="name"]');
    let email = document.querySelector('[name="email"]');
    let message = document.querySelector('[name="message"]');
    let valid = true;

    if (name.value.trim() === '') {
        alert('নাম ফিল্ড খালি রাখা যাবে না!');
        valid = false;
    }
    if (email.value.trim() === '') {
        alert('ইমেইল ফিল্ড খালি রাখা যাবে না!');
        valid = false;
    }
    if (message.value.trim() === '') {
        alert('বার্তা ফিল্ড খালি রাখা যাবে না!');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

