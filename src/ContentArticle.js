import * as React from 'react';

function ContentArticle({ children, dataLogin, name }) {

    return (
        <div style={{ textAlign: 'justify' }}>
            {children}
            <p style={{color: 'blue'}}>
                {dataLogin ? <b>Anda sudah login {name}</b> : 'Silakan login'}
            </p>
        </div>
    )

}

export default ContentArticle;