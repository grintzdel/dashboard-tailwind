import React from "react";
import AlertSection from "@/modules/app/react/alert-section";
import StatsSection from "@/modules/app/react/stats-section";

export default function HomePage() {
    return (
        <React.Fragment>
            <AlertSection/>
            <StatsSection/>
        </React.Fragment>
    )
}