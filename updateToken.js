async function fetchToken() {
    try {
        // Replace 'https://example.com/page' with the actual URL from where you're fetching the data
        const response = await fetch('https://scm.lstme.sk');
        const text = await response.text();

        // Use DOMParser to parse the HTML and extract the desired number
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const tokenElement = doc.querySelector('.sc-dcJtft.HugIm strong');

        if (tokenElement) {
            const tokenNumber = tokenElement.textContent;
            document.getElementById('tokenDisplay').textContent = `Sájens tokeny: ${tokenNumber}`;
        }
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

// Call the function initially and then set an interval to update every 10 seconds
fetchToken();
setInterval(fetchToken, 10000);
