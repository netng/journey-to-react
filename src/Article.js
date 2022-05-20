import * as React from 'react';
import ContentArticle from './ContentArticle';
import Rendering from './Rendering';
import TitleArticle from './TitleArticle';
import List from './List'

function Article({ userLogin, name }) {
    const users = [
        { id: 1, name: 'ujang', gender: 'male' },
        { id: 2, name: 'udin', gender: 'male' },
        { id: 3, name: 'ace', gender: 'male' },
        { id: 4, name: 'ijah', gender: 'female' },
        { id: 5, name: 'siti', gender: 'female' }
    ]
    return(
        <div style={{ margin: "10px" }}>
            <TitleArticle title="Lorem ipsum dolor sit amet"/>
            <ContentArticle dataLogin={userLogin} name={name}>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                culpa duis.
            </ContentArticle>
            <Rendering />
            <List users={users}/>
        </div>
    )
}

export default Article;