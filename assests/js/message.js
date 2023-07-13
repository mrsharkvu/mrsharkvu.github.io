const webhookURL = 'https://ptb.discord.com/api/webhooks/1125813803569917952/n7MBy3r_S1GzCJU5SuhsGdvqil9W9wHRXYI5_i2aaKGkRpWvYrlGkR52WogRs0d2bAkM';
const rateLimitTime = 5000; // Time limit in milliseconds (e.g., 5000ms = 5 seconds)
let lastSubmissionTime = 0;

function sendWebhook(payload) {
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

document.getElementById('message-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const currentTime = Date.now();
    if (currentTime - lastSubmissionTime < rateLimitTime) {
        alert('You have been ratelimited for 5s.\n You want to spam me!'); // Display an alert if the rate limit is triggered
        return; // Exit the function without sending the webhook
    }

    const messageInput = document.querySelector('.message-input');
    const message = messageInput.value.trim();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (message === '') {
        alert('You cant leave it blank :/\nhmmm I know everything abt u:/'); // Display an alert if the message is empty
        return; // Exit the function without sending the webhook
    }

    const payload = {
        embeds: [
            {
                title: "New message",
                description: message,
                color: 0x7289DA,
                fields: [
                    { name: "🌍 Timezone", value: timezone },
                ],
                timestamp: new Date().toISOString()
            },
        ],
    };
    sendWebhook(payload); // Call the function to send the webhook

    lastSubmissionTime = currentTime; // Update the last submission time
    messageInput.value = ''; // Clear the input field
});