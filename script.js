/* =========================================================
   MILLIONE BIRTHDAY WEBSITE
   UPDATED VERSION
========================================================= */

const introScreen = document.getElementById("introScreen");
const countNumber = document.getElementById("countNumber");
const countText = document.getElementById("countText");
const loadingProgress = document.getElementById("loadingProgress");

const mainApp = document.getElementById("mainApp");
const heroSection = document.getElementById("heroSection");
const birthdayQuote = document.getElementById("birthdayQuote");
const startButton = document.getElementById("startButton");

const quizSection = document.getElementById("quizSection");
const questionCard = document.getElementById("questionCard");

const currentQuestionNumber = document.getElementById("currentQuestionNumber");
const quizProgress = document.getElementById("quizProgress");
const questionIcon = document.getElementById("questionIcon");
const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const answerArea = document.getElementById("answerArea");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackEmoji = document.getElementById("feedbackEmoji");
const feedbackText = document.getElementById("feedbackText");
const nextButton = document.getElementById("nextButton");

const finalSection = document.getElementById("finalSection");
const blastOverlay = document.getElementById("blastOverlay");
const confettiContainer = document.getElementById("confettiContainer");


/* =========================================================
   STATE
========================================================= */

let currentQuestion = -1;
let typingTimer = null;
let isTransitioning = false;


/* =========================================================
   BIRTHDAY MESSAGE
========================================================= */

const birthdayText = `
Happy Birthday to one of the most different girls I know! 🖤✨

You’re not like everyone else—you’ve got that rare combination of being funny, intelligent, smart, and effortlessly cool. Your personality is literally a whole different level. 😭🔥

You have that “I don’t chase, I attract” energy, the confidence of a sigma, and an aura that somehow makes you stand out without even trying. 👑

Keep being the same crazy, smart, funny, and unpredictable person you are. Don’t let anyone change that unique vibe of yours.

May this year bring you more happiness, success, unforgettable memories.

Stay supersonic and you will always become iconic.

Happy Birthday, Aura Queen! 🖤🎂✨
`;


/* =========================================================
   QUESTIONS
========================================================= */

