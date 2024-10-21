import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import Providers from "./Providers";

const Portal = lazy(() => import('./Portal'));
const Dashboard1 = lazy(() => import('./pages/Dashboard01'));
const Dashboard2 = lazy(() => import('./pages/Dashboard02'));
const Dashboard3 = lazy(() => import('./pages/Dashboard03'));
const Dashboard4 = lazy(() => import('./pages/Dashboard04'));
const Dashboard5 = lazy(() => import('./pages/Dashboard05'));
const Dashboard6 = lazy(() => import('./pages/Dashboard06'));
const Dashboard7 = lazy(() => import('./pages/Dashboard07'));
const Charts1 = lazy(() => import('./pages/Charts01'));
const Authentication1 = lazy(() => import('./pages/Authentication01'));
const Authentication2 = lazy(() => import('./pages/Authentication02'));
const Authentication3= lazy(() => import('./pages/Authentication03'));
const Authentication4 = lazy(() => import('./pages/Authentication04'));
const Authentication5 = lazy(() => import('./examples/authentication/page'));
const MailPage = lazy(() => import('./examples/mail/components/mail'));
const BoardPage = lazy(() => import('./examples/playground/page'));
const FormPage = lazy(() => import('./examples/forms/layout'));
const TasksPage = lazy(() => import('./examples/tasks/page'));
const CardPage = lazy(() => import('./examples/cards/page'));
const DashPage = lazy(() => import('./examples/dashboard/page'));
const MusicPage = lazy(() => import('./examples/music/page'));
const AllComponentsPage = lazy(() => import('./pages/AllComponents'));
const SidebarPage1 = lazy(() => import('./pages/SidebarPage01'));
const SidebarPage2 = lazy(() => import('./pages/SidebarPage02'));
const SidebarPage3 = lazy(() => import('./pages/SidebarPage03'));
import ProfileForm from "./examples/forms/page";
import AccountForm from "./examples/forms/account/page";
import AppearanceForm from "./examples/forms/appearance/page";
import DisplayForm from "./examples/forms/display/page";
import NotificationsForm from "./examples/forms/notifications/page";



const App = () => {
  return (
      <Providers>
        <Suspense fallback={<div style={{fontSize: 'xx-large', fontWeight: 'bolder', display: 'flex',
          justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Now Loading...</div>}>
          <Routes>
            <Route path="/" element={<Portal/>}/>
            <Route path="/dashboard1" element={<Dashboard1/>}/>
            <Route path="/dashboard2" element={<Dashboard2/>}/>
            <Route path="/dashboard3" element={<Dashboard3/>}/>
            <Route path="/dashboard4" element={<Dashboard4/>}/>
            <Route path="/dashboard5" element={<Dashboard5/>}/>
            <Route path="/dashboard6" element={<Dashboard6/>}/>
            <Route path="/dashboard7" element={<Dashboard7/>}/>
            <Route path="/Charts1" element={<Charts1/>}/>
            <Route path="/Authentication1" element={<Authentication1/>}/>
            <Route path="/Authentication2" element={<Authentication2/>}/>
            <Route path="/Authentication3" element={<Authentication3/>}/>
            <Route path="/Authentication4" element={<Authentication4/>}/>
            <Route path="/Authentication5" element={<Authentication5/>}/>
            <Route path="/MailPage" element={<MailPage/>}/>
            <Route path="/BoardPage" element={<BoardPage/>}/>
            <Route path="/examples/forms" element={<FormPage/>}>
              <Route index element={<ProfileForm/>}/>
              <Route path="account" element={<AccountForm/>}/>
              <Route path="appearance" element={<AppearanceForm/>}/>
              <Route path="display" element={<DisplayForm/>}/>
              <Route path="notifications" element={<NotificationsForm/>}/>
            </Route>
            <Route path="/TasksPage" element={<TasksPage/>}/>
            <Route path="/CardPage" element={<CardPage/>}/>
            <Route path="/DashPage" element={<DashPage/>}/>
            <Route path="/MusicPage" element={<MusicPage/>}/>
            <Route path="/AllComponentsPage" element={<AllComponentsPage/>}/>
            <Route path="/SidebarPage1" element={<SidebarPage1/>}/>
            <Route path="/SidebarPage2" element={<SidebarPage2/>}/>
            <Route path="/SidebarPage3" element={<SidebarPage3/>}/>
          </Routes>
        </Suspense>
      </Providers>
  );
};

export default App;