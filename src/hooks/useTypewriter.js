import { useEffect, useState } from 'react';

const WORDS = ['GROWTH ENGINE', 'BRAND BUILDER', 'SEO WIZARD', 'ADS MACHINE', 'CONTENT STUDIO'];

export function useTypewriter() {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 60);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return displayed;
}
