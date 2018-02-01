import React from 'react';
import Form from "./shared/Form";
import BountyList from "./BountyList";

function App(props) {
    return (
        <div>
            <Form add clear/>
            <BountyList />
        </div>
    )
}

export default App
