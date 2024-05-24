import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectSmoothProps {
  words: Word[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffectSmooth: React.FC<TypewriterEffectSmoothProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);

  useEffect(() => {
    const i = currentWordIndex % words.length;
    const fullText = words[i].text;
  
    if (!isDeleting) {
      // Typing 
      if (displayText !== fullText) {
        setTypingSpeed(70);
        const timerTyping = setTimeout(() => {
          setDisplayText((prevText) => fullText.substring(0, prevText.length + 1));
          if (displayText.length === fullText.length - 1) {
            setTypingSpeed(1000); // Setze Typing-Geschwindigkeit auf 1000, wenn der letzte Buchstabe geschrieben wird
          }
        }, typingSpeed);
  
        return () => clearTimeout(timerTyping);
      } else {
        setIsDeleting(true);
      }
    } else {
      // Deleting
      if (displayText !== '') {
        
        const timerDeleting = setTimeout(() => {
          setDisplayText((prevText) => prevText.substring(0, prevText.length - 1));
          setTypingSpeed(70);
          if (displayText.length === 1) {
           
          }
        }, typingSpeed);
  
        return () => clearTimeout(timerDeleting);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setDisplayText('');
          setTypingSpeed(70); // Setze die Typing-Geschwindigkeit zurück, nachdem das Wort gelöscht wurde
        }, 3000); // Verzögerung von 3 Sekunden nach dem Löschen des Textes
      }
    }
  }, [displayText, isDeleting, currentWordIndex, typingSpeed, words]);
  
  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <div
        className="text-blue-300 text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
      >
        {displayText}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn(
          'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-300',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
