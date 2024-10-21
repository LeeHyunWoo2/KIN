import React, { useEffect, useState } from "react";

import { Image, Link } from '/src/renderer/scripts/CommonElements';
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"

// 비동기 데이터를 Preload API를 통해 불러옴
export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async 비동기 함수 / await 비동기 작업 완료까지 기다림
    async function fetchTasks() {
      try {
        // Preload.js에 정의된 taskAPI를 통해 파일 데이터를 가져옴
        const tasksData = await window.taskAPI.getTasks();
        setTasks(tasksData); // 상태 업데이트
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    }

    fetchTasks(); // 컴포넌트가 마운트될 때 데이터 불러오기
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
      <>
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <UserNav />
            </div>
          </div>
          <DataTable data={tasks} columns={columns} />
        </div>
      </>
  );
}