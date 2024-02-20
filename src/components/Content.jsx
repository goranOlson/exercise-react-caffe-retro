import "./Content.css"

export function Content({data}) {
    // console.log('Data: ' + JSON.stringify( data) );
    return (
        <>
            <div className="content">
                <h1>{ data.header }</h1>
                <p className="to-left">{ data.slogan[0] }</p>
                <p className="to-right">{ data.slogan[1] }</p>
                <ul>
                    { data.prices.map(price => (
                            <li key={price.id}>
                                <span>{price.product}</span>
                                <span className="price">{price.price}</span>
                            </li>
                    )) }
                </ul>
            </div>
        </>
    )
}

// export default Content;