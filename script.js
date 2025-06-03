// Global variables
let startTime = null;
let currentTime = 0;
let timerInterval = null;
let userProfile = null;
let lastBreakTime = 0;
let currentLanguage = 'ko';
let isTimerRunning = false;

// Total time tracking variables
let totalSittingTime = {
    today: 0,
    thisWeek: 0,
    allTime: 0,
    lastSessionTime: 0
};

// Translation data
const translations = {
    ko: {
        profileTitle: "건강 프로필 설정",
        profileSubtitle: "정확한 위험도 계산을 위해 정보를 입력해주세요",
        gender: "성별",
        male: "남성",
        female: "여성",
        age: "나이",
        height: "키 (cm)",
        weight: "몸무게 (kg)",
        goToMonitor: "모니터링 시작하기",
        underweight: "저체중",
        underweightDesc: "균형 잡힌 식단과 운동을 통해 체중 증가를 고려하세요.",
        normalWeight: "정상 체중",
        normalWeightDesc: "BMI가 건강한 범위에 있습니다. 규칙적인 운동으로 현재 상태를 유지하세요.",
        overweight: "과체중",
        overweightDesc: "식단 조절과 신체활동 증가를 통한 체중 관리를 고려하세요.",
        obese: "비만",
        obeseDesc: "체중 관리 계획을 위해 의료 전문가와 상담하시기 바랍니다.",
        timerTitle: "앉은 시간 모니터링",
        timerSubtitle: "실시간으로 앉은 시간을 추적합니다",
        totalTimeTitle: "총 앉아있었던 시간",
        totalTimeSubtitle: "누적된 전체 앉은 시간을 확인하세요",
        resetTotal: "누적 시간 초기화",
        start: "시작",
        pause: "일시정지",
        standUp: "일어났어요!",
        reset: "초기화",
        riskTitle: "실시간 건강 위험도",
        riskSubtitle: "앉은 시간에 따른 질병 발병 위험 증가율",
        cardiovascular: "심혈관질환",
        diabetes: "당뇨병",
        backPain: "요통",
        obesity: "비만",
        cardiovascularDesc: "장시간 앉아있으면 혈액순환이 저하되어 심장병 위험이 증가합니다",
        diabetesDesc: "신체 활동 부족으로 인슐린 저항성이 증가할 수 있습니다",
        backPainDesc: "잘못된 자세로 인한 척추와 근육 문제가 발생할 수 있습니다",
        obesityDesc: "칼로리 소모량 감소로 체중 증가 위험이 높아집니다",
        bodyDiagramTitle: "신체 위험도 시각화",
        bodyDiagramSubtitle: "부위별 위험도를 색상으로 확인하세요",
        shareTitle: "결과 공유하기",
        shareSubtitle: "건강 정보를 친구들과 공유하세요",
        safe: "안전",
        warning: "주의",
        danger: "위험",
        disclaimerTitle: "의료 면책 조항",
        disclaimer: "본 서비스는 의학적 진단이나 치료를 대체하지 않습니다. 건강상 문제가 있으시면 전문의와 상담하시기 바랍니다."
    },
    en: {
        profileTitle: "Health Profile Setup",
        profileSubtitle: "Enter your information for accurate risk calculation",
        gender: "Gender",
        male: "Male",
        female: "Female",
        age: "Age",
        height: "Height (cm)",
        weight: "Weight (kg)",
        goToMonitor: "Start Monitoring",
        underweight: "Underweight",
        underweightDesc: "Consider gaining weight through a balanced diet and exercise.",
        normalWeight: "Normal Weight",
        normalWeightDesc: "Your BMI is within the healthy range. Maintain your current lifestyle with regular exercise.",
        overweight: "Overweight",
        overweightDesc: "Consider weight management through diet and increased physical activity.",
        obese: "Obese",
        obeseDesc: "Consult with a healthcare professional for a weight management plan.",
        timerTitle: "Sitting Time Monitoring",
        timerSubtitle: "Track your sitting time in real-time",
        totalTimeTitle: "Total Sitting Time",
        totalTimeSubtitle: "Check your accumulated sitting time",
        resetTotal: "Reset Total Time",
        start: "Start",
        pause: "Pause", 
        standUp: "I Stood Up!",
        reset: "Reset",
        riskTitle: "Real-time Health Risk",
        riskSubtitle: "Disease risk increase based on sitting time",
        cardiovascular: "Cardiovascular",
        diabetes: "Diabetes",
        backPain: "Back Pain",
        obesity: "Obesity",
        cardiovascularDesc: "Prolonged sitting reduces blood circulation, increasing heart disease risk",
        diabetesDesc: "Lack of physical activity can increase insulin resistance",
        backPainDesc: "Poor posture can cause spine and muscle problems",
        obesityDesc: "Reduced calorie burn increases weight gain risk",
        bodyDiagramTitle: "Body Risk Visualization",
        bodyDiagramSubtitle: "Check risk levels by body part with colors",
        shareTitle: "Share Results",
        shareSubtitle: "Share health information with friends",
        safe: "Safe",
        warning: "Warning",
        danger: "Danger",
        disclaimerTitle: "Medical Disclaimer",
        disclaimer: "This service does not replace medical diagnosis or treatment. Please consult a medical professional if you have health concerns."
    },
    es: {
        profileTitle: "Configuración de Perfil de Salud",
        profileSubtitle: "Ingrese su información para un cálculo preciso del riesgo",
        gender: "Género",
        male: "Masculino",
        female: "Femenino",
        age: "Edad",
        height: "Altura (cm)",
        weight: "Peso (kg)",
        goToMonitor: "Iniciar Monitoreo",
        underweight: "Bajo Peso",
        underweightDesc: "Considere aumentar de peso a través de una dieta equilibrada y ejercicio.",
        normalWeight: "Peso Normal",
        normalWeightDesc: "Su IMC está dentro del rango saludable. Mantenga su estilo de vida actual con ejercicio regular.",
        overweight: "Sobrepeso",
        overweightDesc: "Considere el control de peso a través de la dieta y aumento de la actividad física.",
        obese: "Obesidad",
        obeseDesc: "Consulte con un profesional de la salud para un plan de control de peso.",
        timerTitle: "Monitoreo de Tiempo Sentado",
        timerSubtitle: "Rastrea tu tiempo sentado en tiempo real",
        totalTimeTitle: "Tiempo Total Sentado",
        totalTimeSubtitle: "Revisa tu tiempo acumulado sentado",
        resetTotal: "Reiniciar Tiempo Total",
        start: "Iniciar",
        pause: "Pausar",
        standUp: "¡Me Levanté!",
        reset: "Reiniciar",
        riskTitle: "Riesgo de Salud en Tiempo Real",
        riskSubtitle: "Aumento del riesgo de enfermedad basado en tiempo sentado",
        cardiovascular: "Cardiovascular",
        diabetes: "Diabetes",
        backPain: "Dolor de Espalda",
        obesity: "Obesidad",
        cardiovascularDesc: "Estar sentado por períodos prolongados reduce la circulación sanguínea, aumentando el riesgo de enfermedades cardíacas",
        diabetesDesc: "La falta de actividad física puede aumentar la resistencia a la insulina",
        backPainDesc: "La mala postura puede causar problemas en la columna vertebral y músculos",
        obesityDesc: "La reducción en la quema de calorías aumenta el riesgo de aumento de peso",
        bodyDiagramTitle: "Visualización de Riesgo Corporal",
        bodyDiagramSubtitle: "Revisa los niveles de riesgo por parte del cuerpo con colores",
        shareTitle: "Compartir Resultados",
        shareSubtitle: "Comparte información de salud con amigos",
        safe: "Seguro",
        warning: "Advertencia",
        danger: "Peligro",
        disclaimerTitle: "Descargo de Responsabilidad Médica",
        disclaimer: "Este servicio no reemplaza el diagnóstico o tratamiento médico. Consulte a un profesional médico si tiene problemas de salud."
    },
    ja: {
        profileTitle: "健康プロファイル設定",
        profileSubtitle: "正確なリスク計算のために情報を入力してください",
        gender: "性別",
        male: "男性",
        female: "女性",
        age: "年齢",
        height: "身長 (cm)",
        weight: "体重 (kg)",
        goToMonitor: "モニタリング開始",
        underweight: "低体重",
        underweightDesc: "バランスの取れた食事と運動による体重増加を検討してください。",
        normalWeight: "正常体重",
        normalWeightDesc: "BMIは健康的な範囲内です。定期的な運動で現在の状態を維持してください。",
        overweight: "過体重",
        overweightDesc: "食事療法と身体活動の増加による体重管理を検討してください。",
        obese: "肥満",
        obeseDesc: "体重管理計画のために医療専門家にご相談ください。",
        timerTitle: "座位時間モニタリング",
        timerSubtitle: "座っている時間をリアルタイムで追跡します",
        totalTimeTitle: "総座位時間",
        totalTimeSubtitle: "累積した座位時間を確認してください",
        resetTotal: "累積時間リセット",
        start: "開始",
        pause: "一時停止",
        standUp: "立ち上がりました！",
        reset: "リセット",
        riskTitle: "リアルタイム健康リスク",
        riskSubtitle: "座位時間に基づく疾患リスクの増加",
        cardiovascular: "心血管疾患",
        diabetes: "糖尿病",
        backPain: "腰痛",
        obesity: "肥満",
        cardiovascularDesc: "長時間座っていると血液循環が悪化し、心疾患のリスクが増加します",
        diabetesDesc: "身体活動不足によりインスリン抵抗性が増加する可能性があります",
        backPainDesc: "悪い姿勢は脊椎と筋肉の問題を引き起こす可能性があります",
        obesityDesc: "カロリー消費の減少により体重増加のリスクが高まります",
        bodyDiagramTitle: "体の部位別リスク可視化",
        bodyDiagramSubtitle: "体の部位別のリスクレベルを色で確認してください",
        shareTitle: "結果の共有",
        shareSubtitle: "健康情報を友達と共有しましょう",
        safe: "安全",
        warning: "注意",
        danger: "危険",
        disclaimerTitle: "医療免責事項",
        disclaimer: "このサービスは医学的診断や治療に代わるものではありません。健康上の問題がある場合は、医療専門家にご相談ください。"
    }
};

