import { CrawlerFactory } from './CrawlerFactory.js';

chrome.action.onClicked.addListener(async (tab) => {
    const crawler = CrawlerFactory.createCrawler(tab.url);
    const data = await crawler.crawl();
  
    // Formatez les données avec une classe appropriée
    const formattedData = formatData(data);
  
    // Envoyez les données au serveur distant
    sendDataToRemoteServer(formattedData);
  });