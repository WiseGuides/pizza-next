
export default (props) => {

  return (
      <blockquote className="img-blockquote">
        {props.children}
        <div className="author">{props.author}</div>
        
      </blockquote>
  );
}