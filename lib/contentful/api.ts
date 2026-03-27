const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

/**
 * Fetches page data from Contentful.
 * @param slug - The page slug (e.g., "/" for home).
 * @param locale - The language code (e.g., "en-US").
 * @param isDraftMode - Boolean to check if we should fetch draft content.
 */

export async function getPageData(slug: string, locale: string, isDraftMode = false) {
    // 1. Update query to accept the $preview variable
    const query = `
    query GetPage($slug: String!, $locale: String!, $preview: Boolean!) {
      pageCollection(where: { slug: $slug }, limit: 1, locale: $locale, preview: $preview) {
        items {
          sys { id }
          title
          slug
          
        }
      }
    }
  `;

    try {
        const res = await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 2. Switch between Preview Token and Delivery Token
                    Authorization: `Bearer ${isDraftMode ? PREVIEW_ACCESS_TOKEN : ACCESS_TOKEN}`,
                },
                body: JSON.stringify({
                    query,
                    // 3. Pass the preview variable to the GraphQL API
                    variables: { slug, locale, preview: isDraftMode },
                }),
                // 4. Disable caching for preview mode so changes appear instantly
                cache: isDraftMode ? 'no-store' : 'force-cache',
                next: {
                    tags: ['contentful'],
                    revalidate: 3600,
                },
            }
        );

        const { data, errors } = await res.json();

        if (errors) {
            console.error("GraphQL Errors:", errors);
            return null;
        }

        return data?.pageCollection?.items[0] || null;
    } catch (error) {
        console.error("Fetch Error:", error);
        return null;
    }
}