// Health risk calculation formulas
const riskFormulas = {
    cardiovascular: (seconds, age, gender) => {
        const minutes = seconds / 60;
        const baseRisk = Math.min(minutes * 0.08, 25);
        const ageFactor = age > 40 ? 1.2 : 1.0;
        const genderFactor = gender === 'male' ? 1.1 : 1.0;
        return Math.round(baseRisk * ageFactor * genderFactor * 100) / 100;
    },
    diabetes: (seconds, age, bmi) => {
        const minutes = seconds / 60;
        const baseRisk = Math.min(minutes * 0.06, 20);
        const ageFactor = age > 45 ? 1.3 : 1.0;
        const bmiFactor = bmi > 25 ? 1.2 : 1.0;
        return Math.round(baseRisk * ageFactor * bmiFactor * 100) / 100;
    },
    backPain: (seconds) => {
        const minutes = seconds / 60;
        return Math.round(Math.min(minutes * 0.12, 40) * 100) / 100;
    },
    obesity: (seconds, age) => {
        const minutes = seconds / 60;
        const baseRisk = Math.min(minutes * 0.05, 15);
        const ageFactor = age > 35 ? 1.1 : 1.0;
        return Math.round(baseRisk * ageFactor * 100) / 100;
    }
};

// Initialize app
function initializeApp() {
    console.log('Initializing SitRisk Monitor...');
    
    // Check URL parameter for language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && ['ko', 'en', 'es', 'ja'].includes(langParam)) {
        currentLanguage = langParam;
        localStorage.setItem('preferredLanguage', langParam);
    }
    
    loadUserPreferences();
    loadTotalSittingTime();
    setupEventListeners();
    setupKeyboardShortcuts();
    initializeButtonStates();
    updateLanguage();
    updateTimerDisplay();
    updateTotalTimeDisplay();
    
    setTimeout(() => {
        const welcomeMessages = {
            ko: {
                title: '환영합니다!',
                message: 'SitRisk Monitor에 오신 것을 환영합니다. 건강한 앉기 습관을 시작해보세요.'
            },
            en: {
                title: 'Welcome!',
                message: 'Welcome to SitRisk Monitor. Start building healthy sitting habits today.'
            },
            es: {
                title: '¡Bienvenido!',
                message: 'Bienvenido a SitRisk Monitor. Comienza a desarrollar hábitos saludables para estar sentado hoy.'
            },
            ja: {
                title: 'ようこそ!',
                message: 'SitRisk Monitorにようこそ。健康的な座り方の習慣を始めましょう。'
            }
        };
        
        const msg = welcomeMessages[currentLanguage] || welcomeMessages.ko;
        showAdvancedNotification(msg.title, msg.message, 'info', 3000);
    }, 1000);
    
    console.log('SitRisk Monitor initialized successfully');
}

