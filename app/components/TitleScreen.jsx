const React = require('react');
const styles = require('../css/styles.css');
const { useAuth0 } = require('../react-auth0-wrapper');

function TitleScreen(props) {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const notes = [
        "there are 10 rounds",
        "you have 8 seconds to try to guess the icon",
        "case doesn't matter, but spaces do",
        "my best is 6, so see if you can beat that!",
        "also, no looking at dev tools for the answers",
    ]

    return (
        <div>
            {
                !isAuthenticated ? (
                    <input type="button" value="Log In"
                        onClick={() => loginWithRedirect({})}
                    />
                ) : <input type="button" value="Log Out"
                        onClick={() => logout()}
                    />
            }
            <h1 className="text-center">{'P<i>ct</i>onary'}</h1>
            <ul style={{
                width: 400,
                margin: '20px auto',
                
            }}>
                {
                    notes.map(note => <li>{note}</li>)
                }
            </ul>
            <input
                style={{
                    margin: '0 auto'
                }} 
                type="button" 
                value="Starts!" 
                onClick={props.onClick} />
        </div>
    )
}

module.exports = TitleScreen;