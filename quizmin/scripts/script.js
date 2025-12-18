const questions = {
    worldCapitals: [
        { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
        { question: "What is the capital of Japan?", options: ["Seoul", "Bangkok", "Beijing", "Tokyo"], answer: "Tokyo" },
        { question: "What is the capital of Italy?", options: ["Venice", "Milan", "Rome", "Florence"], answer: "Rome" },
        { question: "What is the capital of Spain?", options: ["Valencia", "Barcelona", "Madrid", "Seville"], answer: "Madrid" },
        { question: "What is the capital of Portugal?", options: ["Braga", "Porto", "Coimbra", "Lisbon"], answer: "Lisbon" },
        { question: "What is the capital of Andorra?", options: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "La Massana"], answer: "Andorra la Vella" },
        { question: "What is the capital of Germany?", options: ["Munich", "Berlin", "Frankfurt", "Hamburg"], answer: "Berlin" },
        { question: "What is the capital of Canada?", options: ["Montreal", "Toronto", "Vancouver", "Ottawa"], answer: "Ottawa" },
        { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"], answer: "Moscow" },
        { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: "Cairo" }
    ],
    webDev: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Marking Language"], answer: "Hyper Text Markup Language" },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "What does JS stand for?", options: ["JavaScript", "JavaSource", "JustScript", "JungleScript"], answer: "JavaScript" },
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["style", "css", "script", "link"], answer: "style" },
        { question: "Which property is used to change the background color in CSS?", options: ["color", "bgcolor", "background-color", "background"], answer: "background-color" },
        { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"], answer: "Netscape" },
        { question: "Which HTML attribute is used to define inline styles?", options: ["class", "id", "style", "font"], answer: "style" },
        { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
        { question: "How do you write 'Hello World' in an alert box in JavaScript?", options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"], answer: "alert('Hello World');" },
        { question: "Which HTML element is used to specify a footer for a document or section?", options: ["bottom", "footer", "section", "aside"], answer: "footer" }
    ],
    introToPython: [
        { question: "What is the correct file extension for Python files?", options: [".pyth", ".pt", ".pyt", ".py"], answer: ".py" },
        { question: "How do you insert comments in Python code?", options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "!-- This is a comment --"], answer: "# This is a comment" },
        { question: "Which of the following is a valid variable name in Python?", options: ["1variable", "variable_name", "variable-name", "variable name"], answer: "variable_name" },
        { question: "What is the output of print(2 ** 3) in Python?", options: ["6", "8", "9", "5"], answer: "8" },
        { question: "Which keyword is used to create a function in Python?", options: ["func", "def", "function", "define"], answer: "def" },
        { question: "How do you create a list in Python?", options: ["list = {}", "list = []", "list = ()", "list = <>"], answer: "list = []" },
        { question: "What is the correct way to import a module in Python?", options: ["import module_name", "include module_name", "using module_name", "require module_name"], answer: "import module_name" },
        { question: "Which of the following is used to handle exceptions in Python?", options: ["try/except", "catch/throw", "error handling", "if/else"], answer: "try/except" },
        { question: "What is the output of len('Hello') in Python?", options: ["4", "5", "6", "Error"], answer: "5" },
        { question: "Which of the following is a built-in data type in Python?", options: ["array", "tuple", "list", "dictionary"], answer: "list" }
    ],
    musicGenres: [
        { question: "Which genre is characterized by a strong rhythm and often features electric guitars?", options: ["Classical", "Jazz", "Rock", "Country"], answer: "Rock" },
        { question: "Which genre originated in the African American communities in the 1940s and is known for its improvisation?", options: ["Blues", "Jazz", "Hip Hop", "Reggae"], answer: "Jazz" },
        { question: "Which genre is known for its storytelling lyrics and often features acoustic instruments?", options: ["Pop", "Country", "Electronic", "Metal"], answer: "Country" },
        { question: "Which genre is characterized by synthesized sounds and a strong beat, often played in clubs?", options: ["Classical", "Rock", "Electronic", "Folk"], answer: "Electronic" },
        { question: "Which genre originated in Jamaica and is known for its offbeat rhythm and socially conscious lyrics?", options: ["Reggae", "Blues", "Pop", "Jazz"], answer: "Reggae" },
        { question: "Which genre is known for its complex compositions and orchestral arrangements?", options: ["Classical", "Rock", "Hip Hop", "Country"], answer: "Classical" },
        { question: "Which genre often features rapping and DJing as key elements?", options: ["Jazz", "Hip Hop", "Blues", "Folk"], answer: "Hip Hop" },
        { question: "Which genre is characterized by its emotional vocal delivery and often features themes of love and heartbreak?", options: ["Pop", "Metal", "Country", "Rock"], answer: "Pop" },
        { question: "Which genre is known for its heavy use of distortion and aggressive vocals?", options: ["Metal", "Jazz", "Classical", "Reggae"], answer: "Metal" },
        { question: "Which genre often features traditional instruments and focuses on cultural storytelling?", options: ["Folk", "Electronic", "Pop", "Rock"], answer: "Folk" }
    ],
    filmTvTrivia: [
        { question: "Which movie won Best Picture at the 2020 Academy Awards?", options: ["1917", "Joker", "Parasite","Once Upon a Time in Hollywood"],answer: "Parasite" },
        { question: "Who directed the epic film 'Titanic'?",options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],answer: "James Cameron" },
        {question: "Which actor played the Joker in 'The Dark Knight'?", options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],answer: "Heath Ledger"},
        {question: "In which film does the character 'Forrest Gump' say, 'Life is like a box of chocolates'?", options: ["Cast Away", "The Green Mile", "Forrest Gump", "Saving Private Ryan"],answer: "Forrest Gump"},
        {question: "Which movie features the quote 'I'll be back'?", options: ["Predator", "Terminator", "Commando", "Total Recall"], answer: "Terminator"},
        {question: "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?",options: ["Samwise", "Bilbo", "Frodo", "Pippin"],answer: "Frodo"},
        { question: "Which animated film features a talking snowman named Olaf?", options: ["Frozen", "Moana", "Tangled", "Brave"], answer: "Frozen"},
        { question: "Who directed 'Inception'?", options: ["David Fincher", "Christopher Nolan", "Ridley Scott", "Quentin Tarantino"], answer: "Christopher Nolan"},{ question: "Which film is set in the fictional African country of Wakanda?", options: ["Black Panther", "Coming to America", "The Lion King", "Hotel Rwanda"], answer: "Black Panther" },{question: "What is the highest-grossing film of all time (as of 2025)?",options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: The Force Awakens"], answer: "Avatar" }
    ],
    famousArtists: [
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci"},
        { question: "Which artist is known for cutting off part of his own ear?", options: ["Salvador Dalí", "Vincent van Gogh", "Henri Matisse", "Paul Cézanne"], answer: "Vincent van Gogh"},
        { question: "Which Spanish artist co-founded the Cubist movement?", options: ["Francisco Goya", "Joan Miró", "Pablo Picasso", "Diego Velázquez"], answer: "Pablo Picasso"},
        { question: "Which artist is famous for his melting clocks in 'The Persistence of Memory'?", options: ["René Magritte", "Salvador Dalí", "Edvard Munch", "Andy Warhol"], answer: "Salvador Dalí"},
        {question: "Frida Kahlo was a painter from which country?", options: ["Spain", "Argentina", "Mexico", "Brazil"], answer: "Mexico"},
        { question: "Which artist is known for the painting 'The Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Paul Gauguin", "Henri Rousseau"], answer: "Vincent van Gogh"},
        { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Raphael", "Michelangelo", "Donatello", "Caravaggio"], answer: "Michelangelo"},
        { question: "Which artist is known for pop art and the painting of Campbell's soup cans?", options: ["Roy Lichtenstein", "Keith Haring", "Andy Warhol", "Jean-Michel Basquiat"], answer: "Andy Warhol"},
        { question: "Which French artist is famous for his water lily paintings?", options: ["Édouard Manet", "Claude Monet", "Henri Matisse", "Paul Cézanne"], answer: "Claude Monet" },
        { question: "Which Norwegian artist painted 'The Scream'?", options: ["Edvard Munch", "Gustav Klimt", "Caspar David Friedrich", "Egon Schiele"], answer: "Edvard Munch" }
        ],
    excelBasics: [
        { question: "What is the default file extension for Excel workbooks?", options: [".docx", ".xlsx", ".pptx", ".txt"], answer: ".xlsx"},
        { question: "Which symbol is used to start a formula in Excel?", options: ["@", "=", "#", "$"], answer: "="},
        { question: "What function adds a range of numbers?", options: ["SUM()", "ADD()", "TOTAL()", "COUNT()"], answer: "SUM()"},
        { question: "Which shortcut saves your Excel workbook?", options: ["Ctrl + P", "Ctrl + S", "Ctrl + Z", "Ctrl + C"], answer: "Ctrl + S"},
        { question: "What does the cell reference 'A1' mean?", options: ["Column A, Row 1", "Row A, Column 1", "Sheet A, Cell 1", "Cell A1 in all sheets"], answer: "Column A, Row 1"},
        { question: "Which function calculates the average of numbers?", options: ["MEAN()", "AVERAGE()", "AVG()", "MID()"], answer: "AVERAGE()"},
        { question: "What tool lets you highlight cells based on their values?", options: ["Data Validation", "Conditional Formatting", "Cell Styles", "AutoFilter"], answer: "Conditional Formatting"},
        { question: "Which tab contains the 'Insert Chart' option?", options: ["Home", "Insert", "Data", "Review"], answer: "Insert"},
        {question: "What does the fill handle do?", options: ["Deletes cells", "Copies formulas or values", "Formats cells", "Sorts data"], answer: "Copies formulas or values"},
        { question: "Which function counts the number of cells with numbers?", options: ["COUNT()", "COUNTA()", "COUNTIF()", "SUM()"], answer: "COUNT()"}
    ],
    digitalSafetyPrivacy: [
        { question: "What is phishing?", options: ["A type of malware", "A method of stealing personal information", "A secure way to share data", "A type of firewall"], answer: "A method of stealing personal information"},
        { question: "What does HTTPS stand for?", options: ["HyperText Transfer Protocol Secure", "High Transfer Protocol Standard", "HyperText Transfer Protocol Standard", "High Transfer Protocol Secure"], answer: "HyperText Transfer Protocol Secure"},
        { question: "What is two-factor authentication?", options: ["Using two passwords", "Using a password and a second form of verification", "Logging in from two devices", "Using two usernames"], answer: "Using a password and a second form of verification"},
        { question: "What is a strong password?", options: ["A password with at least 8 characters, including letters, numbers, and symbols", "A password that is easy to remember", "A password that uses only letters", "A password that is the same as your username"], answer: "A password with at least 8 characters, including letters, numbers, and symbols"},
        { question: "What should you do if you receive an email from an unknown sender?", options: ["Open it immediately", "Click on any links", "Delete it without opening", "Reply to ask for more information"], answer: "Delete it without opening"},
        { question: "What is malware?", options: ["A type of antivirus software", "Malicious software designed to harm or exploit devices", "A secure way to store data", "A type of firewall"], answer: "Malicious software designed to harm or exploit devices"},
        { question: "What is a VPN used for?", options: ["To increase internet speed", "To create a secure connection over the internet", "To block ads", "To share files"], answer: "To create a secure connection over the internet"},
        { question: "What is the best way to protect your personal information online?", options: ["Share it only with trusted websites", "Use public Wi-Fi for sensitive transactions", "Post it on social media", "Ignore privacy settings"], answer: "Share it only with trusted websites"},
        { question: "What is ransomware?", options: ["A type of antivirus software", "Malware that locks your files until a ransom is paid", "A secure way to back up data", "A type of firewall"], answer: "Malware that locks your files until a ransom is paid"},
        { question: "What should you do if you suspect your account has been hacked?", options: ["Ignore it", "Change your password immediately", "Delete the account", "Post about it on social media"], answer: "Change your password immediately"}
    ],
    genshinImpact: [
        { question: "What is the name of the main protagonist in Genshin Impact?", options: ["Aether/Lumine", "Zhongli", "Diluc", "Venti"], answer: "Aether/Lumine"},
        { question: "Which element does the character 'Venti' use?", options: ["Pyro", "Hydro", "Anemo", "Electro"], answer: "Anemo"},
        { question: "What is the name of the city where the game is primarily set?", options: ["Mondstadt", "Liyue", "Inazuma", "Sumeru"], answer: "Mondstadt"},
        { question: "Which character is known as the 'Darknight Hero'?", options: ["Kaeya", "Diluc", "Razor", "Chongyun"], answer: "Diluc"},
        { question: "What is the currency used in Genshin Impact?", options: ["Mora", "Primogems", "Genesis Crystals", "All of the above"], answer: "All of the above"},
        { question: "Which character wields a bow and has a Pyro element?", options: ["Amber", "Fischl", "Ganyu", "Xiangling"], answer: "Amber"},
        { question: "What is the name of the organization that the Traveler joins?", options: ["The Knights of Favonius", "The Liyue Qixing", "The Adventurers' Guild", "The Fatui"], answer: "The Knights of Favonius"},
        { question: "Which character is a Hydro element user and a member of the Liyue Qixing?", options: ["Xingqiu", "Tartaglia", "Mona", "Barbara"], answer: "Xingqiu"},
        { question: "What is the name of the dragon that rules over Liyue?", options: ["Stormterror", "Azhdaha", "Osial", "Durin"], answer: "Azhdaha"},
        { question: "Which character is known for their ability to summon lightning?", options: ["Razor", "Fischl", "Beidou", "Keqing"], answer: "Fischl"}
    ],
    timeManagementProductivity: [
        { question: "What is the Pomodoro Technique?", options: ["A time management method using intervals of work and breaks", "A type of calendar", "A productivity app", "A meditation technique"], answer: "A time management method using intervals of work and breaks"},
        { question: "Which of the following is a common productivity tool?", options: ["To-do lists", "Social media", "Video games", "Television"], answer: "To-do lists"},
        { question: "What is 'time blocking'?", options: ["Scheduling specific blocks of time for different tasks", "Working without breaks", "Multitasking", "Ignoring deadlines"], answer: "Scheduling specific blocks of time for different tasks"},
        { question: "Which of the following can help reduce distractions?", options: ["Turning off notifications", "Keeping your phone nearby", "Working in a noisy environment", "Checking emails frequently"], answer: "Turning off notifications"},
        { question: "What is the 2-minute rule?", options: ["If a task takes less than 2 minutes, do it immediately", "Take a 2-minute break every hour", "Spend 2 minutes planning your day", "Limit meetings to 2 minutes"], answer: "If a task takes less than 2 minutes, do it immediately"},
        { question: "Which of the following is a benefit of prioritizing tasks?", options: ["Increased stress", "Better focus on important tasks", "Wasting time", "Procrastination"], answer: "Better focus on important tasks"},
        { question: "What is 'batching' tasks?", options: ["Doing similar tasks together to improve efficiency", "Doing tasks randomly", "Ignoring small tasks", "Focusing on one task all day"], answer: "Doing similar tasks together to improve efficiency"},
        { question: "Which of the following can help improve focus?", options: ["Taking regular breaks", "Working non-stop", "Multitasking", "Checking social media"], answer: "Taking regular breaks"},
        { question: "What is the Eisenhower Matrix used for?", options: ["Prioritizing tasks based on urgency and importance", "Scheduling meetings", "Tracking time spent on tasks", "Organizing files"], answer: "Prioritizing tasks based on urgency and importance"},
        { question: "Which of the following is a common cause of procrastination?", options: ["Clear goals", "Overwhelm and fear of failure", "Good time management", "Motivation"], answer: "Overwhelm and fear of failure"}
    ],
};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
const topic = document.body.dataset.topic;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[topic][currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(answer, button));
    });

    answered = false; 
    nextButton.disabled = true; 
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer, button) {
    if (answered) return;

    const isCorrect = answer === questions[topic][currentQuestionIndex].answer;
    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === questions[topic][currentQuestionIndex].answer) {
            btn.classList.add("correct");
        }
    });

    answered = true;
    nextButton.style.display = "block";
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions[topic].length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions[topic].length}! Time: ${score}`;
    nextButton.style.display = "none";
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", startQuiz);

startQuiz();