// ASRB NET Vegetable Science Practice Test - 150 Questions
// Main Application JavaScript

class ASRBTestApp {
    constructor() {
        this.questions = this.generateQuestions();
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(150).fill(null);
        this.answeredQuestions = new Set();
        this.startTime = null;
        this.endTime = null;
        this.isQuestionAnswered = false;
        
        this.initializeApp();
    }

    generateQuestions() {
        // Base questions from provided data
        const baseQuestions = [
            {
                id: 1,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Potato is optimally planted in India when soil temperature at 10 cm depth first falls below",
                options: ["A. 15 °C", "B. 18 °C", "C. 20 °C", "D. 22 °C"],
                correct: "B",
                explanation: "Optimal soil temperature for potato planting in Indian conditions"
            },
            {
                id: 2,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Ideal spacing for snowball cauliflower hybrid 'Pusa Snowball K-1' is",
                options: ["A. 45 × 45 cm", "B. 60 × 45 cm", "C. 60 × 60 cm", "D. 75 × 60 cm"],
                correct: "C",
                explanation: "Standard spacing recommendation for cauliflower cultivation"
            },
            {
                id: 3,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "'Kufri Chipsona-1' is recommended primarily for",
                options: ["A. table use", "B. late blight resistance", "C. processing into chips", "D. seed production"],
                correct: "C",
                explanation: "Variety specifically developed for processing industry"
            },
            {
                id: 4,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Club-root of cole crops is severe when soil pH is",
                options: ["A. < 5.5", "B. 6.0–6.5", "C. 7.0–7.5", "D. > 8.0"],
                correct: "A",
                explanation: "Acidic soil conditions favor club root disease development"
            },
            {
                id: 5,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Vernalisation requirement in beetroot seed crop is satisfied by exposure to",
                options: ["A. 2 °C for 4 weeks", "B. 5 °C for 6 weeks", "C. 10 °C for 10 weeks", "D. 15 °C for 12 weeks"],
                correct: "B",
                explanation: "Standard vernalization requirement for beetroot flowering"
            },
            {
                id: 6,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Sprouting broccoli reaches marketable curd size best at day/night temperatures of",
                options: ["A. 10/4 °C", "B. 18/12 °C", "C. 25/18 °C", "D. 30/24 °C"],
                correct: "B",
                explanation: "Optimal temperature range for broccoli curd development"
            },
            {
                id: 7,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Premature bolting in spinach is promoted by",
                options: ["A. short days < 12 h", "B. long days > 14 h", "C. soil N deficiency", "D. auxin spray"],
                correct: "B",
                explanation: "Long day conditions trigger bolting in spinach"
            },
            {
                id: 8,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Seed rate for open-pollinated carrot varieties under Indian conditions is about",
                options: ["A. 2 kg ha⁻¹", "B. 4 kg ha⁻¹", "C. 6 kg ha⁻¹", "D. 8 kg ha⁻¹"],
                correct: "B",
                explanation: "Standard seed rate for carrot cultivation"
            },
            {
                id: 9,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Black-leg disease of cabbage is incited by",
                options: ["A. Xanthomonas campestris", "B. Alternaria brassicae", "C. Phoma lingam", "D. Plasmodiophora brassicae"],
                correct: "C",
                explanation: "Phoma lingam is the causal organism of black leg disease"
            },
            {
                id: 10,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Knol-khol variety 'White Vienna' becomes pithy when harvested beyond",
                options: ["A. 30 DAP", "B. 40 DAP", "C. 55 DAP", "D. 70 DAP"],
                correct: "B",
                explanation: "Optimal harvest timing to avoid pithiness in knol-khol"
            },
            {
                id: 11,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Root-to-seed method is essential for breeder-seed production of",
                options: ["A. radish", "B. turnip", "C. carrot", "D. beetroot"],
                correct: "C",
                explanation: "Carrot requires root-to-seed method for quality seed production"
            },
            {
                id: 12,
                unit: "Production Technology of Cool-Season Vegetable Crops", 
                question: "Purple-top symptom is characteristic of virus infection in",
                options: ["A. turnip", "B. cabbage", "C. onion", "D. garlic"],
                correct: "A",
                explanation: "Turnip mosaic virus causes purple-top symptoms"
            },
            {
                id: 13,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Critical irrigation stage for pea is",
                options: ["A. pre-flowering", "B. flowering", "C. pod-filling", "D. both A and C"],
                correct: "D",
                explanation: "Both pre-flowering and pod-filling are critical stages for irrigation"
            },
            {
                id: 14,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Hollow-heart in potato is associated with",
                options: ["A. low soil Ca", "B. excess N", "C. wide spacing & rapid tuber growth", "D. boron toxicity"],
                correct: "C",
                explanation: "Rapid tuber growth with wide spacing leads to hollow heart"
            },
            {
                id: 15,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "True potato seed (TPS) technology reduces seed rate to about",
                options: ["A. 100 g ha⁻¹", "B. 500 g ha⁻¹", "C. 2 kg ha⁻¹", "D. 10 kg ha⁻¹"],
                correct: "A",
                explanation: "TPS technology significantly reduces seed requirement"
            },
            {
                id: 16,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "'Pusa Katki' is a varietal selection of",
                options: ["A. turnip", "B. radish", "C. carrot", "D. knol-khol"],
                correct: "B",
                explanation: "Pusa Katki is a radish variety developed by IARI"
            },
            {
                id: 17,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "Glycoalkaloid content in ware potato should be below (mg 100 g⁻¹ FW)",
                options: ["A. 10", "B. 20", "C. 40", "D. 100"],
                correct: "C",
                explanation: "Safe consumption limit for glycoalkaloids in potato"
            },
            {
                id: 18,
                unit: "Production Technology of Cool-Season Vegetable Crops",
                question: "For hybrid cabbage seed production the isolation distance (foundation class) is",
                options: ["A. 500 m", "B. 800 m", "C. 1000 m", "D. 1600 m"],
                correct: "C",
                explanation: "Standard isolation distance for foundation seed production"
            },
            {
                id: 19,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Blossom-end rot of tomato is primarily due to deficiency of",
                options: ["A. Ca", "B. K", "C. Mg", "D. B"],
                correct: "A",
                explanation: "Calcium deficiency causes blossom-end rot in tomato"
            },
            {
                id: 20,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Yellow vein mosaic virus (YVMV) in okra is transmitted by",
                options: ["A. aphid", "B. whitefly", "C. leaf-hopper", "D. thrips"],
                correct: "B",
                explanation: "Whitefly is the vector for YVMV transmission"
            },
            {
                id: 21,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Recommended seed rate for hybrid chilli transplanting is",
                options: ["A. 100 g ha⁻¹", "B. 250 g ha⁻¹", "C. 1 kg ha⁻¹", "D. 5 kg ha⁻¹"],
                correct: "B",
                explanation: "Standard seed rate for hybrid chilli transplanting"
            },
            {
                id: 22,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Parthenocarpic cucumber hybrids for polyhouse are predominantly",
                options: ["A. monoecious", "B. gynoecious", "C. andromonoecious", "D. hermaphrodite"],
                correct: "B",
                explanation: "Gynoecious types produce more female flowers for better yield"
            },
            {
                id: 23,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "'Arka Anamika' is an okra variety resistant to",
                options: ["A. YVMV", "B. powdery mildew", "C. root-knot nematode", "D. white rust"],
                correct: "A",
                explanation: "Arka Anamika is YVMV resistant okra variety"
            },
            {
                id: 24,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Sweet potato weevil can be managed effectively by prerelease of",
                options: ["A. Trichogramma", "B. Chequered beetle", "C. Cotesia flavipes", "D. Cheilomenes"],
                correct: "B",
                explanation: "Chequered beetle is effective biocontrol agent for sweet potato weevil"
            },
            {
                id: 25,
                unit: "Production Technology of Warm-Season Vegetable Crops", 
                question: "Degree-days required to harvest muskmelon 'Punjab Hybrid 1' after fruit-set are approximately",
                options: ["A. 250 °Cd", "B. 300 °Cd", "C. 350 °Cd", "D. 400 °Cd"],
                correct: "C",
                explanation: "Heat unit requirement for muskmelon fruit development"
            },
            {
                id: 26,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "For long-distance transport, watermelon fruits are harvested at",
                options: ["A. full-slip", "B. half-slip", "C. mature green", "D. first slip"],
                correct: "A",
                explanation: "Full-slip stage ensures better transportability"
            },
            {
                id: 27,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "A spacing of 45 × 45 cm is typical for autumn-planted",
                options: ["A. brinjal", "B. tomato", "C. capsicum", "D. okra"],
                correct: "D",
                explanation: "Standard spacing for okra in autumn season"
            },
            {
                id: 28,
                unit: "Production Technology of Warm-Season Vegetable Crops", 
                question: "Male sterility in onion for hybrid seed uses cytoplasm designated as",
                options: ["A. N type", "B. S type", "C. T type", "D. R type"],
                correct: "B",
                explanation: "S-type cytoplasm is used for male sterility in onion"
            },
            {
                id: 29,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Optimum temperature for seed germination in chilli is",
                options: ["A. 15–20 °C", "B. 20–25 °C", "C. 25–30 °C", "D. 35–40 °C"],
                correct: "C",
                explanation: "Optimal temperature range for chilli seed germination"
            },
            {
                id: 30,
                unit: "Production Technology of Warm-Season Vegetable Crops",
                question: "Average seed recovery (%) from hybrid tomato fruit is nearest to",
                options: ["A. 0.3", "B. 0.5", "C. 1.0", "D. 2.0"],
                correct: "C",
                explanation: "Typical seed recovery percentage from tomato fruits"
            }
        ];

        // Additional questions to reach 150 total
        const additionalQuestions = [
            // Nutrition and Health Benefits (31-50)
            {
                id: 31,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which vegetable is richest in beta-carotene content?",
                options: ["A. Spinach", "B. Carrot", "C. Tomato", "D. Broccoli"],
                correct: "B",
                explanation: "Carrots contain the highest levels of beta-carotene among common vegetables"
            },
            {
                id: 32,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Lycopene, a powerful antioxidant, is predominantly found in",
                options: ["A. Green leafy vegetables", "B. Root vegetables", "C. Tomato", "D. Onion"],
                correct: "C",
                explanation: "Tomatoes are the richest source of lycopene"
            },
            {
                id: 33,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which mineral is most abundant in spinach?",
                options: ["A. Calcium", "B. Iron", "C. Potassium", "D. Zinc"],
                correct: "B",
                explanation: "Spinach is particularly rich in iron content"
            },
            {
                id: 34,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Cruciferous vegetables are known for their high content of",
                options: ["A. Sulforaphane", "B. Lycopene", "C. Anthocyanins", "D. Capsaicinoids"],
                correct: "A",
                explanation: "Sulforaphane is a key bioactive compound in cruciferous vegetables"
            },
            {
                id: 35,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "The pungent principle in onion and garlic is due to",
                options: ["A. Allicin", "B. Capsaicin", "C. Solanine", "D. Oxalic acid"],
                correct: "A",
                explanation: "Allicin is responsible for the characteristic pungency and health benefits"
            },
            {
                id: 36,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which vegetable has the highest vitamin C content per 100g?",
                options: ["A. Lemon", "B. Bell pepper", "C. Broccoli", "D. Cabbage"],
                correct: "B",
                explanation: "Bell peppers contain more vitamin C than most citrus fruits"
            },
            {
                id: 37,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Folate deficiency can be prevented by consuming",
                options: ["A. Root vegetables", "B. Green leafy vegetables", "C. Bulb vegetables", "D. Tuber vegetables"],
                correct: "B",
                explanation: "Green leafy vegetables are excellent sources of folate"
            },
            {
                id: 38,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "The glycemic index is lowest in",
                options: ["A. Potato", "B. Sweet potato", "C. Green vegetables", "D. Beetroot"],
                correct: "C",
                explanation: "Green vegetables have very low glycemic index values"
            },
            {
                id: 39,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Dietary fibre content is highest in",
                options: ["A. Lettuce", "B. Cucumber", "C. Artichoke", "D. Radish"],
                correct: "C",
                explanation: "Artichoke has one of the highest fiber contents among vegetables"
            },
            {
                id: 40,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which compound gives red color to tomatoes and watermelon?",
                options: ["A. Anthocyanin", "B. Lycopene", "C. Beta-carotene", "D. Chlorophyll"],
                correct: "B",
                explanation: "Lycopene is the red pigment in tomatoes and watermelon"
            },
            {
                id: 41,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Nitrate accumulation is commonly associated with",
                options: ["A. Fruit vegetables", "B. Leafy vegetables", "C. Root vegetables", "D. Seed vegetables"],
                correct: "B",
                explanation: "Leafy vegetables tend to accumulate more nitrates from soil"
            },
            {
                id: 42,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Capsaicin, found in chilli peppers, has",
                options: ["A. Anti-inflammatory properties", "B. Sedative effects", "C. Diuretic properties", "D. Laxative effects"],
                correct: "A",
                explanation: "Capsaicin has proven anti-inflammatory and pain-relieving properties"
            },
            {
                id: 43,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which vegetable is recommended for diabetic patients due to low carbohydrate content?",
                options: ["A. Potato", "B. Sweet corn", "C. Bitter gourd", "D. Sweet potato"],
                correct: "C",
                explanation: "Bitter gourd has low carbs and compounds that help regulate blood sugar"
            },
            {
                id: 44,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Calcium bioavailability is highest from",
                options: ["A. Spinach", "B. Broccoli", "C. Beet greens", "D. Swiss chard"],
                correct: "B",
                explanation: "Broccoli has high calcium content with good bioavailability"
            },
            {
                id: 45,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which vegetable contains natural nitrates beneficial for cardiovascular health?",
                options: ["A. Carrot", "B. Beetroot", "C. Radish", "D. Turnip"],
                correct: "B",
                explanation: "Beetroot nitrates help improve blood flow and reduce blood pressure"
            },
            {
                id: 46,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Zeaxanthin and lutein, important for eye health, are found in",
                options: ["A. Corn and leafy greens", "B. Root vegetables", "C. Onions and garlic", "D. Tomatoes"],
                correct: "A",
                explanation: "These carotenoids are abundant in corn and dark leafy greens"
            },
            {
                id: 47,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which processing method best retains vitamin C in vegetables?",
                options: ["A. Boiling", "B. Steaming", "C. Deep frying", "D. Sun drying"],
                correct: "B",
                explanation: "Steaming minimizes vitamin C loss compared to other cooking methods"
            },
            {
                id: 48,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Goitrogens, which can affect thyroid function, are found in",
                options: ["A. Solanaceous vegetables", "B. Cruciferous vegetables", "C. Cucurbitaceous vegetables", "D. Leguminous vegetables"],
                correct: "B",
                explanation: "Cruciferous vegetables contain compounds that can interfere with iodine uptake"
            },
            {
                id: 49,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "The recommended daily intake of vegetables for adults is",
                options: ["A. 200-300g", "B. 300-400g", "C. 400-500g", "D. 500-600g"],
                correct: "C",
                explanation: "WHO recommends 400-500g of fruits and vegetables daily"
            },
            {
                id: 50,
                unit: "Nutrition and Health Benefits of Vegetables",
                question: "Which vegetable has the highest water content?",
                options: ["A. Cucumber", "B. Lettuce", "C. Celery", "D. Radish"],
                correct: "A",
                explanation: "Cucumber contains about 95-96% water"
            },
            // Post-Harvest Technology (51-80)
            {
                id: 51,
                unit: "Post-Harvest Technology and Storage",
                question: "The optimum storage temperature for potatoes is",
                options: ["A. 0-2°C", "B. 4-6°C", "C. 8-10°C", "D. 12-15°C"],
                correct: "B",
                explanation: "4-6°C prevents sprouting while avoiding cold-induced sweetening"
            },
            {
                id: 52,
                unit: "Post-Harvest Technology and Storage",
                question: "Controlled atmosphere storage primarily controls",
                options: ["A. Temperature only", "B. Humidity only", "C. O2 and CO2 levels", "D. Light exposure"],
                correct: "C",
                explanation: "CA storage manipulates oxygen and carbon dioxide concentrations"
            },
            {
                id: 53,
                unit: "Post-Harvest Technology and Storage",
                question: "Ethylene production is highest in",
                options: ["A. Leafy vegetables", "B. Root vegetables", "C. Climacteric fruits", "D. Non-climacteric fruits"],
                correct: "C",
                explanation: "Climacteric fruits like tomatoes produce high levels of ethylene"
            },
            {
                id: 54,
                unit: "Post-Harvest Technology and Storage",
                question: "Pre-cooling is most important for",
                options: ["A. Onions", "B. Potatoes", "C. Leafy vegetables", "D. Garlic"],
                correct: "C",
                explanation: "Leafy vegetables have high respiration rates and need rapid cooling"
            },
            {
                id: 55,
                unit: "Post-Harvest Technology and Storage",
                question: "The best packaging material for maintaining humidity is",
                options: ["A. Paper", "B. Polyethylene", "C. Jute", "D. Cotton"],
                correct: "B",
                explanation: "Polyethylene films help maintain high humidity around produce"
            },
            {
                id: 56,
                unit: "Post-Harvest Technology and Storage",
                question: "Curing is important for storage life of",
                options: ["A. Tomatoes", "B. Onions", "C. Lettuce", "D. Spinach"],
                correct: "B",
                explanation: "Curing helps onions develop protective outer scales"
            },
            {
                id: 57,
                unit: "Post-Harvest Technology and Storage",
                question: "Respiration rate is highest immediately after",
                options: ["A. Harvest", "B. Washing", "C. Cooling", "D. Packaging"],
                correct: "A",
                explanation: "Harvest stress causes initial spike in respiration rate"
            },
            {
                id: 58,
                unit: "Post-Harvest Technology and Storage",
                question: "Modified atmosphere packaging typically uses",
                options: ["A. High O2, low CO2", "B. Low O2, high CO2", "C. Normal air", "D. Pure nitrogen"],
                correct: "B",
                explanation: "MAP reduces O2 and increases CO2 to slow respiration"
            },
            {
                id: 59,
                unit: "Post-Harvest Technology and Storage",
                question: "The most common cause of post-harvest losses in vegetables is",
                options: ["A. Insect damage", "B. Mechanical damage", "C. Disease", "D. Physiological disorders"],
                correct: "C",
                explanation: "Fungal and bacterial diseases cause major post-harvest losses"
            },
            {
                id: 60,
                unit: "Post-Harvest Technology and Storage",
                question: "Blanching before freezing helps to",
                options: ["A. Remove dirt", "B. Inactivate enzymes", "C. Add flavor", "D. Reduce volume"],
                correct: "B",
                explanation: "Blanching inactivates enzymes that cause quality deterioration"
            },
            {
                id: 61,
                unit: "Post-Harvest Technology and Storage",
                question: "The shelf life of fresh-cut vegetables can be extended by",
                options: ["A. Adding salt", "B. Antioxidant treatment", "C. Heat treatment", "D. UV radiation"],
                correct: "B",
                explanation: "Antioxidants prevent browning and maintain quality"
            },
            {
                id: 62,
                unit: "Post-Harvest Technology and Storage",
                question: "Hydrocooling is most suitable for",
                options: ["A. Onions", "B. Potatoes", "C. Leafy greens", "D. Garlic"],
                correct: "C",
                explanation: "Hydrocooling is ideal for vegetables that can be wetted"
            },
            {
                id: 63,
                unit: "Post-Harvest Technology and Storage",
                question: "The critical control point in vegetable processing for food safety is",
                options: ["A. Washing", "B. Cutting", "C. Thermal processing", "D. Packaging"],
                correct: "C",
                explanation: "Thermal processing eliminates pathogenic microorganisms"
            },
            {
                id: 64,
                unit: "Post-Harvest Technology and Storage",
                question: "Sprouting in stored potatoes can be prevented by",
                options: ["A. High humidity", "B. Low temperature", "C. Sprout inhibitors", "D. High CO2"],
                correct: "C",
                explanation: "Chemical sprout inhibitors like CIPC prevent sprouting"
            },
            {
                id: 65,
                unit: "Post-Harvest Technology and Storage",
                question: "The water activity level that prevents most bacterial growth is",
                options: ["A. >0.95", "B. 0.85-0.95", "C. 0.75-0.85", "D. <0.75"],
                correct: "D",
                explanation: "Water activity below 0.75 inhibits most bacterial growth"
            },
            {
                id: 66,
                unit: "Post-Harvest Technology and Storage",
                question: "Vacuum cooling is most effective for",
                options: ["A. Dense vegetables", "B. Leafy vegetables", "C. Root vegetables", "D. Fruit vegetables"],
                correct: "B",
                explanation: "Leafy vegetables with high surface area cool rapidly under vacuum"
            },
            {
                id: 67,
                unit: "Post-Harvest Technology and Storage",
                question: "The main advantage of IQF (Individual Quick Freezing) is",
                options: ["A. Lower cost", "B. Better texture", "C. Faster processing", "D. No ice crystal formation"],
                correct: "B",
                explanation: "IQF forms smaller ice crystals, maintaining better texture"
            },
            {
                id: 68,
                unit: "Post-Harvest Technology and Storage",
                question: "Edible coatings on vegetables primarily help in",
                options: ["A. Adding nutrients", "B. Moisture retention", "C. Color enhancement", "D. Flavor improvement"],
                correct: "B",
                explanation: "Edible coatings reduce moisture loss and extend shelf life"
            },
            {
                id: 69,
                unit: "Post-Harvest Technology and Storage",
                question: "The optimal relative humidity for storing most vegetables is",
                options: ["A. 60-70%", "B. 70-80%", "C. 85-95%", "D. 95-100%"],
                correct: "C",
                explanation: "85-95% RH prevents wilting while avoiding condensation"
            },
            {
                id: 70,
                unit: "Post-Harvest Technology and Storage",
                question: "Enzymatic browning in cut vegetables can be prevented by",
                options: ["A. Salt water", "B. Ascorbic acid", "C. Heat treatment", "D. All of the above"],
                correct: "D",
                explanation: "All these methods can prevent or reduce enzymatic browning"
            },
            {
                id: 71,
                unit: "Post-Harvest Technology and Storage",
                question: "The storage life of vegetables is inversely related to",
                options: ["A. Temperature", "B. Humidity", "C. Respiration rate", "D. Package size"],
                correct: "C",
                explanation: "Higher respiration rates lead to shorter storage life"
            },
            {
                id: 72,
                unit: "Post-Harvest Technology and Storage",
                question: "Chlorophyll degradation in green vegetables during storage produces",
                options: ["A. Carotenoids", "B. Anthocyanins", "C. Pheophytin", "D. Lycopene"],
                correct: "C",
                explanation: "Chlorophyll degrades to pheophytin, causing yellowing"
            },
            {
                id: 73,
                unit: "Post-Harvest Technology and Storage",
                question: "The best indicator of vegetable freshness is",
                options: ["A. Color", "B. Firmness", "C. Aroma", "D. All of the above"],
                correct: "D",
                explanation: "Multiple sensory parameters indicate freshness"
            },
            {
                id: 74,
                unit: "Post-Harvest Technology and Storage",
                question: "Calcium chloride dips are used to",
                options: ["A. Clean vegetables", "B. Maintain firmness", "C. Add flavor", "D. Preserve color"],
                correct: "B",
                explanation: "Calcium helps maintain cell wall structure and firmness"
            },
            {
                id: 75,
                unit: "Post-Harvest Technology and Storage",
                question: "The principle behind freeze-drying is",
                options: ["A. Evaporation", "B. Sublimation", "C. Condensation", "D. Crystallization"],
                correct: "B",
                explanation: "Freeze-drying removes ice by sublimation under vacuum"
            },
            {
                id: 76,
                unit: "Post-Harvest Technology and Storage",
                question: "Ozone treatment in vegetable storage is used for",
                options: ["A. Ripening", "B. Color development", "C. Sanitization", "D. Flavor enhancement"],
                correct: "C",
                explanation: "Ozone is a powerful sanitizing agent that kills microorganisms"
            },
            {
                id: 77,
                unit: "Post-Harvest Technology and Storage",
                question: "The critical temperature for chilling injury in tropical vegetables is typically",
                options: ["A. Below 0°C", "B. 0-5°C", "C. 5-10°C", "D. 10-15°C"],
                correct: "C",
                explanation: "Many tropical vegetables suffer chilling injury at 5-10°C"
            },
            {
                id: 78,
                unit: "Post-Harvest Technology and Storage",
                question: "MAP (Modified Atmosphere Packaging) is most beneficial for",
                options: ["A. Dried vegetables", "B. Fresh-cut vegetables", "C. Frozen vegetables", "D. Pickled vegetables"],
                correct: "B",
                explanation: "Fresh-cut vegetables benefit most from controlled atmosphere"
            },
            {
                id: 79,
                unit: "Post-Harvest Technology and Storage",
                question: "The main cause of texture loss in frozen vegetables is",
                options: ["A. Enzyme activity", "B. Ice crystal formation", "C. Oxidation", "D. Dehydration"],
                correct: "B",
                explanation: "Large ice crystals damage cell structure causing texture loss"
            },
            {
                id: 80,
                unit: "Post-Harvest Technology and Storage",
                question: "Smart packaging for vegetables can monitor",
                options: ["A. Temperature", "B. Gas composition", "C. Freshness indicators", "D. All of the above"],
                correct: "D",
                explanation: "Smart packaging can monitor multiple quality parameters"
            },
            // Plant Breeding and Genetics (81-110)
            {
                id: 81,
                unit: "Plant Breeding and Genetics",
                question: "Heterosis is most commonly exploited in",
                options: ["A. Self-pollinated crops", "B. Cross-pollinated crops", "C. Vegetatively propagated crops", "D. Both B and C"],
                correct: "D",
                explanation: "Heterosis is significant in cross-pollinated and vegetatively propagated crops"
            },
            {
                id: 82,
                unit: "Plant Breeding and Genetics",
                question: "Male sterility in vegetables is primarily used for",
                options: ["A. Disease resistance", "B. Hybrid seed production", "C. Quality improvement", "D. Yield increase"],
                correct: "B",
                explanation: "Male sterility eliminates the need for emasculation in hybrid production"
            },
            {
                id: 83,
                unit: "Plant Breeding and Genetics",
                question: "Self-incompatibility is common in",
                options: ["A. Tomato", "B. Chilli", "C. Cabbage", "D. Lettuce"],
                correct: "C",
                explanation: "Brassicas like cabbage exhibit strong self-incompatibility"
            },
            {
                id: 84,
                unit: "Plant Breeding and Genetics",
                question: "Polyploidy breeding is most successful in",
                options: ["A. Tomato", "B. Watermelon", "C. Onion", "D. Carrot"],
                correct: "B",
                explanation: "Triploid watermelons are commercially successful seedless varieties"
            },
            {
                id: 85,
                unit: "Plant Breeding and Genetics",
                question: "The most efficient method for transferring genes between distantly related species is",
                options: ["A. Conventional crossing", "B. Tissue culture", "C. Genetic transformation", "D. Mutation breeding"],
                correct: "C",
                explanation: "Genetic transformation can transfer genes across species barriers"
            },
            {
                id: 86,
                unit: "Plant Breeding and Genetics",
                question: "Somatic hybridization is achieved through",
                options: ["A. Conventional crossing", "B. Protoplast fusion", "C. Tissue culture", "D. Grafting"],
                correct: "B",
                explanation: "Protoplast fusion allows hybridization between incompatible species"
            },
            {
                id: 87,
                unit: "Plant Breeding and Genetics",
                question: "The breeding method most suitable for highly cross-pollinated vegetables is",
                options: ["A. Pure line selection", "B. Mass selection", "C. Pedigree method", "D. Single seed descent"],
                correct: "B",
                explanation: "Mass selection maintains genetic diversity in cross-pollinated crops"
            },
            {
                id: 88,
                unit: "Plant Breeding and Genetics",
                question: "Cytoplasmic male sterility is maternally inherited because",
                options: ["A. Mitochondria are from egg", "B. Chloroplasts are from egg", "C. Both organelles from egg", "D. Nuclear genes control it"],
                correct: "C",
                explanation: "Both mitochondria and chloroplasts are maternally inherited"
            },
            {
                id: 89,
                unit: "Plant Breeding and Genetics",
                question: "Marker-assisted selection is most useful for",
                options: ["A. Quantitative traits", "B. Qualitative traits", "C. Disease resistance", "D. All of the above"],
                correct: "D",
                explanation: "MAS can be applied to various types of traits with appropriate markers"
            },
            {
                id: 90,
                unit: "Plant Breeding and Genetics",
                question: "The genetic basis of parthenocarpy in tomato is controlled by",
                options: ["A. Single gene", "B. Two genes", "C. Multiple genes", "D. Cytoplasmic genes"],
                correct: "C",
                explanation: "Parthenocarpy is typically controlled by multiple genes"
            },
            {
                id: 91,
                unit: "Plant Breeding and Genetics",
                question: "Doubled haploid production is most commonly achieved through",
                options: ["A. Anther culture", "B. Ovule culture", "C. Protoplast culture", "D. Embryo culture"],
                correct: "A",
                explanation: "Anther culture is the most widely used method for DH production"
            },
            {
                id: 92,
                unit: "Plant Breeding and Genetics",
                question: "The phenomenon where F1 performance exceeds better parent is called",
                options: ["A. Heterosis", "B. Heterobeltiosis", "C. Inbreeding depression", "D. Transgressive segregation"],
                correct: "B",
                explanation: "Heterobeltiosis is heterosis measured against the better parent"
            },
            {
                id: 93,
                unit: "Plant Breeding and Genetics",
                question: "Backcross breeding is primarily used for",
                options: ["A. Creating new varieties", "B. Transferring single genes", "C. Hybrid production", "D. Mutation breeding"],
                correct: "B",
                explanation: "Backcrossing efficiently transfers genes while maintaining recipient traits"
            },
            {
                id: 94,
                unit: "Plant Breeding and Genetics",
                question: "The term 'combining ability' refers to",
                options: ["A. Disease resistance", "B. Yield potential", "C. Hybrid performance", "D. Environmental adaptation"],
                correct: "C",
                explanation: "Combining ability measures the performance of lines in hybrid combinations"
            },
            {
                id: 95,
                unit: "Plant Breeding and Genetics",
                question: "Wide hybridization barriers can be overcome by",
                options: ["A. Embryo rescue", "B. Hormone treatment", "C. Irradiation", "D. All of the above"],
                correct: "D",
                explanation: "Multiple techniques can help overcome hybridization barriers"
            },
            {
                id: 96,
                unit: "Plant Breeding and Genetics",
                question: "The breeding objective for processing vegetables emphasizes",
                options: ["A. Fresh market appeal", "B. Uniform maturity", "C. Large size", "D. High water content"],
                correct: "B",
                explanation: "Processing requires uniform maturity for mechanical harvesting"
            },
            {
                id: 97,
                unit: "Plant Breeding and Genetics",
                question: "QTL mapping is most useful for",
                options: ["A. Simple traits", "B. Complex quantitative traits", "C. Disease resistance", "D. Color traits"],
                correct: "B",
                explanation: "QTL mapping helps understand the genetic basis of complex traits"
            },
            {
                id: 98,
                unit: "Plant Breeding and Genetics",
                question: "The most common type of gene action in quantitative traits is",
                options: ["A. Additive", "B. Dominance", "C. Epistasis", "D. Pleiotropy"],
                correct: "A",
                explanation: "Additive gene effects are most important in quantitative inheritance"
            },
            {
                id: 99,
                unit: "Plant Breeding and Genetics",
                question: "Apomixis in vegetables would be most valuable for",
                options: ["A. Creating varieties", "B. Fixing heterosis", "C. Inducing mutations", "D. Breaking dormancy"],
                correct: "B",
                explanation: "Apomixis would allow fixation of hybrid vigor without segregation"
            },
            {
                id: 100,
                unit: "Plant Breeding and Genetics",
                question: "The breeding method suitable for both self and cross-pollinated crops is",
                options: ["A. Pedigree method", "B. Bulk population method", "C. Single seed descent", "D. Mass selection"],
                correct: "C",
                explanation: "SSD can be applied to both mating systems effectively"
            },
            {
                id: 101,
                unit: "Plant Breeding and Genetics",
                question: "Transformation efficiency in vegetables is highest using",
                options: ["A. Gene gun", "B. Agrobacterium", "C. Electroporation", "D. Microinjection"],
                correct: "B",
                explanation: "Agrobacterium-mediated transformation is most efficient for many vegetables"
            },
            {
                id: 102,
                unit: "Plant Breeding and Genetics",
                question: "The concept of general combining ability is associated with",
                options: ["A. Additive gene effects", "B. Dominance effects", "C. Epistatic effects", "D. Maternal effects"],
                correct: "A",
                explanation: "GCA reflects additive gene effects in hybrid performance"
            },
            {
                id: 103,
                unit: "Plant Breeding and Genetics",
                question: "Somaclonal variation is most commonly observed in",
                options: ["A. Seed propagation", "B. Vegetative propagation", "C. Tissue culture", "D. Grafting"],
                correct: "C",
                explanation: "Tissue culture conditions often induce somaclonal variation"
            },
            {
                id: 104,
                unit: "Plant Breeding and Genetics",
                question: "The most efficient population size for genetic drift studies is",
                options: ["A. Very small", "B. Small", "C. Large", "D. Very large"],
                correct: "A",
                explanation: "Genetic drift effects are most pronounced in small populations"
            },
            {
                id: 105,
                unit: "Plant Breeding and Genetics",
                question: "Prebreeding activities primarily involve",
                options: ["A. Elite line development", "B. Germplasm evaluation", "C. Variety release", "D. Seed production"],
                correct: "B",
                explanation: "Prebreeding focuses on evaluating and utilizing germplasm resources"
            },
            {
                id: 106,
                unit: "Plant Breeding and Genetics",
                question: "The genetic diversity in vegetables is best conserved through",
                options: ["A. Seed banks", "B. Field gene banks", "C. In-vitro conservation", "D. All of the above"],
                correct: "D",
                explanation: "Multiple conservation methods ensure genetic diversity preservation"
            },
            {
                id: 107,
                unit: "Plant Breeding and Genetics",
                question: "Reciprocal crossing is used to detect",
                options: ["A. Gene linkage", "B. Maternal effects", "C. Epistasis", "D. Pleiotropy"],
                correct: "B",
                explanation: "Reciprocal crosses reveal maternal or cytoplasmic inheritance"
            },
            {
                id: 108,
                unit: "Plant Breeding and Genetics",
                question: "The most critical stage for selection in vegetable breeding is",
                options: ["A. F1 generation", "B. F2 generation", "C. Advanced generations", "D. All equally important"],
                correct: "B",
                explanation: "F2 shows maximum segregation for selection of superior types"
            },
            {
                id: 109,
                unit: "Plant Breeding and Genetics",
                question: "Genomic selection is most effective when",
                options: ["A. Heritability is low", "B. Traits are complex", "C. Generation time is long", "D. All of the above"],
                correct: "D",
                explanation: "Genomic selection is particularly valuable for these challenging scenarios"
            },
            {
                id: 110,
                unit: "Plant Breeding and Genetics",
                question: "The success of participatory plant breeding depends on",
                options: ["A. Farmer involvement", "B. Local adaptation", "C. Traditional knowledge", "D. All of the above"],
                correct: "D",
                explanation: "Participatory breeding integrates all these elements for success"
            },
            // Crop Physiology and Agronomy (111-150)
            {
                id: 111,
                unit: "Crop Physiology and Agronomy",
                question: "The critical period for water stress in most vegetables is during",
                options: ["A. Germination", "B. Flowering", "C. Fruit development", "D. Maturity"],
                correct: "B",
                explanation: "Flowering stage is most sensitive to water stress in vegetables"
            },
            {
                id: 112,
                unit: "Crop Physiology and Agronomy",
                question: "Photoperiodism in vegetables is primarily controlled by",
                options: ["A. Blue light", "B. Red light", "C. Far-red light", "D. Red/far-red ratio"],
                correct: "D",
                explanation: "The red to far-red light ratio is crucial for photoperiodic responses"
            },
            {
                id: 113,
                unit: "Crop Physiology and Agronomy",
                question: "The optimum soil pH for most vegetables is",
                options: ["A. 5.0-5.5", "B. 6.0-7.0", "C. 7.0-7.5", "D. 7.5-8.0"],
                correct: "B",
                explanation: "Most vegetables grow best in slightly acidic to neutral pH"
            },
            {
                id: 114,
                unit: "Crop Physiology and Agronomy",
                question: "Nitrogen fixation in leguminous vegetables occurs in",
                options: ["A. Leaves", "B. Stems", "C. Root nodules", "D. Seeds"],
                correct: "C",
                explanation: "Rhizobia bacteria in root nodules fix atmospheric nitrogen"
            },
            {
                id: 115,
                unit: "Crop Physiology and Agronomy",
                question: "The C4 pathway is found in",
                options: ["A. Tomato", "B. Potato", "C. Sweet corn", "D. Cabbage"],
                correct: "C",
                explanation: "Corn (maize) is a C4 plant with efficient photosynthesis"
            },
            {
                id: 116,
                unit: "Crop Physiology and Agronomy",
                question: "Stomatal closure during water stress is triggered by",
                options: ["A. Gibberellins", "B. Cytokinins", "C. Abscisic acid", "D. Auxins"],
                correct: "C",
                explanation: "ABA is the primary hormone controlling stomatal closure during drought"
            },
            {
                id: 117,
                unit: "Crop Physiology and Agronomy",
                question: "The most efficient irrigation method for water conservation is",
                options: ["A. Flood irrigation", "B. Sprinkler irrigation", "C. Drip irrigation", "D. Furrow irrigation"],
                correct: "C",
                explanation: "Drip irrigation provides precise water application with minimal losses"
            },
            {
                id: 118,
                unit: "Crop Physiology and Agronomy",
                question: "Bolting in leafy vegetables is primarily induced by",
                options: ["A. High temperature", "B. Long days", "C. Water stress", "D. All of the above"],
                correct: "D",
                explanation: "Multiple environmental factors can trigger premature bolting"
            },
            {
                id: 119,
                unit: "Crop Physiology and Agronomy",
                question: "The primary function of calcium in plant cells is",
                options: ["A. Enzyme activation", "B. Cell wall structure", "C. Osmotic regulation", "D. Protein synthesis"],
                correct: "B",
                explanation: "Calcium is essential for cell wall stability and structure"
            },
            {
                id: 120,
                unit: "Crop Physiology and Agronomy",
                question: "Potassium deficiency in vegetables typically causes",
                options: ["A. Chlorosis", "B. Necrosis", "C. Marginal leaf burn", "D. Stunted growth"],
                correct: "C",
                explanation: "K deficiency characteristically causes marginal leaf burn or scorch"
            },
            {
                id: 121,
                unit: "Crop Physiology and Agronomy",
                question: "The best indicator of plant water status is",
                options: ["A. Soil moisture", "B. Leaf water potential", "C. Transpiration rate", "D. Stomatal conductance"],
                correct: "B",
                explanation: "Leaf water potential directly reflects plant water status"
            },
            {
                id: 122,
                unit: "Crop Physiology and Agronomy",
                question: "Vernalization requirement is satisfied by exposure to",
                options: ["A. High temperature", "B. Low temperature", "C. Long days", "D. Short days"],
                correct: "B",
                explanation: "Vernalization requires exposure to cold temperatures"
            },
            {
                id: 123,
                unit: "Crop Physiology and Agronomy",
                question: "The most mobile nutrient in plants is",
                options: ["A. Calcium", "B. Iron", "C. Nitrogen", "D. Boron"],
                correct: "C",
                explanation: "Nitrogen is highly mobile and translocates readily in plants"
            },
            {
                id: 124,
                unit: "Crop Physiology and Agronomy",
                question: "Fruit set in tomatoes is optimal at temperatures of",
                options: ["A. 15-20°C", "B. 20-25°C", "C. 25-30°C", "D. 30-35°C"],
                correct: "B",
                explanation: "Tomato fruit set is best in moderate temperature range"
            },
            {
                id: 125,
                unit: "Crop Physiology and Agronomy",
                question: "The phenomenon of CAM photosynthesis is found in",
                options: ["A. Most vegetables", "B. Leafy vegetables", "C. Some succulents", "D. Root vegetables"],
                correct: "C",
                explanation: "CAM photosynthesis occurs in water-storing succulent plants"
            },
            {
                id: 126,
                unit: "Crop Physiology and Agronomy",
                question: "Mulching primarily helps in",
                options: ["A. Weed control", "B. Moisture conservation", "C. Temperature control", "D. All of the above"],
                correct: "D",
                explanation: "Mulching provides multiple benefits for crop growth"
            },
            {
                id: 127,
                unit: "Crop Physiology and Agronomy",
                question: "The critical nitrogen concentration in most vegetables is around",
                options: ["A. 1-2%", "B. 3-4%", "C. 5-6%", "D. 7-8%"],
                correct: "B",
                explanation: "Most vegetables maintain 3-4% nitrogen in their tissues"
            },
            {
                id: 128,
                unit: "Crop Physiology and Agronomy",
                question: "Phosphorus uptake is maximum at soil pH of",
                options: ["A. 5.0-5.5", "B. 6.0-7.0", "C. 7.0-7.5", "D. 7.5-8.0"],
                correct: "B",
                explanation: "P availability is highest in slightly acidic to neutral soils"
            },
            {
                id: 129,
                unit: "Crop Physiology and Agronomy",
                question: "The role of boron in plants is primarily in",
                options: ["A. Photosynthesis", "B. Cell wall formation", "C. Enzyme activation", "D. Protein synthesis"],
                correct: "B",
                explanation: "Boron is essential for cell wall synthesis and structure"
            },
            {
                id: 130,
                unit: "Crop Physiology and Agronomy",
                question: "Water use efficiency can be improved by",
                options: ["A. Deficit irrigation", "B. Mulching", "C. Proper timing", "D. All of the above"],
                correct: "D",
                explanation: "Multiple strategies can enhance water use efficiency"
            },
            {
                id: 131,
                unit: "Crop Physiology and Agronomy",
                question: "The primary site of nitrate reduction in plants is",
                options: ["A. Roots", "B. Leaves", "C. Stems", "D. Both A and B"],
                correct: "D",
                explanation: "Nitrate reduction occurs in both roots and leaves"
            },
            {
                id: 132,
                unit: "Crop Physiology and Agronomy",
                question: "Chlorophyll synthesis requires",
                options: ["A. Iron", "B. Magnesium", "C. Light", "D. All of the above"],
                correct: "D",
                explanation: "All these factors are necessary for chlorophyll synthesis"
            },
            {
                id: 133,
                unit: "Crop Physiology and Agronomy",
                question: "The best time for foliar fertilization is",
                options: ["A. Morning", "B. Midday", "C. Evening", "D. Night"],
                correct: "C",
                explanation: "Evening application reduces evaporation and improves uptake"
            },
            {
                id: 134,
                unit: "Crop Physiology and Agronomy",
                question: "Salt stress in vegetables primarily affects",
                options: ["A. Water uptake", "B. Nutrient uptake", "C. Photosynthesis", "D. All of the above"],
                correct: "D",
                explanation: "Salt stress impacts multiple physiological processes"
            },
            {
                id: 135,
                unit: "Crop Physiology and Agronomy",
                question: "The concept of critical nutrient concentration refers to",
                options: ["A. Minimum for growth", "B. Maximum tolerance", "C. Optimal for yield", "D. Deficiency threshold"],
                correct: "A",
                explanation: "Critical concentration is the minimum needed for normal growth"
            },
            {
                id: 136,
                unit: "Crop Physiology and Agronomy",
                question: "Transpiration rate is highest during",
                options: ["A. Early morning", "B. Midday", "C. Evening", "D. Night"],
                correct: "B",
                explanation: "Midday conditions maximize transpiration rates"
            },
            {
                id: 137,
                unit: "Crop Physiology and Agronomy",
                question: "The primary function of zinc in plants is in",
                options: ["A. Chlorophyll synthesis", "B. Enzyme systems", "C. Cell division", "D. Water transport"],
                correct: "B",
                explanation: "Zinc is a cofactor in many enzyme systems"
            },
            {
                id: 138,
                unit: "Crop Physiology and Agronomy",
                question: "Crop rotation helps in",
                options: ["A. Pest management", "B. Nutrient cycling", "C. Soil health", "D. All of the above"],
                correct: "D",
                explanation: "Crop rotation provides multiple agronomic benefits"
            },
            {
                id: 139,
                unit: "Crop Physiology and Agronomy",
                question: "The most limiting factor for photosynthesis at high light intensity is",
                options: ["A. Light", "B. CO2", "C. Temperature", "D. Water"],
                correct: "B",
                explanation: "CO2 becomes limiting when light is abundant"
            },
            {
                id: 140,
                unit: "Crop Physiology and Agronomy",
                question: "Silicon application in vegetables helps in",
                options: ["A. Disease resistance", "B. Lodging resistance", "C. Stress tolerance", "D. All of the above"],
                correct: "D",
                explanation: "Silicon provides multiple benefits for plant health"
            },
            {
                id: 141,
                unit: "Crop Physiology and Agronomy",
                question: "The optimum EC for most vegetable crops in hydroponics is",
                options: ["A. 0.5-1.0 dS/m", "B. 1.5-2.5 dS/m", "C. 3.0-4.0 dS/m", "D. 4.5-5.5 dS/m"],
                correct: "B",
                explanation: "Most vegetables grow well at moderate EC levels"
            },
            {
                id: 142,
                unit: "Crop Physiology and Agronomy",
                question: "Mycorrhizal associations help plants in",
                options: ["A. Phosphorus uptake", "B. Water absorption", "C. Disease resistance", "D. All of the above"],
                correct: "D",
                explanation: "Mycorrhizae provide multiple benefits to plants"
            },
            {
                id: 143,
                unit: "Crop Physiology and Agronomy",
                question: "The primary carbon source for root respiration is",
                options: ["A. Soil organic matter", "B. Root reserves", "C. Leaf photosynthates", "D. Symbiotic bacteria"],
                correct: "C",
                explanation: "Roots depend on photosynthates from leaves for respiration"
            },
            {
                id: 144,
                unit: "Crop Physiology and Agronomy",
                question: "Hardening of seedlings involves exposure to",
                options: ["A. Low temperature", "B. Reduced water", "C. High light", "D. All of the above"],
                correct: "D",
                explanation: "Hardening involves multiple stress factors for acclimatization"
            },
            {
                id: 145,
                unit: "Crop Physiology and Agronomy",
                question: "The most efficient method of phosphorus application is",
                options: ["A. Broadcasting", "B. Band placement", "C. Foliar spray", "D. Fertigation"],
                correct: "B",
                explanation: "Band placement provides targeted P supply near roots"
            },
            {
                id: 146,
                unit: "Crop Physiology and Agronomy",
                question: "Gibberellic acid application in vegetables is used for",
                options: ["A. Fruit setting", "B. Stem elongation", "C. Breaking dormancy", "D. All of the above"],
                correct: "D",
                explanation: "GA has multiple applications in vegetable production"
            },
            {
                id: 147,
                unit: "Crop Physiology and Agronomy",
                question: "The critical soil temperature for root growth in most vegetables is",
                options: ["A. 5-10°C", "B. 10-15°C", "C. 15-20°C", "D. 20-25°C"],
                correct: "C",
                explanation: "Root growth is optimal in moderate soil temperatures"
            },
            {
                id: 148,
                unit: "Crop Physiology and Agronomy",
                question: "Companion planting works through",
                options: ["A. Nutrient sharing", "B. Pest deterrence", "C. Improved pollination", "D. All of the above"],
                correct: "D",
                explanation: "Companion planting provides multiple beneficial interactions"
            },
            {
                id: 149,
                unit: "Crop Physiology and Agronomy",
                question: "The best indicator of soil nitrogen availability is",
                options: ["A. Total nitrogen", "B. Nitrate content", "C. Ammonium content", "D. Mineralizable nitrogen"],
                correct: "D",
                explanation: "Mineralizable N indicates the soil's capacity to supply N"
            },
            {
                id: 150,
                unit: "Crop Physiology and Agronomy",
                question: "Precision agriculture in vegetables primarily uses",
                options: ["A. GPS technology", "B. Sensors", "C. Variable rate application", "D. All of the above"],
                correct: "D",
                explanation: "Precision agriculture integrates multiple technologies for optimization"
            }
        ];

        return additionalQuestions;
    }

