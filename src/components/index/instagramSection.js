import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const InstagramSection = () => {
    const data = useStaticQuery(graphql`
        query InstagramQuery {
            allInstaNode (limit:10){
            edges {
                node {
                id
                likes
                comments
                mediaType
                preview
                original
                timestamp
                caption
                localFile {
                    childImageSharp {
                    fixed(width: 150, height: 150) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                },
                # Only available with the public api scraper
                thumbnails {
                    src
                    config_width
                    config_height
                }
                dimensions {
                    height
                    width
                }
                }
            }
            }
        }
        `
    );
    return(
    <div>
        <h1>STAY UP TO DATE ON INSTAGRAM</h1>
        {console.log(data.allInstaNode.edges.slice(0,15))}
        {
        data.allInstaNode.edges.slice(0,15).map((item, index) => {
            return <img alt={`instagram pic ${index}`} src={item.node.localFile ? item.node.localFile.childImageSharp.fixed.src : item.node.preview} />
        })}
    </div>
    )
}


export default InstagramSection