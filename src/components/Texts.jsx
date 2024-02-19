import "./Texts.css"

export function Texts({textList}) {

    console.log('Data: ' + textList);
    return (<>
        <p className="to-left" >{textList[0]}</p>
        <p className="to-right">{textList[1]}</p>
        </>
    )
    
}

// export default Texts;