// Event listeners setup
function setupEventListeners() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
        });
        
        document.addEventListener('click', () => {
            languageDropdown.style.display = 'none';
        });
        
        const languageOptions = languageDropdown.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                if (lang) {
                    changeLanguage(lang);
                    languageDropdown.style.display = 'none';
                }
            });
        });
    }
    
    const profileInputs = ['gender', 'age', 'height', 'weight'];
    profileInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('change', saveUserProfile);
        }
    });
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Language functions
function changeLanguage(lang) {
    currentLanguage = lang;
    updateLanguage();
    
    const currentLangSpan = document.getElementById('currentLang');
    const langNames = {
        ko: '한국어',
        en: 'English',
        es: 'Español',
        ja: '日本語'
    };
    
    if (currentLangSpan) {
        currentLangSpan.textContent = langNames[lang] || '한국어';
    }
    
    localStorage.setItem('preferredLanguage', lang);
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    const trans = getTranslations();
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (trans[key]) {
            if (element.tagName === 'INPUT' && element.type !== 'button') {
                element.placeholder = trans[key];
            } else {
                element.textContent = trans[key];
            }
        }
    });
}

function getTranslations() {
    return translations[currentLanguage] || translations['ko'];
}

// Input validation functions
function validateUserInput(age, height, weight) {
    const errors = [];
    
    // 나이 검증 (18-100세)
    if (age < 18 || age > 100) {
        errors.push('나이는 18세 이상 100세 이하로 입력해주세요.');
    }
    
    // 키 검증 (140-220cm)
    if (height < 140 || height > 220) {
        errors.push('키는 140cm 이상 220cm 이하로 입력해주세요.');
    }
    
    // 몸무게 검증 (40-200kg)
    if (weight < 40 || weight > 200) {
        errors.push('몸무게는 40kg 이상 200kg 이하로 입력해주세요.');
    }
    
    // BMI 검증 (15-50)
    const bmi = calculateBMI(weight, height);
    if (bmi < 15 || bmi > 50) {
        errors.push('입력하신 키와 몸무게의 조합이 올바르지 않습니다. (BMI 범위 초과)');
    }
    
    return errors;
}

function showValidationErrors(errors) {
    const errorMessage = '입력값을 확인해주세요:\n\n' + errors.join('\n');
    alert(errorMessage);
}

