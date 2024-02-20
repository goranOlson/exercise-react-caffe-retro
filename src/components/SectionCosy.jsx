import { Content } from "./Content.jsx";
import "./Sections.css";

function SectionCosy () {

    const sectionData = {
        header: "Cosy",
        slogan: [
            "Hang around. Enjoy the settings.",
            "Use our fast WiFi. Borrow a newspaper or a novel."
        ],
        prices: [
            {
                id: 1,
                product: "Mon-Sun",
                price: "8am – 11pm",
            },
            {
                id: 2,
                product: "Caffe Retro",
                price: "Canto VI",
            },
            {
                id: 3,
                product: "0123-45 67 89",
                price: "caffe@lorem.pge",
            }
        ]
    }
    // console.log('Exporting: ' + JSON.stringify(sectionData) );

    return (
        <section id="cosy">
           <Content data={sectionData}/>
        </section>)
}

export default SectionCosy;