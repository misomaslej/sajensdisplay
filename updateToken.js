async function fetchToken() {
    try {
        // Replace 'https://example.com/page' with the actual URL
        const response = await fetch('https://example.com/page');

        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();

        // Log the fetched HTML to see if it contains the expected content
        console.log(text);

        // Parse the HTML and find the target element
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const tokenElement = doc.querySelector('.sc-dcJtft.HugIm strong');

        if (tokenElement) {
            const tokenNumber = tokenElement.textContent;
            document.getElementById('tokenDisplay').textContent = `Sájens tokeny: ${tokenNumber}`;
        } else {
            console.error('Token element not found.');
        }
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

// Call the function initially and then set an interval to update every 10 seconds
fetchToken();
setInterval(fetchToken, 10000);
