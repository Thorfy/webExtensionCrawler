function extractDataSiteA(doc) {
    // Logique d'extraction des données pour le site A
  }
  
  function sendDataToBackgroundScript(message) {
    chrome.runtime.sendMessage(message);
  }
  
  sendDataToBackgroundScript({
    site: "SiteA",
    data: extractDataSiteA(document)
  });