// Application data and state
const APP_DATA = {
  examInfo: {
    name: "ASRB NET 2025",
    examDate: "2025-09-02",
    totalQuestions: 150,
    duration: 120,
    negativeMarking: 0.33
  },
  subjects: [
    "Agronomy",
    "Plant Pathology", 
    "Genetics & Plant Breeding",
    "Plant Physiology",
    "Soil Science",
    "Agricultural Economics",
    "Environmental Science",
    "Plant Biochemistry"
  ],
  mockQuestions: [
    {
      id: 1,
      subject: "Agronomy",
      question: "Which of the following is the primary nutrient element required by plants in largest quantity?",
      options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
      correct: 0,
      explanation: "Nitrogen is required by plants in the largest quantity among all nutrients. It is essential for protein synthesis, chlorophyll formation, and overall plant growth."
    },
    {
      id: 2,
      subject: "Plant Pathology",
      question: "The causal organism of late blight of potato is:",
      options: ["Phytophthora infestans", "Alternaria solani", "Rhizoctonia solani", "Fusarium oxysporum"],
      correct: 0,
      explanation: "Phytophthora infestans is the causal organism of late blight of potato, which is one of the most destructive diseases of potato crop."
    },
    {
      id: 3,
      subject: "Genetics & Plant Breeding",
      question: "In Mendelian genetics, the ratio obtained in F2 generation of a monohybrid cross is:",
      options: ["1:1", "1:2:1", "3:1", "9:3:3:1"],
      correct: 2,
      explanation: "In a monohybrid cross, the F2 generation shows a phenotypic ratio of 3:1 (dominant:recessive) as established by Mendel's first law."
    },
    {
      id: 4,
      subject: "Soil Science",
      question: "The optimum pH range for most agricultural crops is:",
      options: ["4.5-5.5", "6.0-7.5", "8.0-9.0", "9.5-10.5"],
      correct: 1,
      explanation: "Most agricultural crops grow best in slightly acidic to neutral soil with pH range of 6.0-7.5, where nutrient availability is optimal."
    },
    {
      id: 5,
      subject: "Plant Physiology",
      question: "Photosynthesis primarily occurs in which part of the leaf?",
      options: ["Epidermis", "Mesophyll", "Vascular bundles", "Stomata"],
      correct: 1,
      explanation: "Photosynthesis primarily occurs in the mesophyll tissue of leaves, particularly in the palisade mesophyll which contains most chloroplasts."
    },
    {
      id: 6,
      subject: "Agronomy",
      question: "Green Revolution in India was primarily associated with:",
      options: ["Cotton production", "Rice and Wheat production", "Sugarcane production", "Pulse production"],
      correct: 1,
      explanation: "Green Revolution in India (1960s-70s) was primarily associated with increased production of rice and wheat through high-yielding varieties and modern agricultural techniques."
    },
    {
      id: 7,
      subject: "Agricultural Economics",
      question: "The law of diminishing returns applies to:",
      options: ["Long run only", "Short run only", "Both short and long run", "Neither short nor long run"],
      correct: 1,
      explanation: "The law of diminishing returns applies to short run production where at least one factor of production is fixed."
    },
    {
      id: 8,
      subject: "Environmental Science",
      question: "Which greenhouse gas has the highest Global Warming Potential (GWP)?",
      options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Sulfur hexafluoride"],
      correct: 3,
      explanation: "Sulfur hexafluoride (SF6) has the highest Global Warming Potential among common greenhouse gases, though CO2 is more abundant."
    },
    {
      id: 9,
      subject: "Plant Breeding",
      question: "Heterosis refers to:",
      options: ["Hybrid vigor", "Pure line breeding", "Mutation breeding", "Tissue culture"],
      correct: 0,
      explanation: "Heterosis, also known as hybrid vigor, refers to the phenomenon where F1 hybrids show superior performance compared to their parents."
    },
    {
      id: 10,
      subject: "Soil Science",
      question: "Which soil type is most suitable for rice cultivation?",
      options: ["Sandy soil", "Clay soil", "Loamy soil", "Rocky soil"],
      correct: 1,
      explanation: "Clay soil is most suitable for rice cultivation as it retains water well, which is essential for paddy cultivation."
    },
    {
      id: 11,
      subject: "Plant Pathology",
      question: "Integrated Pest Management (IPM) emphasizes on:",
      options: ["Chemical control only", "Biological control only", "Combination of multiple control methods", "Physical control only"],
      correct: 2,
      explanation: "IPM emphasizes on the integration of multiple control methods including biological, chemical, cultural, and physical methods for sustainable pest management."
    },
    {
      id: 12,
      subject: "Agronomy",
      question: "Crop rotation helps in:",
      options: ["Maintaining soil fertility", "Breaking pest cycles", "Improving soil structure", "All of the above"],
      correct: 3,
      explanation: "Crop rotation helps in maintaining soil fertility, breaking pest and disease cycles, and improving soil structure and health."
    },
    {
      id: 13,
      subject: "Plant Physiology",
      question: "Transpiration in plants mainly occurs through:",
      options: ["Lenticels", "Stomata", "Cuticle", "Root hairs"],
      correct: 1,
      explanation: "About 90% of transpiration in plants occurs through stomata, which are tiny pores mainly found on leaf surfaces."
    },
    {
      id: 14,
      subject: "Agricultural Economics",
      question: "Price elasticity of demand for agricultural products is generally:",
      options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"],
      correct: 1,
      explanation: "Agricultural products generally have inelastic demand as they are necessities and have fewer substitutes."
    },
    {
      id: 15,
      subject: "Genetics",
      question: "The technique used for DNA fingerprinting is:",
      options: ["PCR", "RFLP", "Both PCR and RFLP", "Gel electrophoresis only"],
      correct: 2,
      explanation: "DNA fingerprinting uses both PCR (Polymerase Chain Reaction) for amplification and RFLP (Restriction Fragment Length Polymorphism) for analysis."
    },
    {
      id: 16,
      subject: "Environmental Science",
      question: "Eutrophication of water bodies is caused by excess of:",
      options: ["Carbon", "Nitrogen and Phosphorus", "Sulfur", "Iron"],
      correct: 1,
      explanation: "Eutrophication is caused by excess nitrogen and phosphorus from fertilizer runoff, leading to algal blooms and oxygen depletion."
    },
    {
      id: 17,
      subject: "Soil Science",
      question: "Soil organic matter content is highest in:",
      options: ["Desert soils", "Forest soils", "Agricultural soils", "Saline soils"],
      correct: 1,
      explanation: "Forest soils generally have the highest organic matter content due to continuous leaf litter and organic debris decomposition."
    },
    {
      id: 18,
      subject: "Plant Breeding",
      question: "Marker-assisted selection (MAS) is used for:",
      options: ["Yield improvement only", "Disease resistance only", "Both yield and quality traits", "Seed production only"],
      correct: 2,
      explanation: "MAS can be used for improving various traits including yield, quality, disease resistance, and stress tolerance."
    },
    {
      id: 19,
      subject: "Agronomy",
      question: "The C4 pathway in photosynthesis is found in:",
      options: ["Rice", "Wheat", "Maize", "Potato"],
      correct: 2,
      explanation: "Maize follows the C4 photosynthetic pathway, which is more efficient in hot climates and gives higher productivity."
    },
    {
      id: 20,
      subject: "Plant Pathology",
      question: "Mycorrhizae represent:",
      options: ["Plant-bacterial association", "Plant-fungal association", "Plant-viral association", "Plant-nematode association"],
      correct: 1,
      explanation: "Mycorrhizae represent a beneficial symbiotic association between plant roots and fungi, helping in nutrient uptake."
    }
  ],
  studyRoadmap: {
    totalWeeks: 24,
    subjects: [
      {
        name: "Agronomy",
        weeks: [1, 2, 3, 7, 13, 19],
        topics: ["Crop Production", "Soil Management", "Water Management", "Nutrient Management"]
      },
      {
        name: "Plant Pathology", 
        weeks: [4, 5, 8, 14, 20],
        topics: ["Disease Identification", "Pathogen Biology", "Disease Management", "IPM"]
      },
      {
        name: "Genetics & Plant Breeding",
        weeks: [6, 9, 10, 15, 21], 
        topics: ["Mendelian Genetics", "Quantitative Genetics", "Breeding Methods", "Biotechnology"]
      },
      {
        name: "Plant Physiology",
        weeks: [11, 12, 16, 22],
        topics: ["Photosynthesis", "Respiration", "Growth Regulators", "Stress Physiology"]
      },
      {
        name: "Revision & Mock Tests",
        weeks: [17, 18, 23, 24],
        topics: ["Previous Papers", "Mock Tests", "Weak Areas", "Final Revision"]
      }
    ]
  }
};

