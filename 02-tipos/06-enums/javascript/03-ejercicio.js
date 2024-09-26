"use strict";
(() => {
    let nivel_audio;
    (function (nivel_audio) {
        nivel_audio[nivel_audio["bajo"] = 10] = "bajo";
        nivel_audio[nivel_audio["medio"] = ] = "medio";
        nivel_audio[nivel_audio["alto"] = void 0] = "alto";
    })(nivel_audio || (nivel_audio = {}));
    const volumen_actual = nivel_audio.alto;
    console.log(volumen_actual);
})();
