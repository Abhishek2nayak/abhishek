import React from 'react'

export default function Header({title = "Header"}) {
    return(

            <h1 className="header blur">
                {title}
            </h1>

    );
}
