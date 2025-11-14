export namespace TaskDomainModel {
    export enum StatusMetadataKeys {
        STATUS = "Status",
        PERCENTAGE = "Percentage",
        DUE_DATE = "Due Date"
    }

    type TaskStatus = "on going" | "done" | "todo";

    type StatusMetadata = {
        key: StatusMetadataKeys.STATUS;
        value: TaskStatus;
    }

    type PercentageMetadata = {
        key: StatusMetadataKeys.PERCENTAGE;
        value: number;
    }

    type DueDateMetadata = {
        key: StatusMetadataKeys.DUE_DATE;
        value: Date | string;
    }

    export type TaskMetadata = StatusMetadata | PercentageMetadata | DueDateMetadata;
}