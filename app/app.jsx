const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./css/styles.css');
/* Import Components */
// const HelloWorld = require('./components/HelloWorld');
const Game = require('./containers/Game');
const { Auth0Provider } = require('./react-auth0-wrapper');

const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const config = {
    "domain": "hiremeplease.auth0.com",
    "clientId": "LLb8v4Ig6WrLfP5c3CxDdSf3QDgccizD",
    // "audience": "hiremeplease.mysite.com"
}

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        // audience={config.audience}
        onRedirectCallback={onRedirectCallback}
    >
        <Game />
    </Auth0Provider>
, document.getElementById('main'));