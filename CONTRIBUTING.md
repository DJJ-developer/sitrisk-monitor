# Contributing to SitRisk Monitor 🤝

Thank you for your interest in contributing to SitRisk Monitor! We welcome contributions from developers worldwide to help make workplace health monitoring accessible globally.

## 🌟 Ways to Contribute

### 🌍 Translation & Localization
- **New Language Support**: Help us add support for more languages
- **Translation Improvements**: Enhance existing translations for accuracy
- **Cultural Adaptation**: Adapt content for specific regional markets
- **RTL Languages**: Support for right-to-left languages (Arabic, Hebrew)

### 💻 Code Contributions
- **Bug Fixes**: Report and fix issues
- **Feature Development**: Implement new health monitoring features
- **Performance Optimization**: Improve app speed and efficiency
- **Mobile Enhancements**: Better mobile user experience

### 📊 Health & Medical
- **Health Algorithm Improvements**: Enhance risk calculation accuracy
- **Medical Research Integration**: Add evidence-based health insights
- **Accessibility Features**: Make the app more accessible to users with disabilities
- **Integration**: Connect with wearables and health devices

### 💰 Revenue & Business
- **Monetization Strategies**: Improve revenue optimization
- **Market Research**: Analysis for new markets and demographics
- **B2B Features**: Enterprise and corporate wellness features
- **Affiliate Partnerships**: Health product recommendations

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of HTML, CSS, JavaScript
- Understanding of responsive web design
- Familiarity with Git and GitHub
- Optional: Health/wellness domain knowledge

### Development Setup

1. **Fork the Repository**
   ```bash
   # Visit https://github.com/yourusername/sitrisk-monitor
   # Click "Fork" button
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sitrisk-monitor.git
   cd sitrisk-monitor
   ```

3. **Set Up Local Development**
   ```bash
   # Install dependencies (if any)
   npm install
   
   # Start local development server
   python -m http.server 8000
   # OR
   npx live-server
   ```

4. **Open in Browser**
   ```
   http://localhost:8000
   ```

### File Structure
```
sitrisk-monitor/
├── index.html              # Profile setup page
├── monitor.html             # Real-time monitoring page
├── privacy.html             # Privacy policy
├── script.js               # Main application logic
├── adsense-setup.js        # Revenue optimization
├── styles/                 # CSS stylesheets (if separated)
├── docs/                   # Documentation and guides
│   ├── japanese-market-guide.md
│   ├── spanish-market-guide.md
│   └── deployment-guide.md
└── assets/                 # Images, icons, etc.
```

## 📝 Contribution Guidelines

### 🐛 Bug Reports
When reporting bugs, please include:

```markdown
**Bug Description:**
Clear description of the issue

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- Browser: [e.g., Chrome 96, Safari 15]
- Device: [e.g., iPhone 12, Windows 10]
- Screen Size: [e.g., 1920x1080, Mobile]

**Additional Context:**
Screenshots, console logs, etc.
```

### ✨ Feature Requests
For new features, please include:

```markdown
**Feature Description:**
Clear description of the proposed feature

**Problem It Solves:**
What user need does this address

**Proposed Solution:**
How should it work

**Alternatives Considered:**
Other approaches you've thought about

**Additional Context:**
Mockups, examples, research, etc.
```

### 🌍 Translation Guidelines

#### Adding a New Language

1. **Language Code**: Use ISO 639-1 codes (e.g., `fr` for French, `de` for German)

2. **Update `script.js`**: Add translations object
   ```javascript
   const translations = {
       // ... existing languages
       fr: {
           profileTitle: "Configuration du Profil de Santé",
           profileSubtitle: "Entrez vos informations...",
           // ... complete translation
       }
   };
   ```

3. **Update HTML Files**: Add language option to dropdowns
   ```html
   <div class="language-option" data-lang="fr">🇫🇷 Français</div>
   ```

4. **SEO Meta Tags**: Add language-specific meta tags
   ```html
   <meta name="description" lang="fr" content="...">
   <link rel="alternate" hreflang="fr" href="...?lang=fr">
   ```

5. **Test Thoroughly**: Ensure all text elements translate properly

#### Translation Quality Standards
- **Accuracy**: Medical and health terms must be precise
- **Clarity**: Use simple, understandable language
- **Consistency**: Maintain consistent terminology throughout
- **Cultural Sensitivity**: Adapt content appropriately for target culture
- **Professional Tone**: Maintain professional health-focused tone

### 💻 Code Style Guidelines

