import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useUser } from "../contexts/UserContext";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm here to help. How can I assist you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const { userDetails } = useUser();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { type: "user", text: inputMessage }];

    // Simple bot responses
    let botResponse = "";
    const lowerInput = inputMessage.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      botResponse = `Hello! I'm ${userDetails.firstname}'s portfolio assistant. How can I help you today?`;
    } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
      botResponse = `You can contact ${userDetails.firstname} at ${
        userDetails.userProfile.email || "the contact form below"
      }. Feel free to reach out!`;
    } else if (lowerInput.includes("project")) {
      botResponse = `${userDetails.firstname} has ${
        userDetails.projects?.length || 0
      } projects showcased. Scroll down to the Projects section to see them all!`;
    } else if (lowerInput.includes("skill")) {
      botResponse = `${userDetails.firstname} has expertise in various technologies. Check out the About section to learn more about the skills!`;
    } else if (lowerInput.includes("experience")) {
      botResponse =
        "You can find detailed work experience in the Experience section of this portfolio.";
    } else {
      botResponse =
        "That's interesting! Feel free to explore the portfolio to learn more, or use the contact form to get in touch directly.";
    }

    newMessages.push({ type: "bot", text: botResponse });
    setMessages(newMessages);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-violet-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-bold">Chat Assistant</h3>
                <p className="text-xs text-violet-100">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-violet-700 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-violet-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-violet-600 text-white p-2 rounded-lg hover:bg-violet-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-5 md:right-8 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Open chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={20} />}
      </button>
    </>
  );
};

export default Chatbot;