const questions = [

    {
        icon: "👑",

        question:
            "Tumhara aura naturally hai ya daily charging pe lagati ho?",

        hint:
            "Be honest, Your Majesty. We already know the answer. 😂",

        options: [
            {
                text: "Born with it. Queen privileges. 👑",
                response:
                    "Naturally?! Of course. Aura factory se hi fully assembled aayi thi. 😭👑",
                emoji: "👑"
            },
            {
                text: "12 hours aura workout karti hoon. 🏋️‍♀️✨",
                response:
                    "Respect. Kuch log gym jaate hain, madam aura ka gym karti hain. 💀",
                emoji: "🏋️‍♀️"
            },
            {
                text: "Wireless charging. 🔋👑",
                response:
                    "Future technology itself. Even Apple is jealous. 😭✨",
                emoji: "🔋"
            },
            {
                text: "Classified. NASA bhi nahi jaanti. 🛸",
                response:
                    "Okay Ms. Secret Government Project. 😂 Your aura is officially classified.",
                emoji: "🛸"
            }
        ]
    },

    {
        icon: "💸",

        question:
            "Agar aura banane ke paise milte, toh tum already billionaire hoti na? 💀👑",

        hint:
            "Forbes is waiting for your answer...",

        options: [
            {
                text: "Billionaire? Already spiritually. 💸👑",
                response:
                    "Correct. Bank balance optional, aura balance mandatory. 😂👑",
                emoji: "💸"
            },
            {
                text: "Tax department ko mat batao. 💀",
                response:
                    "Don't worry. Main kuch nahi bolunga. Accountant bhi confused hai. 😂",
                emoji: "🤫"
            },
            {
                text: "Aura ka IPO launch karungi. 📈",
                response:
                    "Investor 1: Main. Investor 2: Also main. 🚀😂",
                emoji: "📈"
            },
            {
                text: "Main paisa nahi, presence print karti hoon. ✨",
                response:
                    "That's not a business model… that's a lifestyle. 👑😭",
                emoji: "✨"
            }
        ]
    },

    {
        icon: "🪞",

        question:
            "Mirror mein khud ko dekh ke “damn, lucky me” bolti ho kya? 😂",

        hint:
            "Mirror has been asked to confirm this. 👀",

        options: [
            {
                text: "Obviously. 😂",
                response:
                    "Fair. Mirror probably says it first. 😭🪞",
                emoji: "😂"
            },
            {
                text: "Mirror ko hi thank you bolti hoon. 👑",
                response:
                    "Healthy communication with your biggest fan. 😂",
                emoji: "🪞"
            },
            {
                text: "Mirror: again? Me: YES AGAIN. 😌",
                response:
                    "Confidence level: illegal. 💀👑",
                emoji: "😌"
            },
            {
                text: "Selfie leke double-check karti hoon. 📸",
                response:
                    "Scientific research. Completely understandable. 😂📸",
                emoji: "📸"
            }
        ]
    },

    {
        icon: "🐛",

        question:
            "Itni beautiful ho, phir bhi single ho… system mein bug hai kya? 💀😂",

        hint:
            "Developer detected an unexpected error...",

        options: [
            {
                text: "Bug nahi, standards high hain. 👑",
                response:
                    "Exactly. Premium product ko premium customer chahiye. 💀👑",
                emoji: "👑"
            },
            {
                text: "Single because premium plan. 💅",
                response:
                    "Monthly subscription expensive hai apparently. 😂",
                emoji: "💅"
            },
            {
                text: "Relationship status: under maintenance. 🔧😂",
                response:
                    "System maintenance since… forever. 😭🔧",
                emoji: "🔧"
            },
            {
                text: "Bug nahi, feature hai. 💀✨",
                response:
                    "Developer confirms: working exactly as designed. 😂",
                emoji: "💀"
            }
        ]
    },

    {
        icon: "🎂",

        question:
            "Cake ka first bite kisko milega?",

        hint:
            "Choose carefully. This answer may affect future cake privileges. 😂",

        options: [
            {
                text: "Me, myself & I. Sharing is overrated. 😌",
                response:
                    "As expected. Cake security has been approved. 😂🎂",
                emoji: "😌"
            },
            {
                text: "Bestie gets first bite. 🫶",
                response:
                    "Aww. Bestie privilege unlocked. 🥹🩷",
                emoji: "🫶"
            },
            {
                text: "Family members first. ❤️",
                response:
                    "Respect +1000. Queen with manners. 👑❤️",
                emoji: "❤️"
            },
            {
                text: "Whoever reaches it first. 😂",
                response:
                    "Survival of the fastest. Cake Hunger Games begin NOW. 💀",
                emoji: "😂"
            }
        ]
    },

    {
        icon: "👵",

        question:
            "“So, how does it feel to be one step closer to becoming a grandma? 👵😂”",

        hint:
            "Congratulations on unlocking another level of adulthood. 😭",

        options: [
            {
                text: "Excuse me?! I'm still a baby. 😭",
                response:
                    "Seventeen years old and already filing a complaint. 😂",
                emoji: "😭"
            },
            {
                text: "Grandma energy is actually iconic. 👵👑",
                response:
                    "A stylish grandma. Respect. 💅😂",
                emoji: "👵"
            },
            {
                text: "Don't remind me. 💀",
                response:
                    "Too late. The birthday department has already sent the notification. 😭",
                emoji: "💀"
            },
            {
                text: "I reject this allegation. 😂",
                response:
                    "The court has reviewed your birthday and found you guilty. 👩‍⚖️😂",
                emoji: "⚖️"
            }
        ]
    },

    {
        icon: "🌊",

        question:
            "Aur Marine Drive ki hawa khane kab aa rahi ho? 😂",

        hint:
            "The sea has been waiting. 🌊",

        options: [
            {
                text: "InshaAllah soon. 🌊🩷",
                response:
                    "INSHALLAH SOON. Marine Drive is not ready for this aura. 😂👑",
                emoji: "🌊"
            }
        ]
    }
];


/* =========================================================
   TYPING FUNCTION
========================================================= */

function typeText(element, text, speed = 30) {
    clearInterval(typingTimer);
    element.textContent = "";
    let index = 0;

    typingTimer = setInterval(() => {
        element.textContent += text.charAt(index);
        index++;
        if (index >= text.length) {
            clearInterval(typingTimer);
        }
    }, speed);
}


/* =========================================================
   COUNT 0 → 17
========================================================= */