#### JavaScript
```javascript
// Use camelCase for variables and functions
const currentLanguage = 'ko';
function updateHealthRisks(seconds) {
    // Function implementation
}

// Use const/let, avoid var
const riskFormulas = {
    cardiovascular: (seconds, age, gender) => {
        // Formula implementation
    }
};

// Comment complex logic
// Calculate BMI using metric system (kg/m²)
const bmi = weight / Math.pow(height / 100, 2);
```

#### HTML
```html
<!-- Use semantic HTML5 elements -->
<main class="container">
    <section class="health-monitor">
        <header class="section-header">
            <h2 data-translate="riskTitle">Health Risk Assessment</h2>
        </header>
    </section>
</main>

<!-- Include accessibility attributes -->
<button aria-label="Start timer" id="startBtn">
    <i class="fas fa-play" aria-hidden="true"></i>
    <span data-translate="start">Start</span>
</button>
```

#### CSS
```css
/* Use CSS custom properties for consistency */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
}

/* Mobile-first responsive design */
.card {
    padding: 1rem;
}

@media (min-width: 768px) {
    .card {
        padding: 2rem;
    }
}
```

### 🔄 Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/language-support-french
   # OR
   git checkout -b fix/timer-accuracy-issue
   # OR
   git checkout -b enhancement/mobile-optimization
   ```

2. **Make Changes**
   - Follow coding standards
   - Add tests if applicable
   - Update documentation
   - Test thoroughly

3. **Commit Messages**
   ```bash
   # Use conventional commit format
   git commit -m "feat: add French language support with complete translations"
   git commit -m "fix: resolve timer accuracy issue on mobile devices"
   git commit -m "docs: update contributing guidelines for translations"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create pull request on GitHub
   ```

5. **PR Description Template**
   ```markdown
   ## 📝 Description
   Brief description of changes

   ## 🎯 Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Translation/Localization
   - [ ] Documentation update
   - [ ] Performance improvement

   ## 🧪 Testing
   - [ ] Tested on desktop browsers
   - [ ] Tested on mobile devices
   - [ ] Verified translations (if applicable)
   - [ ] Checked accessibility

   ## 📷 Screenshots
   (if applicable)

   ## 🔗 Related Issues
   Closes #123
   ```

### 🎯 Priority Contributions

#### High Priority
1. **Chinese Language Support** - Huge market potential
2. **Mobile App Development** - React Native or Flutter
3. **Wearable Device Integration** - Apple Watch, Fitbit
4. **Advanced Health Analytics** - AI/ML insights
5. **Enterprise Dashboard** - B2B features

#### Medium Priority
1. **Additional European Languages** - German, French, Italian
2. **Voice Command Support** - Accessibility enhancement
3. **Progressive Web App** - Offline functionality
4. **Social Features** - Team challenges, sharing

#### Low Priority
1. **Theme Customization** - Dark mode, colors
2. **Export Features** - PDF reports, data export
3. **Gamification** - Badges, achievements
4. **Integration APIs** - Third-party health apps

## 🏆 Recognition

### Contributor Acknowledgment
- All contributors will be listed in our README.md
- Significant contributors get special recognition
- Top contributors may be invited to join the core team

### Contributor Benefits
- **Portfolio Enhancement**: Showcase your contribution to a global health platform
- **Learning Opportunity**: Gain experience in health tech and multi-language applications
- **Network Building**: Connect with health-focused developers worldwide
- **Resume Credit**: Add open-source contribution to your professional profile

## 📞 Getting Help

### Community Support
- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Email**: contribute@sitriskmonitor.com (for sensitive matters)

### Documentation
- **Technical Docs**: See `/docs` folder for detailed technical documentation
- **API Reference**: Available in the repository wiki
- **Market Guides**: Business and market expansion documentation

### Response Times
- **Bug Reports**: 24-48 hours
- **Feature Requests**: 1-2 weeks for initial review
- **Pull Requests**: 2-5 days for review
- **General Questions**: 24-72 hours

## 🎉 First-Time Contributors

### Good First Issues
Look for issues labeled:
- `good first issue` - Perfect for beginners
- `help wanted` - We need community help
- `translation` - Translation and localization work
- `documentation` - Improve docs and guides

### Mentorship
- New contributors get guidance from experienced team members
- We provide detailed feedback on pull requests
- Questions are always welcome - no question is too small!

---

## 🌟 Thank You!

Every contribution, no matter how small, helps make SitRisk Monitor better for millions of office workers worldwide. Together, we're building a healthier future for desk workers globally! 

**Happy Contributing!** 🚀💪❤️ 