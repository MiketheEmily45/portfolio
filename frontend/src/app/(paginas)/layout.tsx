import BotaoChat from "@/components/chat/BotaoChat"

export default function Layout(props: any) {
    return (
        <div>
            {props.children}
            <BotaoChat />
        </div>
    )
}