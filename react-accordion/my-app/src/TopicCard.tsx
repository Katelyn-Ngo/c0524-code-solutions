import './App.css';
type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  isOpen: boolean;
  onClick: (id: number) => void;
};

export function TopicCard({ topic, isOpen, onClick }: Props) {
  const handleClick = () => {
    onClick(topic.id);
  };
  return (
    <div className="topic">
      <div className="topic-title" onClick={handleClick}>
        <h3>{topic.title}</h3>
      </div>
      <div className="topic-content">{isOpen ? topic.content : null}</div>
    </div>
  );
}
