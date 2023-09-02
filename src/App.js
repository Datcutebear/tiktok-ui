import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/layouts/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index) => {
              let Layout = DefaultLayout
              const Page = route.element
              if(route.layout === null){
                Layout = Fragment
              }
              else if (route.layout){
                Layout = route.layout
              }
              return(<Route key={index} path={route.path} 
              element={
               <Layout>
                  <Page />
               </Layout>
              } />)
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
