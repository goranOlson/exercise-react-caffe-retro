import { Texts } from "./Texts.jsx";

import "./Sections.css";

function SectionJuicy () {
    const arr = [
        "Next 0",
        "Next 1"
    ];

    console.log('Exporting: ' + arr);

    return (
        <section id="juicy">
            <div className="content">
                <h1>Juicy</h1>
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
        </section>)
}

export default SectionJuicy;