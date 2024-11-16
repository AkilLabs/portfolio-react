// components/Header.tsx
// import { Article } from "@/components/Article";  // If you're using named export
// // OR
import Article from "@/components/Article";  // If you're using default export

const Header = () => {
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <Article />  // Rendering the Article component
    </header>
  );
};

export default Header;
