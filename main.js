const { BrowserWindow, app, ipcMain } = require('electron');
const { spinUp } = require('./main_fun')

const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 150,
    x: 1440,
    y: 0,
    backgroundColor: '#3B4040',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      devTools: true
    }

  });

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('setUrl', (__, url) => {
  app.whenReady().then(() => {
    spinUp(url)
  })
})

app.whenReady().then(createWindow)