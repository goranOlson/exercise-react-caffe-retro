// import "./Texts.jsx"
import { Texts } from "./Texts.jsx";
import "./Sections.css"

function SectionHot () {
    // const home = "Home"; 

    const arr = [
        "Hot freshly ground black coffee or a cup of exquisite tea?",
        "We give you that perfect cup every time."
    ];

    console.log('Exporting: ' + arr);

    return (
        <section id="hot">
            <div className="content">
                <h1>Hot</h1>
                {/* <p className="to-left" >Hot freshly ground black coffee or a cup of exquisite tea?</p>
                <p className="to-right">We give you that perfect cup every time.</p> */}

                <Texts textList={arr}/>

                <ul>
                    <li>
                        <span>Mocha Latte</span>
                        <span className="price">€ 7.50</span>
                    </li>
                    <li>
                        <span>Caffe Formaggio</span>
                        <span className="price">€ 5.00</span>
                    </li>
                    <li>
                        <span>Espresso</span>
                        <span className="price">€ 3.50</span>
                    </li>
                    <li>
                        <span>Chai Verde Latte</span>
                        <span className="price">€ 5.50</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
    
export default SectionHot;
