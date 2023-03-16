const Article = ({ serialNumber, title, body }) => {
  return (
    <div className="article flex space-x-4 items-start mb-4">
      <div className="sn px-6 rounded-full py-1 bg-brightRed text-white">{serialNumber}</div>
      <div className="article-info flex flex-col space-y-4">
        <div className="article-head text-lg font-bold">{title}</div>
        <p className="article-cont">{body}</p>
      </div>
    </div>
  );
};

export default Article;
