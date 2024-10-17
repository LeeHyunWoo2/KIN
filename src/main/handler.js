const fs = require('fs').promises;
const path = require('path');
const { z } = require('zod');
const { taskSchema } = require('../renderer/scripts/examples/tasks/data/schema'); // taskSchema를 가져옴

// Task 데이터를 읽어오는 함수
async function getTasks() {
  try {
    const filePath = path.join(__dirname, '../renderer/scripts/examples/tasks/data', 'tasks.json'); // 파일 경로 설정
    const data = await fs.readFile(filePath, 'utf-8'); // 파일 읽기
    const tasks = JSON.parse(data); // JSON으로 파싱
    return z.array(taskSchema).parse(tasks); // Schema에 맞게 검증 후 반환
  } catch (error) {
    console.error('json 읽기 실패 : ', error);
    throw error;
  }
}

module.exports = {
  getTasks
};