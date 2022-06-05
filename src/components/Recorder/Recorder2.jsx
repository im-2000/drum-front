import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const dimensions = {
  width: { min: 1024, ideal: 1280, max: 1920 },
  height: { min: 576, ideal: 720, max: 1080 },
};

function Preview({ previewStream }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && previewStream) ref.current.srcObject = previewStream;
  }, [previewStream]);

  if (!previewStream) return null;

  return <video ref={ref} autoPlay controls width={400} height={300} />;
}

function Output({ mediaBlobUrl, audio }) {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported.");
    return;
  }

  //Display prompt and log selected device or error
  navigator.mediaDevices
    .selectAudioOutput()
    .then((device) => {
      console.log(
        device.kind + ": " + device.label + " id = " + device.deviceId
      );
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });

  if (audio) return <audio src={mediaBlobUrl} controls autoPlay />;
  return (
    <audio src={mediaBlobUrl} controls autoPlay width={400} height={300} />
  );
}

function Recorder() {
  const [mode, setMode] = useState("audio");
  const {
    status,
    error,
    startRecording,
    pauseRecording,
    resumeRecording,
    isMuted,
    muteAudio,
    unMuteAudio,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
    previewStream,
  } = useReactMediaRecorder({
    ...(mode === "audio" && { audio: true }),
    ...(mode === "video" && { video: true }),
    ...(mode === "screen" && { screen: true }),
    askPermissionOnMount: true,
    onStop: (blobUrl, blob) => console.info(blobUrl, blob),
  });

  useEffect(() => {
    console.info(status);
  }, [status]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div>
      <div>
        {mode}
        <button type="button" onClick={() => setMode("audio")}>
          audio
        </button>
        <button type="button" onClick={() => setMode("video")}>
          video
        </button>
        <button type="button" onClick={() => setMode("screen")}>
          screen
        </button>
      </div>

      <div>
        {status}
        <button type="button" onClick={startRecording}>
          start
        </button>
        <button type="button" onClick={stopRecording}>
          stop
        </button>
        <button type="button" onClick={pauseRecording}>
          pause
        </button>
        <button type="button" onClick={resumeRecording}>
          resume
        </button>
        <button type="button" onClick={clearBlobUrl}>
          clear
        </button>
      </div>

      <div>
        {isMuted ? "muted" : "not muted"}
        <button type="button" onClick={muteAudio}>
          mute
        </button>
        <button type="button" onClick={unMuteAudio}>
          unmute
        </button>
      </div>

      {previewStream && mode !== "audio" && (
        <Preview previewStream={previewStream} />
      )}
      {status === "stopped" && (
        <Output audio={mode === "audio"} mediaBlobUrl={mediaBlobUrl} />
      )}
    </div>
  );
}

export default function App() {
  return <Recorder />;
}
