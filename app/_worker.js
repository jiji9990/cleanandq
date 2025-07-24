// Cloudflare Pages Functions - 간단한 HTML 응답
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // 정적 파일은 Cloudflare가 자동 처리
    const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.woff', '.woff2', '.mp4'];
    if (staticExtensions.some(ext => pathname.endsWith(ext))) {
      return fetch(request);
    }

    // robots.txt
    if (pathname === '/robots.txt') {
      return new Response('User-agent: *\nAllow:/', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // 메인 페이지 HTML (원본 구조 사용)
    const getMainPageHTML = () => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="크린앤Q 사이트" />
  <title>크린앤Q</title>
  <link rel="stylesheet" href="/css/home/main.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@80,400,0,0"/>
  <script src="/js/home/main.js" defer></script>
  <script src="https://kit.fontawesome.com/1a2cc02835.js" crossorigin="anonymous"></script>
  <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
  <meta name="naver-site-verification" content="1918d7f6c9ce8b45d6e696dfb6f07dd82715fa7a" />
  <meta name="naver-site-verification" content="1cbef8fb19f1e55adf25b12ca21754c358b17d06" />
  <meta name="format-detection" content="telephone=no">
</head>

<body>
  <div class="nav-container">
    <nav>
      <ul class="mobile-nav">
        <div class="menu-icon-container">
          <div class="menu-icon">
            <span class="line-1"></span>
            <span class="line-2"></span>
          </div>
        </div>

        <li>
          <a href="/" class="link-logo">
            <span class="logochar">Q</span>
          </a>
        </li>
        <li>
          <a id="user2" class="link-user2"><i class="fa-solid fa-user-circle"></i></a>
        </li>
      </ul>

      <ul class="desktop-nav">
        <li>
          <a href="/" class="link-logo">
            <span class="logochar">Q</span>
          </a>
        </li>
        <li>
          <a href="/hanstone">칸스톤</a>
        </li>
        <li>
          <a href="/homesash">홈샤시</a>
        </li>
        <li>
          <a href="/flooring">바닥재</a>
        </li>
         
        <li>
          <a class="link-search"><i class="fa fa-search"></i></a>
        </li>
        
        <a id="user" class="link-user"><i class="fa-solid fa-user-circle"></i></a>
        
      </ul>
    </nav>

    <div class="search-container hide">
      <div class="link-search"><i class="fa fa-search"></i></div>
      <div class="search-bar">
        <form action="">
          <input type="text" placeholder="칸스톤">
        </form>
      </div>
      <div class="link-close">
      </div>

      <div class="quick-links">
        <ul>
          <li>
            <a href="/hanstone">칸스톤</a>
          </li>
          <li>
            <a href="/homesash">홈샤시</a>
          </li>
          <li>
            <a href="/flooring">바닥재</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mobile-search-container">
      <div class="link-search"><i class="fa fa-search"></i></div>
      <div class="search-bar">
        <form action="">
          <input type="text" placeholder="칸스톤">
        </form>
      </div>
      <span class="cancel-btn">Cancel</span>

      <div class="quick-links">
        <ul>
          <li>
            <a href="/hanstone">칸스톤</a>
          </li>
          <li>
            <a href="/homesash">홈샤시</a>
          </li>
          <li>
            <a href="/flooring">바닥재</a>
          </li>
        </ul>
      </div>
    </div>

  </div>

  <div class="overlay"></div>

  <div>
    <ul id="options" style="display:none;">
        <li class="option">
          <a href="#">
            <span class="iconify" data-icon="material-symbols:manage-accounts-sharp" style="font-size: 15px;"></span>
            <span>계정</span>
          </a>
        </li>
        <li class="option">
          <a href="/login">
            <span class="iconify" data-icon="fluent:arrow-enter-20-filled" style="font-size: 15px;"></span>
            <span>로그인</span>
          </a>
        </li>
    </ul>
  </div>

  <div id="smooth-wrapper">
    <div class="stage" id="smooth-content">
        <section class="sec sec1" id="slide-1">
          <div class="sec1-1"></div>
          <div class="sec1-2"></div>
          <div class="sec1-3"></div>
          <div class="sec1-4"></div>
        </section>
    </div>
  </div>

  <div class="clnqlogo">
    <div style="text-align:center;">
      <br><br>
      <img class="logo1" src="/pic/main/clnqlogo.png"></img>
    </div>
  </div>

  <div style="text-align:center;">
    <div class="text">
      <span class="intro">Total 인테리어 & 리모델링</span><br>
      <span>경기도 고양시 덕양구 화신로 295 건영상가동 2층 203호</span><br>
      <span>010-3230-9136 (대표 이용갑)<br>전화&nbsp;&nbsp;:&nbsp;&nbsp;031-935-5098</span><br>
      <span>이메일&nbsp;&nbsp;:&nbsp;&nbsp;h9413320@naver.com</span><br><br>
      <span>전화예약 후 매장 방문해주시면 가장 좋습니다 : )</span><br>
      <br><br><br>
    </div>
  </div>

</body>
</html>`;

    // 기본 HTML 템플릿 (다른 페이지용)
    const generateHTML = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="크린앤Q 사이트" />
  <title>${title} - 크린앤Q</title>
  <link rel="stylesheet" href="/css/home/main.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@80,400,0,0"/>
  <script src="/js/home/main.js" defer></script>
</head>
<body>
  <h1>${title}</h1>
  <div>${content}</div>
  <p><a href="/">← 메인으로 돌아가기</a></p>
</body>
</html>`;

    // 라우트 매핑
    const routes = {
      '/': () => getMainPageHTML(),
      '/login': () => generateHTML('로그인', '<p>로그인 페이지입니다.</p>'),
      '/register': () => generateHTML('회원가입', '<p>회원가입 페이지입니다.</p>'),
      '/hanstone': () => generateHTML('한스톤', '<p>한스톤 페이지입니다.</p>'),
      '/homesash': () => generateHTML('홈새시', '<p>홈새시 페이지입니다.</p>'),
      '/normal': () => generateHTML('일반창호', '<p>일반창호 페이지입니다.</p>'),
      '/balcony': () => generateHTML('발코니', '<p>발코니 페이지입니다.</p>'),
      '/system': () => generateHTML('시스템창호', '<p>시스템창호 페이지입니다.</p>'),
      '/rehau': () => generateHTML('레하우', '<p>레하우 페이지입니다.</p>'),
      '/aluminium': () => generateHTML('알루미늄', '<p>알루미늄 페이지입니다.</p>'),
      '/specialuse': () => generateHTML('특수용도', '<p>특수용도 페이지입니다.</p>'),
      '/sheetcolor': () => generateHTML('시트색상', '<p>시트색상 페이지입니다.</p>'),
      '/handle': () => generateHTML('손잡이', '<p>손잡이 페이지입니다.</p>'),
      '/flooring': () => generateHTML('바닥재', '<p>바닥재 페이지입니다.</p>'),
      '/maru': () => generateHTML('마루', '<p>마루 페이지입니다.</p>'),
      '/sentra7': () => generateHTML('센트라7', '<p>센트라7 페이지입니다.</p>'),
      '/sentra7char': () => generateHTML('센트라7 특성', '<p>센트라7 특성 페이지입니다.</p>'),
      '/sentra6': () => generateHTML('센트라6', '<p>센트라6 페이지입니다.</p>'),
      '/sentra6char': () => generateHTML('센트라6 특성', '<p>센트라6 특성 페이지입니다.</p>'),
      '/leum': () => generateHTML('르엄', '<p>르엄 페이지입니다.</p>'),
      '/artium2': () => generateHTML('아티움2', '<p>아티움2 페이지입니다.</p>'),
      '/artium2char': () => generateHTML('아티움2 특성', '<p>아티움2 특성 페이지입니다.</p>'),
      '/artium3': () => generateHTML('아티움3', '<p>아티움3 페이지입니다.</p>'),
      '/artium3char': () => generateHTML('아티움3 특성', '<p>아티움3 특성 페이지입니다.</p>'),
      '/artium3ex': () => generateHTML('아티움3 확장', '<p>아티움3 확장 페이지입니다.</p>'),
      '/charm': () => generateHTML('참', '<p>참 페이지입니다.</p>'),
      '/charmchar': () => generateHTML('참 특성', '<p>참 특성 페이지입니다.</p>'),
      '/goldstrong': () => generateHTML('골드스트롱', '<p>골드스트롱 페이지입니다.</p>'),
      '/goldstrongchar': () => generateHTML('골드스트롱 특성', '<p>골드스트롱 특성 페이지입니다.</p>'),
      '/myeong20': () => generateHTML('명품20', '<p>명품20 페이지입니다.</p>'),
      '/myeong20char': () => generateHTML('명품20 특성', '<p>명품20 특성 페이지입니다.</p>'),
      '/myeong22': () => generateHTML('명품22', '<p>명품22 페이지입니다.</p>'),
      '/myeong22char': () => generateHTML('명품22 특성', '<p>명품22 특성 페이지입니다.</p>'),
      '/sorigium': () => generateHTML('소리지움', '<p>소리지움 페이지입니다.</p>'),
      '/sorigiumchar': () => generateHTML('소리지움 특성', '<p>소리지움 특성 페이지입니다.</p>'),
      '/tile': () => generateHTML('타일', '<p>타일 페이지입니다.</p>'),
      '/carpet': () => generateHTML('카펫', '<p>카펫 페이지입니다.</p>'),
      '/carpetchar': () => generateHTML('카펫 특성', '<p>카펫 특성 페이지입니다.</p>'),
      '/deluxe': () => generateHTML('디럭스', '<p>디럭스 페이지입니다.</p>'),
      '/deluxechar': () => generateHTML('디럭스 특성', '<p>디럭스 특성 페이지입니다.</p>'),
      '/goldregent': () => generateHTML('골드리젠트', '<p>골드리젠트 페이지입니다.</p>'),
      '/goldregentchar': () => generateHTML('골드리젠트 특성', '<p>골드리젠트 특성 페이지입니다.</p>'),
      '/dongseo': () => generateHTML('동서', '<p>동서 페이지입니다.</p>'),
      '/dongseochar': () => generateHTML('동서 특성', '<p>동서 특성 페이지입니다.</p>'),
      '/goldclassic': () => generateHTML('골드클래식', '<p>골드클래식 페이지입니다.</p>'),
      '/goldclassicchar': () => generateHTML('골드클래식 특성', '<p>골드클래식 특성 페이지입니다.</p>'),
      '/goldmaster': () => generateHTML('골드마스터', '<p>골드마스터 페이지입니다.</p>'),
      '/goldmasterchar': () => generateHTML('골드마스터 특성', '<p>골드마스터 특성 페이지입니다.</p>'),
      '/rubber': () => generateHTML('러버', '<p>러버 페이지입니다.</p>'),
      '/rubberchar': () => generateHTML('러버 특성', '<p>러버 특성 페이지입니다.</p>'),
      '/function': () => generateHTML('기능성', '<p>기능성 페이지입니다.</p>'),
      '/conductive': () => generateHTML('전도성', '<p>전도성 페이지입니다.</p>'),
      '/conductivechar': () => generateHTML('전도성 특성', '<p>전도성 특성 페이지입니다.</p>'),
      '/oa': () => generateHTML('OA', '<p>OA 페이지입니다.</p>'),
      '/oachar': () => generateHTML('OA 특성', '<p>OA 특성 페이지입니다.</p>')
    };

    // 라우트 처리
    const handler = routes[pathname];
    if (handler) {
      const html = handler();
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // 404 처리
    return new Response(generateHTML('페이지를 찾을 수 없습니다', '<p>요청하신 페이지가 존재하지 않습니다.</p>'), {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};