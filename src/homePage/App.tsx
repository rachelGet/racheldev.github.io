import './styles/App.css'

function App() {
  return (
      <>
          <div className="flex fixed flex-col w-full z-full h-full top-0 left-0 start-0 z-10">
            <div className="w-full h-[8.5%] md:h-[9%] min-h-20 bg-fuchsia-500" id="Top div"></div>
            <div className="flex-grow md:h-auto w-full bg-blue-300" id="Main div"></div>
            <div className="w-full h-[5%] md:h-[6%] bg-yellow-300" id="footer div"></div>
          </div>
      </>
  )
}

export default App