    initializeApp() {
        this.bindEvents();
        this.showWelcomeScreen();
    }

    bindEvents() {
        // Welcome screen
        document.getElementById('start-btn').addEventListener('click', () => this.startTest());

        // Quiz navigation
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('finish-btn').addEventListener('click', () => this.finishTest());

        // Option buttons
        ['A', 'B', 'C', 'D'].forEach(option => {
            document.getElementById(`option-${option}`).addEventListener('click', () => this.selectAnswer(option));
        });

        // Sidebar toggle
        document.getElementById('sidebar-toggle').addEventListener('click', () => this.toggleSidebar());

        // Results screen
        document.getElementById('review-answers-btn').addEventListener('click', () => this.startReview());
        document.getElementById('restart-test-btn').addEventListener('click', () => this.restartTest());

        // Review screen
        document.getElementById('review-prev-btn').addEventListener('click', () => this.reviewPrevious());
        document.getElementById('review-next-btn').addEventListener('click', () => this.reviewNext());
        document.getElementById('back-to-results-btn').addEventListener('click', () => this.showResults());
    }

    showWelcomeScreen() {
        this.showScreen('welcome');
    }

    startTest() {
        this.startTime = new Date();
        this.currentQuestionIndex = 0;
        this.isQuestionAnswered = false;
        this.loadQuestion();
        this.updateProgress();
        this.updateSidebar();
        this.showScreen('quiz');
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question display
        document.getElementById('question-number').textContent = this.currentQuestionIndex + 1;
        document.getElementById('question-display').textContent = question.question;
        document.getElementById('current-unit').textContent = question.unit;

        // Update options
        ['A', 'B', 'C', 'D'].forEach(option => {
            const optionText = question.options.find(opt => opt.startsWith(option + '.'));
            document.getElementById(`option-text-${option}`).textContent = optionText ? optionText.substring(3) : '';
            
            // Reset option states
            const optionBtn = document.getElementById(`option-${option}`);
            optionBtn.classList.remove('correct', 'incorrect', 'disabled');
            optionBtn.disabled = false;
            
            // Clear feedback icons
            document.getElementById(`feedback-${option}`).textContent = '';
        });

        // Hide explanation initially
        const explanationContainer = document.getElementById('explanation-container');
        explanationContainer.classList.remove('show');

        // Check if already answered
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        if (userAnswer !== null) {
            this.showAnswer(userAnswer);
            this.isQuestionAnswered = true;
        } else {
            this.isQuestionAnswered = false;
        }

        this.updateNavigation();
    }

