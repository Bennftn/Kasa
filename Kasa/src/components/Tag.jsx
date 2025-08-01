import "../scss/components/_tag.scss"; // a modifier plus tard

export default function Tag({ text }) {
  return <span className="tag">{text}</span>;
}