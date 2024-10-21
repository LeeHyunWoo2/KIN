// https://www.electronjs.org/docs/latest/tutorial/tutorial-preload

// 일렉트론의 IPC 통신을 제어하는 파일
const {contextBridge, ipcRenderer} = require('electron');

// 렌더러 프로세스에서 직접 노출시킬  전역 객체 지정
contextBridge.exposeInMainWorld('global', {
  global: globalThis, // 전역 객체
  buffer: Buffer // node.js 의 버퍼객체 (이진데이터나 이미지처리 등에 활용)
});

// 렌더러가 메인프로세스에 접근하지 못하게 중간다리 역할 api를 만들고, 특정 채널만 허용하는 기능 추가
contextBridge.exposeInMainWorld('memoAPI', {
  // create-note 채널을 통해서만 메인 프로세스로 메시지를 전송

// 메모 생성 요청 (일회성 이벤트니까 핸들러 중복을 막기 위해 once 사용, CUD 에 해당함)
  createNote: (note) => {
    let validChannels = ['create-note'];
    if (validChannels.includes('create-note')) {
      ipcRenderer.once('create-note', (event, newNote) => {
        // 메모 생성 후 자동으로 리스너가 해제됨
        console.log('노트 생성 : ', newNote);
      });
      ipcRenderer.send('create-note', note);
    }
  },

  updateNote: (noteId, updatedContent) => {
    let validChannels = ['update-note'];
    if (validChannels.includes('update-note')) {
      ipcRenderer.once('update-note', (event, updatedNote) => {
        console.log('노트 수정 : ', updatedNote);
      });
      ipcRenderer.send('update-note', {noteId, updatedContent});
    }
  },

  deleteNote: (noteId) => {
    let validChannels = ['delete-note'];
    if (validChannels.includes('delete-note')) {
      ipcRenderer.once('delete-note', (event, deletedNoteId) => {
        console.log('노트 삭제 : ', deletedNoteId);
      });
      ipcRenderer.send('delete-note', noteId);
    }
  },

  // 메모 조회 요청 (비동기 응답 받기)
  getNote: (noteId) => {
    let validChannels = ['get-note'];
    if (validChannels.includes('get-note')) {
      return ipcRenderer.invoke('get-note', noteId);
    }
  },

  // 메모 리스트 조회 요청 (비동기)
  getNotesList: () => {
    let validChannels = ['get-notes-list'];
    if (validChannels.includes('get-notes-list')) {
      return ipcRenderer.invoke('get-notes-list');
    }
  },

  // 작업 후 피드백
  onFeedback: (callback) => {
    let validChannels = ['feedback'];
    if (validChannels.includes('feedback')) {
      ipcRenderer.on('feedback', (event, message) => callback(message));
    }
  }
});

contextBridge.exposeInMainWorld('taskAPI', {
  // 파일에서 Task 데이터를 가져오는 함수 (샘플 작동을 위해 셋팅하는거지만 나중에 이걸 개조해서 활용 예정)
  getTasks: () => ipcRenderer.invoke('get-tasks')
});

// 이미지 경로 받아오는 함수
contextBridge.exposeInMainWorld('fileAPI', {
  getImagePath: async (imageName) => {
    return await ipcRenderer.invoke('get-image-path', imageName); // 메인 프로세스에 경로 요청
  }
});