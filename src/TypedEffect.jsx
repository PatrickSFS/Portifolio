import { useEffect, useState } from "react";

function TypedEffect({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const typeText = (text, i = 0) => {
    if (i < text.length) {
      setDisplayedText(text.slice(0, i + 1));
      setTimeout(() => typeText(text, i + 1), 100);
    } else {
      setTimeout(() => setIsTyping(false), 1000); // Pausa antes de começar a apagar
    }
  };

  const eraseText = (i = text.length) => {
    if (i > 0) {
      setDisplayedText(text.slice(0, i - 1));
      setTimeout(() => eraseText(i - 1), 50);
    } else {
      setIsTyping(true); // Recomeça a digitar
    }
  };

  useEffect(() => {
    if (isTyping) {
      typeText(text);
    } else {
      eraseText();
    }
  }, [isTyping, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Alterna o cursor a cada 500ms

    return () => clearInterval(cursorInterval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="font-bold text-4xl my-4">
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </div>
  );
}

export default TypedEffect;
