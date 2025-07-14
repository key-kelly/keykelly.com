  document.addEventListener("DOMContentLoaded", function() {
    const user = "hello";
    const domain = "keykelly.com";
    const email = user + "@" + domain;
    const link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email;
    document.getElementById("e-container").appendChild(link);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const user = "hello";
    const domain = "keykelly.com";
    const email = user + "@" + domain;
    const link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email;
    document.getElementById("e-container-footer").appendChild(link);
  });
