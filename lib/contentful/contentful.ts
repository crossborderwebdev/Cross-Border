import { createClient } from 'contentful';

type GetPagesOfTypeParams = {
    locale?: any;
    pageContentType: string;
    preview?: boolean;
    queryParams?: {};
    allowCircular?: boolean;
};

const getClient = async (preview?: boolean) => {
    const CTF_SPACE_ID =
        process.env.CONTENTFUL_SPACE_ID;
    const CTF_DELIVERY_ACCESS_TOKEN =
        process.env.CONTENTFUL_ACCESS_TOKEN;
    const CTF_PREVIEW_ACCESS_TOKEN =
        process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
    const CTF_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';

    const client = createClient({
        space: CTF_SPACE_ID || "",
        environment: CTF_ENVIRONMENT,
        accessToken: CTF_DELIVERY_ACCESS_TOKEN || "",
    });

    const previewClient = createClient({
        space: CTF_SPACE_ID || "",
        environment: CTF_ENVIRONMENT,
        accessToken: CTF_PREVIEW_ACCESS_TOKEN || "",
        host: 'preview.contentful.com',
    });

    return preview ? previewClient : client;
};


export const getPagesOfType = async (params: GetPagesOfTypeParams) => {
    const { pageContentType, locale, preview, queryParams = {} } = params;
    const client = await getClient(preview);

    const limit = 100;
    let skip = 0;
    let pages: any[] = [];

    while (true) {
        const query = {
            content_type: pageContentType,
            locale,
            include: 10,
            limit,
            skip,
            ...queryParams,
        };

        console.log('Fetching pages with query:', query);

        const res = await client.getEntries(query).catch(() => ({
            items: [],
        }));

        pages.push(...res.items);

        if (res.items.length < limit) break;
        skip += limit;
    }

    return pages;
};

export const getPageBySlug = async (locale: string, slug: string, preview?: boolean) => {
    const client = await getClient(preview);
    const query = {
        content_type: 'page',
        locale,
        include: 10,
        limit: 1,
        skip: 0,
        'fields.slug': slug,
    };
    const res = await client.getEntries(query).catch(() => ({
        items: [],
    }));
    return res.items[0];
};

export const getPageById = async (locale: string, id: string, preview?: boolean) => {
    const client = await getClient(preview);
    const entry = await client.getEntry(id, { locale, include: 10 }).catch(() => null);
    return entry;
};