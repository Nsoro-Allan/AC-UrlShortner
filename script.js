async function shortenUrl() {
    const originalUrl = document.getElementById("originalUrl").value;
    const apiKey = 'b294ac4bcdafba8e92ee3c7c87eb55a901df64cc'; // Replace with your Bitly API key

    try {
        const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ long_url: originalUrl }),
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById("shortUrl").href = data.link;
            document.getElementById("shortUrl").textContent = data.link;
        } else {
            console.error('Failed to shorten URL.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}