// Application state
let currentTest = {
  questions: [],
  currentQuestion: 0,
  answers: {},
  reviewQuestions: new Set(),
  timeLeft: 40 * 60, // 40 minutes in seconds
  timerInterval: null,
  startTime: null
};

let userProgress = {
  testsCompleted: 0,
  totalScore: 0,
  testHistory: [],
  studyStreak: 0,
  lastStudyDate: null,
  roadmapProgress: {}
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  loadUserProgress();
  setupEventListeners();
  updateDashboard();
  startCountdown();
  initializeRoadmap();
  initializeTheme();
  showSection('home');
}

function loadUserProgress() {
  const saved = localStorage.getItem('asrb-net-progress');
  if (saved) {
    userProgress = { ...userProgress, ...JSON.parse(saved) };
  }
}

function saveUserProgress() {
  localStorage.setItem('asrb-net-progress', JSON.stringify(userProgress));
}

function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-btn, [data-section]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = e.target.getAttribute('data-section');
      if (section) {
        showSection(section);
        updateNavigation(section);
      }
    });
  });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Mock test events
  document.getElementById('startTest').addEventListener('click', startMockTest);
  document.getElementById('prevQuestion').addEventListener('click', () => navigateQuestion(-1));
  document.getElementById('nextQuestion').addEventListener('click', () => navigateQuestion(1));
  document.getElementById('markReview').addEventListener('click', markForReview);
  document.getElementById('clearResponse').addEventListener('click', clearResponse);
  document.getElementById('submitTest').addEventListener('click', submitTest);
  document.getElementById('retakeTest').addEventListener('click', resetTest);
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Update navigation
  updateNavigation(sectionId);

  // Initialize section-specific content
  if (sectionId === 'results') {
    initializeResults();
  }
}

