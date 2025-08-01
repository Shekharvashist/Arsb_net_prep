// Application State
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let testStarted = false;
let currentScore = 0;
let selectedAnswer = null;

// Question data from the provided JSON
const questionData = [
  {"id":1,"question":"The edible portion of potato (Solanum tuberosum) is a ___.","options":{"A":"modified root","B":"stem tuber","C":"bulb","D":"corm"},"correct":"B","explanation":"Potato develops from underground stem tissue that swells to store starch, forming a stem tuber."},
  {"id":2,"question":"'Amrapali' mango was developed by crossing 'Dashehari' with which South Indian variety?","options":{"A":"Alphonso","B":"Neelum","C":"Totapuri","D":"Ratna"},"correct":"B","explanation":"Amrapali is a clonal hybrid of North Indian 'Dashehari' × South Indian 'Neelum', released by IARI."},
  {"id":3,"question":"Which plant growth regulator is routinely sprayed to induce bolting in onion and celery?","options":{"A":"Abscisic acid","B":"Indole-3-acetic acid","C":"Gibberellic acid","D":"Ethylene"},"correct":"C","explanation":"Gibberellins promote stem elongation and bolt formation in biennial vegetables grown for seed."},
  {"id":4,"question":"Whiptail disorder of cauliflower is caused by the deficiency of ___ in soil.","options":{"A":"Boron","B":"Molybdenum","C":"Calcium","D":"Zinc"},"correct":"B","explanation":"Molybdenum deficiency results in malformed lamina giving a strap-like 'whiptail' appearance in cauliflower leaves."},
  {"id":5,"question":"Production of off-season cucurbits inside protected structures to obtain earlier or later harvests is technically called ___.","options":{"A":"precision farming","B":"market gardening","C":"vegetable forcing","D":"truck farming"},"correct":"C","explanation":"Forcing refers to manipulating environment (temperature/light) under glass/polyhouse to accelerate or delay vegetable crops."},
  {"id":6,"question":"The physiological maturity of mango for harvest is best judged in the field by the change in ___.","options":{"A":"specific gravity of fruit","B":"pulp TSS","C":"shoulder filling and colour break","D":"seed moisture"},"correct":"C","explanation":"In mango, fully developed shoulders that rise above the stalk end with slight colour break indicate harvest maturity."},
  {"id":7,"question":"Which micronutrient is translocated only in the xylem and hence its deficiency symptoms first appear on younger leaves?","options":{"A":"Nitrogen","B":"Magnesium","C":"Iron","D":"Potassium"},"correct":"C","explanation":"Iron is relatively immobile in plants; deficiency causes interveinal chlorosis of emerging young leaves first."},
  {"id":8,"question":"'Pusa Bholanath' is a high-yielding variety of which leafy vegetable?","options":{"A":"Spinach beet","B":"Fenugreek","C":"Coriander","D":"Amaranthus"},"correct":"A","explanation":"Pusa Bholanath, released by IARI, is a popular spinach beet variety with dark-green succulent leaves."},
  {"id":9,"question":"The optimum spacing recommended for planting tomato hybrids under drip irrigation is approximately ___.","options":{"A":"120 cm × 45 cm","B":"90 cm × 60 cm","C":"45 cm × 45 cm","D":"30 cm × 30 cm"},"correct":"B","explanation":"Wider row spacing (90 cm) accommodates drip laterals while 60 cm intra-row maintains plant population for indeterminate hybrids."},
  {"id":10,"question":"Which of the following apple rootstocks imparts dwarfing habit to the scion and is denoted as M-9?","options":{"A":"MM-106","B":"M-9","C":"MM-111","D":"M-7"},"correct":"B","explanation":"The M-series rootstocks from East Malling, UK; M-9 is widely used to produce dwarf high-density apple orchards."},
  {"id":11,"question":"Bacterial wilt of solanaceous vegetables such as brinjal and tomato is caused by ___.","options":{"A":"Pseudomonas syringae","B":"Ralstonia solanacearum","C":"Xanthomonas campestris","D":"Erwinia carotovora"},"correct":"B","explanation":"Ralstonia (formerly Pseudomonas) solanacearum invades xylem vessels causing sudden wilting without yellowing in warm humid climates."},
  {"id":12,"question":"Which Indian institute maintains the National Gene Bank for vegetable crops?","options":{"A":"IIHR, Bengaluru","B":"IIVR, Varanasi","C":"NBPGR, New Delhi","D":"NRC Seed Spices, Ajmer"},"correct":"C","explanation":"The National Bureau of Plant Genetic Resources (NBPGR) manages India's National Gene Bank including vegetable germplasm."},
  {"id":13,"question":"In seed certification, the colour of the tag used for certified seed class is ___.","options":{"A":"Golden yellow","B":"White","C":"Azure blue","D":"Purple"},"correct":"C","explanation":"Certified seed tags are azure blue; breeder seeds are golden yellow and foundation seed tags are white."},
  {"id":14,"question":"According to ICAR norms, the minimum field isolation distance for foundation seed production of okra is ___ metres.","options":{"A":"50","B":"100","C":"200","D":"400"},"correct":"C","explanation":"Okra is often–cross-pollinated; foundation seed requires 200 m isolation to maintain genetic purity."},
  {"id":15,"question":"Which vegetable crop exhibits protogyny and is therefore commonly cross-pollinated by insects?","options":{"A":"Ash gourd","B":"Okra","C":"Cucumber","D":"French bean"},"correct":"C","explanation":"Cucumber flowers open as pistillate phase earlier than staminate (protogyny), favouring insect cross-pollination."},
  {"id":16,"question":"The scientific name of drumstick tree, valued for pods and leaves, is ___ .","options":{"A":"Moringa oleifera","B":"Morus alba","C":"Manihot esculenta","D":"Momordica charantia"},"correct":"A","explanation":"Drumstick or moringa is Moringa oleifera, a fast-growing multipurpose tree of the family Moringaceae."},
  {"id":17,"question":"In precision farming, the equipment that allows differential application of inputs within a field based on GPS-generated maps is termed ___.","options":{"A":"variable rate technology (VRT)","B":"remote sensing","C":"drip fertigation","D":"GIS layering"},"correct":"A","explanation":"VRT controllers change seed, fertiliser or pesticide rates on the go using georeferenced prescription maps."},
  {"id":18,"question":"Black heart physiological disorder in storage potato is primarily due to ___.","options":{"A":"low temperature injury","B":"high CO₂ and low O₂ in tuber centre","C":"boron toxicity","D":"viral infection"},"correct":"B","explanation":"Poor ventilation in piles elevates CO₂, depletes O₂ inside tubers causing central tissue necrosis called black heart."},
  {"id":19,"question":"Which one of the following is a gynodioecious muskmelon hybrid developed in India?","options":{"A":"Punjab Hybrid-1","B":"MH-10","C":"Pusa Sharbati","D":"Arka Jeet"},"correct":"B","explanation":"Hybrid MH-10 is based on gynoecious × monoecious lines giving high fruit set and earliness in muskmelon."},
  {"id":20,"question":"In tissue culture, the first stage where an explant establishes and begins sterile growth on nutrient medium is called ___ .","options":{"A":"initiation","B":"multiplication","C":"rooting","D":"acclimatisation"},"correct":"A","explanation":"Stage I (initiation) covers disinfection, excision and establishment of aseptic culture before shoot multiplication."},
  {"id":21,"question":"Which disease of grape is managed effectively by grafting susceptible cultivars on Dogridge rootstock?","options":{"A":"Downy mildew","B":"Powdery mildew","C":"Phylloxera","D":"Bacterial canker"},"correct":"C","explanation":"Dogridge (Vitis champinii) rootstock is resistant to root-feeding phylloxera insects thereby protecting V. vinifera scions."},
  {"id":22,"question":"The twin row planting system (60 cm × 30 cm × 120 cm) is characteristic of high-density planting in which orchard crop?","options":{"A":"Banana","B":"Mango","C":"Guava","D":"Pomegranate"},"correct":"B","explanation":"Ultra-high-density mango orchards adopt paired rows 60 cm apart, 30 cm intra-row and 120 cm between pairs."},
  {"id":23,"question":"Which biofertilizer microorganism fixes atmospheric nitrogen in association with non-legume cereal roots?","options":{"A":"Rhizobium","B":"Azotobacter","C":"Azospirillum","D":"Phosphobacteria"},"correct":"C","explanation":"Azospirillum species colonise rhizosphere of cereals/grasses and fix nitrogen non-symbiotically enhancing root growth."},
  {"id":24,"question":"The critical stage of irrigation in cabbage for head development corresponds to ___ .","options":{"A":"early seedling establishment","B":"rosette formation","C":"curd initiation","D":"head initiation"},"correct":"D","explanation":"Adequate soil moisture at head initiation is essential; stress leads to small loose heads in cabbage."},
  {"id":25,"question":"Which species of Trichoderma is widely formulated as a bio-fungicide for soil-borne pathogen control in vegetables?","options":{"A":"T. harzianum","B":"T. viride","C":"T. reesei","D":"T. koningii"},"correct":"A","explanation":"Commercial products of Trichoderma harzianum suppress damping-off, root rot and wilt pathogens in nurseries and fields."},
  {"id":26,"question":"The term 'Golden Revolution' in Indian agriculture is associated with remarkable growth in ___ .","options":{"A":"cereal productivity","B":"oilseed production","C":"horticulture output","D":"milk production"},"correct":"C","explanation":"Golden Revolution refers to rapid expansion in horticulture—fruits, vegetables, flowers and honey—from mid-1990s."},
  {"id":27,"question":"Which mutation breeding-derived variety of papaya is known for very low papain activity suitable for table purpose?","options":{"A":"Pusa Nanha","B":"Pusa Delicious","C":"Sunrise Solo","D":"Pusa Peetamber"},"correct":"A","explanation":"Pusa Nanha is a dwarf mutant of 'Pusa Dwarf' with low latex, making it easy for home gardens and pot culture."},
  {"id":28,"question":"In vermicomposting, the epigeic earthworm species commonly used worldwide is ___ .","options":{"A":"Eisenia fetida","B":"Pheretima posthuma","C":"Lampito mauritii","D":"Drawida williamsoni"},"correct":"A","explanation":"Eisenia fetida (red wiggler) thrives on organic waste near surface and efficiently converts it into vermicompost."},
  {"id":29,"question":"Which post-harvest treatment is recommended to delay scald in stored apples?","options":{"A":"Ethrel dipping","B":"1-MCP fumigation","C":"Hot water dip","D":"Pre-cooling at 15 °C"},"correct":"B","explanation":"1-Methylcyclopropene blocks ethylene receptors, reducing superficial scald and maintaining firmness during cold storage."},
  {"id":30,"question":"Strip cropping is an agronomic measure primarily aimed at ___ .","options":{"A":"increasing plant population","B":"reducing nutrient fixation","C":"controlling soil erosion by wind","D":"facilitating mechanisation"},"correct":"C","explanation":"Alternate strips of erosion-permitting and erosion-resisting crops across wind direction slowdown soil loss in drylands."},
  {"id":31,"question":"The economic threshold level (ETL) for diamondback moth on cabbage is ___ larvae per plant.","options":{"A":"1","B":"5","C":"10","D":"25"},"correct":"B","explanation":"IPM recommends insecticidal intervention when diamondback moth averages five larvae per cabbage plant."},
  {"id":32,"question":"Which cultivar of brinjal is resistant to bacterial wilt and hence preferred as rootstock in grafted seedling technology?","options":{"A":"Surya","B":"IC-9079 (Solanum torvum)","C":"BH-2","D":"Arka Anand"},"correct":"B","explanation":"Wild eggplant Solanum torvum resists Ralstonia wilt and nematodes; used as rootstock for commercial hybrids."},
  {"id":33,"question":"The term 'acoelomycetes' in fungal taxonomy corresponds to which group of plant pathogens?","options":{"A":"basidiomycetes rusts","B":"asco-deuteromycetes without fruit bodies","C":"oomycetes downy mildews","D":"zygomycetes molds"},"correct":"B","explanation":"A-coelomycetes are imperfect fungi producing conidia directly on hyphae without enclosed fruiting bodies (pycnidia)."},
  {"id":34,"question":"Which analytical device is used in the field to estimate chlorophyll content and thus nitrogen status of rice leaves?","options":{"A":"Leaf area meter","B":"SPAD chlorophyll meter","C":"Porometer","D":"Pressure bomb"},"correct":"B","explanation":"SPAD meters measure leaf greenness (chlorophyll), guiding site-specific N top-dressing in precision farming."},
  {"id":35,"question":"'Khasi Mandarin' belongs botanically to which species?","options":{"A":"Citrus sinensis","B":"Citrus reticulata","C":"Citrus limon","D":"Citrus paradisi"},"correct":"B","explanation":"Indian mandarins including Nagpur, Darjeeling and Khasi are grouped under Citrus reticulata (tangerines)."},
  {"id":36,"question":"Which vegetable crop exhibits C₄ photosynthetic pathway and therefore high water-use efficiency?","options":{"A":"Tomato","B":"Okra","C":"Amaranthus","D":"Pea"},"correct":"C","explanation":"Amaranthus species are C₄ leafy vegetables tolerant to heat and efficient in utilising light, water and nitrogen."},
  {"id":37,"question":"The internationally accepted index for grading mangoes by size is based on ___ .","options":{"A":"length of fruit","B":"weight range (count per 4 kg carton)","C":"specific gravity","D":"circumference"},"correct":"B","explanation":"Export standards classify mango size by number of fruits fitting in a 4-kg pack, e.g., count 6, 7, 8 etc."},
  {"id":38,"question":"Which vitamin is especially rich in drumstick (moringa) leaves, making them a valuable nutritional supplement?","options":{"A":"Vitamin A (β-carotene)","B":"Vitamin C (ascorbic acid)","C":"Vitamin D","D":"Vitamin B₁₂"},"correct":"B","explanation":"Moringa leaves contain up to 220 mg 100 g⁻¹ vitamin C, surpassing many common vegetables."},
  {"id":39,"question":"In citrus rootstock breeding, the cross between 'Rangpur lime' and 'trifoliate orange' produced the widely used rootstock called ___ .","options":{"A":"Carrizo citrange","B":"Volkamer lemon","C":"Cleopatra mandarin","D":"Sour orange"},"correct":"A","explanation":"Citrange (citrus ×carrizo) combines lime vigour with trifoliate cold tolerance and nematode resistance."},
  {"id":40,"question":"Which fungicide belongs to the FRAC code 11 (QoI inhibitors) and is commonly used against powdery mildew in cucurbits?","options":{"A":"Mancozeb","B":"Azoxystrobin","C":"Copper oxychloride","D":"Carbendazim"},"correct":"B","explanation":"Azoxystrobin, a strobilurin (QoI) fungicide, blocks mitochondrial respiration and controls many foliar fungal diseases."},
  {"id":41,"question":"The seed multiplication ratio (SMR) is highest in which of the following crops?","options":{"A":"Groundnut","B":"Rice","C":"Pearl millet","D":"Potato"},"correct":"C","explanation":"Pearl millet produces ~1:200 seed yield to seed rate, giving highest SMR among common field/vegetable crops."},
  {"id":42,"question":"Which instrument is used to measure soil moisture tension directly in the root zone of horticultural crops?","options":{"A":"Tensiometer","B":"Pyranometer","C":"Psychrometer","D":"Anemometer"},"correct":"A","explanation":"Tensiometers with porous ceramic cup and vacuum gauge measure matric suction (kPa), guiding irrigation scheduling."},
  {"id":43,"question":"The allowable maximum residue limit (MRL) of carbendazim in fresh tomatoes as per FSSAI (India) is ___ mg kg⁻¹.","options":{"A":"0.1","B":"0.5","C":"1.0","D":"5.0"},"correct":"B","explanation":"Food Safety and Standards (Contaminants) Regulations specify 0.5 mg kg⁻¹ MRL for carbendazim in tomato fruit."},
  {"id":44,"question":"Which leafy vegetable is a rich natural source of the betalain pigment betalain-indigo giving deep red colour?","options":{"A":"Basella alba (red)","B":"Spinacia oleracea","C":"Trigonella foenum-graecum","D":"Corchorus olitorius"},"correct":"A","explanation":"Red-stemmed Basella (Malabar spinach) accumulates betalain pigments imparting purple-red colour to stems and leaves."},
  {"id":45,"question":"The optimum temperature range for successful spawn run (mycelial colonisation) in white button mushroom cultivation is ___ °C.","options":{"A":"10-14","B":"16-18","C":"22-25","D":"28-30"},"correct":"C","explanation":"Agaricus bisporus spawn grows best at 22-25 °C; casing and fruiting require cooler 14-18 °C."},
  {"id":46,"question":"Which component of drip irrigation system controls both filtration and fertigation?","options":{"A":"Mainline","B":"Emitting pipe","C":"Venturi injector with filter unit","D":"Flush valve"},"correct":"C","explanation":"Head control unit comprising screens/filters and venturi injector ensures clean water supply and dissolves fertilisers into drip system."},
  {"id":47,"question":"In comparative life cycle analysis of greenhouse vs open-field tomato, the most energy-intensive input under Indian conditions is ___ .","options":{"A":"polyethylene film production","B":"electricity for cooling fans","C":"fertiliser manufacture","D":"diesel for pumping"},"correct":"A","explanation":"Studies show manufacture and replacement of greenhouse plastic cladding consumes more cumulative energy than operational inputs in tropics."},
  {"id":48,"question":"Which cropping system indexes market orientation with high per-unit returns by growing high-value perishables near urban centres?","options":{"A":"Truck gardening","B":"Kitchen gardening","C":"Plantation cropping","D":"Rabi fallowing"},"correct":"A","explanation":"Truck (market) gardening specialises in vegetable production for distant sale using rapid transport to urban markets."},
  {"id":49,"question":"Topping (removal of apical bud) in chilli is mainly practiced to ___ .","options":{"A":"control viral diseases","B":"encourage lateral branching and higher fruit set","C":"reduce pest incidence","D":"prevent fruit drop"},"correct":"B","explanation":"Pinching apical meristem diverts auxins, inducing side shoots that bear more flowers and fruits in chilli."},
  {"id":50,"question":"The internationally accepted permissible limit of aflatoxin B₁ in shelled groundnuts for direct human consumption is ___ ppb (µg kg⁻¹).","options":{"A":"2","B":"5","C":"20","D":"100"},"correct":"C","explanation":"Codex and FSSAI allow maximum 20 ppb aflatoxin B₁ in ready-to-eat groundnuts; stricter limits apply for infants."}
];

