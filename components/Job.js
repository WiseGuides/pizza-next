export default (props) => {
  return (
    <div>
      <section className="left">
        <h5>{props.title}</h5>
        <p>{props.children}</p>
      </section>
      <hr />
    </div>
  );
};