function updateNavigation(activeSection) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-section') === activeSection) {
      btn.classList.add('active');
    }
  });
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
  updateThemeToggle(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const toggle = document.getElementById('themeToggle');
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function startCountdown() {
  const examDate = new Date(APP_DATA.examInfo.examDate).getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = examDate - now;
    
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
    } else {
      document.getElementById('countdown').innerHTML = '<div class="countdown__item"><span>Exam</span><label>Started</label></div>';
    }
  }
  
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update every minute
}

function updateDashboard() {
  document.getElementById('testsCompleted').textContent = userProgress.testsCompleted;
  
  const avgScore = userProgress.testsCompleted > 0 
    ? Math.round((userProgress.totalScore / userProgress.testsCompleted) * 100 / 80) 
    : 0;
  document.getElementById('averageScore').textContent = avgScore + '%';
  
  // Update study streak
  const today = new Date().toDateString();
  if (userProgress.lastStudyDate !== today) {
    const lastDate = userProgress.lastStudyDate ? new Date(userProgress.lastStudyDate) : new Date(0);
    const timeDiff = new Date() - lastDate;
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    if (dayDiff > 1) {
      userProgress.studyStreak = 0;
    }
  }
  
  document.getElementById('studyStreak').textContent = userProgress.studyStreak;
  
  // Calculate roadmap progress
  const completedTopics = Object.values(userProgress.roadmapProgress).filter(Boolean).length;
  const totalTopics = APP_DATA.studyRoadmap.subjects.reduce((total, subject) => total + subject.topics.length, 0);
  const roadmapPercent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  document.getElementById('roadmapProgress').textContent = roadmapPercent + '%';
}

function startMockTest() {
  // Shuffle questions and select 20
  const shuffled = [...APP_DATA.mockQuestions].sort(() => 0.5 - Math.random());
  currentTest.questions = shuffled.slice(0, 20);
  currentTest.currentQuestion = 0;
  currentTest.answers = {};
  currentTest.reviewQuestions.clear();
  currentTest.timeLeft = 40 * 60; // 40 minutes
  currentTest.startTime = Date.now();
  
  document.getElementById('testStart').classList.add('hidden');
  document.getElementById('testInterface').classList.remove('hidden');
  
  initializeQuestionNavigator();
  displayQuestion();
  startTimer();
}