// Initialize application
function initializeApp() {
    console.log('Initializing app...');
    questions = questionData;
    console.log('Questions loaded:', questions.length);
    showScreen('welcome-screen');
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Start test button
    const startBtn = document.getElementById('start-test-btn');
    console.log('Start button:', startBtn);
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            console.log('Start button clicked');
            e.preventDefault();
            startTest();
        });
    }
    
    // Submit button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            console.log('Submit button clicked');
            e.preventDefault();
            submitAnswer();
        });
    }
    
    // Next question button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            console.log('Next button clicked');
            e.preventDefault();
            nextQuestion();
        });
    }
    
    // Restart button
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', function(e) {
            console.log('Restart button clicked');
            e.preventDefault();
            restartTest();
        });
    }
}

// Screen management
function showScreen(screenId) {
    console.log('Showing screen:', screenId);
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log('Screen activated:', screenId);
    } else {
        console.error('Screen not found:', screenId);
    }
}

// Start test
function startTest() {
    console.log('Starting test...');
    currentQuestionIndex = 0;
    userAnswers = [];
    currentScore = 0;
    selectedAnswer = null;
    testStarted = true;
    
    showScreen('test-screen');
    
    // Load the first question
    setTimeout(() => {
        loadQuestion();
    }, 100);
}

