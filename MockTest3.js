// Mock Test 3 - ASRB NET Vegetable Science
// 50 questions covering Cool Season Crops, Warm Season Crops, Cucurbits, Root Vegetables, Leafy Vegetables, and Plant Breeding

const mockTest3Questions = [
    {"id":1,"question":"Which of the following is considered a cool-season vegetable crop?","options":{"A":"Tomato","B":"Brinjal","C":"Cabbage","D":"Okra"},"correct":"C","explanation":"Cabbage is a cool-season crop that grows best in temperatures between 15-20Â°C and can tolerate light frost."},
    {"id":2,"question":"The optimum temperature range for cauliflower curd development is:","options":{"A":"25-30Â°C","B":"15-20Â°C","C":"30-35Â°C","D":"10-15Â°C"},"correct":"B","explanation":"Cauliflower requires cool temperatures of 15-20Â°C for proper curd development. Higher temperatures cause loose, ricey curds."},
    {"id":3,"question":"Button disorder in cauliflower is caused by:","options":{"A":"High temperature","B":"Boron deficiency","C":"Nitrogen excess","D":"Water stress"},"correct":"A","explanation":"Button disorder in cauliflower is caused by high temperature during curd initiation, resulting in premature small curds."},
    {"id":4,"question":"The scientific name of radish is:","options":{"A":"Brassica oleracea","B":"Raphanus sativus","C":"Brassica rapa","D":"Brassica nigra"},"correct":"B","explanation":"Radish belongs to the species Raphanus sativus under the family Brassicaceae."},
    {"id":5,"question":"Pusa Snowball K-1 is a variety of:","options":{"A":"Cabbage","B":"Cauliflower","C":"Knol-khol","D":"Brussels sprout"},"correct":"B","explanation":"Pusa Snowball K-1 is a popular early variety of cauliflower developed by IARI, New Delhi."},
    {"id":6,"question":"The edible part of lettuce is:","options":{"A":"Root","B":"Stem","C":"Leaves","D":"Flower"},"correct":"C","explanation":"Lettuce is grown for its tender leaves which are used in salads and as garnish."},
    {"id":7,"question":"Hollow stem disorder in cauliflower is caused by:","options":{"A":"Calcium deficiency","B":"Boron deficiency","C":"High nitrogen","D":"Water stress"},"correct":"B","explanation":"Hollow stem or brown rot of cauliflower is caused by boron deficiency, affecting the stem and curd quality."},
    {"id":8,"question":"The most suitable pH range for growing cabbage is:","options":{"A":"5.0-5.5","B":"6.0-6.5","C":"7.0-7.5","D":"8.0-8.5"},"correct":"B","explanation":"Cabbage grows best in slightly acidic to neutral soil with pH 6.0-6.5 for optimal nutrient availability."},
    {"id":9,"question":"The scientific name of tomato is:","options":{"A":"Solanum lycopersicum","B":"Solanum tuberosum","C":"Solanum melongena","D":"Capsicum annuum"},"correct":"A","explanation":"Tomato belongs to Solanum lycopersicum (formerly Lycopersicon esculentum) under family Solanaceae."},
    {"id":10,"question":"Blossom end rot in tomato is caused by:","options":{"A":"Fungal infection","B":"Calcium deficiency","C":"Nitrogen excess","D":"Viral disease"},"correct":"B","explanation":"Blossom end rot is a physiological disorder caused by calcium deficiency and irregular water supply."},
    {"id":11,"question":"Pusa Ruby is a variety of:","options":{"A":"Tomato","B":"Brinjal","C":"Chilli","D":"Capsicum"},"correct":"A","explanation":"Pusa Ruby is a popular determinate variety of tomato suitable for processing."},
    {"id":12,"question":"The optimum temperature for germination of okra seeds is:","options":{"A":"15-20Â°C","B":"20-25Â°C","C":"25-30Â°C","D":"30-35Â°C"},"correct":"C","explanation":"Okra being a warm season crop requires 25-30Â°C for optimal seed germination."},
    {"id":13,"question":"Yellow vein mosaic disease in okra is transmitted by:","options":{"A":"Aphids","B":"Whitefly","C":"Thrips","D":"Jassids"},"correct":"B","explanation":"Yellow vein mosaic virus in okra is transmitted by whitefly (Bemisia tabaci)."},
    {"id":14,"question":"The edible part of brinjal is:","options":{"A":"Root","B":"Stem","C":"Fruit","D":"Leaves"},"correct":"C","explanation":"Brinjal fruit is the edible part which is botanically a berry."},
    {"id":15,"question":"Little leaf disease in brinjal is caused by:","options":{"A":"Virus","B":"Bacteria","C":"Fungus","D":"Mycoplasma"},"correct":"D","explanation":"Little leaf disease in brinjal is caused by mycoplasma-like organisms (phytoplasma)."},
    {"id":16,"question":"Pusa Purple Long is a variety of:","options":{"A":"Tomato","B":"Brinjal","C":"Chilli","D":"Okra"},"correct":"B","explanation":"Pusa Purple Long is a popular variety of brinjal with long purple fruits."},
    {"id":17,"question":"Cucumber belongs to the family:","options":{"A":"Solanaceae","B":"Cucurbitaceae","C":"Malvaceae","D":"Brassicaceae"},"correct":"B","explanation":"Cucumber belongs to family Cucurbitaceae along with other cucurbits like bottle gourd, pumpkin, watermelon."},
    {"id":18,"question":"The sex expression in cucumber is predominantly:","options":{"A":"Monoecious","B":"Dioecious","C":"Hermaphrodite","D":"Gynoecious"},"correct":"A","explanation":"Cucumber is predominantly monoecious with separate male and female flowers on the same plant."},
    {"id":19,"question":"Downy mildew in cucurbits is caused by:","options":{"A":"Pseudoperonospora cubensis","B":"Alternaria cucumerina","C":"Fusarium oxysporum","D":"Colletotrichum lagenarium"},"correct":"A","explanation":"Downy mildew in cucurbits is caused by the fungus Pseudoperonospora cubensis."},
    {"id":20,"question":"The scientific name of bottle gourd is:","options":{"A":"Cucumis sativus","B":"Lagenaria siceraria","C":"Cucurbita maxima","D":"Citrullus lanatus"},"correct":"B","explanation":"Bottle gourd is scientifically known as Lagenaria siceraria."},
    {"id":21,"question":"Bitter principle in bitter gourd is:","options":{"A":"Solanine","B":"Charantin","C":"Cucurbitacin","D":"Momordicin"},"correct":"D","explanation":"The bitter principle in bitter gourd is momordicin, which has anti-diabetic properties."},
    {"id":22,"question":"Watermelon is primarily grown for:","options":{"A":"Leaves","B":"Seeds","C":"Fruit pulp","D":"Roots"},"correct":"C","explanation":"Watermelon is grown for its sweet, juicy fruit pulp which is consumed fresh."},
    {"id":23,"question":"Pusa Vishesh is a variety of:","options":{"A":"Cucumber","B":"Bottle gourd","C":"Bitter gourd","D":"Pumpkin"},"correct":"C","explanation":"Pusa Vishesh is a hybrid variety of bitter gourd developed by IARI."},
    {"id":24,"question":"The chromosome number of watermelon is:","options":{"A":"2n=20","B":"2n=22","C":"2n=24","D":"2n=26"},"correct":"B","explanation":"Watermelon (Citrullus lanatus) has a chromosome number of 2n=22."},
    {"id":25,"question":"The edible part of carrot is:","options":{"A":"Tap root","B":"Lateral root","C":"Stem","D":"Modified stem"},"correct":"A","explanation":"Carrot's edible part is the swollen tap root which stores carbohydrates and carotenoids."},
    {"id":26,"question":"Beta-carotene content is highest in which carrot variety:","options":{"A":"Pusa Kesar","B":"Pusa Meghali","C":"Pusa Rudhira","D":"Pusa Asita"},"correct":"A","explanation":"Pusa Kesar variety of carrot has the highest beta-carotene content among Indian varieties."},
    {"id":27,"question":"The scientific name of sweet potato is:","options":{"A":"Solanum tuberosum","B":"Ipomoea batatas","C":"Manihot esculenta","D":"Dioscorea alata"},"correct":"B","explanation":"Sweet potato belongs to Ipomoea batatas under family Convolvulaceae."},
    {"id":28,"question":"Forking in radish is caused by:","options":{"A":"High nitrogen","B":"Deep cultivation","C":"Fresh manure application","D":"All of the above"},"correct":"D","explanation":"Forking in radish can be caused by high nitrogen, deep cultivation, and fresh manure application."},
    {"id":29,"question":"The propagation method for sweet potato is:","options":{"A":"Seeds","B":"Stem cuttings","C":"Root cuttings","D":"Vine cuttings"},"correct":"D","explanation":"Sweet potato is commercially propagated through vine cuttings (slips) rather than seeds."},
    {"id":30,"question":"Black scurf disease in potato is caused by:","options":{"A":"Rhizoctonia solani","B":"Alternaria solani","C":"Phytophthora infestans","D":"Streptomyces scabies"},"correct":"A","explanation":"Black scurf in potato is caused by the fungus Rhizoctonia solani affecting tuber surface."},
    {"id":31,"question":"The most suitable soil type for carrot cultivation is:","options":{"A":"Clay soil","B":"Sandy loam","C":"Heavy clay","D":"Saline soil"},"correct":"B","explanation":"Carrot requires well-drained sandy loam soil for proper root development and shape."},
    {"id":32,"question":"Pusa Chetki is a variety of:","options":{"A":"Carrot","B":"Radish","C":"Turnip","D":"Beetroot"},"correct":"B","explanation":"Pusa Chetki is an early variety of radish suitable for plains cultivation."},
    {"id":33,"question":"The scientific name of spinach is:","options":{"A":"Beta vulgaris","B":"Spinacia oleracea","C":"Amaranthus tricolor","D":"Trigonella foenum-graecum"},"correct":"B","explanation":"Spinach belongs to Spinacia oleracea under family Chenopodiaceae (now Amaranthaceae)."},
    {"id":34,"question":"Bolting in spinach is induced by:","options":{"A":"Short days","B":"Long days","C":"High temperature","D":"Both B and C"},"correct":"D","explanation":"Bolting in spinach is induced by both long days and high temperature conditions."},
    {"id":35,"question":"The most important nutrient in leafy vegetables is:","options":{"A":"Carbohydrates","B":"Proteins","C":"Iron and Vitamins","D":"Calcium"},"correct":"C","explanation":"Leafy vegetables are rich sources of iron, vitamins (especially Vitamin A, C, K), and folate."},
    {"id":36,"question":"Pusa Jyoti is a variety of:","options":{"A":"Spinach","B":"Fenugreek","C":"Amaranthus","D":"Coriander"},"correct":"B","explanation":"Pusa Jyoti is a popular variety of fenugreek (methi) with tender leaves."},
    {"id":37,"question":"The family of amaranthus is:","options":{"A":"Chenopodiaceae","B":"Amaranthaceae","C":"Malvaceae","D":"Compositae"},"correct":"B","explanation":"Amaranthus belongs to family Amaranthaceae (formerly included in Chenopodiaceae)."},
    {"id":38,"question":"Tip burn in lettuce is caused by:","options":{"A":"Calcium deficiency","B":"High temperature","C":"Water stress","D":"All of the above"},"correct":"D","explanation":"Tip burn in lettuce is caused by calcium deficiency aggravated by high temperature and water stress."},
    {"id":39,"question":"The propagation method for mint is:","options":{"A":"Seeds","B":"Stolons","C":"Rhizomes","D":"Both B and C"},"correct":"D","explanation":"Mint is propagated vegetatively through both stolons and rhizomes."},
    {"id":40,"question":"Palak belongs to the same family as:","options":{"A":"Spinach","B":"Amaranthus","C":"Beetroot","D":"Both A and C"},"correct":"D","explanation":"Palak (Beta vulgaris var. bengalensis) belongs to the same family as spinach and beetroot - Amaranthaceae."},
    {"id":41,"question":"Heterosis is maximum in:","options":{"A":"Self-pollinated crops","B":"Cross-pollinated crops","C":"Often cross-pollinated crops","D":"Apomictic crops"},"correct":"B","explanation":"Heterosis or hybrid vigor is maximum in cross-pollinated crops due to high genetic diversity."},
    {"id":42,"question":"Male sterility in onion is controlled by:","options":{"A":"Nuclear genes","B":"Cytoplasmic genes","C":"Both nuclear and cytoplasmic","D":"Environmental factors"},"correct":"C","explanation":"Male sterility in onion is controlled by both nuclear and cytoplasmic genes (cytoplasmic-nuclear male sterility)."},
    {"id":43,"question":"Gynoecious lines in cucumber are used for:","options":{"A":"Pure line selection","B":"Hybrid seed production","C":"Mutation breeding","D":"Polyploidy breeding"},"correct":"B","explanation":"Gynoecious lines (all female flowers) in cucumber are used for efficient hybrid seed production."},
    {"id":44,"question":"The center of origin of tomato is:","options":{"A":"India","B":"Central America","C":"South America","D":"Mediterranean"},"correct":"C","explanation":"The center of origin of tomato is South America, particularly Peru-Ecuador region."},
    {"id":45,"question":"Self-incompatibility in Brassica crops is:","options":{"A":"Sporophytic","B":"Gametophytic","C":"Heteromorphic","D":"Homomorphic"},"correct":"A","explanation":"Brassica crops exhibit sporophytic self-incompatibility controlled by S-locus genes."},
    {"id":46,"question":"Trisomic analysis is used for:","options":{"A":"Gene mapping","B":"Chromosome mapping","C":"Linkage analysis","D":"All of the above"},"correct":"D","explanation":"Trisomic analysis is used for gene mapping, chromosome mapping, and linkage analysis in crops like tomato."},
    {"id":47,"question":"The breeding method suitable for improving heterozygous crops is:","options":{"A":"Pure line selection","B":"Mass selection","C":"Backcross method","D":"Single seed descent"},"correct":"B","explanation":"Mass selection is suitable for improving cross-pollinated (heterozygous) crops."},
    {"id":48,"question":"Somatic hybridization is achieved through:","options":{"A":"Protoplast fusion","B":"Anther culture","C":"Ovule culture","D":"Meristem culture"},"correct":"A","explanation":"Somatic hybridization is achieved through protoplast fusion technique in plant breeding."},
    {"id":49,"question":"Which growth regulator is used to induce parthenocarpy in tomato?","options":{"A":"Gibberellic acid","B":"2,4-D","C":"NAA","D":"Cytokinins"},"correct":"B","explanation":"2,4-D (2,4-Dichlorophenoxyacetic acid) is commonly used to induce parthenocarpy in tomato and other fruits."},
    {"id":50,"question":"The isolation distance required for foundation seed production of okra is:","options":{"A":"50 meters","B":"100 meters","C":"200 meters","D":"400 meters"},"correct":"C","explanation":"For foundation seed production of okra, an isolation distance of 200 meters is required to maintain genetic purity."}
];

// Function to initialize Mock Test 3
function startMockTest3() {
    // Replace the current questions with Mock Test 3 questions
    questions = [...mockTest3Questions];
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

// Add event listener for Mock Test 3 button
document.addEventListener('DOMContentLoaded', function() {
    // Create a new button for Mock Test 3
    const mockTest3Btn = document.createElement('button');
    mockTest3Btn.id = 'start-mock-test-3';
    mockTest3Btn.className = 'btn btn--primary btn--lg';
    mockTest3Btn.textContent = 'Start Mock Test 3';
    mockTest3Btn.onclick = startMockTest3;

    // Add the button to the quick actions section
    const quickActionsDiv = document.querySelector('.action-buttons');
    if (quickActionsDiv) {
        quickActionsDiv.appendChild(mockTest3Btn);
    }
});
