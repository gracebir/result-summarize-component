import Card from './components/Card'
import data from './data.json'
function App() {
  
  return (
    <div className="bg-clr-white min-h-screen md:h-screen w-full flex justify-center items-center">
      <div className="max-w-[46rem] grid sm:grid-rows-2 md:grid-cols-2 md:grid-rows-none rounded-none md:rounded-[24px] mx-auto shadow-card-shd">
        {/* results */}
        <div className="gradient-primary py-6 px-10 md:py-8 md:px-14 rounded-b-[24px] md:rounded-r-[24px] md:rounded-l-[24px] text-center text-clr-lavender flex flex-col gap-6 md:gap-9">
          <h1 className='text-clr-light-blue text-xl font-medium'>Your Result</h1>
          <p className="w-[12rem] gradient-to-transparent aspect-square grid place-content-center rounded-full mx-auto">
            <span className="text-6xl font-extrabold text-clr-white">76</span> of 100
          </p>
          <div className='flex flex-col gap-3 md:gap-6'>
            <p className='font-bold text-clr-white text-xl'>Great</p>
            <p className='text-[18px]'>You scored highed than 65% of the people who have taken these tests</p>
          </div>
        </div>
        {/* summary */}
        <div className='flex flex-col gap-8 px-9 py-8'>
          <h2 className='text-xl font-semibold text-clr-dark-gray'>Summary</h2>
          <div className='flex flex-col gap-5'>
            {data.map((item, i)=> (
              <Card key={i} {...item} index={i}/>
            ))}
          </div>
          <button className='w-full bg-clr-dark-gray text-clr-white rounded-full py-4 cursor-pointer'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
