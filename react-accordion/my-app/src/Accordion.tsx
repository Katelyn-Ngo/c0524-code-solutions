import { useState } from 'react';
import { TopicCard } from './TopicCard';
import './App.css';

type Props = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Props[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  const handleTopicClick = (id: number) => {
    if (openTopic === id) {
      setOpenTopic(null);
    } else {
      setOpenTopic(id);
    }
  };

  return (
    <div>
      {topics.map((topics) => (
        <TopicCard
          key={topics.id}
          topic={topics}
          isOpen={topics.id === openTopic}
          onClick={handleTopicClick}
        />
      ))}
    </div>
  );
}
