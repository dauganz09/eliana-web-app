import 'antd/dist/antd.css';
import './App.css'
import React, { lazy, Suspense, useState } from "react";
import { FullPageSpinner } from './components/styled/Spinner';


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  alignCenter : 'center'
};

const Authenticated = lazy(() =>
  import("./Authenticated")
);

const UnAuthenticated = lazy(() => import("./Unauthenticated"));


const App = ()=> {
  const [authenticated, setAuthenticated] = useState(false);


  return (
    <Suspense fallback={<FullPageSpinner/>}>
      {authenticated ? <Authenticated /> : <UnAuthenticated />}
    </Suspense>
  )
}

export default App
