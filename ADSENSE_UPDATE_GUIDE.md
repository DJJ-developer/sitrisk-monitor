# 🔧 AdSense 승인 후 GitHub 파일 업데이트 가이드

## 📋 승인 후 해야 할 일 (5분 소요)

### **1단계: AdSense 실제 ID 확인**
AdSense 승인 이메일에서 받은 실제 Publisher ID:
```
예시: ca-pub-1234567890123456
```

### **2단계: GitHub 파일 수정**
다음 2개 파일을 수정해야 합니다:

#### A. index.html 수정
**위치**: 413번째 줄
```html
<!-- 기존 코드 (삭제) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>

<!-- 새로운 코드 (추가) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
```

#### B. monitor.html 수정  
**위치**: 487번째 줄
```html
<!-- 기존 코드 (삭제) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>

<!-- 새로운 코드 (추가) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
```

### **3단계: 광고 유닛 ID 추가**
adsense-setup.js 파일 수정:
```javascript
// 기존 (4번째 줄부터)
const AD_UNITS = {
    banner_top: 'ca-app-pub-XXXXXXXXXX/YYYYYYYYYY',
    banner_bottom: 'ca-app-pub-XXXXXXXXXX/ZZZZZZZZZZ',
    sidebar_rectangle: 'ca-app-pub-XXXXXXXXXX/AAAAAAAAAA',
    mobile_banner: 'ca-app-pub-XXXXXXXXXX/BBBBBBBBBB'
};

// 새로운 (실제 광고 유닛 ID로 교체)
const AD_UNITS = {
    banner_top: 'ca-app-pub-1234567890123456/1111111111',
    banner_bottom: 'ca-app-pub-1234567890123456/2222222222',
    sidebar_rectangle: 'ca-app-pub-1234567890123456/3333333333',
    mobile_banner: 'ca-app-pub-1234567890123456/4444444444'
};
```

### **4단계: GitHub에 업데이트된 파일 다시 업로드**

#### 방법 1: 웹 인터페이스 사용
1. GitHub 저장소 접속
2. 수정할 파일 클릭 (index.html)
3. ✏️ 편집 버튼 클릭
4. 코드 수정
5. "Commit changes" 클릭
6. monitor.html도 동일하게 수정

#### 방법 2: 파일 전체 재업로드
1. 로컬에서 파일 수정
2. GitHub 저장소에서 기존 파일 삭제
3. 수정된 파일 다시 업로드

### **5단계: 변경사항 확인**
업데이트 후 사이트 접속해서 확인:
```
https://djj-developer.github.io/sitrisk-monitor/
```

---

## ⏰ 타이밍 안내

```
📅 지금: AdSense 신청 (임시 코드로 승인 받기)
📅 3-7일 후: AdSense 승인 이메일 받기
📅 승인 즉시: GitHub 파일 수정 (실제 ID로 교체)
📅 수정 후 5분: 광고 표시 시작
📅 24시간 후: 첫 수익 확인 가능
```

## 💡 중요 포인트

1. **지금은 수정하지 마세요**: 임시 코드로 먼저 승인을 받아야 합니다
2. **승인 후에만 수정**: 실제 ID를 받은 후에 수정해야 합니다  
3. **2개 파일 모두 수정**: index.html과 monitor.html 둘 다 수정해야 합니다
4. **즉시 수익화**: 수정 후 바로 광고가 표시되고 수익이 시작됩니다

---

**🎯 결론: 지금은 AdSense 신청만 하고, 승인 후에 GitHub 파일을 수정하면 됩니다!** 