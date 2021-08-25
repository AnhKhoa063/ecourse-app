import React from 'react';

function DemoRedux(props) {
    const {value, helloVi, helloEn} = props;
    return (
        <>
            <h1>{value}</h1>
            <input type="button" value="Việt Nam" onClick={helloVi} />
            <input type="button" value="English" onClick={helloEn} />
        </>
    );
}

export default DemoRedux;