import Prompt from "@models/prompt"
import { connectToDatabase } from "@utils/database"

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json()

    try {
        await connectToDatabase()
        const newPrompt = new Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag,
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Prompt could not be created" }), { status: 500 })
    }
}