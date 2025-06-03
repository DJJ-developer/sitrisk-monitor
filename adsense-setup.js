// 🚀 SitRisk Monitor - Google AdSense 고급 설정
// 애드센스 승인 후 이 파일을 사용하여 수익을 극대화하세요

// 1. 광고 유닛 ID 설정 (승인 후 실제 ID로 교체)
const AD_UNITS = {
    banner_top: 'ca-app-pub-XXXXXXXXXX/YYYYYYYYYY',
    banner_bottom: 'ca-app-pub-XXXXXXXXXX/ZZZZZZZZZZ',
    sidebar_rectangle: 'ca-app-pub-XXXXXXXXXX/AAAAAAAAAA',
    mobile_banner: 'ca-app-pub-XXXXXXXXXX/BBBBBBBBBB'
};

// 2. 반응형 광고 로딩 함수
function loadResponsiveAds() {
    // 상단 배너 광고
    const topBanner = document.querySelector('.ad-banner-top');
    if (topBanner) {
        topBanner.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXX"
                 data-ad-slot="${AD_UNITS.banner_top}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        `;
    }

    // 하단 배너 광고
    const bottomBanner = document.querySelector('.ad-banner-bottom');
    if (bottomBanner) {
        bottomBanner.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXX"
                 data-ad-slot="${AD_UNITS.banner_bottom}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        `;
    }

    // 사이드바 광고 (데스크톱만)
    const sidebar = document.querySelector('.ad-sidebar');
    if (sidebar && window.innerWidth > 768) {
        sidebar.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXX"
                 data-ad-slot="${AD_UNITS.sidebar_rectangle}"
                 data-ad-format="rectangle"></ins>
        `;
    }

    // 모바일 전용 광고
    if (window.innerWidth <= 768) {
        const mobileAd = document.createElement('div');
        mobileAd.className = 'mobile-ad-unit';
        mobileAd.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-XXXXXXXXXX"
                 data-ad-slot="${AD_UNITS.mobile_banner}"
                 data-ad-format="banner"></ins>
        `;
        
        // 위험도 카드 사이에 삽입
        const riskSection = document.querySelector('.risk-section');
        if (riskSection) {
            riskSection.appendChild(mobileAd);
        }
    }

    // 광고 로드
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// 3. 수익 최적화 설정
function optimizeAdRevenue() {
    // A/B 테스트용 광고 위치 변경
    const currentHour = new Date().getHours();
    
    // 피크 시간대 (오후 1-6시) 광고 밀도 증가
    if (currentHour >= 13 && currentHour <= 18) {
        addPeakTimeAds();
    }
    
    // 모바일 최적화
    if (window.innerWidth <= 768) {
        optimizeMobileAds();
    }
}

// 4. 피크 시간대 추가 광고
function addPeakTimeAds() {
    const additionalAdSpots = [
        '.profile-section',
        '.timer-section',
        '.risk-section'
    ];
    
    additionalAdSpots.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element && Math.random() > 0.5) { // 50% 확률로 표시
            const adUnit = document.createElement('div');
            adUnit.className = 'peak-time-ad';
            adUnit.style.cssText = 'margin: 20px 0; text-align: center;';
            adUnit.innerHTML = `
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-XXXXXXXXXX"
                     data-ad-slot="PEAK-TIME-SLOT-${index}"
                     data-ad-format="fluid"></ins>
            `;
            element.appendChild(adUnit);
        }
    });
}

// 5. 모바일 광고 최적화
function optimizeMobileAds() {
    // 스크롤 위치에 따른 광고 표시
    let scrollAdShown = false;
    
    window.addEventListener('scroll', () => {
        if (!scrollAdShown && window.scrollY > window.innerHeight * 0.7) {
            insertScrollAd();
            scrollAdShown = true;
        }
    });
}

function insertScrollAd() {
    const scrollAd = document.createElement('div');
    scrollAd.className = 'scroll-triggered-ad';
    scrollAd.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        padding: 10px;
        text-align: center;
    `;
    
    scrollAd.innerHTML = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXX"
             data-ad-slot="MOBILE-STICKY-BOTTOM"
             data-ad-format="banner"></ins>
        <button onclick="this.parentElement.remove()" 
                style="position: absolute; top: 5px; right: 10px; 
                       background: #ccc; border: none; border-radius: 50%; 
                       width: 25px; height: 25px; cursor: pointer;">×</button>
    `;
    
    document.body.appendChild(scrollAd);
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// 6. 수익 추적 및 분석
function trackAdPerformance() {
    // 광고 노출 추적
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const adType = entry.target.className;
                console.log(`광고 노출: ${adType}`);
                
                // Google Analytics 이벤트 전송
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'ad_impression', {
                        'ad_type': adType,
                        'page_location': window.location.href
                    });
                }
            }
        });
    });
    
    // 모든 광고 유닛 관찰
    document.querySelectorAll('.adsbygoogle').forEach(ad => {
        observer.observe(ad);
    });
}

// 7. 초기화 함수
function initializeAdSense() {
    console.log('🚀 AdSense 고급 설정 시작...');
    
    // 페이지 로드 후 광고 로드
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                loadResponsiveAds();
                optimizeAdRevenue();
                trackAdPerformance();
            }, 1000);
        });
    } else {
        setTimeout(() => {
            loadResponsiveAds();
            optimizeAdRevenue();
            trackAdPerformance();
        }, 1000);
    }
    
    console.log('✅ AdSense 설정 완료!');
}

// 자동 초기화
initializeAdSense();

// 8. 수익 예상 계산기 연동
function estimateAdRevenue() {
    const dailyVisitors = parseInt(localStorage.getItem('estimated_daily_visitors') || '100');
    const ctr = 0.05; // 5% 클릭률
    const cpc = 0.3; // 클릭당 30원
    
    const dailyRevenue = dailyVisitors * ctr * cpc;
    const monthlyRevenue = dailyRevenue * 30;
    
    console.log(`💰 예상 수익: 일 ${dailyRevenue.toFixed(0)}원, 월 ${monthlyRevenue.toFixed(0)}원`);
    
    return {
        daily: dailyRevenue,
        monthly: monthlyRevenue,
        yearly: monthlyRevenue * 12
    };
}

// 9. 광고 차단 감지 및 대응
function detectAdBlocker() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    testAd.style.cssText = 'position: absolute; left: -10000px;';
    document.body.appendChild(testAd);
    
    setTimeout(() => {
        if (testAd.offsetHeight === 0) {
            showAdBlockerMessage();
        }
        testAd.remove();
    }, 100);
}

function showAdBlockerMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0;
        background: #f59e0b; color: white; padding: 15px;
        text-align: center; z-index: 9999;
        font-weight: bold;
    `;
    message.innerHTML = `
        ⚠️ 광고 차단기가 감지되었습니다. 
        무료 서비스 제공을 위해 광고를 허용해주세요. 
        <button onclick="this.parentElement.remove()" 
                style="margin-left: 10px; padding: 5px 10px; 
                       background: white; color: #f59e0b; border: none; 
                       border-radius: 3px; cursor: pointer;">닫기</button>
    `;
    document.body.appendChild(message);
}

// 초기화 시 광고 차단기 감지
setTimeout(detectAdBlocker, 2000);

// 10. 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadResponsiveAds,
        optimizeAdRevenue,
        trackAdPerformance,
        estimateAdRevenue
    };
} 