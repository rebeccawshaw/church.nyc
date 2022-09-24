// src/api/calendar.js
import fetch from "node-fetch"

const getServices = async (req, res) => {
    const url = "https://api.planningcenteronline.com/services/v2"

    const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + btoa('6ac4412f58f62749e2c3fa6e03b991a19405d11d83fe7bdfc6c2dcf672618afe:a5997abf9be74effe9b934b5c58a482fe29ca3c106f70a956f8175464e366b65')
    }

    try {
        const result = await fetch(url, {
            method: "GET",
            headers: headers,
        }).then(res => {
            return res.json()
        })

        res.json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default getServices