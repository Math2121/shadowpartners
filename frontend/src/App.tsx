import Cards from './components/Cards'
import SearchBar from './components/SearchBar'
import UploadInput from './components/UploadInput'

function App() {


  return (
    <section className="content">
      <div className="w-100">
        <SearchBar />
        <main className='grid gap-8  justify-center'>
          <UploadInput />
        </main>
        <Cards />
      </div>
    </section >
  )
}

export default App
