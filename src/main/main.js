const { format } = require('url')

const { BrowserWindow, app } = require('electron')

const isDev = false;

app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })

  mainWindow.setMenu(null)
  mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`)
})

app.on('window-all-closed', app.quit)

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})