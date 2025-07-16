if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.register("service-worker.js").then(swReg => {
      console.log("Service Worker registered");
  
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          swReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: "BKPDh5hHI56Ws4cT6wLg_4zmmsZjWPfvo5dwtFfnxr6rXH14Jf1BDMG2So_6JjDE-QuG3oW_DSiM-RBu9-MEu6k"
          }).then(subscription => {
            // Kirim ke backend
            fetch("https://clbe-production.up.railway.app/subscribe", {
              method: "POST",
              body: JSON.stringify(subscription),
              headers: { "Content-Type": "application/json" }
            });
          });
        }
      });
    });
  }