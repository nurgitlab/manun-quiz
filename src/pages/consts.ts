const KEY_API: string = "065a3549bfe64380a1515a1508bcef61";
const SEARCH_QUERY: string = "D0%BC%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1";
const PAGE_SIZE: number = 10;
export const ROOT_API: string = `https://newsapi.org/v2/everything?q=%${SEARCH_QUERY}%80&pageSize=${PAGE_SIZE}&apiKey=${KEY_API}`;
