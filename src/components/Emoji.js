export default function Emoji ({minutes}) {
    const belowThirty = minutes < 30

    const amount = belowThirty ? 5 : 10
    const totalEmojis = Math.ceil(minutes / amount)
    
    const emoji = belowThirty ? "☕️" : "🍱"
    
    return <>{ `${emoji.repeat(totalEmojis)} ${minutes} min read` }</>
}