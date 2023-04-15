class SiteACrawler extends CrawlerStrategy {
    async crawl() {
      return new Promise((resolve) => {
        const listener = (message) => {
          if (message.site === "SiteA") {
            chrome.runtime.onMessage.removeListener(listener);
            resolve(message.data);
          }
        };
  
        chrome.runtime.onMessage.addListener(listener);
  
        chrome.tabs.executeScript({
          file: "content_script_site_a.js"
        });
      });
    }
  }