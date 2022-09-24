// src/pages/calendar.js
import React from "react";

import Seo from "../components/seo"
import Layout from '../components/layout'

// const events = () => {
//     fetch(`/api/calendar`, {
//       method: `GET`,
//       headers: {
//         "content-type": `application/json`,
//       },
//     })
//     .then(res => res.json())
//     .then(body => {
//         console.log(`response from API:`, body)
//     })
// }

const CalendarPage = ( {data} ) => {
    return (
        <Layout>
          <Seo title="Calendar" />
          <div>
            <h1>
              CALENDAR
            </h1>
            <div>
              <p>Church of the City New York</p>
            </div>
            <div>
              <p>title: </p>
            </div>
          </div>
        </Layout>
      )
    }

export const Head = () => <Seo title="Calendar" />

export default CalendarPage