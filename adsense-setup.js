// Google AdSense Setup for SitRisk Monitor
// Use this file after getting AdSense approval

// Configuration
const ADSENSE_CONFIG = {
    publisher_id: 'ca-pub-3615711537957949', // Replace with your actual publisher ID
    ad_slots: {
        top_banner: '1234567890',    // Replace with actual ad slot ID
        middle_banner: '1234567891', // Replace with actual ad slot ID  
        bottom_banner: '1234567892'  // Replace with actual ad slot ID
    }
};

// Initialize AdSense ads after approval
function initializeAdSense() {
    console.log('Initializing AdSense...');
    
    // Only run if AdSense is approved and script is loaded
    if (typeof window.adsbygoogle === 'undefined') {
        console.log('AdSense not yet approved or script not loaded');
        return;
    }

    loadTopBannerAd();
    loadMiddleBannerAd();
    loadBottomBannerAd();
}

// Load top banner ad
function loadTopBannerAd() {
    const topBanner = document.getElementById('top-ad-banner');
    if (topBanner) {
        topBanner.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${ADSENSE_CONFIG.publisher_id}"
                 data-ad-slot="${ADSENSE_CONFIG.ad_slots.top_banner}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        `;
        
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Error loading top banner ad:', e);
        }
    }
}

// Load middle banner ad
function loadMiddleBannerAd() {
    const middleBanner = document.getElementById('middle-ad-banner');
    if (middleBanner) {
        middleBanner.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${ADSENSE_CONFIG.publisher_id}"
                 data-ad-slot="${ADSENSE_CONFIG.ad_slots.middle_banner}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        `;
        
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Error loading middle banner ad:', e);
        }
    }
}

// Load bottom banner ad
function loadBottomBannerAd() {
    const bottomBanner = document.getElementById('bottom-ad-banner');
    if (bottomBanner) {
        bottomBanner.innerHTML = `
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${ADSENSE_CONFIG.publisher_id}"
                 data-ad-slot="${ADSENSE_CONFIG.ad_slots.bottom_banner}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        `;
        
        try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Error loading bottom banner ad:', e);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for page to fully load before initializing ads
    setTimeout(initializeAdSense, 2000);
});

// Optional: Initialize ads when page becomes visible (for better performance)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && typeof window.adsbygoogle !== 'undefined') {
        initializeAdSense();
    }
});
