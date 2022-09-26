// src/api/calendar.js
import fetch from "node-fetch"

const getServices = async (req, res) => {
    const url = "https://api.planningcenteronline.com/services/v2"

    const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + btoa(process.env.PLANNING_CENTER_APP_ID + ":" + process.env.PLANNING_CENTER_SECRET)
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