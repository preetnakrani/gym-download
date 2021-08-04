import "./App.css";
import { Button } from "antd";
import {
  WindowsFilled,
  AppleFilled,
  CodeSandboxCircleFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";

function App() {
  const win =
    "https://gym-apps.s3.us-west-2.amazonaws.com/UBC+GYM-win32-x64.zip";
  const mac = "https://gym-apps.s3.us-west-2.amazonaws.com/UBC+GYM+APP.dmg";
  const linux =
    "https://gym-apps.s3.us-west-2.amazonaws.com/UBC+GYM-linux-x64.zip";
  const webapp =
    "http://ubcggymbooking-env.eba-m3sawabi.us-west-2.elasticbeanstalk.com/";
  const style = { fontSize: "150px" };
  return (
    <div className="App">
      <div className="title">
        <h1>UBC GYM BOOKING APP DOWNLOAD</h1>
      </div>
      <div className="download-container">
        <a target="_blank" rel="noreferrer" href={mac}>
          <div className="apple-download">
            <AppleFilled style={style} className="apple-logo" />
            <Button type="primary">Download for Mac</Button>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href={win}>
          <div className="windows-download">
            <WindowsFilled style={style} className="windows-logo" />
            <Button type="primary">Download for Windows</Button>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href={linux}>
          <div className="linux-download">
            <CodeSandboxCircleFilled style={style} className="linux-logo" />
            <Button type="primary">Download for Linux</Button>
          </div>
        </a>
      </div>
      <div className="usewebapp">
        <h2 className="webapp-title">
          Click the button to book the slot in the cloud!
        </h2>
        <a href={webapp} className="webapp">
          <Button type="primary" className="web-button">
            Web Version
          </Button>
        </a>
      </div>
    </div>
  );
}

export default App;
