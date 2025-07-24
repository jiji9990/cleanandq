// Cloudflare Pages Functions를 위한 Express 앱 어댑터
const path = require('path');

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      
      // 정적 파일 요청인지 확인
      const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.woff', '.woff2'];
      const isStaticFile = staticExtensions.some(ext => pathname.endsWith(ext));
      
      if (isStaticFile) {
        // 정적 파일은 그대로 전달 (Cloudflare Pages가 자동 처리)
        return fetch(request);
      }
      
      // HTML 응답 생성
      let htmlContent = '';
      
      if (pathname === '/' || pathname === '/main') {
        htmlContent = await generateMainPage();
      } else if (pathname === '/hanstone') {
        htmlContent = await generateHanstonePage();
      } else if (pathname === '/homesash') {
        htmlContent = await generateHomesashPage();
      } else if (pathname === '/login') {
        htmlContent = await generateLoginPage();
      } else if (pathname === '/register') {
        htmlContent = await generateRegisterPage();
      } else if (pathname === '/robots.txt') {
        return new Response("User-agent: *\nAllow:/", {
          headers: { 'Content-Type': 'text/plain' }
        });
      } else {
        // 404 페이지
        htmlContent = await generate404Page();
      }
      
      return new Response(htmlContent, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
      
    } catch (error) {
      console.error('Error:', error);
      return new Response('Internal Server Error', { 
        status: 500,
        headers: { 'Content-Type': 'text/html' }
      });
    }
  }
};

// 각 페이지 생성 함수들
async function generateMainPage() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>크린앤Q - 인테리어 시공 전문</title>
    <link rel="stylesheet" href="/css/home/main.css">
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <header>
        <div class="logo">
            <img src="/pic/main/clnqlogo.png" alt="크린앤Q 로고">
        </div>
        <nav>
            <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/hanstone">한스톤</a></li>
                <li><a href="/homesash">홈사시</a></li>
                <li><a href="/login">로그인</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>크린앤Q</h1>
            <p>인테리어 시공 전문업체</p>
        </section>
        
        <section class="services">
            <div class="service-item">
                <img src="/pic/main/bath.jpg" alt="욕실">
                <h3>욕실 리모델링</h3>
            </div>
            <div class="service-item">
                <img src="/pic/main/2floor.jpg" alt="바닥">
                <h3>바닥 시공</h3>
            </div>
            <div class="service-item">
                <img src="/pic/main/3floor.jpg" alt="타일">
                <h3>타일 시공</h3>
            </div>
        </section>
    </main>
    
    <script src="/js/home/main.js"></script>
</body>
</html>
  `;
}

async function generateHanstonePage() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한스톤 - 크린앤Q</title>
    <link rel="stylesheet" href="/css/home/hanstone.css">
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <header>
        <div class="logo">
            <img src="/pic/main/clnqlogo.png" alt="크린앤Q 로고">
        </div>
        <nav>
            <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/hanstone" class="active">한스톤</a></li>
                <li><a href="/homesash">홈사시</a></li>
                <li><a href="/login">로그인</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>한스톤</h1>
            <p>프리미엄 인조대리석</p>
        </section>
    </main>
    
    <script src="/js/home/hanstone.js"></script>
</body>
</html>
  `;
}

async function generateHomesashPage() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>홈사시 - 크린앤Q</title>
    <link rel="stylesheet" href="/css/home/homesash.css">
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <header>
        <div class="logo">
            <img src="/pic/main/clnqlogo.png" alt="크린앤Q 로고">
        </div>
        <nav>
            <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/hanstone">한스톤</a></li>
                <li><a href="/homesash" class="active">홈사시</a></li>
                <li><a href="/login">로그인</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>홈사시</h1>
            <p>프리미엄 창호시스템</p>
        </section>
    </main>
    
    <script src="/js/home/homesash.js"></script>
</body>
</html>
  `;
}

async function generateLoginPage() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 - 크린앤Q</title>
    <link rel="stylesheet" href="/css/home/login.css">
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <div class="login-container">
        <h1>로그인</h1>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="아이디" required>
            <input type="password" name="password" placeholder="비밀번호" required>
            <button type="submit">로그인</button>
        </form>
        <a href="/register">회원가입</a>
    </div>
</body>
</html>
  `;
}

async function generateRegisterPage() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 - 크린앤Q</title>
    <link rel="stylesheet" href="/css/home/register.css">
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <div class="register-container">
        <h1>회원가입</h1>
        <form action="/register" method="POST">
            <input type="text" name="username" placeholder="아이디" required>
            <input type="email" name="email" placeholder="이메일" required>
            <input type="password" name="password" placeholder="비밀번호" required>
            <input type="password" name="confirmPassword" placeholder="비밀번호 확인" required>
            <button type="submit">가입하기</button>
        </form>
        <a href="/login">로그인</a>
    </div>
</body>
</html>
  `;
}

async function generate404Page() {
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지를 찾을 수 없습니다 - 크린앤Q</title>
    <link rel="icon" href="/favicon/clnqlogo.ico">
</head>
<body>
    <div style="text-align: center; padding: 50px;">
        <h1>404 - 페이지를 찾을 수 없습니다</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <a href="/">홈으로 돌아가기</a>
    </div>
</body>
</html>
  `;
}