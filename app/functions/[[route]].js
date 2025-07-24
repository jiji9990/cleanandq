// Cloudflare Pages Functions - Express 라우팅 시스템과 연동
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(fileURLToPath(import.meta.url), '../..');

// 간단한 EJS 렌더링 함수 (기본적인 변수 치환만)
function renderEJS(templatePath, data = {}) {
  try {
    const template = readFileSync(templatePath, 'utf-8');
    let result = template;
    
    // 기본적인 EJS 변수 치환
    for (const [key, value] of Object.entries(data)) {
      const regex = new RegExp(`<%=\\s*${key}\\s*%>`, 'g');
      result = result.replace(regex, value);
    }
    
    // include 처리 제거 (복잡하므로)
    result = result.replace(/<%[\s\S]*?%>/g, '');
    
    return result;
  } catch (error) {
    console.error('EJS rendering error:', error);
    return `<h1>Error rendering page</h1><p>${error.message}</p>`;
  }
}

// 라우트 매핑 (기존 Express 라우터와 동일)
const routes = {
  '/': () => renderEJS(join(__dirname, 'src/views/home/main.ejs')),
  '/login': () => renderEJS(join(__dirname, 'src/views/home/login.ejs')),
  '/register': () => renderEJS(join(__dirname, 'src/views/home/register.ejs')),
  '/hanstone': () => renderEJS(join(__dirname, 'src/views/home/hanstone.ejs')),
  '/homesash': () => renderEJS(join(__dirname, 'src/views/home/homesash.ejs')),
  '/normal': () => renderEJS(join(__dirname, 'src/views/home/sash/normal.ejs')),
  '/balcony': () => renderEJS(join(__dirname, 'src/views/home/sash/balcony.ejs')),
  '/system': () => renderEJS(join(__dirname, 'src/views/home/sash/system.ejs')),
  '/rehau': () => renderEJS(join(__dirname, 'src/views/home/sash/rehau.ejs')),
  '/aluminium': () => renderEJS(join(__dirname, 'src/views/home/sash/aluminium.ejs')),
  '/specialuse': () => renderEJS(join(__dirname, 'src/views/home/sash/specialuse.ejs')),
  '/sheetcolor': () => renderEJS(join(__dirname, 'src/views/home/sash/sheetcolor.ejs')),
  '/handle': () => renderEJS(join(__dirname, 'src/views/home/sash/handle.ejs')),
  '/flooring': () => renderEJS(join(__dirname, 'src/views/home/floor/flooring.ejs')),
  '/maru': () => renderEJS(join(__dirname, 'src/views/home/floor/maru/maru.ejs')),
  '/sentra7': () => renderEJS(join(__dirname, 'src/views/home/floor/maru/sentra7/sentra7.ejs')),
  '/sentra7char': () => renderEJS(join(__dirname, 'src/views/home/floor/maru/sentra7/sentra7char.ejs')),
  '/sentra6': () => renderEJS(join(__dirname, 'src/views/home/floor/maru/sentra6/sentra6.ejs')),
  '/sentra6char': () => renderEJS(join(__dirname, 'src/views/home/floor/maru/sentra6/sentra6char.ejs')),
  '/leum': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/leum.ejs')),
  '/artium2': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/artium2/artium2.ejs')),
  '/artium2char': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/artium2/artium2char.ejs')),
  '/artium3': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/artium3/artium3.ejs')),
  '/artium3char': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/artium3/artium3char.ejs')),
  '/artium3ex': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/artium3/artium3ex.ejs')),
  '/charm': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/charm/charm.ejs')),
  '/charmchar': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/charm/charmchar.ejs')),
  '/goldstrong': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/goldstrong/goldstrong.ejs')),
  '/goldstrongchar': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/goldstrong/goldstrongchar.ejs')),
  '/myeong20': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/myeong20/myeong20.ejs')),
  '/myeong20char': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/myeong20/myeong20char.ejs')),
  '/myeong22': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/myeong22/myeong22.ejs')),
  '/myeong22char': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/myeong22/myeong22char.ejs')),
  '/sorigium': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/sorigium/sorigium.ejs')),
  '/sorigiumchar': () => renderEJS(join(__dirname, 'src/views/home/floor/leum/sorigium/sorigiumchar.ejs')),
  '/tile': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/tile.ejs')),
  '/carpet': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/carpet/carpet.ejs')),
  '/carpetchar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/carpet/carpetchar.ejs')),
  '/deluxe': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/deluxe/deluxe.ejs')),
  '/deluxechar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/deluxe/deluxechar.ejs')),
  '/goldregent': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldregent/goldregent.ejs')),
  '/goldregentchar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldregent/goldregentchar.ejs')),
  '/dongseo': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/dongseo/dongseo.ejs')),
  '/dongseochar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/dongseo/dongseochar.ejs')),
  '/goldclassic': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldclassic/goldclassic.ejs')),
  '/goldclassicchar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldclassic/goldclassicchar.ejs')),
  '/goldmaster': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldmaster/goldmaster.ejs')),
  '/goldmasterchar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/goldmaster/goldmasterchar.ejs')),
  '/rubber': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/rubber/rubber.ejs')),
  '/rubberchar': () => renderEJS(join(__dirname, 'src/views/home/floor/tile/rubber/rubberchar.ejs')),
  '/function': () => renderEJS(join(__dirname, 'src/views/home/floor/function/function.ejs')),
  '/conductive': () => renderEJS(join(__dirname, 'src/views/home/floor/function/conductive/conductive.ejs')),
  '/conductivechar': () => renderEJS(join(__dirname, 'src/views/home/floor/function/conductive/conductivechar.ejs')),
  '/oa': () => renderEJS(join(__dirname, 'src/views/home/floor/function/oa/oa.ejs')),
  '/oachar': () => renderEJS(join(__dirname, 'src/views/home/floor/function/oa/oachar.ejs'))
};

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      
      // 정적 파일 요청인지 확인
      const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.woff', '.woff2', '.mp4'];
      const isStaticFile = staticExtensions.some(ext => pathname.endsWith(ext));
      
      if (isStaticFile) {
        // 정적 파일은 Cloudflare Pages가 자동 처리
        return fetch(request);
      }

      // robots.txt 처리
      if (pathname === '/robots.txt') {
        return new Response('User-agent: *\nAllow:/', {
          headers: { 'Content-Type': 'text/plain' }
        });
      }

      // 라우트 처리
      const routeHandler = routes[pathname];
      if (routeHandler) {
        const htmlContent = routeHandler();
        return new Response(htmlContent, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }

      // 404 처리
      return new Response('<h1>404 - Page Not Found</h1>', {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
      
    } catch (error) {
      console.error('Error:', error);
      return new Response(`<h1>500 - Internal Server Error</h1><p>${error.message}</p>`, { 
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
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