function startCountUp() {
    let number = 0;
    const total = 17;
    const duration = 3400;
    const intervalTime = duration / total;

    const timer = setInterval(() => {
        number++;
        countNumber.textContent = number;
        loadingProgress.style.width = `${(number / total) * 100}%`;

        if (number < 7) {
            countText.textContent = "Something is loading... 👀";
        } else if (number < 13) {
            countText.textContent = "Okayyy... getting closer... 👀";
        } else if (number < 17) {
            countText.textContent = "Almost there... 🎂";
        } else {
            countText.textContent = "17. THE MAGIC NUMBER. 👑✨";
            clearInterval(timer);

            setTimeout(() => {
                createBirthdayBlast();
            }, 1200);
        }
    }, intervalTime);
}


/* =========================================================
   FIRST BIRTHDAY BLAST
========================================================= */

function createBirthdayBlast() {
    console.log("Birthday blast started!");

    blastOverlay.classList.remove("hidden");
    blastOverlay.classList.remove("shake-screen");
    void blastOverlay.offsetWidth;
    blastOverlay.classList.add("shake-screen");
    document.body.classList.add("no-scroll");

    if (navigator.vibrate && typeof navigator.vibrate === "function") {
        try {
            navigator.vibrate([100, 50, 150, 50, 250]);
        } catch (error) {
            console.log("Vibration unavailable.");
        }
    }

    createConfetti(100);

    setTimeout(() => {
        blastOverlay.classList.add("hidden");
        blastOverlay.classList.remove("shake-screen");
        document.body.classList.remove("no-scroll");

        introScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");
        heroSection.classList.remove("hidden");

        window.scrollTo({ top: 0, behavior: "instant" });

        typeText(birthdayQuote, birthdayText, 8);
    }, 3400);
}


/* =========================================================
   START BUTTON
========================================================= */

startButton.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    heroSection.classList.add("slide-out");

    setTimeout(() => {
        heroSection.classList.add("hidden");
        quizSection.classList.remove("hidden");
        quizSection.classList.add("slide-in");

        currentQuestion = -1;
        showQuestionOne();

        window.scrollTo({ top: 0, behavior: "smooth" });
        isTransitioning = false;
    }, 500);
});


/* =========================================================
   QUESTION 1: SIDE-BY-SIDE + CLICK TO MOVE YES BUTTON
========================================================= */

function showQuestionOne() {
    currentQuestionNumber.textContent = "1";
    quizProgress.style.width = "10%";
    questionIcon.textContent = "🎁";
    questionHint.textContent = "Go ahead, choose an option! 😉";

    typeText(questionText, "Wanna have gifts from me??", 45);

    answerArea.innerHTML = "";
    feedbackBox.classList.add("hidden");
    nextButton.classList.add("hidden");

    setTimeout(() => {
        const wrapper = document.createElement("div");
        wrapper.className = "runaway-area";
        wrapper.style.position = "relative";
        wrapper.style.minHeight = "150px";
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "center";
        wrapper.style.alignItems = "center";
        wrapper.style.gap = "20px";

        const yesButton = document.createElement("button");
        yesButton.className = "answer-button yes-button";
        yesButton.textContent = "YES 🎁";

        const noButton = document.createElement("button");
        noButton.className = "answer-button no-button";
        noButton.textContent = "NO 😭";

        wrapper.appendChild(yesButton);
        wrapper.appendChild(noButton);
        answerArea.appendChild(wrapper);

        let hasMoved = false;

        // When she clicks YES, move it from its position!
        function moveYesButton(event) {
            if (event) event.preventDefault();

            if (!hasMoved) {
                hasMoved = true;
                yesButton.style.position = "absolute";
            }

            const areaWidth = wrapper.clientWidth || 300;
            const areaHeight = wrapper.clientHeight || 150;
            const buttonWidth = yesButton.offsetWidth || 100;
            const buttonHeight = yesButton.offsetHeight || 45;

            const maxX = Math.max(10, areaWidth - buttonWidth - 10);
            const maxY = Math.max(10, areaHeight - buttonHeight - 10);

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            yesButton.style.left = `${randomX}px`;
            yesButton.style.top = `${randomY}px`;
            yesButton.style.transform = `rotate(${Math.random() * 16 - 8}deg)`;

            if (navigator.vibrate && typeof navigator.vibrate === "function") {
                try { navigator.vibrate(40); } catch (e) {}
            }
        }

        yesButton.addEventListener("click", moveYesButton);

        // When she clicks NO, show the "saved money" feedback!
        noButton.addEventListener("click", () => {
            yesButton.style.display = "none"; // Hide YES button

            feedbackEmoji.textContent = "💸🤣";
            feedbackText.textContent = "Thanks for saving my money 💸🤣💀";

            feedbackBox.classList.remove("hidden");
            nextButton.classList.remove("hidden");
            nextButton.textContent = "Okay Queen, next →";
        });

    }, 1200);
}