function initializeQuestionNavigator() {
  const grid = document.getElementById('questionGrid');
  grid.innerHTML = '';
  
  for (let i = 0; i < currentTest.questions.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'question-number';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => goToQuestion(i));
    grid.appendChild(btn);
  }
  
  updateQuestionNavigator();
}

function displayQuestion() {
  const question = currentTest.questions[currentTest.currentQuestion];
  if (!question) return;
  
  document.getElementById('questionSubject').textContent = question.subject;
  document.getElementById('questionText').textContent = question.question;
  document.getElementById('currentQuestion').textContent = currentTest.currentQuestion + 1;
  
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'question_' + question.id;
    radio.value = index;
    radio.id = 'option_' + index;
    
    const label = document.createElement('label');
    label.htmlFor = 'option_' + index;
    label.textContent = option;
    
    optionDiv.appendChild(radio);
    optionDiv.appendChild(label);
    
    // Check if this option was previously selected
    if (currentTest.answers[question.id] === index) {
      radio.checked = true;
      optionDiv.classList.add('selected');
    }
    
    radio.addEventListener('change', () => {
      currentTest.answers[question.id] = index;
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      optionDiv.classList.add('selected');
      updateQuestionNavigator();
    });
    
    optionDiv.addEventListener('click', () => {
      radio.checked = true;
      radio.dispatchEvent(new Event('change'));
    });
    
    container.appendChild(optionDiv);
  });
  
  updateQuestionNavigator();
  updateNavigationButtons();
}

function updateQuestionNavigator() {
  document.querySelectorAll('.question-number').forEach((btn, index) => {
    btn.classList.remove('answered', 'review', 'current');
    
    if (index === currentTest.currentQuestion) {
      btn.classList.add('current');
    } else if (currentTest.reviewQuestions.has(currentTest.questions[index].id)) {
      btn.classList.add('review');
    } else if (currentTest.answers.hasOwnProperty(currentTest.questions[index].id)) {
      btn.classList.add('answered');
    }
  });
}

function updateNavigationButtons() {
  document.getElementById('prevQuestion').disabled = currentTest.currentQuestion === 0;
  document.getElementById('nextQuestion').disabled = currentTest.currentQuestion === currentTest.questions.length - 1;
}

function navigateQuestion(direction) {
  const newIndex = currentTest.currentQuestion + direction;
  if (newIndex >= 0 && newIndex < currentTest.questions.length) {
    currentTest.currentQuestion = newIndex;
    displayQuestion();
  }
}

function goToQuestion(index) {
  currentTest.currentQuestion = index;
  displayQuestion();
}

function markForReview() {
  const questionId = currentTest.questions[currentTest.currentQuestion].id;
  if (currentTest.reviewQuestions.has(questionId)) {
    currentTest.reviewQuestions.delete(questionId);
    document.getElementById('markReview').textContent = 'Mark for Review';
  } else {
    currentTest.reviewQuestions.add(questionId);
    document.getElementById('markReview').textContent = 'Unmark Review';
  }
  updateQuestionNavigator();
}

function clearResponse() {
  const questionId = currentTest.questions[currentTest.currentQuestion].id;
  delete currentTest.answers[questionId];
  
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  
  updateQuestionNavigator();
}

function startTimer() {
  currentTest.timerInterval = setInterval(() => {
    currentTest.timeLeft--;
    
    const minutes = Math.floor(currentTest.timeLeft / 60);
    const seconds = currentTest.timeLeft % 60;
    
    document.getElementById('timer').textContent = 
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (currentTest.timeLeft <= 0) {
      submitTest();
    }
  }, 1000);
}

function submitTest() {
  if (confirm('Are you sure you want to submit the test?')) {
    clearInterval(currentTest.timerInterval);
    
    const timeTaken = Math.floor((Date.now() - currentTest.startTime) / 1000);
    const results = calculateResults(timeTaken);
    
    // Update user progress
    userProgress.testsCompleted++;
    userProgress.totalScore += results.score;
    userProgress.testHistory.push({
      date: new Date().toISOString(),
      score: results.score,
      percentage: results.percentage,
      timeTaken: timeTaken,
      subjectWise: results.subjectWise
    });
    
    // Update study streak
    const today = new Date().toDateString();
    if (userProgress.lastStudyDate !== today) {
      userProgress.studyStreak++;
      userProgress.lastStudyDate = today;
    }
    
    saveUserProgress();
    updateDashboard();
    
    displayResults(results);
  }
}