// Load current question
function loadQuestion() {
    console.log('Loading question:', currentQuestionIndex + 1);
    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    
    // Update progress
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const currentScoreEl = document.getElementById('current-score');
    
    if (currentQuestionEl) currentQuestionEl.textContent = currentQuestionIndex + 1;
    if (totalQuestionsEl) totalQuestionsEl.textContent = questions.length;
    if (currentScoreEl) currentScoreEl.textContent = currentScore;
    
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    
    // Load question text
    const questionTextEl = document.getElementById('question-text');
    if (questionTextEl) {
        questionTextEl.textContent = question.question;
    }
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        Object.entries(question.options).forEach(([key, value]) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.innerHTML = `<strong>${key}.</strong> ${value}`;
            button.setAttribute('data-option', key);
            button.addEventListener('click', function() {
                selectOption(key, button);
            });
            optionsContainer.appendChild(button);
        });
    }
    
    // Hide explanation and reset buttons
    const explanationContainer = document.getElementById('explanation-container');
    if (explanationContainer) {
        explanationContainer.classList.remove('show');
        explanationContainer.innerHTML = '';
    }
    
    // Show submit button, hide next button
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    if (submitBtn) submitBtn.style.display = 'inline-block';
    if (nextBtn) nextBtn.style.display = 'none';
}