/* =========================================================
   NORMAL QUESTIONS
========================================================= */

function showQuestion(index) {
    const q = questions[index];

    if (!q) {
        showBoardExamPopup();
        return;
    }

    questionCard.classList.remove("slide-in");
    void questionCard.offsetWidth;
    questionCard.classList.add("slide-in");

    feedbackBox.classList.add("hidden");
    nextButton.classList.add("hidden");
    answerArea.innerHTML = "";

    questionIcon.textContent = q.icon;
    currentQuestionNumber.textContent = index + 2;
    quizProgress.style.width = `${((index + 2) / 10) * 100}%`;
    questionHint.textContent = "";

    typeText(questionText, q.question, 35);

    const typingDuration = q.question.length * 35;

    setTimeout(() => {
        questionHint.textContent = q.hint;
        createAnswerButtons(q);
    }, typingDuration + 300);
}


/* =========================================================
   ANSWER BUTTONS
========================================================= */

function createAnswerButtons(question) {
    answerArea.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = option.text;
        button.style.opacity = "0";
        button.style.transform = "translateY(20px)";

        answerArea.appendChild(button);

        setTimeout(() => {
            button.style.transition = "all 0.4s ease";
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, index * 120);

        button.addEventListener("click", () => {
            selectAnswer(button, option);
        });
    });
}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(selectedButton, option) {
    const buttons = answerArea.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove("selected");
    });

    selectedButton.classList.add("selected");

    feedbackEmoji.textContent = option.emoji;
    feedbackText.textContent = option.response;

    feedbackBox.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    nextButton.textContent = "Next Question →";
}


/* =========================================================
   BOARD EXAM REALITY CHECK (AFTER ALL QUESTIONS)
========================================================= */

function showBoardExamPopup() {
    questionCard.classList.remove("slide-in");
    void questionCard.offsetWidth;
    questionCard.classList.add("slide-in");

    currentQuestionNumber.textContent = "9";
    quizProgress.style.width = "90%";

    questionIcon.textContent = "📚";
    questionHint.textContent = "Reality check incoming... 💀📚";
    feedbackBox.classList.add("hidden");
    nextButton.classList.add("hidden");
    answerArea.innerHTML = "";

    typeText(questionText, "jaida khush mat ho abi board exam hai yaad hai na", 35);

    setTimeout(() => {
        const examButton = document.createElement("button");
        examButton.className = "answer-button";
        examButton.textContent = "Arey yaar... padhai ki yaad mat dilaao! 😭📚";
        examButton.style.width = "100%";

        examButton.addEventListener("click", () => {
            examButton.disabled = true;
            examButton.classList.add("selected");

            feedbackEmoji.textContent = "✍️️";
            feedbackText.textContent = "Hahaha! Padhai apni jagah hai 💯, pehle birthday wish maang lo! 🌟✨";

            feedbackBox.classList.remove("hidden");
            nextButton.classList.remove("hidden");
            nextButton.textContent = "Make a Wish ✨ →";
        });

        answerArea.appendChild(examButton);
    }, 1800);
}


/* =========================================================
   MAKE A BIRTHDAY WISH BOX
========================================================= */

