import { Navbar } from "../components/navbar";
import { Chrono } from "react-chrono";

export default function Experience() {

    const items = [{
        title: "May 2018",
        cardTitle: "Joined tcpl"
    }, {
        title: "May 2018",
        cardTitle: "Left KnowCo"
    }, {
        title: "August 2016",
        cardTitle: "Started New Role"
    }, {
        title: "June 2015",
        cardTitle: "Joined KnowCo"
    }];

    return (
        <>
            <Navbar />
            <div style={{ width: "100%", height: "100%" }}>
                <h1 className="font-raleway bg-">Experience!</h1>

                <Chrono
                    hideControls="true"
                    items={items}
                    mode="VERTICAL"
                    className="bottom"
                    theme={{
                        primary: "#006D77",
                        secondary: "#E29578"
                    }} />
            </div>
        </>
    )
}