// Select option
function selectOption(optionKey, buttonElement) {
    console.log('Option selected:', optionKey);
    
    // Remove selected class from all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add selected class to clicked option
    buttonElement.classList.add('selected');
    selectedAnswer = optionKey;
}

// Submit answer
function submitAnswer() {
    console.log('Submitting answer:', selectedAnswer);
    
    if (!selectedAnswer) {
        alert('Please select an answer before submitting.');
        return;
    }
    
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    // Store user answer
    userAnswers[currentQuestionIndex] = {
        selected: selectedAnswer,
        correct: question.correct,
        isCorrect: isCorrect
    };
    
    // Update score
    if (isCorrect) {
        currentScore++;
        const currentScoreEl = document.getElementById('current-score');
        if (currentScoreEl) {
            currentScoreEl.textContent = currentScore;
        }
    }
    
    // Disable all options and show results
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
        
        // Get the option key (A, B, C, D)
        const optionKey = option.getAttribute('data-option');
        
        if (optionKey === question.correct) {
            option.classList.add('correct');
        } else if (optionKey === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const explanationContainer = document.getElementById('explanation-container');
    if (explanationContainer) {
        explanationContainer.innerHTML = `
            <div class="explanation">${question.explanation}</div>
        `;
        explanationContainer.classList.add('show');
    }
    
    // Hide submit button, show next button
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) {
        nextBtn.style.display = 'inline-block';
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'View Results' : 'Next Question';
    }
}

