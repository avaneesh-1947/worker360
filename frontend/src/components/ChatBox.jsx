import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

// Socket.IO ka connection bana rahe hain backend se
const socket = io("http://localhost:3333");

/**
 * ChatBox component - Real-time chat ke liye
 * @param {string} roomId - Unique room ID (jaise 'chat_userId_workerId')
 * @param {string} userId - Current user ka ID (taaki pata chale kisne message bheja)
 * @param {string} workerName - Worker ka naam jo chat header me dikhega
 */
export default function ChatBox({ roomId, userId, workerName = "Worker" }) {
  // Sare messages yahan store honge
  const [messages, setMessages] = useState([]);
  // Input field ka state
  const [input, setInput] = useState("");
  // Scroll ko last message tak le jane ke liye
  const messagesEndRef = useRef(null);

  // localStorage se messages load karne ka function
  const loadMessages = () => {
    try {
      const savedMessages = localStorage.getItem(`chat_${roomId}`);
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      }
    } catch (error) {
      console.error("Messages load karne me error:", error);
    }
  };

  // Messages ko localStorage me save karne ka function
  const saveMessages = (newMessages) => {
    try {
      localStorage.setItem(`chat_${roomId}`, JSON.stringify(newMessages));
    } catch (error) {
      console.error("Messages save karne me error:", error);
    }
  };

  useEffect(() => {
    // Pehle purane messages load karo
    loadMessages();

    // Room join karte hi server ko batate hain
    socket.emit("join", roomId);

    // Jab bhi koi message aaye, usko messages me add karte hain
    socket.on("receive-message", ({ data, senderId }) => {
      const newMessage = { text: data, senderId, timestamp: new Date().toISOString() };
      setMessages((prev) => {
        const updatedMessages = [...prev, newMessage];
        // Naye messages ko localStorage me save karo
        saveMessages(updatedMessages);
        return updatedMessages;
      });
    });

    // Jab component band ho ya roomId change ho, toh room leave karte hain aur listener hata dete hain
    return () => {
      socket.emit("leave", roomId);
      socket.off("receive-message");
    };
  }, [roomId]);

  // Jab bhi messages update ho, scroll ko last message tak le jao
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Message bhejne ka function
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, senderId: userId, timestamp: new Date().toISOString() };
      
      // Server ko message bhejte hain
      socket.emit("send-message", { data: input, roomId, senderId: userId });
      
      // Apne UI me bhi message dikhate hain aur localStorage me save karte hain
      setMessages((prev) => {
        const updatedMessages = [...prev, newMessage];
        saveMessages(updatedMessages);
        return updatedMessages;
      });
      
      setInput("");
    }
  };

  return (
    // Outer box - shadow, rounded, background white, max width
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg flex flex-col h-96 border border-gray-200">
      {/* Header - Chat Title */}
      <div className="px-6 py-3 border-b border-gray-100 bg-[#54B435] rounded-t-2xl">
        <h2 className="text-lg font-semibold text-white text-center">Chat with {workerName}</h2>
      </div>
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-10">Koi message nahi hai. Shuru karo baat cheet!</div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex mb-2 ${msg.senderId === userId ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-2xl text-sm max-w-[70%] break-words shadow
                ${msg.senderId === userId ? "bg-[#54B435] text-white" : "bg-white text-gray-800 border border-gray-200"}`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input area */}
      <div className="p-3 border-t border-gray-100 bg-white flex gap-2">
        {/* Message type karo yahan */}
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#54B435] bg-gray-100 text-gray-800"
        />
        {/* Send button */}
        <button
          onClick={sendMessage}
          className="bg-[#54B435] hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          Send
        </button>
      </div>
    </div>
  );
} 