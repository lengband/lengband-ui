import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'

function App() {
  return (
    <div className="App">
      <Button>learn react</Button>
      <Alert
        title="我是title"
        size="sm"
        type="danger"
        description="sadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafeewfewfhnuiowefhjeowihfoiuwjrehfoiwehrfoiuwehtfuioewhfiohwjefoi iiihrfoiwehjfiowej fopi pje wj foj"
        closeale/>
    </div>
  );
}

export default App;
