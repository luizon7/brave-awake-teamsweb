// Simula atividade a cada 60 segundos
setInterval(() => {
    console.log("[Teams Keep Awake] Simulando movimento do mouse...");
    window.dispatchEvent(new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        view: window
    }));
}, 60000); // 1 minuto