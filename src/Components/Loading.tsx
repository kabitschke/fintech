const Loading = () => {

  const style: React.CSSProperties = {
    border: "var(--gap-s) solid var(--color-1)",
    borderRightColor: 'transparent',
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
    animation: 'spin 1s infinite'

  };


  return (
    <div style={style}></div>
  );
}

export default Loading;