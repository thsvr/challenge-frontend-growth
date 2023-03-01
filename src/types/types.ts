export interface Data {
    timestamp: string;
    value: number;
    name: string;
}

export interface GroupedData {
    date: string;
    metrics: Data[];
}

export interface DefaultData {
    clicks: number;
    views: number;
    date: string;
    metrics: Data[];
}
