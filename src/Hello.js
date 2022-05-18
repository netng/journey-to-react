import React from "react";

const Hello = ({ name, greeting }) => {
    return `Hello ${name}, ${greeting}`
}

Hello.defaultProps = {
    name: 'anonim',
    greeting: 'Have a good day!'
}

export default Hello