function calculateResults(timeTaken) {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let subjectWise = {};
  
  currentTest.questions.forEach(question => {
    const userAnswer = currentTest.answers[question.id];
    const isCorrect = userAnswer === question.correct;
    
    if (!subjectWise[question.subject]) {
      subjectWise[question.subject] = { correct: 0, total: 0 };
    }
    subjectWise[question.subject].total++;
    
    if (userAnswer !== undefined) {
      if (isCorrect) {
        correctAnswers++;
        subjectWise[question.subject].correct++;
      } else {
        wrongAnswers++;
      }
    }
  });
  
  const score = (correctAnswers * 4) - (wrongAnswers * 1.33);
  const percentage = (score / 80) * 100;
  
  return {
    score: Math.round(score * 100) / 100,
    percentage: Math.round(percentage * 100) / 100,
    correctAnswers,
    wrongAnswers,
    unanswered: currentTest.questions.length - correctAnswers - wrongAnswers,
    timeTaken,
    subjectWise
  };
}

function displayResults(results) {
  document.getElementById('testInterface').classList.add('hidden');
  document.getElementById('testResults').classList.remove('hidden');
  
  document.getElementById('finalScore').textContent = `${results.score}/80`;
  document.getElementById('percentage').textContent = `${results.percentage}%`;
  
  const minutes = Math.floor(results.timeTaken / 60);
  const seconds = results.timeTaken % 60;
  document.getElementById('timeTaken').textContent = 
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Create performance chart
  createPerformanceChart(results);
  
  // Display solutions
  displaySolutions();
}

function createPerformanceChart(results) {
  const ctx = document.getElementById('performanceChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong', 'Unanswered'],
      datasets: [{
        data: [results.correctAnswers, results.wrongAnswers, results.unanswered],
        backgroundColor: ['#1FB8CD', '#B4413C', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Question Analysis'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function displaySolutions() {
  const container = document.getElementById('solutions');
  container.innerHTML = '<h3>Detailed Solutions</h3>';
  
  currentTest.questions.forEach((question, index) => {
    const userAnswer = currentTest.answers[question.id];
    const isCorrect = userAnswer === question.correct;
    
    const solutionDiv = document.createElement('div');
    solutionDiv.className = 'solution-item';
    
    solutionDiv.innerHTML = `
      <div class="solution-question">
        <strong>Q${index + 1}:</strong> ${question.question}
      </div>
      <div class="solution-answer ${isCorrect ? 'correct' : 'incorrect'}">
        <strong>Your Answer:</strong> ${userAnswer !== undefined ? question.options[userAnswer] : 'Not Answered'}
        <br>
        <strong>Correct Answer:</strong> ${question.options[question.correct]}
      </div>
      <div class="solution-explanation">
        <strong>Explanation:</strong> ${question.explanation}
      </div>
    `;
    
    container.appendChild(solutionDiv);
  });
}

function resetTest() {
  document.getElementById('testResults').classList.add('hidden');
  document.getElementById('testStart').classList.remove('hidden');
  
  // Reset test state
  currentTest = {
    questions: [],
    currentQuestion: 0,
    answers: {},
    reviewQuestions: new Set(),
    timeLeft: 40 * 60,
    timerInterval: null,
    startTime: null
  };
}

function initializeRoadmap() {
  const container = document.getElementById('roadmap');
  container.innerHTML = '';
  
  APP_DATA.studyRoadmap.subjects.forEach((subject, subjectIndex) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'subject-section';
    sectionDiv.setAttribute('data-subject-index', subjectIndex);
    
    const completedTopics = subject.topics.filter(topic => 
      userProgress.roadmapProgress[`${subject.name}_${topic}`]
    ).length;
    
    sectionDiv.innerHTML = `
      <div class="subject-header">
        <h3 class="subject-title">${subject.name}</h3>
        <span class="subject-progress">${completedTopics}/${subject.topics.length} topics</span>
      </div>
      <div class="weeks-grid">
        ${subject.weeks.map(week => `<div class="week-item">Week ${week}</div>`).join('')}
      </div>
      <div class="topics-container"></div>
    `;
    
    const topicsContainer = sectionDiv.querySelector('.topics-container');
    subject.topics.forEach(topic => {
      const topicDiv = document.createElement('div');
      topicDiv.className = 'topic-checkbox';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `${subject.name}_${topic}`;
      checkbox.checked = userProgress.roadmapProgress[checkbox.id] || false;
      
      if (checkbox.checked) {
        topicDiv.classList.add('completed');
      }
      
      checkbox.addEventListener('change', () => {
        userProgress.roadmapProgress[checkbox.id] = checkbox.checked;
        saveUserProgress();
        updateDashboard();
        updateRoadmapProgress();
        updateSubjectProgress(subjectIndex, subject);
        
        if (checkbox.checked) {
          topicDiv.classList.add('completed');
        } else {
          topicDiv.classList.remove('completed');
        }
      });
      
      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      label.textContent = topic;
      
      topicDiv.appendChild(checkbox);
      topicDiv.appendChild(label);
      topicsContainer.appendChild(topicDiv);
    });
    
    container.appendChild(sectionDiv);
  });
  
  updateRoadmapProgress();
}

function updateSubjectProgress(subjectIndex, subject) {
  const sectionDiv = document.querySelector(`[data-subject-index="${subjectIndex}"]`);
  if (sectionDiv) {
    const completedTopics = subject.topics.filter(topic => 
      userProgress.roadmapProgress[`${subject.name}_${topic}`]
    ).length;
    
    const progressSpan = sectionDiv.querySelector('.subject-progress');
    if (progressSpan) {
      progressSpan.textContent = `${completedTopics}/${subject.topics.length} topics`;
    }
  }
}

function updateRoadmapProgress() {
  const completedTopics = Object.values(userProgress.roadmapProgress).filter(Boolean).length;
  const totalTopics = APP_DATA.studyRoadmap.subjects.reduce((total, subject) => total + subject.topics.length, 0);
  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  
  document.getElementById('roadmapProgressBar').style.width = percentage + '%';
  document.getElementById('roadmapProgressText').textContent = percentage + '% Complete';
}

function initializeResults() {
  if (userProgress.testHistory.length === 0) {
    document.querySelector('.analytics-dashboard').innerHTML = 
      '<div class="text-center"><h3>No test history available</h3><p>Take some mock tests to see your performance analytics.</p></div>';
    return;
  }
  
  createScoreChart();
  createSubjectChart();
  displayResultsTable();
}

function createScoreChart() {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  
  const data = userProgress.testHistory.map((test, index) => ({
    x: index + 1,
    y: test.percentage
  }));
  
  new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Test Scores (%)',
        data: data,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Score Progress Over Time'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Test Number'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Score (%)'
          },
          min: 0,
          max: 100
        }
      }
    }
  });
}

