import about from '../assets/images/about.webp'

function About() {
  return (
    <section
      id='about'
      className='mb-8 md:mb-20 lg-mb-32 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl relative'>
      <div className='flex flex-row justify-center items-centes'>
        <div className='mb-14 relative flex items-center justify-center'>
          <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
          <h2 className='z-10 bg-transparent px-2 relative flex items-center'>
            About me
          </h2>
          <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
        </div>
      </div>
      <article className='grid grid-cols-1 gap-4 md:grid-cols-6 place-items-center'>
        <div className='[&>p]:mb-4 [&>p>strong]:text-[crimson] [&>p]:text-pretty md:col-span-4 order-2'>
          <p>
            I'm Mauricio Navarro,{' '}
            <strong>passionate for back-end development</strong>. I started in
            this stressful world of software development in 2015 at high school.
          </p>
          <p>
            Learn stuffs about{' '}
            <strong>performance and infrastructure is what I love</strong>. I
            genuinely enjoy to find solutions to specific problems.
          </p>
          <p>
            <strong>Ruby on Rails</strong> is my main skill to develop back-end
            software since I decided to learn it about 3 years ago. Now I'm part
            of the mentors team of RoR at BrightCoders academy.
          </p>
        </div>
        <figure className='aspect-square w-[220px] mb-4 md:mb-0 overflow-clip rounded-full ring-2 ring-[crimson] p-2 shadow-[5px_5px_10px_0px_#0f0f0f] md:col-span-2 place-self-center order-1'>
          <img
            src={about}
            alt='Mauricio Navarro'
            className='object-cover object-center rounded-full w-full h-full'
          />
        </figure>
      </article>
    </section>
  )
}

export default About
