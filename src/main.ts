import { app, BrowserWindow } from "electron";
import url from "url";
import path from "path";

let win: BrowserWindow | null = null;

const createWindow = () => {
  win = new BrowserWindow({ width: 1024, height: 720 });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true
    })
  );

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