function createSubjectChart() {
  const ctx = document.getElementById('subjectChart').getContext('2d');
  
  // Aggregate subject-wise performance
  const subjectPerformance = {};
  userProgress.testHistory.forEach(test => {
    Object.entries(test.subjectWise || {}).forEach(([subject, data]) => {
      if (!subjectPerformance[subject]) {
        subjectPerformance[subject] = { correct: 0, total: 0 };
      }
      subjectPerformance[subject].correct += data.correct;
      subjectPerformance[subject].total += data.total;
    });
  });
  
  const subjects = Object.keys(subjectPerformance);
  const percentages = subjects.map(subject => {
    const data = subjectPerformance[subject];
    return data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
  });
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: subjects,
      datasets: [{
        label: 'Subject-wise Performance (%)',
        data: percentages,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Subject-wise Performance'
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: 'Accuracy (%)'
          }
        }
      }
    }
  });
}

function displayResultsTable() {
  const container = document.getElementById('resultsTable');
  container.innerHTML = `
    <div class="result-row result-header">
      <div>Date</div>
      <div>Score</div>
      <div>Percentage</div>
      <div>Time</div>
    </div>
  `;
  
  userProgress.testHistory.slice(-10).reverse().forEach(test => {
    const date = new Date(test.date).toLocaleDateString();
    const minutes = Math.floor(test.timeTaken / 60);
    const seconds = test.timeTaken % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const row = document.createElement('div');
    row.className = 'result-row';
    row.innerHTML = `
      <div>${date}</div>
      <div>${test.score}/80</div>
      <div>${test.percentage}%</div>
      <div>${timeStr}</div>
    `;
    container.appendChild(row);
  });
}