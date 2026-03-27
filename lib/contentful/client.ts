const fetchContentful = async (query: string, preview = false) => {
    const res = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
            next: { tags: ['contentful'] }, // Used for On-Demand ISR
        }
    );
    return res.json();
};