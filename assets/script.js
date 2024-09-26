document.addEventListener('DOMContentLoaded', async () => {
    try {
        const proxyUrl = 'https://your-worker-name.your-account.workers.dev';

        async function configureFirebase() {
            const firebaseConfig = await fetch(`${proxyUrl}/config`).then(res => res.json());
            return firebase.initializeApp(firebaseConfig);
        }

        const firebaseInstance = await configureFirebase();

        const database = firebaseInstance.database();
        const attendanceSection = document.getElementById('attendance-section');
        const attendanceBtn = document.getElementById('attendance-btn');
        const attendanceFact = document.querySelectorAll('.attendance-fact');
        const nameContainer = document.getElementById('name-container');
        const nameInput = document.getElementById('name-input');
        const saveBtn = document.getElementById('save-btn');
        const thankYou = document.getElementById('thank-you');
        const storedName = localStorage.getItem('visitorName');

        function recordAttendance() {
            return database.ref('attendance').push().set({
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }

        function recordName(name) {
            return database.ref('names').push().set({
                name: name,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }

        function showThankYouAndCollapse() {
            nameContainer.style.display = 'none';
            attendanceBtn.style.display = 'none';
            thankYou.style.display = 'block';

            setTimeout(() => {
                thankYou.style.display = 'none';
                attendanceSection.classList.add('collapsed');
            }, 3000);
        }

        if (storedName) {
            attendanceBtn.addEventListener('click', () => {
                recordAttendance().then(() => {
                    attendanceBtn.style.display = 'none';
                    attendanceFact.forEach(e => { e.style.display = 'none' });
                    recordName(storedName);
                    showThankYouAndCollapse();
                });
            });
        } else {
            attendanceBtn.addEventListener('click', () => {
                recordAttendance();
                attendanceBtn.style.display = 'none';
                attendanceFact.forEach(e => { e.style.display = 'none' });
                nameContainer.style.display = 'block';
            });

            nameInput.addEventListener('input', () => {
                if (nameInput.value.trim() !== '') {
                    saveBtn.textContent = 'Save';
                    saveBtn.classList.add('named');
                } else {
                    saveBtn.textContent = 'I am anonymous';
                    saveBtn.classList.remove('named');
                }
            });

            saveBtn.addEventListener('click', () => {
                const name = nameInput.value.trim();
                if (name !== '') {
                    localStorage.setItem('visitorName', name);
                    recordName(name);
                }
                showThankYouAndCollapse();
            });
        }

    } catch (error) {
        console.error('Error configuring Firebase:', error);
    }
});



let header = document.querySelector('header');

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    let elementHeight = element.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;

    let opacity = 1;

    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / (0.75 * elementHeight);
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

const scrollHandler = () => {
    fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

const video = document.querySelector(".video");
const videoBox = document.querySelector("#video-container");

video.addEventListener("ended", () => {
    video.classList.add("hidden");
    document.querySelector("main .back").style.opacity = "1";
    setTimeout(() => { videoBox.style.display = "none" }, 3500)
});

video.addEventListener("click", () => {
    video.play();
});

const preloadImages = srcs => {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    let img;
    for (let i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

let imageSrcs = ["assets/media/A_thumbnail.png", "assets/media/AM_thumbnail.png"];

preloadImages(imageSrcs);

const notBuiltYet = () => {
    alert("This link presently takes you nowhere. But very soon, in fact, very very soon, it totally WOULD!");
}

