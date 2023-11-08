import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    noStore()

    console.log("getPosts")
    const response = await fetch('/api/prompt', { cache: 'no-cache' })
    const data = await response.json()
    return data
}