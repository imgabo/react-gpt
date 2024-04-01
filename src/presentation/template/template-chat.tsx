import { useState } from "react";
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from "../components";


interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messsage, setMesssage] = useState<Message[]>([]);
  
  const handlePost = async (message: string) => {
    setIsLoading(true);
    setMesssage((prev) => [...prev, { text: message, isGpt: false }]);

    // TODO: Use Case
    setIsLoading(false);

    //TODO: añadir el mesage GPT en true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hello, how are you doing today?" />
          {messsage.map((msg, index) =>
            msg.isGpt ? (
              <GptMessage key={index} text="Esto es de OpenAI" />
            ) : (
              <MyMessage key={index} text={msg.text} />
            )
          )}
          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aqui..."
        disableCorrections
      />
    </div>
  );
};
