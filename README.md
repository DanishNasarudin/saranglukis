# Single Page Next JS with Instagram API

This project is a pure attempt to utilize Instagram API.
I might be going overboard by using Next JS as the framework,
but it is a good practice for me to understand the framework in detail.

[View Website](https://saranglukis.netlify.app/)

## Tech Implemented

|  | Tech | Purpose |
| -- | -- | -- |
| <img alt="" src= "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" height="13"> | Next JS 13 App Router | React Framework |
| <img alt="" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" height="13"> | React JS | JS Library |
| <img alt="" src= "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" height="13"> | Typescript | JS Syntax |
| <img alt="" src= "https://cdn.iconscout.com/icon/free/png-256/netlify-3628945-3030170.png" height="13"> | Netlify | Deployment |

## Instagram API Overview

Due to complications with Netlify, the node-fetch library was required instead of using the provided fetch by Next JS.

The fetch query is being made to:

https://graph.instagram.com/me/media?fields=${fields}&access_token=${key}

This essentially fetch an array of Instagram posts with the selected fields requested.

(E.g. Fields: id,caption,media_url,timestamp,media_type,permalink)

However, Instagram API have an expiry for every fetch retrieved which requires a continuous refetch for expired images. At the same time, to reduce the number of requests, the following fetch query is used instead by pointing to the specific post id:

https://graph.instagram.com/${postId}?fields=${fields}&access_token=${key}

## Conclusion

The project taught me the basics of fetch requests made to 3rd party APIs.

It is also a good experiment to figure out the compatibility between Next JS 13 and Netlify. Several complications were introduced, but appropriate solutions were implemented.
