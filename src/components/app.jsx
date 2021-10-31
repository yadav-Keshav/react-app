import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import Body from './Body';
import Album from './Album';
function App() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    function goToNextPage() {

    }
    function goToPreviousPage() {

    }
    function changePage(x) {
        const pageNumber = Number(x);
        setPage(pageNumber);
        alert(pageNumber);
    }
    const getPaginationData = () => {
        return data.slice(page * 20 - 20, page * 20);
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums', { method: 'GET' })
            .then((response) => {
                if (response.ok)
                    return response.json();
                throw new Error('Some thing wron');
            })
            .then((pages) => {
                setData(pages)
            })
            .catch((err) => console.log(err.message));
    }, [])

    return <div style={{ margin: '0px' }}>
        <Header />
        <div style={{width:'70%', margin:'auto'}}>
            {
                getPaginationData().map((x) => (
                    <Album key={x.id} data={x} />
                ))
            }
        </div>
        <div  style={{width:'200px' ,display:'flex',margin:'auto'}}>
            <button style={{margin:'5px'}} onClick={()=>changePage(1)}>
                1
            </button>
            <button style={{margin:'5px'}} onClick={()=>changePage(2)}>
                2
            </button>
            <button style={{margin:'5px'}} onClick={()=>changePage(3)}>
                3
            </button>
            <button style={{margin:'5px'}} onClick={()=>changePage(4)}>
                4
            </button>
            <button style={{margin:'5px'}} onClick={()=>changePage(5)}>
                5
            </button>
        </div>

    </div>
}
export default App;