function showWishBox() {
    questionCard.classList.remove("slide-in");
    void questionCard.offsetWidth;
    questionCard.classList.add("slide-in");

    currentQuestionNumber.textContent = "10";
    quizProgress.style.width = "100%";

    questionIcon.textContent = "🌟";
    questionHint.textContent = "Close your eyes & make a secret wish... 💭✨";
    feedbackBox.classList.add("hidden");
    nextButton.classList.add("hidden");
    answerArea.innerHTML = "";

    typeText(questionText, "Make a Birthday Wish 🎂✨", 35);

    setTimeout(() => {
        const wishWrapper = document.createElement("div");
        wishWrapper.style.display = "flex";
        wishWrapper.style.flexDirection = "column";
        wishWrapper.style.gap = "12px";

        const wishInput = document.createElement("textarea");
        wishInput.placeholder = "Write your wish here... 🎂✨";
        wishInput.rows = 3;
        wishInput.style.width = "100%";
        wishInput.style.padding = "12px";
        wishInput.style.borderRadius = "12px";
        wishInput.style.border = "2px solid rgba(255, 255, 255, 0.2)";
        wishInput.style.background = "rgba(0, 0, 0, 0.4)";
        wishInput.style.color = "#fff";
        wishInput.style.fontSize = "0.95rem";
        wishInput.style.fontFamily = "inherit";
        wishInput.style.outline = "none";
        wishInput.style.resize = "none";

        const submitWishBtn = document.createElement("button");
        submitWishBtn.className = "answer-button";
        submitWishBtn.textContent = "Lock in my Wish 🔒✨";
        submitWishBtn.style.background = "linear-gradient(135deg, #ff4081, #7c4dff)";
        submitWishBtn.style.color = "#fff";
        submitWishBtn.style.fontWeight = "bold";

        wishWrapper.appendChild(wishInput);
        wishWrapper.appendChild(submitWishBtn);
        answerArea.appendChild(wishWrapper);

        submitWishBtn.addEventListener("click", () => {
            const savedWish = wishInput.value.trim();
            if (savedWish) {
                try {
                    localStorage.setItem("milliONE_birthday_wish", savedWish);
                } catch (e) {}
            }

            wishWrapper.style.display = "none";

            feedbackEmoji.textContent = "💖";
            feedbackText.textContent = "Your wish has been sent to the universe! May all your dreams come true! 🌟✨";

            feedbackBox.classList.remove("hidden");
            nextButton.classList.remove("hidden");
            nextButton.textContent = "Finish the Birthday Mission 🎉";
        });
    }, 1200);
}


/* =========================================================
   NEXT BUTTON NAVIGATION
========================================================= */

nextButton.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    questionCard.classList.add("slide-out");

    setTimeout(() => {
        questionCard.classList.remove("slide-out");

        // Question 1 -> Question 2
        if (currentQuestion === -1) {
            currentQuestion = 0;
            showQuestion(currentQuestion);
            isTransitioning = false;
            return;
        }

        currentQuestion++;

        // Question 2-8 finished -> Board Exam Reminder
        if (currentQuestion === questions.length) {
            showBoardExamPopup();
            isTransitioning = false;
        } 
        // Board Exam Reminder finished -> Wish Box
        else if (currentQuestion === questions.length + 1) {
            showWishBox();
            isTransitioning = false;
        } 
        // Wish Box finished -> Final Screen
        else if (currentQuestion > questions.length + 1) {
            isTransitioning = false;
            showFinalScreen();
        } 
        // Normal Next Question
        else {
            showQuestion(currentQuestion);
            isTransitioning = false;
        }

    }, 450);
});


/* =========================================================
   FINAL SCREEN
========================================================= */

function showFinalScreen() {
    quizSection.classList.add("hidden");
    finalSection.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
        createFinalBlast();
    }, 700);
}


/* =========================================================
   FINAL BLAST
========================================================= */

function createFinalBlast() {
    blastOverlay.classList.remove("hidden");
    blastOverlay.classList.remove("shake-screen");
    void blastOverlay.offsetWidth;
    blastOverlay.classList.add("shake-screen");
    document.body.classList.add("no-scroll");

    const blastTitle = document.querySelector(".blast-title");
    const blastSubtitle = document.querySelector(".blast-subtitle");

    blastTitle.innerHTML = `
        HAPPY<br>
        BIRTHDAY
        <span>Insha</span>
    `;

    blastSubtitle.textContent = "Chapter 17: officially unlocked. 👑✨";

    if (navigator.vibrate && typeof navigator.vibrate === "function") {
        try {
            navigator.vibrate([100, 50, 150, 50, 250]);
        } catch (e) {}
    }

    createConfetti(140);

    setTimeout(() => {
        blastOverlay.classList.add("hidden");
        blastOverlay.classList.remove("shake-screen");
        document.body.classList.remove("no-scroll");

        finalSection.scrollIntoView({ behavior: "smooth" });
        createConfetti(60);
    }, 3400);
}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount = 100) {
    const pieces = ["💖", "✨", "🎉", "🩷", "⭐", "🎀"];

    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];

        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.fontSize = `${10 + Math.random() * 16}px`;

        piece.style.setProperty("--fall-time", `${3 + Math.random() * 4}s`);
        piece.style.setProperty("--spin-time", `${1 + Math.random() * 2}s`);
        piece.style.setProperty("--drift", `${-150 + Math.random() * 300}px`);

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 8000);
    }
}


/* =========================================================
   START WEBSITE
========================================================= */

window.addEventListener("load", () => {
    console.log("MilliONE Birthday Website Loaded 🎂");
    startCountUp();
});