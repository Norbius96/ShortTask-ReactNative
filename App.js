import React from 'react';
import ComicList from './components/ComicList';
import Navbar from './components/Navbar';





export default function App() {
    return (
        <>
            <Navbar ComicList={ComicList} />
        </>
    );
}
