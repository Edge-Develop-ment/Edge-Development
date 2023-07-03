import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className='flex flex-row w-full'>
        <Image src="/edgedevelopmentlandingpage/public/LogoGrayOrange.png" alt="Logo" width={150} height={150}/>
        <ul className='flex flex-row w-full gap-4'>
          <li><a>Something 0</a></li>
          <li><a>Something 1</a></li>
          <li><a>Something 2</a></li>
          <li><a>Something 3</a></li>
          <li><a>Something 4</a></li>
        </ul>
      </nav>
    </main>
  )
}
