self.addEventListener("push", function(event) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: "image/icons.png",
      badge: "image/iconx.png"
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  