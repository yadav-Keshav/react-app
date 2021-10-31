import React,{useEffect,useState} from 'react'
export default function images(props) {
    const [single_image,setsingle_image]=useState();
    useEffect(()=>{
        let url='https://jsonplaceholder.typicode.com/albums?albumId='+{id};
        fetch(url, { method: 'GET' })
        .then((response) => {
            if (response.ok)
                return response.json();
            throw new Error('Some thing wron');
        })
        .then((pages) => {
            setsingle_image(pages);
        })
        .catch((err) => console.log(err.message));
    })
    return (
        <div>
            <div>
                <p>{id}</p>
                <p>{single_image.title}</p>
                <img src={single_image.url}>

                </img>
            </div>
        </div>
    )
}