    selectAnswer(selectedOption) {
        if (this.isQuestionAnswered) return;

        const question = this.questions[this.currentQuestionIndex];
        const correctOption = question.correct;
        
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = selectedOption;
        this.answeredQuestions.add(this.currentQuestionIndex);
        this.isQuestionAnswered = true;

        this.showAnswer(selectedOption);
        this.updateProgress();
        this.updateSidebar();
        this.updateNavigation();
    }

    showAnswer(selectedOption) {
        const question = this.questions[this.currentQuestionIndex];
        const correctOption = question.correct;

        // Show correct answer
        const correctBtn = document.getElementById(`option-${correctOption}`);
        correctBtn.classList.add('correct');
        correctBtn.disabled = true;
        document.getElementById(`feedback-${correctOption}`).textContent = '✓';

        // Show incorrect answer if different
        if (selectedOption !== correctOption) {
            const incorrectBtn = document.getElementById(`option-${selectedOption}`);
            incorrectBtn.classList.add('incorrect');
            incorrectBtn.disabled = true;
            document.getElementById(`feedback-${selectedOption}`).textContent = '✗';
        }

        // Disable all options
        ['A', 'B', 'C', 'D'].forEach(option => {
            const btn = document.getElementById(`option-${option}`);
            btn.classList.add('disabled');
            btn.disabled = true;
        });

        // Show explanation
        document.getElementById('explanation-text').textContent = question.explanation;
        document.getElementById('explanation-container').classList.add('show');
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-percent').textContent = Math.round(progress);
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        
        // Update score
        const correctAnswers = this.getCorrectAnswersCount();
        document.getElementById('current-score').textContent = correctAnswers;
        document.getElementById('current-percentage').textContent = Math.round((correctAnswers / this.questions.length) * 100);
        
        // Update remaining questions
        const remaining = this.questions.length - this.answeredQuestions.size;
        document.getElementById('remaining-questions').textContent = `${remaining} questions remaining`;
    }

