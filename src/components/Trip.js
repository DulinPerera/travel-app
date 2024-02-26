import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/9.jpg";
import Trip2 from "../assets/10.jpg";
import Trip3 from "../assets/11.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip to Indonesia"
                text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The country's capital, Jakarta, is the world's second-most populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India. Despite its large population and densely populated regions, Indonesia has vast areas of wilderness with the world's second-highest levels of biodiversity after Brazil."
                />
                <TripData
                image={Trip2}
                heading="Trip to Malaysia"
                text="Malaysia is a country in Southeast Asia. The federal constitutional monarchy consists of 13 states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia. Peninsular Malaysia shares a land and maritime border with Thailand and maritime borders with Singapore, Vietnam, and Indonesia. East Malaysia shares land and maritime borders with Brunei and Indonesia, as well as a maritime border with the Philippines and Vietnam. Kuala Lumpur is the national capital, the country's largest city. "
                />
                <TripData
                image={Trip3}
                heading="Trip to France"
                text="France  is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian oceans,giving it one of the largest discontiguous exclusive economic zones in the world. Metropolitan France shares borders with Belgium and Luxembourg to the north, Germany to the north east, Switzerland to the east, Italy and Monaco to the south east, Andorra and Spain to the south. "
                />
            </div>
        </div>
    )
}

export default Trip;