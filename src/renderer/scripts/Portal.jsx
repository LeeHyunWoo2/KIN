import {useNavigate} from 'react-router-dom';
import {Button} from "@/components/ui/button";

const Portal = () => {
  const navigate = useNavigate();

  // 코드 뭉치 1개로 줄임
  const goToPage = (page) => {
    navigate(`/${page}`);
  };

  return (
      <div style={{textAlign: 'center', padding: '20px', height: '100vh'}}>
        <h1>Portal Page</h1>
        <div>
          <Button onClick={() => goToPage('dashboard1')}
                  style={{marginRight: '10px'}}>
            Go to Dashboard 1
          </Button>
          <Button onClick={() => goToPage('dashboard2')}
                  style={{marginRight: '10px'}}>
            Go to Dashboard 2
          </Button>
          <Button onClick={() => goToPage('dashboard3')}>
            Go to Dashboard 3
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('dashboard4')}
                  style={{marginRight: '10px'}}>
            Go to Dashboard 4
          </Button>
          <Button onClick={() => goToPage('dashboard5')}
                  style={{marginRight: '10px'}}>
            Go to Dashboard 5
          </Button>
          <Button onClick={() => goToPage('dashboard6')}>
            Go to Dashboard 6
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('dashboard7')}
                  style={{marginRight: '10px'}}>
            Go to Dashboard 7
          </Button>
          <Button onClick={() => goToPage('Charts1')}
                  style={{marginRight: '10px'}}>
            Go to Charts 1
          </Button>
          <Button onClick={() => goToPage('DataTable1')}>
            Go to DataTable1
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('Authentication1')}
                  style={{marginRight: '10px'}}>
            Go to Authentication 1
          </Button>
          <Button onClick={() => goToPage('Authentication2')}
                  style={{marginRight: '10px'}}>
            Go to Authentication2
          </Button>
          <Button onClick={() => goToPage('Authentication3')}
                  style={{marginRight: '10px'}}>
            Go to Authentication3
          </Button>
          <Button onClick={() => goToPage('Authentication4')}
                  style={{marginRight: '10px'}}>
            Go to Authentication4
          </Button>
          <Button onClick={() => goToPage('Authentication5')}>
            Go to Authentication5
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('MailPage')}
                  style={{marginRight: '10px'}}>
            Go to MailPage
          </Button>
          <Button onClick={() => goToPage('BoardPage')}
                  style={{marginRight: '10px'}}>
            Go to BoardPage
          </Button>
          <Button onClick={() => goToPage('examples/forms')}>
            Go to FormPage
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('TasksPage')}
                  style={{marginRight: '10px'}}>
            Go to tasksPage
          </Button>
          <Button onClick={() => goToPage('CardPage')}
                  style={{marginRight: '10px'}}>
            Go to CardPage
          </Button>
          <Button onClick={() => goToPage('DashPage')}
                  style={{marginRight: '10px'}}>
            Go to DashPage
          </Button>
          <Button onClick={() => goToPage('MusicPage')}>
            Go to MusicPage
          </Button>
        </div>
        <div style={{'marginTop': '20px'}}>
          <Button onClick={() => goToPage('AllComponentsPage')}
                  style={{marginRight: '10px'}}>
            Go to AllComponentsPage
          </Button>
          <Button onClick={() => goToPage('SidebarPage1')}
                  style={{marginRight: '10px'}}>
            Go to SidebarPage1
          </Button>
          <Button onClick={() => goToPage('SidebarPage2')}
                  style={{marginRight: '10px'}}>
            Go to SidebarPage2
          </Button>
          <Button onClick={() => goToPage('SidebarPage3')}
                  style={{marginRight: '10px'}}>
            Go to SidebarPage3
          </Button>
          <Button onClick={() => goToPage('SidebarPage4')}
                  style={{marginRight: '10px'}}>
            Go to SidebarPage4
          </Button>
          <Button onClick={() => goToPage('Layout1')}>
            Go to Layout1
          </Button>
        </div>

      </div>
  );
};

export default Portal;