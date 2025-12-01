# 💪 GymFit Pro - Gym Membership Application

A comprehensive fitness tracking application designed for 9-5 workers in Kenya, featuring weekly workout plans, budget-friendly meal planning, and real-time progress tracking.

## 🎯 Project Overview

GymFit Pro helps users achieve full-body fitness through a structured weekly program that accommodates working schedules and local dietary preferences. The application provides:

- **Smart Scheduling**: Workouts designed for before/after work hours
- **Kenyan Cuisine**: Local meal plans with KES pricing
- **Real-time Tracking**: Dynamic progress based on current day
- **Recovery Focus**: Dedicated Sunday recovery activities

## ✨ Features

### 📊 Dashboard
- Weekly workout overview with completion status
- Today's workout display
- Quick navigation to all sections
- Real-time progress indicators

### 💪 Workout Section
- Daily workout plans (Monday-Saturday)
- Exercise details with sets, reps, and muscle groups
- Interactive workout progression
- Next workout navigation
- Sunday recovery activities

### 🥗 Diet Planning
- Daily Kenyan meal plans with KES pricing
- Nutritional information (calories, protein, carbs, fats)
- Budget-friendly options for 9-5 workers
- Meal prep tips and local market suggestions

### 📈 Progress Tracking
- Weekly completion tracking
- Achievement system with badges
- Consistency streak monitoring
- Recovery and wellness tips

## 🏋️ Weekly Schedule

| Day | Workout | Time | Focus |
|-----|---------|------|---------|
| Monday | Upper Body Push | 6:00 AM or 7:00 PM | Chest, Shoulders, Triceps |
| Tuesday | Lower Body | 6:00 AM or 7:00 PM | Quadriceps, Hamstrings, Glutes |
| Wednesday | Upper Body Pull | 6:00 AM or 7:00 PM | Back, Biceps |
| Thursday | Core & Cardio | 6:00 AM or 7:00 PM | Core, Cardiovascular |
| Friday | Full Body Circuit | 6:00 AM or 7:00 PM | Full Body Strength |
| Saturday | HIIT Training | 8:00 AM or 6:00 PM | High-Intensity Cardio |
| Sunday | Recovery Day | Anytime | Stretching, Meditation, Light Walking |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v10 or higher)
- Angular CLI (v21)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Gym-Membership-Application
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Start the API server (optional)**
```bash
npm run api
```

5. **Open your browser**
Navigate to `http://localhost:4200/`

## 🛠️ Technology Stack

- **Frontend**: Angular 21, TypeScript, RxJS
- **Styling**: CSS3 with responsive design
- **API Simulation**: JSON Server
- **Build Tool**: Angular CLI with Vite
- **Testing**: Vitest

## 📱 Application Structure

```
src/app/
├── components/          # Main application components
│   ├── dashboard.component.ts
│   ├── workout.component.ts
│   ├── diet.component.ts
│   └── progress.component.ts
├── models/             # TypeScript interfaces
│   ├── workout.model.ts
│   └── diet.model.ts
├── services/           # Business logic services
│   ├── workout.service.ts
│   └── diet.service.ts
└── app.routes.ts       # Application routing
```

## 🌍 Kenyan Context Features

- **Local Cuisine**: Ugali, githeri, nyama choma, pilau, matoke
- **KES Currency**: All costs in Kenyan Shillings
- **Market Tips**: Bulk buying suggestions for local markets
- **Work Schedule**: Optimized for Kenyan 9-5 work culture

## 🎯 Target Audience

- **9-5 Workers** seeking fitness solutions around work schedules
- **Budget-conscious individuals** looking for affordable nutrition
- **Fitness beginners** needing structured workout guidance
- **Kenyan users** wanting culturally relevant meal planning

## 🔄 Real-time Features

- **Dynamic workout display** based on current day
- **Automatic progress tracking** from Sunday reset
- **Live completion status** updates
- **Date-aware scheduling** for optimal user experience

## 🤖 AI-Powered Development

This project was developed as part of an AI-assisted learning experience to explore Angular framework and modern web development practices. The entire application was built through collaborative AI guidance, demonstrating the potential of AI in software development education.

**AI Development References**:
- [ChatGPT - Angular Framework Ideation](https://chatgpt.com/share/692d95f1-bb24-8013-830c-33a6cd4ea6fd)
- [ChatGPT - Debugging & Navigation](https://chatgpt.com/share/692d954b-7758-8013-9f4e-a77abf1a0f91)

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run api` - Start JSON server for API simulation

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

```bash
npm test
```

Executes unit tests using Vitest test runner.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Kenyan fitness community for cultural insights
- AI development tools for enabling rapid prototyping
- Local nutrition experts for meal planning guidance

---

**Built with ❤️ using Angular 21 and AI-assisted development**
