# 크린앤Q - Cloudflare Pages 배포 가이드

## 개요
이 프로젝트는 CloudType에서 Cloudflare Pages로 이전된 크린앤Q 웹사이트입니다.

## 배포 방법

### 1. Cloudflare Pages 설정

1. **Cloudflare Dashboard**에 로그인
2. **Pages** 섹션으로 이동
3. **Create a project** 클릭
4. **Connect to Git** 선택
5. GitHub 저장소 연결 (`leejun002/cleanandq`)

### 2. 빌드 설정

```
Build command: npm run build
Build output directory: app/src/public
Root directory: (leave empty)
```

### 3. 환경 변수 설정

Cloudflare Pages 대시보드에서 다음 환경 변수들을 설정:

```
NODE_VERSION=22
NODE_ENV=production
```

### 4. 커스텀 도메인 설정

1. Cloudflare Pages 프로젝트에서 **Custom domains** 탭
2. **Set up a custom domain** 클릭
3. `크린앤q.com` 입력
4. DNS 설정 확인

## 프로젝트 구조

```
/
├── functions/
│   └── [[route]].js          # Cloudflare Pages Functions
├── app/
│   ├── src/
│   │   ├── public/            # 정적 파일 (CSS, JS, 이미지)
│   │   ├── routes/            # 라우팅 로직
│   │   └── views/             # EJS 템플릿
│   ├── package.json
│   └── server.js
├── _redirects                 # 리다이렉트 설정
├── wrangler.toml             # Cloudflare 설정
└── package.json              # 루트 패키지 설정
```

## 로컬 개발

### 1. 의존성 설치
```bash
npm install
cd app && npm install
```

### 2. 개발 서버 시작
```bash
# Cloudflare Pages 시뮬레이션
npm run preview

# 또는 기존 Express 서버
cd app && npm run dev
```

## 주요 변경사항

### CloudType vs Cloudflare Pages

| 항목 | CloudType | Cloudflare Pages |
|------|-----------|------------------|
| 서버 타입 | Node.js 서버 | Serverless Functions + 정적 호스팅 |
| 포트 | 8080 | 자동 할당 |
| 환경 변수 | Dashboard에서 설정 | wrangler.toml + Dashboard |
| 도메인 | 자동 연결 | 커스텀 도메인 설정 필요 |

### 기능 제약사항

1. **세션 관리**: Cloudflare Pages Functions는 stateless이므로 외부 데이터베이스 필요
2. **파일 업로드**: 제한적, Cloudflare R2 사용 권장
3. **WebSocket**: 지원하지 않음

## 도메인 설정 (가비아)

### 1. 가비아 DNS 설정
가비아 도메인 관리에서 DNS 설정:

```
Type: CNAME
Name: @
Value: [your-pages-project].pages.dev
TTL: 3600
```

### 2. Cloudflare에서 도메인 확인
- Cloudflare Pages 대시보드에서 도메인 소유권 확인
- SSL/TLS 자동 설정 확인

## 트러블슈팅

### 빌드 오류
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### Functions 오류
- `functions/[[route]].js`의 export 문법 확인
- 브라우저 개발자 도구에서 네트워크 탭 확인

### 정적 파일 404
- `app/src/public` 경로 확인
- 빌드 출력 디렉토리 설정 확인

## 성능 최적화

1. **이미지 최적화**: Cloudflare Polish 활성화
2. **CDN 캐싱**: 자동으로 전 세계에 배포
3. **압축**: Brotli/Gzip 자동 적용
4. **SSL**: 자동 HTTPS

## 모니터링

- Cloudflare Analytics에서 트래픽 모니터링
- Pages Functions 로그 확인
- 성능 메트릭 추적

## 지원

문의사항이 있으시면 GitHub Issues를 통해 연락주세요.
