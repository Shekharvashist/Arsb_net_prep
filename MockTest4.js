// Mock Test 4 - ASRB NET Vegetable Science
// 50 questions covering Seed Production, Post-harvest Technology, Plant Physiology, Plant Protection, and Advanced Topics

const mockTest4Questions = [
    {"id":1,"question":"The minimum genetic purity required for certified seed is:","options":{"A":"98%","B":"99%","C":"99.5%","D":"100%"},"correct":"A","explanation":"Certified seed requires minimum 98% genetic purity as per seed certification standards."},
    {"id":2,"question":"Foundation seed is produced from:","options":{"A":"Certified seed","B":"Breeder seed","C":"Truthfully labeled seed","D":"Farmers seed"},"correct":"B","explanation":"Foundation seed is produced from breeder seed under the supervision of plant breeder."},
    {"id":3,"question":"The color of tag used for breeder seed is:","options":{"A":"Golden yellow","B":"White","C":"Blue","D":"Red"},"correct":"A","explanation":"Breeder seed uses golden yellow colored tags for identification."},
    {"id":4,"question":"Seed multiplication ratio is highest in:","options":{"A":"Tomato","B":"Onion","C":"Cucurbits","D":"Leafy vegetables"},"correct":"C","explanation":"Cucurbits have the highest seed multiplication ratio due to large number of seeds per fruit."},
    {"id":5,"question":"The minimum isolation distance for certified seed production of tomato is:","options":{"A":"25 meters","B":"50 meters","C":"100 meters","D":"200 meters"},"correct":"B","explanation":"For certified seed production of tomato, minimum isolation distance of 50 meters is required."},
    {"id":6,"question":"True Potato Seed (TPS) technology was developed to:","options":{"A":"Increase yield","B":"Reduce seed cost","C":"Improve quality","D":"Control diseases"},"correct":"B","explanation":"TPS technology was developed to reduce seed cost and make potato cultivation economical for small farmers."},
    {"id":7,"question":"Roguing in seed production field is done to:","options":{"A":"Remove off-types","B":"Remove weeds","C":"Remove diseased plants","D":"All of the above"},"correct":"D","explanation":"Roguing involves removal of off-types, weeds, and diseased plants to maintain seed purity."},
    {"id":8,"question":"The process of removing male flowers in hybrid seed production is called:","options":{"A":"Emasculation","B":"Pollination","C":"Detasseling","D":"Pinching"},"correct":"A","explanation":"Emasculation is the process of removing male flowers/anthers before pollination in hybrid seed production."},
    {"id":9,"question":"Seed vigour index is calculated as:","options":{"A":"Germination % Ã— Seedling length","B":"Germination % + Speed of germination","C":"100 seed weight Ã— Germination %","D":"Purity % Ã— Germination %"},"correct":"A","explanation":"Seed vigour index = Germination percentage Ã— Total seedling length (shoot + root)."},
    {"id":10,"question":"The ideal moisture content for storage of vegetable seeds is:","options":{"A":"2-4%","B":"5-8%","C":"10-12%","D":"15-18%"},"correct":"B","explanation":"Vegetable seeds should be stored at 5-8% moisture content for maintaining viability."},
    {"id":11,"question":"The respiration rate is highest in:","options":{"A":"Onion","B":"Potato","C":"Leafy vegetables","D":"Pumpkin"},"correct":"C","explanation":"Leafy vegetables have the highest respiration rate, leading to faster deterioration."},
    {"id":12,"question":"Ethylene production is maximum in:","options":{"A":"Climacteric fruits","B":"Non-climacteric fruits","C":"Root vegetables","D":"Leafy vegetables"},"correct":"A","explanation":"Climacteric fruits like tomato, melon produce maximum ethylene during ripening."},
    {"id":13,"question":"The optimum storage temperature for potato is:","options":{"A":"0-2Â°C","B":"4-6Â°C","C":"8-10Â°C","D":"12-15Â°C"},"correct":"B","explanation":"Potato should be stored at 4-6Â°C to prevent cold sweetening and sprouting."},
    {"id":14,"question":"Modified Atmosphere Packaging (MAP) involves:","options":{"A":"Reducing O2 and increasing CO2","B":"Increasing O2 and reducing CO2","C":"Maintaining normal atmosphere","D":"Removing all gases"},"correct":"A","explanation":"MAP involves reducing oxygen (3-5%) and increasing CO2 (5-15%) to delay ripening and senescence."},
    {"id":15,"question":"Chilling injury in tomato occurs below:","options":{"A":"15Â°C","B":"12Â°C","C":"10Â°C","D":"5Â°C"},"correct":"B","explanation":"Tomato suffers chilling injury when stored below 12Â°C for extended periods."},
    {"id":16,"question":"The maturity index for harvesting cucumber is:","options":{"A":"Full size and green color","B":"Yellow color","C":"Soft texture","D":"High TSS"},"correct":"A","explanation":"Cucumber is harvested at full size while still green and firm for best quality."},
    {"id":17,"question":"Hot water treatment at 55Â°C for 5 minutes is used for:","options":{"A":"Ripening","B":"Disease control","C":"Enzyme inactivation","D":"Color development"},"correct":"B","explanation":"Hot water treatment is used for controlling post-harvest diseases in fruits and vegetables."},
    {"id":18,"question":"The storage life of onion can be extended by:","options":{"A":"Proper curing","B":"Low temperature storage","C":"Controlled atmosphere","D":"All of the above"},"correct":"D","explanation":"Onion storage life can be extended by proper curing, low temperature, and controlled atmosphere storage."},
    {"id":19,"question":"Waxing of vegetables is done to:","options":{"A":"Reduce moisture loss","B":"Improve appearance","C":"Prevent disease","D":"All of the above"},"correct":"D","explanation":"Waxing reduces moisture loss, improves appearance, and provides some protection against diseases."},
    {"id":20,"question":"The principle of vacuum cooling is based on:","options":{"A":"Evaporation of water","B":"Condensation","C":"Sublimation","D":"Convection"},"correct":"A","explanation":"Vacuum cooling works by rapid evaporation of water from the produce under reduced pressure."},
    {"id":21,"question":"Photoperiodism in onion bulb formation is:","options":{"A":"Short day response","B":"Long day response","C":"Day neutral","D":"Variable"},"correct":"B","explanation":"Onion bulb formation is induced by long day photoperiod (>12-14 hours daylight)."},
    {"id":22,"question":"Vernalization requirement is present in:","options":{"A":"Carrot","B":"Radish","C":"Cabbage","D":"All of the above"},"correct":"D","explanation":"Biennial crops like carrot, radish, and cabbage require vernalization for flowering."},
    {"id":23,"question":"The most important factor affecting sex expression in cucurbits is:","options":{"A":"Temperature","B":"Photoperiod","C":"Nutrition","D":"Growth regulators"},"correct":"A","explanation":"Temperature is the most important factor affecting sex expression in cucurbits - high temperature favors male flowers."},
    {"id":24,"question":"Gibberellic acid is used in vegetables for:","options":{"A":"Breaking seed dormancy","B":"Inducing parthenocarpy","C":"Preventing bolting","D":"Both A and B"},"correct":"D","explanation":"GA3 is used for breaking seed dormancy and inducing parthenocarpy in vegetables."},
    {"id":25,"question":"The critical stage for water requirement in tomato is:","options":{"A":"Germination","B":"Flowering","C":"Fruit development","D":"Harvesting"},"correct":"C","explanation":"Fruit development stage is most critical for water requirement in tomato."},
    {"id":26,"question":"Purple top in turnip is caused by deficiency of:","options":{"A":"Nitrogen","B":"Phosphorus","C":"Potassium","D":"Boron"},"correct":"B","explanation":"Purple top or red coloration in turnip is caused by phosphorus deficiency."},
    {"id":27,"question":"Hollow heart in potato is caused by:","options":{"A":"Calcium deficiency","B":"Boron deficiency","C":"Rapid growth","D":"Water stress"},"correct":"C","explanation":"Hollow heart in potato is caused by rapid growth due to favorable conditions after stress."},
    {"id":28,"question":"The phenomenon of conversion of vegetative buds to floral buds is called:","options":{"A":"Vernalization","B":"Photoperiodism","C":"Floral induction","D":"Dormancy"},"correct":"C","explanation":"Floral induction is the process of conversion of vegetative meristem to reproductive meristem."},
    {"id":29,"question":"Cracking in tomato fruits is due to:","options":{"A":"Calcium deficiency","B":"Irregular water supply","C":"High temperature","D":"Boron deficiency"},"correct":"B","explanation":"Fruit cracking in tomato is mainly due to irregular water supply causing internal pressure changes."},
    {"id":30,"question":"The C:N ratio for good compost should be:","options":{"A":"10:1","B":"20:1","C":"30:1","D":"40:1"},"correct":"C","explanation":"The ideal C:N ratio for good quality compost should be around 30:1."},
    {"id":31,"question":"Late blight of tomato is caused by:","options":{"A":"Alternaria solani","B":"Phytophthora infestans","C":"Fusarium lycopersici","D":"Ralstonia solanacearum"},"correct":"B","explanation":"Late blight of tomato is caused by the oomycete pathogen Phytophthora infestans."},
    {"id":32,"question":"Damping off disease is caused by:","options":{"A":"Rhizoctonia solani","B":"Pythium species","C":"Fusarium species","D":"All of the above"},"correct":"D","explanation":"Damping off can be caused by several soil-borne pathogens including Rhizoctonia, Pythium, and Fusarium."},
    {"id":33,"question":"Integrated Pest Management (IPM) emphasizes on:","options":{"A":"Chemical control only","B":"Biological control only","C":"Multiple control strategies","D":"Cultural practices only"},"correct":"C","explanation":"IPM integrates multiple control strategies including cultural, biological, and chemical methods."},
    {"id":34,"question":"Bt cotton produces resistance against:","options":{"A":"Aphids","B":"Bollworm","C":"Whitefly","D":"Spider mites"},"correct":"B","explanation":"Bt cotton produces Cry proteins that are toxic to lepidopteran pests like bollworm."},
    {"id":35,"question":"Economic Threshold Level (ETL) is:","options":{"A":"Pest density causing economic loss","B":"Maximum tolerable pest level","C":"Pest level requiring control action","D":"Average pest population"},"correct":"C","explanation":"ETL is the pest population level at which control measures should be applied to prevent economic loss."},
    {"id":36,"question":"Clubroot of cabbage is caused by:","options":{"A":"Virus","B":"Bacteria","C":"Fungus","D":"Protist"},"correct":"D","explanation":"Clubroot of cabbage is caused by Plasmodiophora brassicae, a protist (obligate parasite)."},
    {"id":37,"question":"Sticky traps are most effective against:","options":{"A":"Aphids","B":"Whiteflies","C":"Thrips","D":"All of the above"},"correct":"D","explanation":"Yellow sticky traps are effective against small flying insects like aphids, whiteflies, and thrips."},
    {"id":38,"question":"Leaf curl virus in tomato is transmitted by:","options":{"A":"Aphids","B":"Whitefly","C":"Thrips","D":"Beetles"},"correct":"B","explanation":"Tomato leaf curl virus is transmitted by whitefly (Bemisia tabaci) in a persistent manner."},
    {"id":39,"question":"Bordeaux mixture is used for controlling:","options":{"A":"Bacterial diseases","B":"Fungal diseases","C":"Viral diseases","D":"Insect pests"},"correct":"B","explanation":"Bordeaux mixture (copper sulfate + lime) is a fungicide used for controlling fungal diseases."},
    {"id":40,"question":"Neem-based pesticides are effective against:","options":{"A":"Sucking pests","B":"Chewing pests","C":"Both A and B","D":"Diseases only"},"correct":"C","explanation":"Neem-based pesticides are effective against both sucking and chewing insect pests."},
    {"id":41,"question":"Molecular markers are used in plant breeding for:","options":{"A":"Marker-assisted selection","B":"Genetic diversity analysis","C":"Gene mapping","D":"All of the above"},"correct":"D","explanation":"Molecular markers have multiple applications including MAS, genetic diversity studies, and gene mapping."},
    {"id":42,"question":"Somaclonal variation occurs in:","options":{"A":"Tissue culture","B":"Sexual reproduction","C":"Vegetative propagation","D":"Seed propagation"},"correct":"A","explanation":"Somaclonal variation is genetic variation that occurs in plants regenerated from tissue culture."},
    {"id":43,"question":"The herbicide tolerance gene in crops is:","options":{"A":"Bt gene","B":"EPSPS gene","C":"Cry gene","D":"GFP gene"},"correct":"B","explanation":"EPSPS (5-enolpyruvylshikimate-3-phosphate synthase) gene confers glyphosate herbicide tolerance."},
    {"id":44,"question":"RAPD markers are based on:","options":{"A":"PCR amplification","B":"Restriction digestion","C":"Hybridization","D":"Sequencing"},"correct":"A","explanation":"RAPD (Random Amplified Polymorphic DNA) markers are based on PCR amplification using random primers."},
    {"id":45,"question":"Precision farming involves:","options":{"A":"GPS technology","B":"Soil testing","C":"Variable rate application","D":"All of the above"},"correct":"D","explanation":"Precision farming integrates GPS, soil testing, and variable rate application technologies."},
    {"id":46,"question":"Hydroponics is the cultivation of plants in:","options":{"A":"Soil","B":"Nutrient solution","C":"Compost","D":"Sand"},"correct":"B","explanation":"Hydroponics is the method of growing plants in nutrient solution without soil."},
    {"id":47,"question":"Protected cultivation helps in:","options":{"A":"Season extension","B":"Quality improvement","C":"Pest control","D":"All of the above"},"correct":"D","explanation":"Protected cultivation provides season extension, better quality, and effective pest management."},
    {"id":48,"question":"The concept of Food Miles refers to:","options":{"A":"Distance food travels","B":"Nutritional value","C":"Storage period","D":"Processing time"},"correct":"A","explanation":"Food Miles concept measures the distance food travels from production to consumption point."},
    {"id":49,"question":"Good Agricultural Practices (GAP) focus on:","options":{"A":"Food safety","B":"Environmental protection","C":"Worker welfare","D":"All of the above"},"correct":"D","explanation":"GAP encompasses food safety, environmental protection, and worker welfare aspects."},
    {"id":50,"question":"Vertical farming is suitable for:","options":{"A":"Cereals","B":"Leafy vegetables","C":"Root crops","D":"Tree fruits"},"correct":"B","explanation":"Vertical farming is most suitable for leafy vegetables due to their short height and quick growth cycle."}
];

// Function to initialize Mock Test 4
function startMockTest4() {
    // Replace the current questions with Mock Test 4 questions
    questions = [...mockTest4Questions];
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

// Add event listener for Mock Test 4 button
document.addEventListener('DOMContentLoaded', function() {
    // Create a new button for Mock Test 4
    const mockTest4Btn = document.createElement('button');
    mockTest4Btn.id = 'start-mock-test-4';
    mockTest4Btn.className = 'btn btn--primary btn--lg';
    mockTest4Btn.textContent = 'Start Mock Test 4';
    mockTest4Btn.onclick = startMockTest4;

    // Add the button to the quick actions section
    const quickActionsDiv = document.querySelector('.action-buttons');
    if (quickActionsDiv) {
        quickActionsDiv.appendChild(mockTest4Btn);
    }
});
