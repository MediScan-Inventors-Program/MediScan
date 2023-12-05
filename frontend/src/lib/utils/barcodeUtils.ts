import {BrowserMultiFormatReader} from "@zxing/library";

export const scan = async (): Promise<string> => {
    showVideo();
    return new Promise((resolve, reject) => {
        const codeReader = new BrowserMultiFormatReader();

        codeReader
            .listVideoInputDevices()
            .then((devices) => {
                return codeReader.decodeFromVideoDevice(devices[0].deviceId, "video", (result, err) => {
                    if (result) {
                        hideVideo();
                        resolve(result.getText());
                    }
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const hideVideo = () => {
    const video = document.getElementById("video-overlay");
    const mainContainer = document.getElementById("main-container");

    if (video) {
        video.style.display = "none";
    }
    if (mainContainer) {
        mainContainer.style.display = "block";
    }
}

export const showVideo = () => {
    const video = document.getElementById("video-overlay");
    const mainContainer = document.getElementById("main-container");

    if (video) {
        video.style.display = "block";
    }
    if (mainContainer) {
        mainContainer.style.display = "none";
    }
}