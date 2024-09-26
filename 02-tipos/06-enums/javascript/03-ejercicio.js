"use strict";
(() => {
    let nivel_audio;
    (function (nivel_audio) {
        nivel_audio[nivel_audio["bajo"] = ] = "bajo";
        nivel_audio[nivel_audio["medio"] = void 0] = "medio";
        nivel_audio[nivel_audio["alto"] = void 0] = "alto";
    })(nivel_audio || (nivel_audio = {}));
    const volumen_actual = nivel_audio.alto;
    console.log(volumen_actual);
})();