// Real-time validation function
function validateRealTime(input, min, max, unit) {
    const value = parseInt(input.value);
    
    // 범위 검증
    if (value < min || value > max) {
        input.style.borderColor = '#ef4444';
        input.style.backgroundColor = '#fef2f2';
        input.title = `${min}-${max}${unit} 범위로 입력해주세요 (현재: ${value}${unit})`;
    } else {
        input.style.borderColor = '#10b981';
        input.style.backgroundColor = '#f0fdf4';
        input.title = `✓ 올바른 범위입니다`;
    }
    
    // BMI 실시간 체크 (키, 몸무게 둘 다 입력된 경우)
    if (input.id === 'height' || input.id === 'weight') {
        validateBMIRealTime();
    }
}

function validateBMIRealTime() {
    const height = parseInt(document.getElementById('height')?.value);
    const weight = parseInt(document.getElementById('weight')?.value);
    
    if (height && weight) {
        const bmi = calculateBMI(weight, height);
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        
        if (bmi < 15 || bmi > 50) {
            // 비정상적인 BMI
            heightInput.style.borderColor = '#f59e0b';
            weightInput.style.borderColor = '#f59e0b';
            heightInput.style.backgroundColor = '#fffbeb';
            weightInput.style.backgroundColor = '#fffbeb';
            
            document.getElementById('goToMonitorBtn').style.opacity = '0.5';
            document.getElementById('goToMonitorBtn').style.pointerEvents = 'none';
            document.getElementById('goToMonitorBtn').title = `BMI ${bmi.toFixed(1)} - 키와 몸무게 조합을 확인해주세요`;
        } else {
            // 정상적인 BMI
            document.getElementById('goToMonitorBtn').style.opacity = '1';
            document.getElementById('goToMonitorBtn').style.pointerEvents = 'auto';
            document.getElementById('goToMonitorBtn').title = `BMI ${bmi.toFixed(1)} - 측정을 시작할 수 있습니다`;
        }
    }
}

// Profile functions
function updateProfile() {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const errors = validateUserInput(age, height, weight);
    
    if (errors.length > 0) {
        showValidationErrors(errors);
        return false;
    }

    userProfile = { age, height, weight, gender };
    saveUserProfile();
    
    const bmi = calculateBMI(weight, height);
    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    
    const bmiCategory = getBMICategory(bmi);
    document.getElementById('bmiCategory').textContent = bmiCategory.category;
    document.getElementById('bmiDescription').textContent = bmiCategory.description;

    updateRiskDisplay();
    
    return true;
}

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

// Function to get BMI category and description
function getBMICategory(bmi) {
    const translations = getTranslations();
    
    if (bmi < 18.5) {
        return {
            category: translations.underweight || 'Underweight',
            description: translations.underweightDesc || 'Consider gaining weight through a balanced diet and exercise.'
        };
    } else if (bmi < 25) {
        return {
            category: translations.normalWeight || 'Normal Weight',
            description: translations.normalWeightDesc || 'Your BMI is within the healthy range. Maintain your current lifestyle with regular exercise.'
        };
    } else if (bmi < 30) {
        return {
            category: translations.overweight || 'Overweight',
            description: translations.overweightDesc || 'Consider weight management through diet and increased physical activity.'
        };
    } else {
        return {
            category: translations.obese || 'Obese',
            description: translations.obeseDesc || 'Consult with a healthcare professional for a weight management plan.'
        };
    }
}

// Function to start monitoring - redirects to monitor.html
function startMonitoring() {
    // Save the current profile first
    if (updateProfile()) {
        // Redirect to monitor page
        window.location.href = 'monitor.html';
    } else {
        // Show error if profile is invalid
        showNotification('프로필 정보를 확인해주세요', 'error');
    }
}

// Function to reset profile
function resetProfile() {
    document.getElementById('age').value = '30';
    document.getElementById('height').value = '170';
    document.getElementById('weight').value = '70';
    document.querySelector('input[name="gender"][value="male"]').checked = true;
    
    // Update BMI display
    const bmi = calculateBMI(70, 170);
    document.getElementById('bmiValue').textContent = bmi.toFixed(1);
    
    const bmiCategory = getBMICategory(bmi);
    document.getElementById('bmiCategory').textContent = bmiCategory.category;
    document.getElementById('bmiDescription').textContent = bmiCategory.description;
    
    showNotification('프로필이 초기화되었습니다', 'success');
}

// Timer functions
function startTimer() {
    if (!isTimerRunning) {
        startTime = Date.now() - currentTime;
        isTimerRunning = true;
        
        timerInterval = setInterval(updateTimer, 1000);
        
        // Check if we're on monitor page or regular page
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        
        if (startBtn && pauseBtn) {
            // Monitor page buttons
            startBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-flex';
        } else {
            // Regular page buttons (if they exist)
            const regularStartBtn = document.getElementById('startButton');
            const regularPauseBtn = document.getElementById('pauseButton');
            if (regularStartBtn) regularStartBtn.style.display = 'none';
            if (regularPauseBtn) regularPauseBtn.style.display = 'inline-flex';
        }
        
        showNotification('모니터링이 시작되었습니다.', 'info');
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        
        // Check if we're on monitor page or regular page
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        
        if (startBtn && pauseBtn) {
            // Monitor page buttons
            startBtn.style.display = 'inline-flex';
            pauseBtn.style.display = 'none';
        } else {
            // Regular page buttons (if they exist)
            const regularStartBtn = document.getElementById('startButton');
            const regularPauseBtn = document.getElementById('pauseButton');
            if (regularStartBtn) regularStartBtn.style.display = 'inline-flex';
            if (regularPauseBtn) regularPauseBtn.style.display = 'none';
        }
        
        // Restore original total time display when paused
        updateTotalTimeDisplay();
        
        showNotification('모니터링이 일시정지되었습니다.', 'warning');
    }
}

