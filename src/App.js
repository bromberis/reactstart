import Header from "./components/Header";
import Box from "./components/Box";
import HeaderImage from "./images/art1.jpeg";
import PostContentList from "./components/PostContentList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <Header headerTitle="Hello, React" headerImage={HeaderImage} />
        </div>
      </div>
      <div className="row">
        <PostContentList />
      </div>
      <div className="row">
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
        <div className="col-3">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