// Next question
function nextQuestion() {
    console.log('Next question clicked, current index:', currentQuestionIndex);
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    console.log('Showing results...');
    
    const correctAnswers = currentScore;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    // Update score display
    const scoreNumberEl = document.getElementById('score-number');
    const percentageEl = document.getElementById('percentage');
    
    if (scoreNumberEl) scoreNumberEl.textContent = correctAnswers;
    if (percentageEl) percentageEl.textContent = percentage + '%';
    
    // Determine performance category based on requirements
    let performanceCategory, performanceMessage, performanceClass;
    
    if (correctAnswers >= 40) {
        performanceCategory = 'Excellent';
        performanceMessage = 'Outstanding performance! You have excellent knowledge in Agriculture, Horticulture & Vegetable Science.';
        performanceClass = 'excellent';
    } else if (correctAnswers >= 30) {
        performanceCategory = 'Good';
        performanceMessage = 'Good job! You have solid understanding of the concepts. Keep practicing for even better results.';
        performanceClass = 'good';
    } else if (correctAnswers >= 20) {
        performanceCategory = 'Average';
        performanceMessage = 'Average performance. Focus on weak areas and practice more to improve your score.';
        performanceClass = 'average';
    } else {
        performanceCategory = 'Needs Improvement';
        performanceMessage = 'Needs improvement. Review the fundamentals and practice regularly to enhance your knowledge.';
        performanceClass = 'needs-improvement';
    }
    
    const performanceBadge = document.getElementById('performance-badge');
    const performanceMessageEl = document.getElementById('performance-message');
    
    if (performanceBadge) {
        performanceBadge.textContent = performanceCategory;
        performanceBadge.className = `performance-badge ${performanceClass}`;
    }
    
    if (performanceMessageEl) {
        performanceMessageEl.textContent = performanceMessage;
    }
    
    showScreen('results-screen');
}

// Restart test
function restartTest() {
    console.log('Restarting test...');
    currentQuestionIndex = 0;
    userAnswers = [];
    currentScore = 0;
    selectedAnswer = null;
    startTest();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});