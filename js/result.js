
const diseaseDatabase = {
  diseases: [
    {
      id: 1,
      name: "Type 2 Diabetes",
      symptoms: ["fatigue", "frequent urination", "unexplained weight loss", "loss of appetite"],
      dietPlan: {
        recommended: ["Whole grains", "Leafy greens", "Lean proteins", "Nuts and seeds", "Low-glycemic fruits", "Fatty fish"],
        avoid: ["Sugary drinks", "White bread", "Processed foods", "Trans fats", "High-sugar fruits", "Fried foods"],
        mealTiming: "Eat small, frequent meals every 3-4 hours"
      },
      lifestyle: ["30 minutes daily exercise", "Monitor blood sugar regularly", "Maintain healthy weight", "Stress management", "Adequate sleep (7-8 hours)"]
    },
    {
      id: 2,
      name: "Hypertension",
      symptoms: ["chest pain", "shortness of breath", "irregular heartbeat", "fatigue"],
      dietPlan: {
        recommended: ["Potassium-rich foods", "Whole grains", "Low-fat dairy", "Fruits and vegetables", "Lean meats", "Garlic"],
        avoid: ["High sodium foods", "Processed meats", "Canned soups", "Pickled foods", "Alcohol excess", "Caffeine excess"],
        mealTiming: "DASH diet approach - regular balanced meals"
      },
      lifestyle: ["Regular cardio exercise", "Weight management", "Limit alcohol", "Quit smoking", "Stress reduction", "Regular BP monitoring"]
    },
    {
      id: 3,
      name: "Chronic Bronchitis",
      symptoms: ["productive cough", "wheezing", "difficulty breathing", "chest pain", "fatigue"],
      dietPlan: {
        recommended: ["Omega-3 rich foods", "Citrus fruits", "Green tea", "Ginger", "Turmeric", "Warm fluids"],
        avoid: ["Dairy products", "Fried foods", "Processed foods", "Cold beverages", "Excessive salt", "Sulfite-containing foods"],
        mealTiming: "Small frequent meals to avoid breathlessness"
      },
      lifestyle: ["Quit smoking immediately", "Breathing exercises", "Avoid air pollutants", "Use humidifier", "Regular moderate exercise", "Flu vaccination"]
    },
    {
      id: 4,
      name: "Heart Disease",
      symptoms: ["chest pain", "shortness of breath", "irregular heartbeat", "swelling in ankles or legs", "fatigue"],
      dietPlan: {
        recommended: ["Omega-3 fatty acids", "Whole grains", "Berries", "Dark chocolate (moderate)", "Nuts", "Olive oil"],
        avoid: ["Trans fats", "Saturated fats", "Excessive red meat", "Processed foods", "High sodium", "Sugar"],
        mealTiming: "Mediterranean diet pattern"
      },
      lifestyle: ["Regular cardio exercise", "Stress management", "No smoking", "Limited alcohol", "Weight control", "Sleep 7-8 hours"]
    },
    {
      id: 5,
      name: "Asthma",
      symptoms: ["wheezing", "difficulty breathing", "chest pain", "persistent cough", "shortness of breath"],
      dietPlan: {
        recommended: ["Vitamin D rich foods", "Magnesium sources", "Fruits high in vitamin C", "Beta-carotene foods", "Selenium-rich foods", "Omega-3s"],
        avoid: ["Sulfites", "Common allergens", "Processed foods", "Excessive dairy", "Gas-producing foods", "Food additives"],
        mealTiming: "Avoid large meals; eat 2-3 hours before bedtime"
      },
      lifestyle: ["Identify triggers", "Regular breathing exercises", "Maintain healthy weight", "Stay hydrated", "Avoid smoke", "Regular exercise"]
    },
    {
      id: 6,
      name: "Irritable Bowel Syndrome",
      symptoms: ["abdominal pain", "diarrhea", "constipation", "nausea", "fatigue"],
      dietPlan: {
        recommended: ["Soluble fiber", "Probiotics", "Peppermint tea", "Lean proteins", "Low-FODMAP foods", "Cooked vegetables"],
        avoid: ["High-FODMAP foods", "Caffeine", "Alcohol", "Spicy foods", "Fatty foods", "Artificial sweeteners"],
        mealTiming: "Small, frequent meals; regular eating schedule"
      },
      lifestyle: ["Stress management", "Regular exercise", "Adequate hydration", "Good sleep hygiene", "Yoga or meditation", "Food diary"]
    },
    {
      id: 7,
      name: "Anemia",
      symptoms: ["fatigue", "shortness of breath", "chest pain", "irregular heartbeat"],
      dietPlan: {
        recommended: ["Iron-rich foods", "Vitamin C sources", "Folate-rich foods", "Vitamin B12 foods", "Lean red meat", "Dark leafy greens"],
        avoid: ["Tea with meals", "Coffee with meals", "Calcium with iron", "Processed foods", "Excessive dairy", "Phytate-rich foods with iron"],
        mealTiming: "Pair iron with vitamin C at meals"
      },
      lifestyle: ["Regular blood tests", "Adequate rest", "Light exercise", "Avoid blood donation", "Manage menstrual health", "Treat underlying causes"]
    },
    {
      id: 8,
      name: "Chronic Kidney Disease",
      symptoms: ["fatigue", "swelling in ankles or legs", "frequent urination", "loss of appetite", "nausea"],
      dietPlan: {
        recommended: ["Low-potassium fruits", "Low-phosphorus foods", "Controlled protein", "Cauliflower", "Bell peppers", "Garlic"],
        avoid: ["High sodium", "High potassium foods", "High phosphorus foods", "Processed meats", "Dark sodas", "Excessive protein"],
        mealTiming: "Regular meals with controlled portions"
      },
      lifestyle: ["Blood pressure control", "Blood sugar management", "Regular monitoring", "Moderate exercise", "No smoking", "Limited alcohol"]
    },
    {
      id: 9,
      name: "Urinary Tract Infection",
      symptoms: ["painful urination", "frequent urination", "blood in urine", "abdominal pain", "fever"],
      dietPlan: {
        recommended: ["Cranberry juice", "Water", "Probiotics", "Vitamin C foods", "Garlic", "Blueberries"],
        avoid: ["Caffeine", "Alcohol", "Spicy foods", "Artificial sweeteners", "Citrus during infection", "Sugar"],
        mealTiming: "Stay hydrated throughout the day"
      },
      lifestyle: ["Proper hygiene", "Urinate frequently", "Cotton underwear", "Avoid tight clothing", "Wipe front to back", "Urinate after intercourse"]
    },
    {
      id: 10,
      name: "Depression",
      symptoms: ["depression", "fatigue", "loss of appetite", "mood swings", "anxiety"],
      dietPlan: {
        recommended: ["Omega-3 fatty acids", "Complex carbohydrates", "Probiotics", "Dark chocolate", "Selenium-rich foods", "B vitamins"],
        avoid: ["Alcohol", "Caffeine excess", "Refined sugars", "Processed foods", "Trans fats", "High-sodium foods"],
        mealTiming: "Regular meal schedule; don't skip breakfast"
      },
      lifestyle: ["Regular exercise", "Sunlight exposure", "Social connections", "Sleep routine", "Mindfulness meditation", "Professional therapy"]
    },
    {
      id: 11,
      name: "Anxiety Disorder",
      symptoms: ["anxiety", "chest pain", "shortness of breath", "irregular heartbeat", "mood swings"],
      dietPlan: {
        recommended: ["Magnesium-rich foods", "Chamomile tea", "Dark leafy greens", "Whole grains", "Probiotic foods", "Turkey"],
        avoid: ["Caffeine", "Alcohol", "Sugar", "Processed foods", "Energy drinks", "Fried foods"],
        mealTiming: "Regular meals to maintain blood sugar"
      },
      lifestyle: ["Deep breathing exercises", "Regular exercise", "Adequate sleep", "Limit screen time", "Yoga or meditation", "Journaling"]
    },
    {
      id: 12,
      name: "COPD",
      symptoms: ["difficulty breathing", "persistent cough", "wheezing", "fatigue", "chest pain", "productive cough"],
      dietPlan: {
        recommended: ["High-calorie nutrient-dense foods", "Protein-rich foods", "Fruits and vegetables", "Whole grains", "Omega-3s", "Small frequent meals"],
        avoid: ["Gas-producing foods", "Excessive salt", "Fried foods", "Carbonated beverages", "Large meals", "Dairy if mucus-producing"],
        mealTiming: "5-6 small meals daily"
      },
      lifestyle: ["Quit smoking", "Pulmonary rehabilitation", "Breathing exercises", "Avoid air pollution", "Stay active", "Vaccination updates"]
    },
    {
      id: 13,
      name: "Gastroesophageal Reflux Disease (GERD)",
      symptoms: ["chest pain", "nausea", "persistent cough", "difficulty breathing", "abdominal pain"],
      dietPlan: {
        recommended: ["Alkaline foods", "Lean proteins", "Complex carbs", "Non-citrus fruits", "Vegetables", "Ginger"],
        avoid: ["Citrus fruits", "Tomatoes", "Spicy foods", "Fatty foods", "Chocolate", "Coffee", "Alcohol"],
        mealTiming: "Small meals; no eating 3 hours before bed"
      },
      lifestyle: ["Elevate bed head", "Lose weight if needed", "Avoid tight clothing", "Don't lie down after eating", "Quit smoking", "Stress management"]
    },
    {
      id: 14,
      name: "Hypothyroidism",
      symptoms: ["fatigue", "unexplained weight loss", "constipation", "depression", "irregular heartbeat"],
      dietPlan: {
        recommended: ["Iodine-rich foods", "Selenium sources", "Zinc-rich foods", "Tyrosine foods", "Iron", "B vitamins"],
        avoid: ["Soy products", "Cruciferous vegetables (raw)", "Gluten (if sensitive)", "Processed foods", "Excess fiber", "Sugar"],
        mealTiming: "Take thyroid medication on empty stomach"
      },
      lifestyle: ["Regular exercise", "Stress management", "Adequate sleep", "Regular medication", "Monitor symptoms", "Regular check-ups"]
    },
    {
      id: 15,
      name: "Fibromyalgia",
      symptoms: ["fatigue", "mood swings", "anxiety", "depression", "chest pain"],
      dietPlan: {
        recommended: ["Anti-inflammatory foods", "Magnesium-rich foods", "Vitamin D sources", "Omega-3s", "Antioxidants", "Whole foods"],
        avoid: ["MSG", "Artificial sweeteners", "Processed foods", "Caffeine", "Nightshade vegetables", "Gluten (if sensitive)"],
        mealTiming: "Regular meal times; avoid skipping meals"
      },
      lifestyle: ["Gentle exercise", "Stress reduction", "Good sleep hygiene", "Pacing activities", "Warm baths", "Massage therapy"]
    },
    {
      id: 16,
      name: "Pneumonia",
      symptoms: ["fever", "productive cough", "chest pain", "difficulty breathing", "fatigue", "night sweats"],
      dietPlan: {
        recommended: ["Protein-rich foods", "Vitamin C foods", "Zinc sources", "Warm fluids", "Probiotics", "Garlic"],
        avoid: ["Cold foods", "Dairy (if mucus-producing)", "Sugar", "Processed foods", "Alcohol", "Caffeine"],
        mealTiming: "Small frequent meals; plenty of fluids"
      },
      lifestyle: ["Complete rest", "Stay hydrated", "Use humidifier", "Deep breathing exercises", "Avoid smoke", "Complete antibiotics"]
    },
    {
      id: 17,
      name: "Liver Disease",
      symptoms: ["fatigue", "nausea", "loss of appetite", "abdominal pain", "swelling in ankles or legs"],
      dietPlan: {
        recommended: ["Lean proteins", "Complex carbohydrates", "Fresh fruits", "Vegetables", "Whole grains", "Low-fat dairy"],
        avoid: ["Alcohol completely", "High sodium", "Raw shellfish", "Processed foods", "Saturated fats", "Added sugars"],
        mealTiming: "Small frequent meals throughout the day"
      },
      lifestyle: ["No alcohol", "Maintain healthy weight", "Exercise regularly", "Avoid toxins", "Safe medication use", "Hepatitis vaccination"]
    },
    {
      id: 18,
      name: "Celiac Disease",
      symptoms: ["diarrhea", "abdominal pain", "fatigue", "unexplained weight loss", "nausea"],
      dietPlan: {
        recommended: ["Gluten-free grains", "Fresh fruits", "Vegetables", "Lean meats", "Fish", "Legumes", "Nuts"],
        avoid: ["Wheat", "Barley", "Rye", "Contaminated oats", "Processed foods with gluten", "Beer"],
        mealTiming: "Regular meals with gluten-free options"
      },
      lifestyle: ["Read food labels", "Avoid cross-contamination", "Join support groups", "Regular monitoring", "Supplement if needed", "Educate family"]
    },
    {
      id: 19,
      name: "Crohn's Disease",
      symptoms: ["abdominal pain", "diarrhea", "fatigue", "unexplained weight loss", "fever", "loss of appetite"],
      dietPlan: {
        recommended: ["Low-fiber foods during flares", "Lean proteins", "Refined grains", "Cooked vegetables", "Probiotics", "Omega-3s"],
        avoid: ["High-fiber foods during flares", "Dairy if lactose intolerant", "Spicy foods", "Fatty foods", "Carbonated drinks", "Alcohol"],
        mealTiming: "Small, frequent meals"
      },
      lifestyle: ["Stress management", "Regular exercise", "No smoking", "Adequate hydration", "Sleep well", "Track triggers"]
    },
    {
      id: 20,
      name: "Lupus",
      symptoms: ["fatigue", "fever", "chest pain", "shortness of breath", "mood swings"],
      dietPlan: {
        recommended: ["Anti-inflammatory foods", "Omega-3 fatty acids", "Calcium-rich foods", "Iron sources", "Whole grains", "Colorful vegetables"],
        avoid: ["Alfalfa", "Garlic supplements", "Echinacea", "Saturated fats", "Salt excess", "Processed foods"],
        mealTiming: "Balanced meals throughout the day"
      },
      lifestyle: ["Sun protection", "Regular gentle exercise", "Stress reduction", "Adequate rest", "No smoking", "Regular check-ups"]
    },
    {
      id: 21,
      name: "Metabolic Syndrome",
      symptoms: ["fatigue", "frequent urination", "chest pain", "shortness of breath"],
      dietPlan: {
        recommended: ["High-fiber foods", "Lean proteins", "Whole grains", "Healthy fats", "Low-glycemic foods", "Plenty of vegetables"],
        avoid: ["Refined sugars", "Trans fats", "Processed foods", "Excessive alcohol", "High-sodium foods", "Sweetened beverages"],
        mealTiming: "Regular meals; avoid late-night eating"
      },
      lifestyle: ["150 minutes weekly exercise", "Weight loss if needed", "Quit smoking", "Stress management", "Regular monitoring", "Adequate sleep"]
    },
    {
      id: 22,
      name: "Tuberculosis",
      symptoms: ["persistent cough", "fever", "night sweats", "unexplained weight loss", "fatigue", "chest pain"],
      dietPlan: {
        recommended: ["High-protein foods", "Vitamin A sources", "Vitamin C foods", "Zinc-rich foods", "Iron sources", "B vitamins"],
        avoid: ["Alcohol", "Tobacco", "Refined sugars", "Excessive caffeine", "Processed foods", "Trans fats"],
        mealTiming: "High-calorie, nutrient-dense meals"
      },
      lifestyle: ["Complete medication course", "Isolation if contagious", "Wear mask", "Good ventilation", "Regular check-ups", "Contact tracing"]
    },
    {
      id: 23,
      name: "Osteoporosis",
      symptoms: ["chest pain", "fatigue", "loss of appetite"],
      dietPlan: {
        recommended: ["Calcium-rich foods", "Vitamin D sources", "Protein", "Magnesium foods", "Vitamin K sources", "Phosphorus"],
        avoid: ["Excessive caffeine", "High sodium", "Alcohol excess", "Soft drinks", "Excessive protein", "Oxalate-rich foods"],
        mealTiming: "Spread calcium intake throughout the day"
      },
      lifestyle: ["Weight-bearing exercise", "Balance training", "Fall prevention", "No smoking", "Limited alcohol", "Bone density testing"]
    },
    {
      id: 24,
      name: "Chronic Fatigue Syndrome",
      symptoms: ["fatigue", "mood swings", "depression", "anxiety", "chest pain"],
      dietPlan: {
        recommended: ["Complex carbohydrates", "Lean proteins", "Omega-3s", "B vitamins", "Magnesium", "Probiotics"],
        avoid: ["Sugar", "Processed foods", "Caffeine", "Alcohol", "Artificial additives", "High-fat meals"],
        mealTiming: "Small, frequent balanced meals"
      },
      lifestyle: ["Pacing activities", "Gentle exercise", "Sleep hygiene", "Stress management", "Cognitive therapy", "Support groups"]
    },
    {
      id: 25,
      name: "Pancreatitis",
      symptoms: ["abdominal pain", "nausea", "fever", "fatigue", "unexplained weight loss"],
      dietPlan: {
        recommended: ["Low-fat foods", "Lean proteins", "Whole grains", "Fruits and vegetables", "MCT oil", "Small portions"],
        avoid: ["High-fat foods", "Alcohol completely", "Fried foods", "Full-fat dairy", "Red meat", "Processed foods"],
        mealTiming: "Small, frequent low-fat meals"
      },
      lifestyle: ["No alcohol", "No smoking", "Stay hydrated", "Enzyme supplements", "Pain management", "Regular monitoring"]
    },
    {
      id: 26,
      name: "Bladder Cancer",
      symptoms: ["blood in urine", "painful urination", "frequent urination", "fatigue", "unexplained weight loss"],
      dietPlan: {
        recommended: ["Cruciferous vegetables", "Green tea", "Selenium foods", "Vitamin E sources", "Citrus fruits", "Water"],
        avoid: ["Processed meats", "Charred foods", "Excessive red meat", "Artificial sweeteners", "Alcohol excess", "Contaminated water"],
        mealTiming: "Regular meals with plenty of fluids"
      },
      lifestyle: ["Quit smoking", "Avoid chemical exposure", "Stay hydrated", "Regular screening", "Exercise regularly", "Maintain healthy weight"]
    },
    {
      id: 27,
      name: "Rheumatoid Arthritis",
      symptoms: ["fatigue", "fever", "loss of appetite", "chest pain", "mood swings"],
      dietPlan: {
        recommended: ["Omega-3 fatty acids", "Antioxidant-rich foods", "Whole grains", "Beans", "Nuts", "Olive oil"],
        avoid: ["Processed foods", "Sugar", "Saturated fats", "Omega-6 oils", "Excessive salt", "Red meat"],
        mealTiming: "Anti-inflammatory diet pattern"
      },
      lifestyle: ["Regular gentle exercise", "Physical therapy", "Stress management", "Adequate rest", "Joint protection", "Hot/cold therapy"]
    },
    {
      id: 28,
      name: "Hepatitis",
      symptoms: ["fatigue", "nausea", "fever", "abdominal pain", "loss of appetite", "dark urine"],
      dietPlan: {
        recommended: ["Lean proteins", "Complex carbs", "Fresh fruits", "Vegetables", "Whole grains", "Water"],
        avoid: ["Alcohol absolutely", "Fatty foods", "Raw shellfish", "Processed foods", "High sodium", "Iron supplements"],
        mealTiming: "Small frequent meals"
      },
      lifestyle: ["No alcohol", "Safe practices", "Vaccination", "Regular monitoring", "Rest", "Avoid sharing personal items"]
    },
    {
      id: 29,
      name: "Multiple Sclerosis",
      symptoms: ["fatigue", "mood swings", "anxiety", "depression", "difficulty breathing"],
      dietPlan: {
        recommended: ["Low saturated fat", "Omega-3s", "Vitamin D foods", "Probiotics", "Colorful vegetables", "Whole grains"],
        avoid: ["Saturated fats", "Processed foods", "Refined sugars", "Dairy (for some)", "Gluten (for some)", "Alcohol excess"],
        mealTiming: "Regular balanced meals"
      },
      lifestyle: ["Regular exercise", "Stress management", "Cool environment", "Physical therapy", "Adequate rest", "Support groups"]
    },
    {
      id: 30,
      name: "Peptic Ulcer",
      symptoms: ["abdominal pain", "nausea", "loss of appetite", "unexplained weight loss", "fatigue"],
      dietPlan: {
        recommended: ["Probiotics", "Fiber-rich foods", "Flavonoid foods", "Vitamin A foods", "Lean proteins", "Whole grains"],
        avoid: ["Spicy foods", "Citrus fruits", "Tomatoes", "Coffee", "Alcohol", "Fatty foods"],
        mealTiming: "Small frequent meals; avoid empty stomach"
      },
      lifestyle: ["Stress reduction", "No smoking", "Avoid NSAIDs", "Regular meals", "Adequate sleep", "H. pylori treatment"]
    },
    {
      id: 31,
      name: "Endometriosis",
      symptoms: ["abdominal pain", "fatigue", "nausea", "painful urination", "mood swings"],
      dietPlan: {
        recommended: ["Anti-inflammatory foods", "Omega-3s", "Fiber", "Iron-rich foods", "B vitamins", "Magnesium"],
        avoid: ["Red meat", "Trans fats", "Gluten (for some)", "Dairy (for some)", "Caffeine", "Alcohol"],
        mealTiming: "Regular anti-inflammatory meals"
      },
      lifestyle: ["Regular exercise", "Heat therapy", "Stress management", "Pelvic floor therapy", "Adequate sleep", "Support groups"]
    },
    {
      id: 32,
      name: "Thyroid Cancer",
      symptoms: ["fatigue", "unexplained weight loss", "difficulty breathing", "persistent cough"],
      dietPlan: {
        recommended: ["Iodine (controlled)", "Selenium", "Zinc", "Vitamin D", "Antioxidants", "Cruciferous vegetables"],
        avoid: ["Excessive iodine", "Soy during treatment", "Processed foods", "Excess sugar", "Alcohol", "Raw cruciferous near treatment"],
        mealTiming: "Regular balanced meals"
      },
      lifestyle: ["Regular monitoring", "Medication compliance", "Stress management", "Regular exercise", "Support groups", "Follow-up care"]
    },
    {
      id: 33,
      name: "Psoriasis",
      symptoms: ["fatigue", "mood swings", "anxiety", "depression"],
      dietPlan: {
        recommended: ["Omega-3 fatty acids", "Colorful vegetables", "Lean proteins", "Whole grains", "Probiotics", "Turmeric"],
        avoid: ["Red meat", "Dairy", "Nightshades", "Processed foods", "Gluten (for some)", "Alcohol"],
        mealTiming: "Anti-inflammatory diet approach"
      },
      lifestyle: ["Moisturize regularly", "Manage stress", "Avoid skin injury", "Moderate sun exposure", "No smoking", "Maintain healthy weight"]
    },
    {
      id: 34,
      name: "Alcoholic Liver Disease",
      symptoms: ["fatigue", "nausea", "loss of appetite", "abdominal pain", "unexplained weight loss", "alcohol consumption"],
      dietPlan: {
        recommended: ["Protein-rich foods", "Complex carbs", "B vitamins", "Folate sources", "Zinc foods", "Antioxidants"],
        avoid: ["Alcohol completely", "High sodium", "Raw shellfish", "Saturated fats", "Sugar", "Processed foods"],
        mealTiming: "Small frequent nutrient-dense meals"
      },
      lifestyle: ["Complete alcohol cessation", "Support groups", "Nutritional supplementation", "Regular monitoring", "Exercise as tolerated", "Therapy"]
    },
    {
      id: 35,
      name: "Gastritis",
      symptoms: ["nausea", "abdominal pain", "loss of appetite", "fatigue"],
      dietPlan: {
        recommended: ["Probiotics", "High-fiber foods", "Lean proteins", "Non-acidic fruits", "Green tea", "Ginger"],
        avoid: ["Spicy foods", "Acidic foods", "Coffee", "Alcohol", "Fatty foods", "Carbonated drinks"],
        mealTiming: "Small frequent meals; don't skip meals"
      },
      lifestyle: ["Stress management", "No smoking", "Avoid NSAIDs", "Eat slowly", "Stay upright after eating", "H. pylori treatment if needed"]
    },
    {
      id: 36,
      name: "Emphysema",
      symptoms: ["difficulty breathing", "persistent cough", "wheezing", "fatigue", "chest pain", "unexplained weight loss"],
      dietPlan: {
        recommended: ["High-calorie foods", "Protein-rich foods", "Omega-3s", "Antioxidants", "Small frequent meals", "Nutritional supplements"],
        avoid: ["Gas-producing foods", "Large meals", "Excessive salt", "Empty calories", "Fried foods", "Carbonated beverages"],
        mealTiming: "5-6 small meals daily"
      },
      lifestyle: ["Quit smoking immediately", "Pulmonary rehabilitation", "Breathing exercises", "Oxygen therapy if needed", "Avoid irritants", "Stay active"]
    },
    {
      id: 37,
      name: "Prostate Problems",
      symptoms: ["frequent urination", "painful urination", "blood in urine", "fatigue"],
      dietPlan: {
        recommended: ["Tomatoes (lycopene)", "Green tea", "Cruciferous vegetables", "Omega-3s", "Selenium foods", "Zinc sources"],
        avoid: ["Red meat excess", "High-fat dairy", "Calcium excess", "Alcohol", "Spicy foods", "Caffeine"],
        mealTiming: "Regular meals; limit fluids before bed"
      },
      lifestyle: ["Regular exercise", "Maintain healthy weight", "Regular screening", "Kegel exercises", "Limit evening fluids", "Stress management"]
    },
    {
      id: 38,
      name: "Lymphoma",
      symptoms: ["fever", "night sweats", "unexplained weight loss", "fatigue", "swelling in ankles or legs"],
      dietPlan: {
        recommended: ["Lean proteins", "Whole grains", "Fruits and vegetables", "Probiotics", "Anti-inflammatory foods", "Adequate calories"],
        avoid: ["Raw foods during treatment", "Unpasteurized products", "Alcohol", "Processed meats", "Sugar excess", "Grapefruit with medications"],
        mealTiming: "Small frequent meals during treatment"
      },
      lifestyle: ["Infection prevention", "Regular monitoring", "Gentle exercise", "Stress management", "Support groups", "Adequate rest"]
    },
    {
      id: 39,
      name: "Bipolar Disorder",
      symptoms: ["mood swings", "depression", "anxiety", "fatigue", "loss of appetite"],
      dietPlan: {
        recommended: ["Omega-3 fatty acids", "Complex carbohydrates", "Magnesium foods", "B vitamins", "Tryptophan sources", "Regular meals"],
        avoid: ["Caffeine", "Alcohol", "Sugar highs and lows", "Processed foods", "High-fat meals", "Grapefruit with medications"],
        mealTiming: "Consistent meal schedule"
      },
      lifestyle: ["Regular sleep schedule", "Medication compliance", "Therapy", "Exercise regularly", "Mood tracking", "Avoid triggers"]
    },
    {
      id: 40,
      name: "Migraine",
      symptoms: ["nausea", "fatigue", "mood swings", "anxiety"],
      dietPlan: {
        recommended: ["Magnesium-rich foods", "Riboflavin sources", "Omega-3s", "Ginger", "Complex carbs", "Regular hydration"],
        avoid: ["Aged cheeses", "Processed meats", "MSG", "Artificial sweeteners", "Alcohol", "Chocolate"],
        mealTiming: "Regular meals; don't skip meals"
      },
      lifestyle: ["Regular sleep schedule", "Stress management", "Identify triggers", "Regular exercise", "Stay hydrated", "Limit screen time"]
    },
    {
      id: 41,
      name: "Diverticular Disease",
      symptoms: ["abdominal pain", "constipation", "diarrhea", "nausea", "fever"],
      dietPlan: {
        recommended: ["High-fiber foods (when stable)", "Probiotics", "Water", "Whole grains", "Fruits with skin", "Vegetables"],
        avoid: ["Seeds and nuts (controversial)", "Red meat", "High-fat foods", "Refined grains", "During flare: high fiber", "Alcohol"],
        mealTiming: "Regular meals with adequate fiber"
      },
      lifestyle: ["Regular exercise", "Stay hydrated", "Maintain healthy weight", "Don't strain", "Regular bowel habits", "Stress management"]
    },
    {
      id: 42,
      name: "Sleep Apnea",
      symptoms: ["fatigue", "chest pain", "mood swings", "depression", "anxiety"],
      dietPlan: {
        recommended: ["Anti-inflammatory foods", "Lean proteins", "Complex carbs", "Magnesium foods", "Tryptophan sources", "Light dinner"],
        avoid: ["Heavy meals before bed", "Alcohol", "Caffeine late day", "High-fat foods", "Dairy before bed", "Spicy foods evening"],
        mealTiming: "No large meals 3 hours before sleep"
      },
      lifestyle: ["Weight loss if needed", "Sleep position", "CPAP if prescribed", "Regular sleep schedule", "Avoid sedatives", "Exercise regularly"]
    },
    {
      id: 43,
      name: "Gallstones",
      symptoms: ["abdominal pain", "nausea", "fever", "loss of appetite"],
      dietPlan: {
        recommended: ["High-fiber foods", "Lean proteins", "Whole grains", "Fruits and vegetables", "Low-fat dairy", "Coffee (moderate)"],
        avoid: ["High-fat foods", "Fried foods", "Processed foods", "Refined sugars", "Full-fat dairy", "Rapid weight loss"],
        mealTiming: "Regular meals; don't skip breakfast"
      },
      lifestyle: ["Maintain healthy weight", "Gradual weight loss", "Regular exercise", "Stay hydrated", "Avoid crash diets", "Manage cholesterol"]
    },
    {
      id: 44,
      name: "Ovarian Cysts",
      symptoms: ["abdominal pain", "nausea", "painful urination", "irregular heartbeat", "fatigue"],
      dietPlan: {
        recommended: ["Anti-inflammatory foods", "Fiber-rich foods", "Lean proteins", "Omega-3s", "Indole-3-carbinol foods", "Green tea"],
        avoid: ["Processed foods", "Sugar", "Refined carbs", "Trans fats", "Excessive caffeine", "Alcohol"],
        mealTiming: "Balanced meals to regulate hormones"
      },
      lifestyle: ["Regular exercise", "Stress management", "Maintain healthy weight", "Regular check-ups", "Heat therapy for pain", "Track symptoms"]
    },
    {
      id: 45,
      name: "Chronic Sinusitis",
      symptoms: ["persistent cough", "fatigue", "chest pain", "difficulty breathing"],
      dietPlan: {
        recommended: ["Warm fluids", "Vitamin C foods", "Zinc sources", "Probiotics", "Spicy foods (if tolerated)", "Garlic and onions"],
        avoid: ["Dairy products", "Sugar", "Alcohol", "Processed foods", "Cold beverages", "Allergen foods"],
        mealTiming: "Stay hydrated throughout the day"
      },
      lifestyle: ["Nasal irrigation", "Humidifier use", "Avoid allergens", "No smoking", "Steam inhalation", "Good hygiene"]
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
    const resultsArea = document.getElementById('resultsArea');
    const userSymptomsDiv = document.querySelector('#userSymptoms .symptom-tags');
    const reportInfoDiv = document.getElementById('reportInfo');
    const printBtn = document.getElementById('printBtn');

    // --- NEW: Add Report Generation Date & Time ---
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    reportInfoDiv.innerHTML = `<p><strong>Report Generated:</strong> ${now.toLocaleString(undefined, options)}</p>`;

    // --- NEW: Add Print Button Functionality ---
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // 1. Get symptoms from the URL
    const params = new URLSearchParams(window.location.search);
    const symptomsQuery = params.get('symptoms');
    
    if (!symptomsQuery) {
        resultsArea.innerHTML = `<p class="error">No symptoms were provided. Please go back and select your symptoms.</p>`;
        return;
    }

    const selectedSymptoms = symptomsQuery.split(',');

    // Display the user's selected symptoms as tags
    userSymptomsDiv.innerHTML = selectedSymptoms.map(symptom => `<span class="tag">${symptom.replace(/_|-/g, ' ')}</span>`).join('');

    // 2. Analyze Symptoms Function
    function analyzeSymptoms(symptoms) {
        const matchedDiseases = [];
        diseaseDatabase.diseases.forEach(disease => {
            const matchCount = disease.symptoms.filter(s => symptoms.includes(s)).length;
            if (matchCount > 0) {
                const matchPercentage = (matchCount / disease.symptoms.length) * 100;
                matchedDiseases.push({ ...disease, matchCount, matchPercentage: parseFloat(matchPercentage.toFixed(1)) });
            }
        });
        return matchedDiseases.sort((a, b) => b.matchPercentage - a.matchPercentage);
    }

    // 3. Perform analysis and get results
    const results = analyzeSymptoms(selectedSymptoms);

    // 4. Generate and display the report
    if (results.length === 0) {
        resultsArea.innerHTML = `<p>No potential conditions matched your selected symptoms. This may indicate a less common issue or a combination of symptoms not in our database. Please consult a doctor for a proper diagnosis.</p>`;
        return;
    }

    // Display the top 3-5 results for clarity
    const topResults = results.slice(0, 3);
    let reportHTML = '<h2>Top Potential Conditions</h2>';

    topResults.forEach(disease => {
        // Find which of the user's symptoms match this disease
        const matchingUserSymptoms = disease.symptoms.filter(s => selectedSymptoms.includes(s));

        reportHTML += `
            <div class="disease-card">
                <h3>${disease.name} <span class="match-percentage">(${disease.matchPercentage}% Match)</span></h3>
                
                <div class="card-section">
                    <h4>Matching Symptoms from Your Selection</h4>
                    <div class="symptom-tags">
                        ${matchingUserSymptoms.map(symptom => `<span class="tag tag-matched">${symptom.replace(/_|-/g, ' ')}</span>`).join('')}
                    </div>
                </div>

                <div class="card-section diet-plan">
                    <h4>Dietary Recommendations</h4>
                    <div class="diet-columns">
                        <div class="diet-column">
                            <h5><i class="icon-rec">✔️</i> Recommended</h5>
                            <ul>
                                ${disease.dietPlan.recommended.map(item => `<li class="recommended">${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="diet-column">
                            <h5><i class="icon-avoid">❌</i> To Avoid</h5>
                            <ul>
                                ${disease.dietPlan.avoid.map(item => `<li class="avoid">${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <p class="meal-timing"><strong>Meal Timing:</strong> ${disease.dietPlan.mealTiming}</p>
                </div>

                <div class="card-section">
                    <h4>Lifestyle Recommendations</h4>
                    <ul>
                        ${disease.lifestyle.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });

    resultsArea.innerHTML = reportHTML;
});