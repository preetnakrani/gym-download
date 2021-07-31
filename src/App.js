import "./App.css";
import { Button } from "antd";
import { WindowsFilled, AppleFilled } from "@ant-design/icons";
import "antd/dist/antd.css";

function App() {
  const win =
    "https://gym-apps.s3.us-west-2.amazonaws.com/UBC+GYM-win32-x64.zip";
  const mac = "https://gym-apps.s3.us-west-2.amazonaws.com/UBC+GYM+APP.dmg";
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
      </div>
    </div>
  );
}

export default App;
