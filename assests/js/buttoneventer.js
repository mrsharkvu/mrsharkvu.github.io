const buttons = document.querySelectorAll('.button-70');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const embed = {
            title: "Button Clicked",
            description: buttonText,
            color: 0x7289DA,
            fields: [
                { name: "🌍 Timezone", value: timezone },
            ],
            timestamp: new Date().toISOString()
        };

        sendToWebhook(embed);
    })
});


function sendToWebhook(embed) {
    const webhookUrl = 'https://ptb.discord.com/api/webhooks/1125813803569917952/n7MBy3r_S1GzCJU5SuhsGdvqil9W9wHRXYI5_i2aaKGkRpWvYrlGkR52WogRs0d2bAkM';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ embeds: [embed] })
    })
}