function resetTimer() {
    isTimerRunning = false;
    currentTime = 0;
    clearInterval(timerInterval);
    
    updateTimerDisplay();
    resetRiskDisplay();
    
    // Restore original total time display when reset
    updateTotalTimeDisplay();
    
    // Check if we're on monitor page or regular page
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    
    if (startBtn && pauseBtn) {
        // Monitor page buttons
        startBtn.style.display = 'inline-flex';
        pauseBtn.style.display = 'none';
    } else {
        // Regular page buttons (if they exist)
        const regularStartBtn = document.getElementById('startButton');
        const regularPauseBtn = document.getElementById('pauseButton');
        if (regularStartBtn) regularStartBtn.style.display = 'inline-flex';
        if (regularPauseBtn) regularPauseBtn.style.display = 'none';
    }
    
    showNotification('타이머가 초기화되었습니다.', 'info');
}

function standUp() {
    if (currentTime > 0) {
        const minutes = Math.floor(currentTime / 60000);
        const riskReduction = Math.min(minutes * 2, 15);
        
        // Add current session time to totals before resetting
        addToTotalSittingTime(currentTime);
        
        showNotification(`훌륭해요! 건강 위험이 ${riskReduction}% 감소했습니다.`, 'success');
        resetTimer();
    } else {
        showNotification('좋은 습관입니다! 계속 유지하세요.', 'success');
    }
}

function updateTimer() {
    if (isTimerRunning) {
        currentTime = Date.now() - startTime;
        updateTimerDisplay();
        updateRiskDisplay();
        checkOneHourNotification();
        
        const totalSeconds = Math.floor(currentTime / 1000);
        updateHealthRisks(totalSeconds);
        
        // Update total time display in real-time
        updateRealTimeTotalDisplay();
        
        const minutes = Math.floor(currentTime / 60000);
        if (minutes > 0 && minutes % 30 === 0 && currentTime % 60000 < 1000) {
            showBreakAlert(minutes);
        }
        
        // AdSense와 타이머 연동 (monitor.html에서 정의된 함수 호출)
        if (typeof onTimerUpdate === 'function') {
            onTimerUpdate(minutes);
        }
        
        // monitor.html의 강제 연동 함수 호출 (존재할 때만)
        if (typeof forceUpdateAll === 'function') {
            try {
                forceUpdateAll();
            } catch (e) {
                console.warn('⚠️ forceUpdateAll 호출 실패:', e);
            }
        }
        
        // 디버깅: 10초마다 상태 로그
        if (minutes > 0 && totalSeconds % 10 === 0) {
            console.log(`⏱️ ${minutes}분 ${totalSeconds % 60}초 경과 - 위험도: ${getCurrentRiskLevel()}% | 총시간: ${formatTime(totalSittingTime.today + currentTime)}`);
        }
    }
}

function updateTimerDisplay() {
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    
    const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = display;
    }
}

// Risk calculation functions
function updateHealthRisks(seconds) {
    // 프로필이 없으면 기본값으로 계산
    if (!userProfile || !userProfile.age) {
        console.warn('⚠️ 프로필 없음, 기본값으로 위험도 계산');
        userProfile = {
            gender: 'male',
            age: 30,
            height: 170,
            weight: 70,
            bmi: 24.2
        };
    }
    
    try {
        const risks = {
            cardiovascular: riskFormulas.cardiovascular(seconds, userProfile.age, userProfile.gender),
            diabetes: riskFormulas.diabetes(seconds, userProfile.age, userProfile.bmi || 23),
            backPain: riskFormulas.backPain(seconds),
            obesity: riskFormulas.obesity(seconds, userProfile.age)
        };
        
        // Check if we're on monitor.html page (different element IDs)
        const isMonitorPage = document.getElementById('cardioRisk') !== null;
        
        if (isMonitorPage) {
            // Monitor page element IDs
            const riskElements = {
                cardiovascular: document.getElementById('cardioRisk'),
                diabetes: document.getElementById('diabetesRisk'),
                backPain: document.getElementById('backRisk'),
                obesity: document.getElementById('obesityRisk')
            };
            
            Object.keys(risks).forEach(riskType => {
                const element = riskElements[riskType];
                if (element) {
                    element.textContent = `+${risks[riskType]}%`;
                    
                    // Update risk level styling
                    element.className = 'risk-percentage';
                    if (risks[riskType] < 10) {
                        element.classList.add('risk-low');
                    } else if (risks[riskType] < 20) {
                        element.classList.add('risk-medium');
                    } else {
                        element.classList.add('risk-high');
                    }
                }
            });
        } else {
            // Original page element IDs  
            Object.keys(risks).forEach(riskType => {
                const element = document.getElementById(`${riskType}Risk`);
                if (element) {
                    element.textContent = `${risks[riskType]}%`;
                    
                    const card = element.closest('.risk-card');
                    if (card) {
                        updateRiskCardColor(card, risks[riskType]);
                    }
                } else {
                    console.warn(`⚠️ 위험도 요소 없음: ${riskType}Risk`);
                }
            });
        }
        
        // 디버깅 로그 (1분마다만)
        const minutes = Math.floor(seconds / 60);
        if (minutes > 0 && seconds % 60 === 0) {
            console.log('✅ 위험도 업데이트:', risks);
        }
        
    } catch (error) {
        console.error('❌ 위험도 계산 오류:', error);
    }
}

