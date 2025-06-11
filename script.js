// script.js

const userForm = document.getElementById('userForm');
const quizForm = document.getElementById('quizForm');
const resultSection = document.getElementById('result');

const questions = [
  {
    question: "How do you usually commute?",
    options: ["Walk/Bike", "Public Transport", "Car Alone"],
    scores: [2, 1, 0]
  },
  {
    question: "How often do you recycle?",
    options: ["Always", "Sometimes", "Never"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you use energy-efficient appliances?",
    options: ["Yes", "Some", "No"],
    scores: [2, 1, 0]
  },
  {
    question: "What kind of food do you usually consume?",
    options: ["Local & Organic", "Mix of Both", "Packaged & Fast Food"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you conserve water at home?",
    options: ["Yes", "Sometimes", "No"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you turn off lights when not in use?",
    options: ["Always", "Sometimes", "Rarely"],
    scores: [2, 1, 0]
  },
  {
    question: "How often do you shop for new clothes?",
    options: ["Only when needed", "Sometimes", "Frequently"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you use reusable bags?",
    options: ["Always", "Occasionally", "Never"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you compost your food waste?",
    options: ["Yes", "Sometimes", "No"],
    scores: [2, 1, 0]
  },
  {
    question: "How do you wash your clothes?",
    options: ["Cold water & full loads", "Hot water or small loads", "Daily small washes"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you unplug electronics when not in use?",
    options: ["Yes", "Occasionally", "No"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you use single-use plastics?",
    options: ["Never", "Occasionally", "Frequently"],
    scores: [2, 1, 0]
  },
  {
    question: "How do you handle unused electronics?",
    options: ["Donate or recycle", "Store them", "Throw away"],
    scores: [2, 1, 0]
  },
  {
    question: "Do you grow any of your own food?",
    options: ["Yes", "A little", "No"],
    scores: [2, 1, 0]
  },
  {
    question: "How often do you participate in environmental activities?",
    options: ["Regularly", "Occasionally", "Never"],
    scores: [2, 1, 0]
  }
];

let currentQuestion = 0;
let score = 0;

userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  userForm.classList.add('hidden');
  quizForm.classList.remove('hidden');
  showQuestion();
});

function showQuestion() {
  quizForm.innerHTML = '';
  if (currentQuestion >= questions.length) {
    displayResult();
    return;
  }
  const q = questions[currentQuestion];
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionText = document.createElement('p');
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  questionDiv.appendChild(questionText);

  q.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="q${currentQuestion}" value="${q.scores[index]}"> ${option}`;
    questionDiv.appendChild(label);
  });

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.type = 'button';
  nextBtn.addEventListener('click', () => {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (!selected) {
      alert('Please select an answer.');
      return;
    }
    score += parseInt(selected.value);
    currentQuestion++;
    showQuestion();
  });

  questionDiv.appendChild(nextBtn);
  quizForm.appendChild(questionDiv);
}

function displayResult() {
  quizForm.classList.add('hidden');
  resultSection.classList.remove('hidden');

  let message = '';
  if (score >= 26) {
    message = "🌟 Excellent! You're living very sustainably.";
  } else if (score >= 16) {
    message = "👍 Good job! Some areas can still improve.";
  } else {
    message = "⚠️ Let's work on making your lifestyle more eco-friendly.";
  }

  resultSection.textContent = `Your Sustainable Score: ${score}/30\n${message}`;
}
