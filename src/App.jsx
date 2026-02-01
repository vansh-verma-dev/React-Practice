function App(){
  return(
<div>
      <h1>First Component</h1>
      <h1>Age: {Sum()}</h1>
      <Myname/>
   
</div>
  )
}
function Myname(){
  return(
<div>
  <h1>Vansh</h1>
  <h1>Verma</h1>
 
</div>
  )
}
function Sum(){
  return 10+9
}
export default App;