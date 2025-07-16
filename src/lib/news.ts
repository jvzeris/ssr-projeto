export type NewsItem = {
    title: string
    url: string
    description: string
}

export async function getNews(): Promise<NewsItem[]> {
    const API_KEY = '822b3face6e8a650abd05a6005193916'
    const URL = `https://gnews.io/api/v4/top-headlines?lang=pt&topic=technology&token=${API_KEY}`

    const res = await fetch(URL, { cache: 'no-store' })
    if (!res.ok) {
        console.error('Erro ao buscar notícias:', res.status)
        return []
    }

    const data = await res.json()

    return data.articles.map((article: any) => ({
        title: article.title,
        url: article.url,
        description: article.description,
    }))
}
