import * as React from 'react';

function ContentArticle({ children, dataLogin }) {

    return (
        <div style={{ textAlign: 'justify' }}>
            {children}
            <p style={{color: 'blue'}}>
                {dataLogin}
            </p>
        </div>
    )

}

export default ContentArticle;