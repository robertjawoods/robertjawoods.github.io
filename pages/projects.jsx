import { Navbar } from "../components/navbar";
import ProjectCard from "../components/project-card";

export default function Projects() {
    return (
        <>
            <Navbar />

            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <ProjectCard repo="LoLShamer" owner="robertjawoods" tags={["javascript", "discord", "googlecloudplatform"]} />
                <ProjectCard repo="LudumDare48" owner="Blindside-Games" tags={["c#", "gamedev", "unity"]} />
                <ProjectCard repo="AutoHideObjectives" owner="robertjawoods" tags={["lua"]} />
                <ProjectCard repo="AutoHideObjectives" owner="robertjawoods" />
            </div>
        </>
    )
}