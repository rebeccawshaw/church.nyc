/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//gatsby-browser.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import "@fontsource/lora"
import "@fontsource/poppins"
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
 // Use Gatsby's navigate method to replace the url
 navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
    return (
        <Auth0Provider
        domain={"dev-ug8wjlut.us.auth0.com"}
        clientId={"1kkRlEcKYHuCNRoQNFddVkkw3ERUU4Kp"}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
            {element}
        </Auth0Provider>
 );
};