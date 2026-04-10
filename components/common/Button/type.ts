export interface ButtonProps {
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
        buttonStyle?: string;
        buttonTitle?: string;
        url?: string;
        icon?: {
            fields: {
                title: string; file: {
                    url: string;
                }
            };
            sys: {
                id: string;
                linkType: string;
                type: string;
            };
        };
    };

}