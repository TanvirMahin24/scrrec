//Requires
const { desktopCapturer, remote } = require("electron");

const { Menu } = remote;

const videoEl = document.querySelector("video");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const windowSelectBtn = document.getElementById("windowSelect");

//Events
windowSelectBtn.onclick = getVideoSources();

//Get available video sources
async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ["window", "screen"],
  });
  const videoOptions = Menu.buildFromTemplate(
    inputSources.map((source) => {
      return {
        label: source.name,
        click: () => selectSource(source),
      };
    })
  );

  videoOptions.popup();
}
