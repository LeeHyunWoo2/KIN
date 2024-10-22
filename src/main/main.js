// 일렉트론 초기화 및 창 생성 코드
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require("path");
const { getTasks } = require('./handler');

// 윈도우 생성 함수
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 일렉트론 핵심 시스템, 보안 필수요소
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, '..', '..', 'public', 'images', 'icon.ico')
  });
  // HTML파일이 로드된 후 / 를 해시를 사용한 경로로 변경함 (#)
  mainWindow.loadFile('public/index.html').then(() => {
    mainWindow.webContents.executeJavaScript(`
    window.location.hash = '/';
    `)
    mainWindow.webContents.openDevTools()
  });
}

// Electron이 준비되었을 때 윈도우 생성
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 윈도우가 닫혔을 때 + 애플꺼 아니면 애플리케이션 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// get-tasks 채널에 대한 요청 처리
ipcMain.handle('get-tasks', async () => {
  return await getTasks(); // 핸들러의 getTasks 함수 호출
});

ipcMain.handle('get-image-path', (event, imageName) => {
  const imagePath = path.join(__dirname, '..', '..', 'public',  'images', imageName); // 이미지 경로 처리
  return imagePath;
});