require('electron-reload')(__dirname);

// 일렉트론 초기화 및 창 생성 코드
const { app, BrowserWindow } = require('electron');
/*const path = require("path"); 프리로드 쓸 경우 필요 */

// 윈도우 생성 함수
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      /*preload: path.join(__dirname, 'preload.js'), 당장은 안쓸건데 이 프리로드라는게 일렉트론 핵심 시스템이자 보안의 필수요소 */
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // HTML파일이 로드된 후 / 를 해시를 사용한 경로로 변경함 (#)
  mainWindow.loadFile('public/index.html').then(() =>{
    mainWindow.webContents.executeJavaScript(`
    window.location.hash = '/';
    `)
  } );
}

// Electron이 준비되었을 때 윈도우 생성
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)createWindow();
  });
});

// 모든 윈도우가 닫혔을 때 + 애플꺼 아니면 애플리케이션 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});