# 🚀 Sitting Health Monitor - 배포 가이드

## 💰 수익 목표: 월 200만원

### 1. 도메인 및 호스팅 설정

#### 추천 도메인명:
- `sittingrisk.com` (영어권 타겟)
- `앉기위험.com` (한국 타겟)
- `healthsitting.net`
- `riskometer.com`

#### 호스팅 옵션:
1. **Netlify** (무료 시작, 자동 배포)
2. **Vercel** (무료 시작, 빠른 CDN)
3. **GitHub Pages** (완전 무료)
4. **AWS S3 + CloudFront** (확장성 좋음)

### 2. Google AdSense 설정

#### 광고 배치 전략:
```html
<!-- 헤더 배너 (728x90) -->
<div class="ad-banner-top">
  <!-- AdSense 코드 -->
</div>

<!-- 사이드바 광고 (300x250) -->
<div class="ad-sidebar">
  <!-- AdSense 코드 -->
</div>

<!-- 하단 배너 (728x90) -->
<div class="ad-banner-bottom">
  <!-- AdSense 코드 -->
</div>
```

#### 예상 수익 계산:
- 일일 방문자: 1,000명
- 페이지뷰: 5,000 (세션당 5페이지)
- CTR: 2%
- CPC: $0.50
- **일일 수익: $50 (약 65,000원)**
- **월 수익: $1,500 (약 195만원)**

### 3. SEO 최적화

#### 메타 태그 추가:
```html
<meta name="description" content="실시간 앉기 위험도 측정 - 심혈관질환, 당뇨병, 비만 위험을 즉시 확인하세요">
<meta name="keywords" content="앉기 위험, 건강 모니터링, 심혈관질환, 당뇨병 예방, 직장인 건강">
<meta property="og:title" content="앉기 위험도 실시간 측정기">
<meta property="og:description" content="앉아있는 시간이 늘어날수록 증가하는 질병 위험을 실시간으로 확인하세요">
```

#### 타겟 키워드:
- "앉기 위험"
- "직장인 건강"
- "앉아있으면 생기는 병"
- "sitting health risks"
- "desk job health"

### 4. 마케팅 전략

#### 소셜미디어:
- **인스타그램**: 직장인 건강 팁 포스팅
- **유튜브**: "앉기의 숨겨진 위험" 영상 제작
- **블로그**: 네이버, 티스토리에 건강 관련 포스팅

#### 바이럴 요소:
- 친구들과 위험도 비교 기능
- 소셜 공유 버튼
- "나의 앉기 위험도는 XX%" 공유 이미지

### 5. 배포 단계별 가이드

#### Step 1: Netlify 배포
```bash
# 1. GitHub 레포지토리 생성
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/sitting-health-monitor
git push -u origin main

# 2. Netlify에서 GitHub 연결하여 자동 배포
```

#### Step 2: 도메인 연결
1. 도메인 구매 (가비아, 후이즈 등)
2. Netlify DNS 설정
3. SSL 인증서 자동 적용

#### Step 3: Google AdSense 신청
1. 사이트 트래픽 확보 (최소 1주일)
2. AdSense 계정 생성 및 사이트 등록
3. 승인 후 광고 코드 삽입

### 6. 수익 최적화 팁

#### 사용자 체류시간 증가:
- 매 30분마다 알림으로 재방문 유도
- 일일/주간 건강 리포트 제공
- 개인 건강 기록 저장 기능

#### 추가 수익원:
- 건강 관련 제품 affiliate 마케팅
- 프리미엄 기능 (상세 분석, 맞춤 운동법)
- 기업 B2B 서비스 (직장 건강관리)

### 7. 법적 고려사항

#### 개인정보처리방침:
```html
<!-- 필수 포함 내용 -->
- 수집하는 개인정보 항목
- 개인정보 수집 및 이용목적
- 개인정보 보유 및 이용기간
- 개인정보 제3자 제공
```

#### 의료 면책조항:
```html
<div class="disclaimer">
  본 서비스는 의학적 진단이나 치료를 대체하지 않습니다. 
  건강상 문제가 있으시면 전문의와 상담하시기 바랍니다.
</div>
```

### 8. 성장 로드맵

#### 1개월 목표:
- 일일 방문자 500명
- AdSense 승인
- 월 수익 50만원

#### 3개월 목표:
- 일일 방문자 1,500명
- 월 수익 200만원 달성
- 모바일 앱 개발 시작

#### 6개월 목표:
- 일일 방문자 5,000명
- 월 수익 500만원
- 해외 진출 (영어, 일본어 버전)

### 9. 즉시 실행 체크리스트

- [ ] GitHub 레포지토리 생성
- [ ] 도메인 구매
- [ ] Netlify 배포
- [ ] Google Analytics 설정
- [ ] Google Search Console 등록
- [ ] AdSense 신청 준비
- [ ] 소셜미디어 계정 생성
- [ ] 첫 마케팅 포스팅 작성

**예상 초기 투자비용:**
- 도메인: 연 15,000원
- 호스팅: 무료 (Netlify)
- **총 투자비: 15,000원**

**예상 회수 기간: 1개월 이내** 