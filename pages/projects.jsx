import { Navbar } from "../components/navbar";
import ProjectCard from "../components/project-card";

export default function Projects() {
    return (
        <>
            <Navbar />

            <div>
                <h1 className="font-raleway">Projects!</h1>

                <ProjectCard repo="LoLShamer" owner="robertjawoods" />
                <ProjectCard repo="LudumDare48" owner="Blindside-Games" />
                <ProjectCard repo="AutoHideObjectives" owner="robertjawoods" />
            </div>
        </>
    )
}