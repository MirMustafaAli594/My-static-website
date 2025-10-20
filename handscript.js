const res = await fetch('https://4f6gzrnpuf.execute-api.us-west-2.amazonaws.com/prod/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, message })
});
