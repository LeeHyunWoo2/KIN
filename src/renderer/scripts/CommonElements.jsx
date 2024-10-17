import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// next.js 를 못쓰기 때문에 변경된 코드
export const Image = React.forwardRef(({ src, alt, ...props }, ref) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    async function fetchImagePath() {
      const path = await window.fileAPI.getImagePath(src);
      setImagePath(path); // 경로 설정
    }

    fetchImagePath(); // 비동기 함수 호출
  }, [src]); // src가 변경될 때마다 실행

  if (!imagePath) {
    return <div>Loading...</div>; // 이미지 경로를 아직 로드 중일 때
  }

  return (
      <img ref={ref} src={imagePath} alt={alt} {...props} />
  );
});

// 일반 페이지 이동
export const Link = React.forwardRef(({href, children, ...props}, ref) => (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
));

// 부드러운 화면전환 (ajax마냥)
export const SmoothLink = React.forwardRef(({href, children, ...props}, ref) => (
        <RouterLink ref={ref} to={href} {...props} >
          {children}
        </RouterLink>
));