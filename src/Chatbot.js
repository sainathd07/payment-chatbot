const { useState } = require("react")

function Chatbot() {

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, {sender: 'user', text: input}])

            setInput("")

            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {sender: 'bot', text: 'Hello! How can I help You'}
                ]);
            }, 1000);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSendMessage();
    };
    return(
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>
                <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)
                }
                onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage}>send</button>
            </div>
        </div>
    )
}

export default Chatbot