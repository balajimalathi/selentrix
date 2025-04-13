import { CopyIcon } from './icons';

export default function CopyButton({ content }: { content: string }) {


  const handleClick = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <button
      className="bg-muted p-2 text-sm animate-pulse hover:animate-none"
      aria-label="Copy"
      onClick={handleClick}
    >
      <CopyIcon size={16} />
    </button>
  );
}