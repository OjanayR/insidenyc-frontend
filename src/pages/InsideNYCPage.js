
import React, { useState } from 'react'

const NYCinfo =({ id, image, name, info, removeNYCinfo}) => {
    const [readMore, setReadMore] = useState(false);
    return(
        <article className = "single-nycinfo">
            <img src={image} alt={name} />
            <footer>
                <div className="nycinfo-info">
                    <h4>{name}</h4>
                </div>
                <p>
                    {readMore ? info: `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : ' read more'}
                    </button>
                </p>
                <button className ="delet-btn" onClick={() => removeNYCinfo(id)}>
                    No, thank you.
                </button>
            </footer>
        </article>
    );
};

 export default NYCinfo;






























