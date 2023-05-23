import axios from "axios";

async function uploadForDenoising(audioUrl) {
  let audio = await fetch(audioUrl).then(r => r.blob())
  let type = "wav"
  if (audio.type === "audio/webm") {
    type = "webm"
  }
  let form = new FormData()
  form.append("audioFile", audio)
  form.append("type", type)
  return axios.post("http://127.0.0.1:5001/audioDenoising", form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export {uploadForDenoising}