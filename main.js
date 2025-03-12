async function getInstagramInfo(username) {
    const url = `https://instagram-scraper-20252.p.rapidapi.com/v1/info?username_or_id_or_url=${username}`;
    
    const options = {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'gzip',
            'Connection': 'Keep-Alive',
            'Host': 'instagram-scraper-20252.p.rapidapi.com',
            'User-Agent': 'okhttp/3.14.9',
            'x-rapidapi-host': 'instagram-scraper-20252.p.rapidapi.com',
            'x-rapidapi-key': 'd90d10e212msh62e06c30b13b48ep100e02jsnabc6709af5ec'
        }
    };
    
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching Instagram info:', error);
        return null;
    }
}

module.exports = {getInstagramInfo}
