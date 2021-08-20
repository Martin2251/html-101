import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Unordered list </h1>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <h2>Ordered List</h2>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>

      <h2>HTML Forms</h2>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
          Age:
          <input type="number" name="age" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <span>Hello World</span>

      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>

      <a href="https://www.lewagon.com" target="_blank">
        Le Wagon
      </a>

      <h1>A h1 Only one per page for seo reasons</h1>

      <h2>A h2</h2>
      <h3>A h3</h3>
      <h4>A h4</h4>
      <h5>a H5</h5>
      <h6>a h6</h6>

      <p>
        You can emphasize <em>some words</em>, and even{" "}
        <strong>more if needed</strong>
      </p>

      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default App;