function updateRiskCardColor(card, riskValue) {
    card.classList.remove('risk-safe', 'risk-warning', 'risk-danger');
    
    if (riskValue < 10) {
        card.classList.add('risk-safe');
    } else if (riskValue < 20) {
        card.classList.add('risk-warning');
    } else {
        card.classList.add('risk-danger');
    }
}

function resetRiskDisplay() {
    const riskTypes = ['cardiovascular', 'diabetes', 'backPain', 'obesity'];
    
    riskTypes.forEach(riskType => {
        const element = document.getElementById(`${riskType}Risk`);
        if (element) {
            element.textContent = '0.00%';
            
            const card = element.closest('.risk-card');
            if (card) {
                card.classList.remove('risk-warning', 'risk-danger');
                card.classList.add('risk-safe');
            }
        }
    });
}

// 위험도 표시 업데이트 함수 (updateTimer에서 호출)
function updateRiskDisplay() {
    if (isTimerRunning && currentTime > 0) {
        const totalSeconds = Math.floor(currentTime / 1000);
        updateHealthRisks(totalSeconds);
    }
}

// Utility functions
function initializeButtonStates() {
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    
    if (startBtn) startBtn.style.display = 'inline-flex';
    if (pauseBtn) pauseBtn.style.display = 'none';
}

function showBreakAlert(minutes) {
    showNotification(`휴식 시간입니다! ${minutes}분 동안 앉아계셨습니다. 잠깐 일어나서 움직여보세요.`, 'warning');
}

function showNotification(message, type = 'info') {
    // Calculate position based on existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    const topOffset = 20 + (existingNotifications.length * 80); // 80px spacing between notifications
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: ${topOffset}px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: ${1000 + existingNotifications.length};
        max-width: 300px;
        font-weight: 500;
        transform: translateX(100%);
        transition: all 0.3s ease;
        opacity: 0;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
                // Reposition remaining notifications
                repositionNotifications();
            }
        }, 300);
    }, 4000);
}

// Helper function to reposition notifications after one is removed
function repositionNotifications() {
    repositionAllNotifications();
}

