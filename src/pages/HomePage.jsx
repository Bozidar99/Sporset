import { useState } from 'react'

function HomePage() {
  const [viewMore, setViewMore] = useState('Prikazi vise informacija o proizvodima');
  const [about, setAbout] = useState('Saznajte više o nama');
  const [info, setInfo] = useState('Prikaži više informacija o našim uslugama');

  function handleViewMore(){
    setViewMore('Naši proizvodi su pažljivo odabrani kako bi vam pružili najbolji kvalitet po pristupačnim cenama. Svi proizvodi prolaze stroge kontrole kvaliteta i dolaze sa garancijom zadovoljstva. Izaberite najbolje za sebe i uživajte u našoj ponudi!');
  }

  function handleAbout(){
      setAbout('Naša kompanija je posvećena pružanju vrhunske usluge i zadovoljstva klijenata. Imamo dugogodišnje iskustvo u industriji i ponosni smo na naš tim stručnjaka koji su uvek tu da vam pomognu. Verujemo u transparentnost, kvalitet i integritet u svemu što radimo.')
  }

  function handleInfo(){
      setInfo('Nudimo širok spektar usluga koje su prilagođene vašim potrebama. Bilo da je reč o tehničkoj podršci, savetovanju ili prilagođenim rešenjima, naš tim je spreman da vam pruži najviši nivo usluge. Naš cilj je da osiguramo vaše zadovoljstvo i dugoročnu saradnju.')
  }

  return (
    
    <div className='container mx-auto bg-[#98FF98]'>

      <h1 className='text-center font-bold text-3xl  mr-[550px] ml-[550px] py-[20px] border-dotted border-2 border-sky-500 mt-[20px] rounded-lg'>Dobrodošli u AnyDeal!</h1>

      <h2 className='text-2xl font-bold mr-[1050px] ml-[20px] mt-[20px] py-[20px] px-[20px] border-double border-4 border-sky-500 rounded-lg'>Mjesto gdje mozes naci sve za svoje potrebe!</h2>

      <h3 className='ml-[1050px] font-bold text-2xl py-[20px] mr-[20px] px-[20px] border-double border-4 border-sky-500 rounded-lg'>Kvalitet na dohvat ruke - Izaberite najbolje za sebe!</h3>
      
      <div className='flex flex-wrap justify-center items-center gap-40 py-[20px]'>
        <div className='flex flex-col justify-center items-center mt-[100px] border border-blue-500 rounded-lg bg-gray-200 ml-[200px] mr-[200px]'>
          <h2 className='font-bold mt-[20px] px-[20px]'>{viewMore}</h2>
          <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5 mb-10' onClick={handleViewMore}>View More</button>
          </div>

          <div className='flex flex-col justify-center items-center mt-[100px]  border border-blue-500 rounded-lg bg-gray-200 ml-[200px] mr-[200px]'>
              <h2 className='font-bold mt-[20px] px-[20px]'>{about}</h2>
              <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5 mb-10' onClick={handleAbout}>View More</button>
          </div>

          <div className='flex flex-col justify-center items-center mt-[100px] border border-blue-500 rounded-lg bg-gray-200 ml-[200px] mr-[200px] '>
          <h2 className='font-bold mt-[20px] px-[20px]'>{info}</h2>
          <button className='bg-blue-500 textqueen text-white font-bold px-[20px] py-[10px] rounded-lg mt-5 mb-10' onClick={handleInfo}>View More</button>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='border-dotted border-8 border-sky-500 mt-[20px] bg-blue-200 font-bold text-3xl'>Who we are</h1>
        <p className='border-solid border-8 border-sky-500 mt-[20px] bg-blue-200 font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur, eum labore illum, aut ducimus error in delectus laudantium rem excepturi quis nobis necessitatibus beatae voluptate ipsum iusto aliquam ipsa?</p>
      </div>
    </div>

    
  )
}

export default HomePage
