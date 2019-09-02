const React = require('react');
const { useEffect } = require('react');
const { useState } = require('react');

function LoadScreen(props) {

    const [failed, setFailed] = useState(false);

    useEffect(() => {
        fetchIcons();
    }, [])
    

    const fetchIcons = () => {
        //test
        // props.onFetched(
        //     [
        //         { word: "ram", imgUrl: "https://static.thenounproject.com/png/68953-200.png"},
        //         { word: "bison", imgUrl: "https://static.thenounproject.com/png/68954-200.png"},
        //         { word: "caribou", imgUrl: "https://static.thenounproject.com/png/68953-200.png"},
        //         { word: "bear", imgUrl: "https://static.thenounproject.com/png/68958-200.png"},
        //         { word: "eagle", imgUrl: "https://static.thenounproject.com/png/68962-200.png"},
        //         { word: "building", imgUrl: "https://static.thenounproject.com/png/427644-200.png"},
        //         { word: "green house", imgUrl: "https://static.thenounproject.com/png/69546-200.png"},
        //         { word: "leaf", imgUrl: "https://static.thenounproject.com/png/182771-200.png"},
        //         { word: "presentation", imgUrl: "https://static.thenounproject.com/png/1783400-200.png"}
        //     ]
        // )

        let requests = [];
        for (let i = 0; i < 10; i++) {
            requests.push(fetchWord());
        }
        return Promise.all(requests)
            .then(res => {
                props.onFetched(res);
            })
            .catch(err => {
                setFailed(true);
            }) 
    }

    const fetchWord = async () => {
        
        try {
            const res = await fetch(`/icon`);
            const json = await res.json();
            return { word: json.data.icon.term, imgUrl: json.data.icon.preview_url}
        } catch(err) {
            throw new Error(404)
        }
    }

    return (
        failed ? (
                <div style={{ textAlign: 'center'}}>
                    <h4>Looks like one of the icons couldn't be retrieved because the random id didn't correspond to an icon 
                        or I reached my API call limit =/</h4>
                    <input type="button" value="Retry?" onClick={fetchIcons} /> 
                </div>
            ) :
            <h4 style={{ textAlign: 'center'}}>Loading Icons...</h4>

    )
}

module.exports = LoadScreen;