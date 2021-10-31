import React from 'react'
import './album.css';
export default function Album({data}) {
    return (
        <div className="album">
          {/* <div>
              <img src={data.thumbnailUrl} />
          </div>  */}
          <div>
              <p>{data.id} {data.title}</p>
          </div>
          <div>
              <a href={'/'+data.id}>Open</a>
          </div>
        </div>
    )
}
