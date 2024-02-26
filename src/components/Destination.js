import Colombo1 from "../assets/5.jpg";
import Colombo2 from "../assets/6.jpg";
import Sigiriya1 from "../assets/7.jpg";
import Sigiriya2 from "../assets/8.jpg"

import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity</p>

            <DestinationData
            className="first-des"
            heading="Colombo, Sri Lanka"
            text="Colombo is the capital and largest city of Sri Lanka, known for its vibrant culture, historical sites, and modern amenities. Popular attractions include the Gangaramaya Temple, the National Museum of Colombo, and the scenic Galle Face Green promenade. The city's blend of colonial architecture, bustling markets, and diverse cuisine make it a popular destination for travelers seeking a mix of tradition and modernity in a tropical setting. If 'Colabo' refers to something else, please provide more context, and I'll do my best to assist you."
            img1={Colombo1}
            img2={Colombo2}
            />

<DestinationData
            className="first-des-reverse"
            heading="Sigiriya, Sri Lanka"
            text="Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m (590 ft) high.

            According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Siṃhagiri, the Lion Rock.
            
            The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century. Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning."
            img1={Sigiriya1}
            img2={Sigiriya2}
            />

        </div>
    )
}

export default Destination;