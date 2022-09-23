const styles = {
  width: "80vw",
  height: "100vh",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  margin: "0px auto",
};

const headingStyle = {
  fontSize: "5rem",
};

const paragraphStyles = {
  margin: "10px auto",
  lineHeight: 2,
  width: "85%",
};

const btnStyles = {
  backgroundColor: "#EAEAEA",
  padding: 15,
  width: "200px",
  margin: "30px auto",
  borderRadius: "5px",
  color: "#333",
  fontWeight: 500,
};

const Update = () => {
  return (
    <div style={styles}>
      <h1 style={headingStyle}>Oops...</h1>
      <p style={paragraphStyles}>
        You've stumbled across my old website. To view my current and update
        website, please click the button below
      </p>
      <a href="https://h9800.vercel.app/" style={btnStyles}>
        Click Me!
      </a>
    </div>
  );
};

export default Update;