    updateNavigation() {
        document.getElementById('prev-btn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('next-btn').disabled = !this.isQuestionAnswered && this.currentQuestionIndex === this.questions.length - 1;
        
        // Enable next button if question is answered or if we can move forward
        if (this.isQuestionAnswered || this.currentQuestionIndex < this.questions.length - 1) {
            document.getElementById('next-btn').disabled = false;
        }
    }

    updateSidebar() {
        const units = this.getUnitProgress();
        const container = document.getElementById('units-progress');
        container.innerHTML = '';

        units.forEach(unit => {
            const unitDiv = document.createElement('div');
            unitDiv.className = 'unit-progress-item';
            
            const percentage = unit.total > 0 ? Math.round((unit.answered / unit.total) * 100) : 0;
            
            unitDiv.innerHTML = `
                <div class="unit-name">${unit.name}</div>
                <div class="unit-stats">
                    <div class="unit-progress-count">${unit.answered}/${unit.total}</div>
                    <div class="unit-percentage">${percentage}%</div>
                </div>
            `;
            container.appendChild(unitDiv);
        });
    }

    getUnitProgress() {
        const units = {};
        
        this.questions.forEach((question, index) => {
            if (!units[question.unit]) {
                units[question.unit] = { name: question.unit, total: 0, answered: 0 };
            }
            units[question.unit].total++;
            if (this.answeredQuestions.has(index)) {
                units[question.unit].answered++;
            }
        });

        return Object.values(units);
    }

    toggleSidebar() {
        const sidebarContent = document.getElementById('sidebar-content');
        sidebarContent.classList.toggle('show');
    }

    finishTest() {
        this.endTime = new Date();
        this.showResults();
    }

    showResults() {
        const stats = this.calculateStats();
        
        // Update overall score
        document.getElementById('final-score').textContent = stats.correct;
        document.getElementById('final-percentage').textContent = stats.percentage;
        
        // Update detailed stats
        document.getElementById('correct-count').textContent = stats.correct;
        document.getElementById('incorrect-count').textContent = stats.incorrect;
        document.getElementById('unanswered-count').textContent = stats.unanswered;
        
        // Update performance analysis
        const performance = this.getPerformanceAnalysis(stats.percentage);
        document.getElementById('performance-level').textContent = performance.level;
        document.getElementById('performance-description').textContent = performance.description;
        
        // Update unit-wise performance
        this.updateUnitPerformance();
        
        this.showScreen('results');
    }

    calculateStats() {
        const correct = this.getCorrectAnswersCount();
        const total = this.questions.length;
        const answered = this.answeredQuestions.size;
        const incorrect = answered - correct;
        const unanswered = total - answered;
        const percentage = Math.round((correct / total) * 100);
        
        return { correct, incorrect, unanswered, total, percentage };
    }

    getCorrectAnswersCount() {
        return this.userAnswers.filter((answer, index) => 
            answer !== null && answer === this.questions[index].correct
        ).length;
    }

    getPerformanceAnalysis(percentage) {
        if (percentage >= 90) {
            return {
                level: 'Excellent',
                description: 'Outstanding performance! You have excellent knowledge of vegetable science concepts.'
            };
        } else if (percentage >= 75) {
            return {
                level: 'Very Good',
                description: 'Great job! You have a strong understanding of most vegetable science topics.'
            };
        } else if (percentage >= 60) {
            return {
                level: 'Good',
                description: 'Good performance! You have a solid grasp of vegetable science fundamentals.'
            };
        } else if (percentage >= 40) {
            return {
                level: 'Fair',
                description: 'Fair performance. Focus on reviewing key concepts and practice more questions.'
            };
        } else {
            return {
                level: 'Needs Improvement',
                description: 'More study is needed. Review all units systematically and practice regularly.'
            };
        }
    }

    updateUnitPerformance() {
        const units = this.getUnitProgress();
        const container = document.getElementById('unit-performance-list');
        container.innerHTML = '';

        units.forEach(unit => {
            const correctInUnit = this.questions
                .map((q, index) => ({ question: q, index, answered: this.answeredQuestions.has(index) }))
                .filter(item => item.question.unit === unit.name && item.answered)
                .filter(item => this.userAnswers[item.index] === item.question.correct)
                .length;
            
            const percentage = unit.total > 0 ? Math.round((correctInUnit / unit.total) * 100) : 0;
            
            const unitDiv = document.createElement('div');
            unitDiv.className = 'performance-item';
            unitDiv.innerHTML = `
                <div class="performance-unit-name">${unit.name}</div>
                <div class="performance-score">${correctInUnit}/${unit.total} (${percentage}%)</div>
            `;
            container.appendChild(unitDiv);
        });
    }

    startReview() {
        this.reviewIndex = 0;
        this.loadReviewQuestion();
        this.showScreen('review');
    }

    loadReviewQuestion() {
        const question = this.questions[this.reviewIndex];
        const userAnswer = this.userAnswers[this.reviewIndex];
        const correctAnswer = question.correct;
        
        // Update review header
        document.getElementById('review-current').textContent = this.reviewIndex + 1;
        document.getElementById('review-q-number').textContent = this.reviewIndex + 1;
        document.getElementById('review-unit').textContent = question.unit;
        document.getElementById('review-question-text').textContent = question.question;
        
        // Update answer status
        const statusElement = document.getElementById('answer-status');
        if (userAnswer === null) {
            statusElement.className = 'answer-status unanswered';
            statusElement.innerHTML = '<span class="status-icon">⏭️</span><span class="status-text">Unanswered</span>';
        } else if (userAnswer === correctAnswer) {
            statusElement.className = 'answer-status correct';
            statusElement.innerHTML = '<span class="status-icon">✅</span><span class="status-text">Correct</span>';
        } else {
            statusElement.className = 'answer-status incorrect';
            statusElement.innerHTML = '<span class="status-icon">❌</span><span class="status-text">Incorrect</span>';
        }
        
        // Update options
        ['A', 'B', 'C', 'D'].forEach(option => {
            const optionElement = document.getElementById(`review-option-${option}`);
            const optionText = question.options.find(opt => opt.startsWith(option + '.'));
            document.getElementById(`review-text-${option}`).textContent = optionText ? optionText.substring(3) : '';
            
            // Reset classes
            optionElement.className = 'review-option';
            
            // Clear indicators
            const indicators = optionElement.querySelector('.option-indicators');
            indicators.innerHTML = '';
            
            // Add appropriate styling and indicators
            if (option === correctAnswer) {
                optionElement.classList.add('correct-answer');
                const indicator = document.createElement('span');
                indicator.className = 'indicator correct';
                indicator.textContent = 'Correct';
                indicators.appendChild(indicator);
            }
            
            if (userAnswer === option) {
                optionElement.classList.add('user-selected');
                const indicator = document.createElement('span');
                indicator.className = 'indicator your-answer';
                indicator.textContent = 'Your Answer';
                indicators.appendChild(indicator);
                
                if (userAnswer !== correctAnswer) {
                    optionElement.classList.add('user-wrong');
                }
            }
        });
        
        // Update explanation
        document.getElementById('review-explanation-text').textContent = question.explanation;
        
        // Update navigation
        document.getElementById('review-prev-btn').disabled = this.reviewIndex === 0;
        document.getElementById('review-next-btn').disabled = this.reviewIndex === this.questions.length - 1;
    }

    reviewPrevious() {
        if (this.reviewIndex > 0) {
            this.reviewIndex--;
            this.loadReviewQuestion();
        }
    }

    reviewNext() {
        if (this.reviewIndex < this.questions.length - 1) {
            this.reviewIndex++;
            this.loadReviewQuestion();
        }
    }

    restartTest() {
        // Reset all state
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(150).fill(null);
        this.answeredQuestions = new Set();
        this.startTime = null;
        this.endTime = null;
        this.isQuestionAnswered = false;
        this.reviewIndex = 0;
        
        this.showWelcomeScreen();
    }

    showScreen(screenName) {
        const screens = ['welcome', 'quiz', 'results', 'review'];
        screens.forEach(screen => {
            const element = document.getElementById(`${screen}-screen`);
            if (element) {
                element.classList.toggle('hidden', screen !== screenName);
            }
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ASRBTestApp();
});