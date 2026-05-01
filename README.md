# 🧴 Sereya - Intelligent Skincare Recommendation System

An advanced, science-backed skincare recommendation application that provides personalized routines based on comprehensive skin analysis, ingredient knowledge, and dermatological best practices.

## ✨ Features

### 1. **Comprehensive Skin Quiz**
- Skin type assessment (oily, dry, combination, sensitive)
- Age group identification (18-25, 25-35, 35-45, 45-55, 55+)
- Acne evaluation with severity levels
- Sensitivity assessment
- Pigmentation/dark spot detection
- Sun exposure analysis
- Additional concerns tracking
- Allergy/ingredient avoidance identification

### 2. **Ingredient-Based Recommendations**
- **Acne:** Salicylic Acid, Benzoyl Peroxide, Niacinamide, Tea Tree Oil
- **Dryness:** Hyaluronic Acid, Glycerin, Ceramides, Peptides
- **Sensitivity:** Centella Asiatica, Panthenol, Allantoin, Zinc PCA
- **Pigmentation:** Vitamin C, Kojic Acid, Niacinamide, Alpha Arbutin
- **Anti-Aging:** Retinol, Peptides, Vitamin C, Hyaluronic Acid
- **Sun Protection:** Zinc Oxide, Titanium Dioxide, Avobenzone

Each ingredient includes:
- Scientific explanation of how it works
- Optimal concentration ranges
- Usage frequency recommendations
- Safety warnings
- Compatibility notes

### 3. **Personalized Morning & Night Routines**
```
🌅 Morning Routine:
1. Cleanser (30 seconds - 1 minute)
2. Toner/Essence (optional)
3. Serum (Vitamin C for antioxidant protection)
4. Moisturizer (lightweight for daytime)
5. Sunscreen (SPF 30+, non-negotiable!)

🌙 Night Routine:
1. Cleanser (double cleanse recommended)
2. Toner/Essence
3. Active Treatment (Retinol, BHA, etc.)
4. Night Cream (heavier formula)
```

### 4. **Product Categories Instead of Brands**
- **Cleanser Types:** Gel, Foam, Cream, Milk
- **Moisturizer Types:** Gel, Lotion, Cream, Oil
- **Treatment Types:** Serums, Essences, Masks
- **Sunscreen Types:** Mineral vs Chemical, SPF levels

### 5. **Safety Warnings & Precautions**
- ✓ Patch test protocols
- ✓ Active ingredient mixing guide
- ✓ Sun sensitivity warnings
- ✓ When to see a dermatologist
- ✓ Adjustment period expectations

### 6. **Weather-Based Adjustments**
- Hot weather → lightweight, oil-free products
- Cold weather → rich, intensive moisturizers
- Humidity → oil control and mattifying products
- Dryness → hydration-focused routine

### 7. **Educational Design**
- Clear explanations for every recommendation
- Ingredient interaction warnings
- Timing and frequency guidance
- Real-world tips and tricks

## 🛠️ Tech Stack

### Frontend
- **HTML5:** Semantic markup and accessibility
- **CSS3:** Modern styling with gradient backgrounds and responsive design
- **JavaScript (Vanilla):** DOM manipulation, Local Storage, API calls
- **Local Storage:** Save quiz results and recommendations

### Backend
- **Node.js + Express:** RESTful API server
- **MongoDB:** Database for quiz history and user profiles
- **Mongoose:** ODM for MongoDB
- **CORS & Middleware:** Proper request/response handling

### Architecture
```
Sereya/
├── frontend/
│   ├── index.html              # Home page with features
│   ├── quiz.html               # Comprehensive skin quiz
│   ├── recommendations.html    # Results and routines
│   ├── css/
│   │   └── style.css          # Main styling
│   └── js/
│       ├── api.js             # API communication
│       ├── quiz.js            # Quiz logic
│       └── recommendations.js # Display recommendations
│
├── backend/
│   ├── server.js              # Main Express app
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Quiz.js            # Quiz history schema
│   ├── controllers/
│   │   ├── quizController.js  # Quiz submission logic
│   │   └── recommendationController.js
│   ├── routes/
│   │   ├── quiz.js            # Quiz API endpoints
│   │   └── recommendations.js # Recommendation endpoints
│   └── recommendations/
│       └── engine.js          # Recommendation algorithm
│
├── package.json
├── .env                        # Environment variables
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- MongoDB (local or Atlas connection)
- A modern web browser

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/sereya.git
cd sereya
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
# Edit .env file with your MongoDB connection
MONGODB_URI=mongodb://localhost:27017/sereya
PORT=5000
NODE_ENV=development
```

4. **Start MongoDB**
```bash
# On Windows (if MongoDB is installed)
mongod

# Or use MongoDB Atlas connection in .env
```

5. **Run the backend server**
```bash
npm start
# Or with auto-reload (dev mode)
npm run dev
```

6. **Open the frontend**
- Open `frontend/index.html` in your browser
- Or set up a simple HTTP server:
```bash
cd frontend
python -m http.server 8000
# Visit http://localhost:8000 in browser
```

## 📋 API Endpoints

### Quiz Management
- **POST** `/api/quiz/submit` - Submit completed quiz
- **GET** `/api/quiz/history` - Get previous quiz results

