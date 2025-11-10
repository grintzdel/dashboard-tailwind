import React from "react";
import AlertSection from "@/modules/app/react/alert-section";
import StatSection from "@/modules/app/react/stat-section";
import TaskSection from "@/modules/app/react/task-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <AlertSection/>
            <StatSection/>
            <TaskSection/>
        </React.Fragment>
    )
}