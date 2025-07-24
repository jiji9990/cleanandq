# Cloudflare Pages 배포 체크리스트

## 1. 필수 파일 확인
- [x] `functions/[[route]].js` - Serverless 함수
- [x] `_redirects` - 리다이렉트 설정
- [x] `wrangler.toml` - Cloudflare 설정
- [x] `package.json` - 루트 빌드 설정
- [x] `app/package.json` - 앱 의존성

## 2. Cloudflare Pages 설정

### GitHub 연동
1. Cloudflare Dashboard → Pages
2. "Create a project" → "Connect to Git"
3. 저장소 선택: `leejun002/cleanandq`
4. 브랜치: `main`

### 빌드 설정
```
Framework preset: None
Build command: npm run build
Build output directory: app/src/public
Root directory: (비워둠)
Environment variables:
  NODE_VERSION = 22
  NODE_ENV = production
```

## 3. 도메인 설정 (가비아)

### 가비아 DNS 설정
1. 가비아 관리콘솔 로그인
2. 도메인 → DNS 관리
3. 다음 레코드 추가/수정:

```
Type: CNAME
Name: @
Value: [project-name].pages.dev
TTL: 3600

Type: CNAME  
Name: www
Value: [project-name].pages.dev
TTL: 3600
```

### Cloudflare Pages에서 도메인 추가
1. Pages 프로젝트 → "Custom domains"
2. "Set up a custom domain" 클릭
3. `크린앤q.com` 입력
4. DNS 소유권 확인

## 4. 테스트

### 로컬 테스트
```bash
# 의존성 설치
npm install
cd app && npm install

# 로컬 서버 시작 (기존 Express)
cd app && npm start

# Cloudflare Pages 시뮬레이션 (Wrangler 설치 후)
npm install -g wrangler
wrangler pages dev app/src/public --functions functions
```

### 배포 후 테스트
- [ ] 메인 페이지 (`/`)
- [ ] 한스톤 페이지 (`/hanstone`)
- [ ] 홈사시 페이지 (`/homesash`)
- [ ] 로그인 페이지 (`/login`)
- [ ] 정적 파일 (CSS, JS, 이미지)
- [ ] robots.txt
- [ ] 404 페이지

## 5. 성능 최적화

### Cloudflare 설정
- [ ] Auto Minify (HTML, CSS, JS)
- [ ] Brotli 압축
- [ ] Polish (이미지 최적화)
- [ ] Rocket Loader (JS 최적화)

### 캐싱 설정
- [ ] Browser Cache TTL
- [ ] Edge Cache TTL
- [ ] Development Mode (개발 시 비활성화)

## 6. 모니터링 설정

### Analytics
- [ ] Cloudflare Analytics 활성화
- [ ] Web Analytics 설치
- [ ] Real User Monitoring

### 알림
- [ ] 에러 알림 설정
- [ ] 성능 임계값 설정

## 7. 보안 설정

### SSL/TLS
- [ ] Full (strict) 모드
- [ ] Always Use HTTPS
- [ ] HSTS 활성화

### 방화벽
- [ ] Security Level: Medium
- [ ] Bot Fight Mode
- [ ] Rate Limiting (필요시)

## 8. 백업 및 롤백

### 버전 관리
- [ ] Git 태그 생성
- [ ] 배포 전 백업
- [ ] 롤백 계획 수립

## 주의사항

1. **세션 관리**: Cloudflare Pages Functions는 stateless이므로 세션 데이터는 외부 저장소 필요
2. **환경 변수**: 민감한 정보는 Cloudflare Pages 환경 변수로 설정
3. **파일 크기**: Functions는 1MB 제한
4. **실행 시간**: 최대 30초 (CPU 시간 기준)

## 문제 해결

### 자주 발생하는 오류
1. **빌드 실패**: `npm run build` 로컬에서 테스트
2. **Functions 오류**: 브라우저 개발자 도구 확인
3. **정적 파일 404**: 경로 확인 (`app/src/public`)
4. **도메인 연결 실패**: DNS 전파 시간 대기 (최대 48시간)

### 디버깅 도구
- Cloudflare Dashboard → Pages → Functions 로그
- 브라우저 개발자 도구
- `wrangler pages dev` 로컬 테스트