### Recommendations
- **POST** `/api/recommendations/generate` - Get personalized recommendations
- **GET** `/api/recommendations/ingredient?ingredient=name` - Get ingredient details

### Health Check
- **GET** `/api/health` - Server status endpoint

## 💡 How to Use

1. **Home Page:** Learn about Sereya's features
2. **Start Quiz:** Answer comprehensive questions about your skin
3. **Get Results:** Receive:
   - Your skin profile summary
   - Key ingredients tailored to you
   - Product categories to search for
   - Morning and night routines with timing
   - Safety warnings specific to your needs
   - Personalized tips
4. **Follow Recommendations:** Use the detailed routines as your daily guide

## 🎯 Key Recommendations by Concern

### For Acne:
```
Primary: Salicylic Acid (BHA) - removes sebum from pores
Secondary: Benzoyl Peroxide - antibacterial
Timing: 2-3x per week initially, build tolerance
Caution: Can cause dryness, start low concentration
```

### For Dry Skin:
```
Primary: Hyaluronic Acid - holds 1000x water
Secondary: Ceramides - repairs barrier
Timing: Every night in moisturizer
Apply to: Damp skin for maximum absorption
```

### For Sensitivity:
```
Primary: Centella Asiatica - soothes and repairs
Secondary: Panthenol - reduces irritation
Timing: Daily, especially after active treatments
Avoid: Fragrance, sulfates, essential oils
```

### For Anti-Aging:
```
Primary: Retinol - increases cell turnover
Secondary: Peptides - support collagen
Timing: 2-3x per week, can increase to daily
Warning: May cause purging (1-4 weeks initial)
```

## ⚠️ Important Safety Notes

1. **Always do a patch test** (24-48 hours) before using new products
2. **Don't mix strong actives** - Space retinol + BHA on different days
3. **Sunscreen is non-negotiable** - Active ingredients increase sun sensitivity
4. **Consult dermatologist for:**
   - Severe acne (cystic)
   - Extreme sensitivity or allergic reactions
   - Unusual pigmentation changes
   - Signs of skin infection

5. **Adjustment period:** Give new products 4-6 weeks before deciding if they work

## 🌟 Future Features (Coming Soon)

- [ ] **Progress Tracker:** Upload daily/weekly photos and track improvement
- [ ] **AI Chatbot:** Ask skincare questions in real-time
- [ ] **User Profiles:** Save results, login to see history
- [ ] **Routine Customization:** Adjust suggestions based on feedback
- [ ] **Weather Integration:** Automatic suggestions based on local weather
- [ ] **Product Reviews:** Community ratings and feedback
- [ ] **Mobile App:** Native iOS/Android versions
- [ ] **Ingredient Search:** Look up any skincare ingredient

## 🧪 Testing the System

### Test Acne Profile:
```
Skin Type: Oily
Age: 25-35
Acne: Yes (Moderate)
Sensitivity: Medium
Pigmentation: Mild
Sun Exposure: Moderate
```

### Test Sensitivity Profile:
```
Skin Type: Sensitive
Age: 35-45
Acne: No
Sensitivity: High
Pigmentation: None
Sun Exposure: Low
```

### Test Anti-Aging Profile:
```
Skin Type: Dry
Age: 45-55
Acne: No
Sensitivity: Low
Pigmentation: Significant
Sun Exposure: High
```

## 📚 Educational Resources

### Ingredient Concentration Ranges
- **Salicylic Acid:** 0.5% - 2%
- **Glycolic Acid:** 5% - 15%
- **Niacinamide:** 4% - 5%
- **Retinol:** 0.25% - 1%
- **Vitamin C:** 10% - 20%
- **Hyaluronic Acid:** 0.5% - 2%
- **SPF Protection:** 30+ (blocks 97% UVB rays)

### How Long for Results
- **Hydration:** 1-2 weeks
- **Acne Improvement:** 4-6 weeks
- **Texture/Radiance:** 4-8 weeks
- **Anti-Aging (Retinol):** 8-12 weeks
- **Dark Spots:** 3-6 months (consistency required)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support & FAQ

**Q: Can I use multiple serums?**
A: Yes, but space active ingredients (retinol, BHA, AHA) on different days or different routines to avoid over-exfoliation.

**Q: Is sunscreen really necessary every day?**
A: YES! Even on cloudy days, UV rays penetrate clouds. Sunscreen prevents premature aging and skin cancer.

**Q: How long should I wait before switching products?**
A: Give new products at least 4-6 weeks. Skin takes about 28 days for one complete cell cycle.

**Q: Can I use retinol in summer?**
A: Yes, but use SPF 50+ and reapply every 2 hours. Retinol increases sun sensitivity.

## 👩‍⚕️ Medical Disclaimer

Sereya provides educational recommendations based on skincare science. This is NOT medical advice. Always consult a licensed dermatologist for:
- Severe acne or skin conditions
- Allergic reactions or extreme sensitivity
- Persistent rashes or inflammation
- Any concerns about your skin health

## 🌟 Created with ❤️

Sereya was created to make skincare science accessible and help everyone develop an intelligent, personalized routine. Remember: healthy skin is a journey, not a destination!

---

**Questions or feedback?** Feel free to reach out or open an issue!

**Happy skincare journey! 🧴✨**
