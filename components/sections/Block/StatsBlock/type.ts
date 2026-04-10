export interface StatsBlockEntry {
    sys: {
        id: string;
        contentType?: {
            sys: {
                id: string;
            };
        };
    };
    fields: {
        internalName?: string;
        style?: string;
        title?: string;
        description?: string;
        blocks?: Array<StatsBlockItemProps>;
    };
}

export interface StatsBlockItemProps {
    sys: {
        id: string;
        contentType?: {
            sys: {
                id: string;
            };
        };
    };
    fields: {
        header: string;
        body: string;
    };
}