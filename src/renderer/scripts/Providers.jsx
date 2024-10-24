// provides를 일괄적으로 관리하는 모듈파일
import {TooltipProvider} from '@/components/ui/tooltip';
import {Toaster} from "@/components/ui/toaster";
import {ToastProvider} from "@/components/ui/toast";

import {HashRouter as Router} from "react-router-dom";
// Routes 와 Route 는 특정 URL에 어떤 컴포넌트를 렌더링할지 정의하는 구체적인 라우팅 규칙
// 따라서 Routes와 Route 두가지는 전역에 영향을 주는 이 파일이 아니라 App 파일에서 설정함
import Layout1 from './layout/Layout';


const Providers = ({children}) => {
  return (
      <ToastProvider>
        <TooltipProvider>
          <Router>
            {children}
          </Router>
        </TooltipProvider>
        <Toaster/> {/*얘는 상태관리가 아니고 렌더링만 하니까 이렇게 배치*/}
      </ToastProvider>
  );
};

export default Providers;