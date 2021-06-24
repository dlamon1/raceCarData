const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('e', {
  server: {
    setUrl(url) {
      ipcRenderer.send('setUrl', url)
    }
  }
})