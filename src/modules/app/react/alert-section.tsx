"use client";

import React, {JSX} from "react";
import {Alert} from "@/ui/alert";
import {ALERT_TEMPLATES} from "@/modules/app/core/constants/alert-templates";
import {MdOutlineNotificationAdd} from "react-icons/md";

export default function AlertSection(): JSX.Element {
    const alertText = ALERT_TEMPLATES.PERFORMANCE_DECLINE
        .replace("[name]", "Hermawan")
        .replace("[period]", "2 weeks");

    return (
        <Alert
            icon={MdOutlineNotificationAdd}
            title="Dear Manager"
            text={alertText}
            buttonHref="#"
            buttonText="View Details"
        />
    );
}