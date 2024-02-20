import { Content } from "./Content.jsx";
import "./Sections.css";

function SectionJuicy () {

    const sectionData = {
        header: "Juicy",
        slogan: [
            "Ripe fruit - freshly squeezed.",
            "It's as simple as that. Chunky or smooth - it's your choice."
        ],
        prices: [
            {
                id: 1,
                product: "Branched Apricots",
                price: "€ 4.20",
            },
            {
                id: 2,
                product: "Deep Rasberries",
                price: "€ 3.50",
            },
            {
                id: 3,
                product: "Smooth Oranges",
                price: "€ 6.50",
            }
        ]
    }
    // console.log('Exporting: ' + JSON.stringify(sectionData) );

    return (
        <section id="juicy">
           <Content data={sectionData}/>
        </section>)
}

export default SectionJuicy;