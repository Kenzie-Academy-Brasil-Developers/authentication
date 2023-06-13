import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
   return (
      <div className="App">
         <UserProvider>
            <RoutesMain />
         </UserProvider>
      </div>
   );
}

export default App;
