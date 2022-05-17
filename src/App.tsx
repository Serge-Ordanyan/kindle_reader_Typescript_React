import Reader from './components/reader/Reader';

function App() {
     const demoUrl = 'war_and_peace.epub'
     return(
     <div className='App'>
       <Reader url = {demoUrl}/>
     </div>
    )

}

export default App;