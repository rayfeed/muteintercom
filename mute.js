chrome.webRequest.onBeforeRequest.addListener(
  details => {
    try {
      const url = new URL(details.url);
      const hasIntercomSound = url.href.startsWith(
        "https://js.intercomcdn.com/audio/"
      );

      return { cancel: hasIntercomSound };
    } catch (err) {
      console.error(err.stack);
      return { cancel: false };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
