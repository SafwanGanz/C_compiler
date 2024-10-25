// © Delta D Coders 2024
//Author: SafwanGanz

document.getElementById('run-btn').addEventListener('click', async () => {
    const code = document.getElementById('code-input').value;
    const outputElement = document.getElementById('output');

    try {
        const response = await fetch('/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sourcecode: code })
        });

        const result = await response.json();
        if (result.stderr) {
            outputElement.textContent = `Error: ${result.stderr}`;
        } else {
            outputElement.textContent = result.stdout || 'No output';
        }
    } catch (error) {
        outputElement.textContent = 'An error occurred';
    }
});