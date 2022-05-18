import React from "react";

function Hello({ name, greeting }) {
    return <div>Hello {name}, {greeting}!</div>
}

Hello.defaultProps = {
    name: 'anonim',
    greeting: 'Have a good day'
}

export default Hello