function showAdvancedNotification(title, message, type = 'info', duration = 5000) {
    // Calculate position based on existing notifications
    const existingNotifications = document.querySelectorAll('.notification, .advanced-notification');
    const topOffset = 20 + (existingNotifications.length * 80);
    
    const notification = document.createElement('div');
    notification.className = `advanced-notification advanced-notification-${type}`;
    
    const colors = {
        success: { bg: '#10b981', border: '#059669' },
        warning: { bg: '#f59e0b', border: '#d97706' },
        error: { bg: '#ef4444', border: '#dc2626' },
        info: { bg: '#3b82f6', border: '#2563eb' }
    };
    
    const color = colors[type] || colors.info;
    
    notification.style.cssText = `
        position: fixed;
        top: ${topOffset}px;
        right: 20px;
        background: ${color.bg};
        border-left: 4px solid ${color.border};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: ${1000 + existingNotifications.length};
        max-width: 350px;
        transform: translateX(100%);
        transition: all 0.3s ease;
        opacity: 0;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 0.5rem;">${title}</div>
        <div style="font-size: 0.9rem; opacity: 0.9;">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto remove after duration
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
                // Reposition remaining notifications
                repositionAllNotifications();
            }
        }, 300);
    }, duration);
}

// Updated helper function to reposition all types of notifications
function repositionAllNotifications() {
    const allNotifications = document.querySelectorAll('.notification, .advanced-notification');
    allNotifications.forEach((notification, index) => {
        const newTopOffset = 20 + (index * 80);
        notification.style.top = `${newTopOffset}px`;
        notification.style.zIndex = 1000 + index;
    });
}

// Social sharing functions
function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('나의 앉기 위험도를 확인해보세요! SitRisk Monitor로 건강을 지키세요.');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('나의 앉기 위험도를 확인해보세요! #건강관리 #직장인건강 #SitRiskMonitor');
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400');
}

function shareToKakao() {
    showNotification('카카오톡 공유 기능은 카카오 개발자 등록 후 이용 가능합니다.', 'info');
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        
        switch(e.key.toLowerCase()) {
            case ' ':
                e.preventDefault();
                if (isTimerRunning) {
                    pauseTimer();
                } else {
                    startTimer();
                }
            break;
            case 'r':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    resetTimer();
                }
            break;
            case 's':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    standUp();
                }
            break;
        }
    });
}

// Storage functions
function saveUserProfile() {
    if (userProfile && Object.keys(userProfile).length > 0) {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
}

function loadUserPreferences() {
    // Browser language auto-detection
    const browserLang = navigator.language || navigator.userLanguage;
    let detectedLang = 'ko'; // default
    
    if (browserLang.startsWith('en')) {
        detectedLang = 'en';
    } else if (browserLang.startsWith('es')) {
        detectedLang = 'es';
    } else if (browserLang.startsWith('ko')) {
        detectedLang = 'ko';
    } else if (browserLang.startsWith('ja')) {
        detectedLang = 'ja';
    }
    
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = detectedLang;
        localStorage.setItem('preferredLanguage', currentLanguage);
    }
    
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        try {
            userProfile = JSON.parse(savedProfile);
            populateUserForm();
        } catch (e) {
            console.log('Could not load saved profile');
        }
    }
}

function populateUserForm() {
    if (!userProfile) return;
    
    const fields = ['gender', 'age', 'height', 'weight'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element && userProfile[field]) {
            element.value = userProfile[field];
        }
    });
}

function handleVisibilityChange() {
    if (document.hidden) {
        if (isTimerRunning) {
            pauseTimer();
            showNotification('탭이 비활성화되어 타이머가 일시정지되었습니다.', 'info');
        }
    }
}

// Total sitting time functions
function loadTotalSittingTime() {
    const saved = localStorage.getItem('totalSittingTime');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            const today = new Date().toDateString();
            const thisWeek = getWeekKey();
            
            // Reset daily time if it's a new day
            if (data.lastDate !== today) {
                data.today = 0;
                data.lastDate = today;
            }
            
            // Reset weekly time if it's a new week
            if (data.lastWeek !== thisWeek) {
                data.thisWeek = 0;
                data.lastWeek = thisWeek;
            }
            
            totalSittingTime = {
                today: data.today || 0,
                thisWeek: data.thisWeek || 0,
                allTime: data.allTime || 0,
                lastSessionTime: 0,
                lastDate: data.lastDate || today,
                lastWeek: data.lastWeek || thisWeek
            };
        } catch (e) {
            console.log('Could not load total sitting time');
            initializeTotalSittingTime();
        }
    } else {
        initializeTotalSittingTime();
    }
}

function initializeTotalSittingTime() {
    const today = new Date().toDateString();
    const thisWeek = getWeekKey();
    
    totalSittingTime = {
        today: 0,
        thisWeek: 0,
        allTime: 0,
        lastSessionTime: 0,
        lastDate: today,
        lastWeek: thisWeek
    };
}

function getWeekKey() {
    const date = new Date();
    const startOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
    return startOfWeek.toDateString();
}

function addToTotalSittingTime(sessionTime) {
    totalSittingTime.today += sessionTime;
    totalSittingTime.thisWeek += sessionTime;
    totalSittingTime.allTime += sessionTime;
    totalSittingTime.lastSessionTime = sessionTime;
    
    saveTotalSittingTime();
    updateTotalTimeDisplay();
}

function saveTotalSittingTime() {
    localStorage.setItem('totalSittingTime', JSON.stringify(totalSittingTime));
}

function updateTotalTimeDisplay() {
    const todayDisplay = document.getElementById('totalTimeDisplay');
    const weeklyDisplay = document.getElementById('weeklyTimeDisplay');
    const allTimeDisplay = document.getElementById('allTimeDisplay');
    
    if (todayDisplay) {
        todayDisplay.textContent = formatTime(totalSittingTime.today);
    }
    if (weeklyDisplay) {
        weeklyDisplay.textContent = formatTime(totalSittingTime.thisWeek);
    }
    if (allTimeDisplay) {
        allTimeDisplay.textContent = formatTime(totalSittingTime.allTime);
    }
}

function formatTime(milliseconds) {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTotalTime() {
    if (confirm('정말로 모든 누적 시간을 초기화하시겠습니까?')) {
        initializeTotalSittingTime();
        saveTotalSittingTime();
        updateTotalTimeDisplay();
        showNotification('누적 시간이 초기화되었습니다.', 'info');
    }
}

// Add new function to update total time display in real-time
function updateRealTimeTotalDisplay() {
    // Don't run on monitor.html page to prevent conflicts
    if (document.getElementById('timerDisplay')) {
        // This is monitor.html, skip to prevent conflicts
        return;
    }
    
    const todayDisplay = document.getElementById('totalTimeDisplay');
    const weeklyDisplay = document.getElementById('weeklyTimeDisplay');
    const allTimeDisplay = document.getElementById('allTimeDisplay');
    
    if (todayDisplay) {
        todayDisplay.textContent = formatTime(totalSittingTime.today + currentTime);
    }
    if (weeklyDisplay) {
        weeklyDisplay.textContent = formatTime(totalSittingTime.thisWeek + currentTime);
    }
    if (allTimeDisplay) {
        allTimeDisplay.textContent = formatTime(totalSittingTime.allTime + currentTime);
    }
}

// 타이머가 1시간(3600초) 경과 시 알림
function checkOneHourNotification() {
    if (currentTime >= 3600000 && !window._oneHourNotified) {
        window._oneHourNotified = true;
        sendOneHourNotification();
    }
    // 1시간 미만으로 다시 돌아가면 플래그 해제(리셋/일어섬 등)
    if (currentTime < 3600000) {
        window._oneHourNotified = false;
    }
}

function sendOneHourNotification() {
    const message = '앉은지 1시간 경과, 5분만 일어서세요';
    // 브라우저 알림
    if (window.Notification && Notification.permission !== 'denied') {
        if (Notification.permission === 'granted') {
            new Notification(message);
        } else {
            Notification.requestPermission().then(function(permission) {
                if (permission === 'granted') {
                    new Notification(message);
                }
            });
        }
    }
    // 추가로 in-app 알림도 띄우기
    if (typeof showNotification === 'function') {
        showNotification(message, 'warning');
    }
}

// 현재 평균 위험도를 계산하는 함수 (디버깅용)
function getCurrentRiskLevel() {
    if (!userProfile || !userProfile.age) return 0;
    
    const totalSeconds = Math.floor(currentTime / 1000);
    const risks = {
        cardiovascular: riskFormulas.cardiovascular(totalSeconds, userProfile.age, userProfile.gender),
        diabetes: riskFormulas.diabetes(totalSeconds, userProfile.age, userProfile.bmi || 23),
        backPain: riskFormulas.backPain(totalSeconds),
        obesity: riskFormulas.obesity(totalSeconds, userProfile.age)
    };
    
    const avgRisk = (risks.cardiovascular + risks.diabetes + risks.backPain + risks.obesity) / 4;
    return Math.round(avgRisk * 100) / 100;
}

// Initialize timer functions for monitor.html page
function initializeTimer() {
    console.log('🔧 Initializing timer event listeners...');
    
    // Get button elements
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Add event listeners
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            console.log('▶️ Start button clicked');
            startTimer();
        });
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            console.log('⏸️ Pause button clicked');
            pauseTimer();
        });
    }
    
    if (stopBtn) {
        stopBtn.addEventListener('click', () => {
            console.log('⏹️ Stop button clicked');
            standUp();
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            console.log('🔄 Reset button clicked');
            resetTimer();
        });
    }
    
    console.log('✅ Timer event listeners initialized');
}

// Update timer display function for monitor.html
function updateTimerDisplayMonitor() {
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    
    const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update timer display
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.textContent = display;
    }
    
    // Update timer status
    const timerStatus = document.getElementById('timerStatus');
    if (timerStatus) {
        if (isTimerRunning) {
            timerStatus.textContent = 'Timer Running';
            timerStatus.className = 'timer-status status-active';
        } else if (currentTime > 0) {
            timerStatus.textContent = 'Timer Paused';
            timerStatus.className = 'timer-status status-paused';
        } else {
            timerStatus.textContent = 'Ready to Start';
            timerStatus.className = 'timer-status status-stopped';
        }
    }
}

// Override the updateTimerDisplay function for monitor page
function updateTimerDisplay() {
    if (document.getElementById('timerDisplay')) {
        // Monitor page
        updateTimerDisplayMonitor();
    } else {
        // Original function for other pages
        const hours = Math.floor(currentTime / 3600000);
        const minutes = Math.floor((currentTime % 3600000) / 60000);
        const seconds = Math.floor((currentTime % 60000) / 1000);
        
        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const timeDisplay = document.getElementById('timeDisplay');
        if (timeDisplay) {
            timeDisplay.textContent = display;
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SitRisk Monitor 시작...');
    
    // monitor.html 페이지인지 확인
    const isMonitorPage = window.location.pathname.includes('monitor.html') || 
                         document.getElementById('timeDisplay') !== null;
    
    if (isMonitorPage) {
        console.log('📊 Monitor 페이지 감지 - 강제 초기화 시작');
        
        // 1. 프로필 강제 로드 (localStorage에서)
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            try {
                userProfile = JSON.parse(savedProfile);
                console.log('✅ 프로필 로드 성공:', userProfile);
            } catch (e) {
                console.warn('⚠️ 프로필 로드 실패, 기본값 사용');
                userProfile = {
                    gender: 'male',
                    age: 30,
                    height: 170,
                    weight: 70,
                    bmi: 24.2
                };
            }
        } else {
            console.warn('⚠️ 프로필 없음, 기본값 사용');
            userProfile = {
                gender: 'male',
                age: 30,
                height: 170,
                weight: 70,
                bmi: 24.2
            };
        }
        
        // 2. 총 앉은 시간 로드
        loadTotalSittingTime();
        
        // 3. 화면 업데이트
        updateTimerDisplay();
        updateTotalTimeDisplay();
        resetRiskDisplay();
        
        // 4. 버튼 상태 초기화
        initializeButtonStates();
        
        console.log('✅ Monitor 페이지 초기화 완료!');
        console.log('  - 프로필:', userProfile);
        console.log('  - 총시간:', totalSittingTime);
    } else {
        // 기존 초기화 로직 (index.html용)
        initializeApp();
    }
}); 
