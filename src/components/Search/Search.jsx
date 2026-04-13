
import styles from "./Search.module.css";

const Search = ({keyWords, setKeyWords}) => {
  return (
    <div className={styles.search}>
      <input 
      type="text" 
      value ={keyWords} 
      onChange={(e) => setKeyWords(e.target.value)}
      className={styles.input}
      placeholder="Type your search..."
      />
    </div>
  );
};

export default Search;
