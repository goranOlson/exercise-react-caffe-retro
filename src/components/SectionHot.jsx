// import "./Texts.jsx"
import { Content } from "./Content.jsx";
import "./Sections.css"

function SectionHot () {

    const sectionTexts = {
        header: "Hot",
        slogan: [
            " Hot freshly ground black coffee or a cup of exquisite tea?",
            "We give you that perfect cup every time."
        ],
        prices: [
            {
                id: 1,
                product: "Mocha Latte",
                price: "7.50",
            },
            {
                id: 2,
                product: "Caffe Formaggio",
                price: "5.00",
            },
            {
                id: 3,
                product: "Espresso",
                price: "3.50",
            },
            {
                id: 5,
                product: "Latte",
                price: "5.50",
            }
        ]
    }
    // console.log('Exporting: ' + sectionTexts);

    return (
        <section id="hot">
            <Content data={sectionTexts}/>
        </section>
    )
}
    
export default SectionHot;
