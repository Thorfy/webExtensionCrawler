import { SiteACrawler } from './SiteACrawler.js';

class CrawlerFactory {
    static createCrawler(url) {
      if (url.includes("sitea.com")) {
        return new SiteACrawler();
      } else {
        throw new Error("Aucun crawler disponible pour cette URL.");
      }
    }
  }
  