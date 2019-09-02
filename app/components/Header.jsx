const React = require('react');
const { useAuth0 } = require('../react-auth0-wrapper');

function Header() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    
    return (
        <div>
            {
                !isAuthenticated ? (
                        <input type="button" value="Log In"
                            onClick={() => loginWithRedirect({})}
                        />
                ) : (
                    <div>
                        <code>
                            {JSON.stringify(user, null, 2)}
                        </code>
                        <input type="button" value="Log Out"
                                onClick={() => logout()}
                            />
                    </div>
                )
            }
        </div>
    )
}

module.exports = Header;