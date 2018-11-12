const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY`;

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}


// Sample Json format for reference

/*
    {
        status: 'ok',
        totalResults": 20,
        articles": [
            {
                "source": {
                    "id": null,
                    "name": "Newsbtc.com"
                },
                "author": "Davit Babayan",
                "title": "EOS Centralization Reportedly in Action: Arbitrators Able to Reverse Transactions",
                "description": "A screenshot circulating on social media has revealed a decentralized blockchain protocol EOS practicing authority over its network. AUTI9003, a pseudonym on Reddit, posted a photograph which demonstrated arbitrators on the EOS network in action, reversing co…",
                "url": "https://www.newsbtc.com/2018/11/11/eos-centralization-reportedly-in-action-arbitrators-able-to-reverse-transactions/",
                "urlToImage": "https://s3.amazonaws.com/main-newsbtc-images/2018/11/11140225/shutterstock_1027710073.jpg",
                "publishedAt": "2018-11-11T14:03:00Z",
                "content": "A screenshot circulating on social media has revealed a decentralized blockchain protocol EOS practicing authority over its network. AUTI9003, a pseudonym on Reddit, posted a photograph which demonstrated arbitrators on the EOS network in action, reversing co… [+2903 chars]"
            }
        ],
    }
*/