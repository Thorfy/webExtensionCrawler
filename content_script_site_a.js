function extractDataSiteA(doc) {
    // Logique d'extraction des données pour le site A

    const title = extractTitle(doc);
    const description = extractDescription(doc);
    const imageUrls = extractImageUrls(doc);

    return {
        title,
        description,
        imageUrls
    };
}


function extractTitle(doc) {
    const titleElement = doc.querySelector("meta[property='og:title']");
    return titleElement ? titleElement.content : doc.title;
}

function extractDescription(doc) {
    const descriptionElement = doc.querySelector("meta[name='description']");
    return descriptionElement ? descriptionElement.content : "";
}

function extractImageUrls(doc) {
    const imageElements = doc.querySelectorAll("img");
    const imageUrls = Array.from(imageElements).map(img => img.src);
    return imageUrls;
}



function sendDataToBackgroundScript(message) {
    chrome.runtime.sendMessage(message);
}

sendDataToBackgroundScript({
    site: "SiteA",
    data: extractDataSiteA(document)
});