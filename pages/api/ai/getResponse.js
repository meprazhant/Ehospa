export default function handler(req, res) {
    const prompt = req.body.message + "Which specialist should I visit? Answer it in 1 word!"
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer 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");

    var raw = JSON.stringify({
        "model": "text-davinci-003",
        "prompt": prompt,
        "max_tokens": 7,
        "temperature": 0
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.openai.com/v1/completions", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return res.status(200).json({ data: result })
        })
        .catch(error => console.log('error', error));
}
