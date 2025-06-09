# 🌐 AdSense 승인을 위한 커스텀 도메인 설정 가이드

## 🎯 문제 상황
- GitHub Pages의 `djj-developer.github.io`는 서브도메인으로 인식
- AdSense는 최상위 도메인(TLD)만 승인
- 해결책: 독립 도메인 구매 후 GitHub Pages 연결

## 💰 저렴한 도메인 추천 (연간 1-2만원)

### **국내 업체**
1. **가비아** (gabia.com)
   - `.com`: 연 19,800원
   - `.net`: 연 16,500원
   - `.co.kr`: 연 22,000원

2. **카페24** (cafe24.com)
   - `.com`: 연 15,400원
   - `.net`: 연 13,200원

3. **후이즈** (whois.co.kr)
   - `.com`: 연 13,200원
   - `.kr`: 연 8,800원

### **해외 업체 (더 저렴)**
1. **Namecheap** (namecheap.com)
   - `.com`: $8.88/년 (약 12,000원)
   - `.xyz`: $1.16/년 (약 1,500원) ⭐ 추천
   - `.top`: $0.98/년 (약 1,300원)

2. **Porkbun** (porkbun.com)
   - `.com`: $7.65/년 (약 10,000원)
   - `.dev`: $12.74/년 (약 17,000원)

## 🛠️ 도메인 연결 단계별 가이드

### **1단계: 도메인 구매**
추천 도메인 예시:
```
sitrisk-monitor.com
djj-risk.com  
risk-monitor.xyz
sit-risk.top
```

### **2단계: GitHub Pages 설정**
1. GitHub 저장소 → `Settings` → `Pages`
2. `Custom domain`에 구매한 도메인 입력
3. `Enforce HTTPS` 체크

### **3단계: DNS 설정**
도메인 업체 DNS 관리에서 설정:

#### A. 루트 도메인 연결 (example.com)
```
Type: A
Name: @ (또는 비워둠)
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

#### B. www 서브도메인 연결 (www.example.com)
```
Type: CNAME
Name: www
Value: djj-developer.github.io
```

### **4단계: 파일 수정**
도메인 연결 후 모든 HTML 파일의 URL 참조를 새 도메인으로 수정:

```html
<!-- 기존 -->
<link rel="canonical" href="https://djj-developer.github.io/sitrisk-monitor/">

<!-- 새로운 -->
<link rel="canonical" href="https://your-new-domain.com/">
```

### **5단계: AdSense 재신청**
새 도메인으로 AdSense 신청:
```
도메인: your-new-domain.com (http://나 https:// 제외)
```

## ⚡ 빠른 실행 계획

### **오늘 할 일:**
1. **Namecheap에서 `.xyz` 도메인 구매** (약 1,500원)
2. **GitHub Pages에 도메인 연결**
3. **DNS 설정** (10분 소요)

### **내일 할 일:**
1. **도메인 연결 확인**
2. **AdSense 재신청**
3. **승인 대기** (3-7일)

## 🎯 도메인 구매 우선순위

1. **`.xyz`** - 가장 저렴 (연 1,500원)
2. **`.com`** - 가장 신뢰도 높음 (연 12,000원)
3. **`.net`** - 균형잡힌 선택 (연 10,000원)

## 📋 체크리스트

- [ ] 도메인 구매
- [ ] GitHub Pages 커스텀 도메인 설정
- [ ] DNS A 레코드 설정
- [ ] DNS CNAME 레코드 설정
- [ ] HTTPS 활성화 확인
- [ ] 새 도메인으로 사이트 접속 확인
- [ ] HTML 파일들의 URL 참조 수정
- [ ] AdSense 재신청

---

## 💡 팁

1. **도메인 이름 선택**: 브랜드명과 관련있고 기억하기 쉬운 이름
2. **DNS 전파**: 설정 후 24-48시간 소요 가능
3. **백업**: 기존 github.io 주소도 계속 작동

**🚀 가장 빠른 방법: Namecheap에서 `.xyz` 도메인 구매 → 당일 설정 완료 가능!** 