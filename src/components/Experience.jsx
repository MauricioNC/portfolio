function Experience() {
  return (
    <section
      id='experience'
      className='flex flex-col justify-between items-center mb-32 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl z-20'>
      <div className='mb-14 relative flex items-center justify-center'>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
        <h3 className='z-10 bg-transparent px-2 relative flex items-center'>
          Job experience
        </h3>
        <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
      </div>
      <div className="experience_item self-center relative flex flex-col md:flex-row justify-items-stretch gap-8 md:justify-start before:content-[''] before:w-[0.15rem] before:h-full before:bg-[#4e4e4e9f] before:absolute before:left-0 pl-10 pb-14">
        <div className='grow relative'>
          <h3 className='text-balance text-[crimson]'>Engineer designer</h3>
          <h4 className='text-balance'>Tata Consultancy Services</h4>
          <span>Jan 2021 - Oct 2023</span>
        </div>
        <div className='self-start md:self-center flex flex-col items-start md:basis-[500px]'>
          <p className='line-clamp-4 text-left'>
            I was member of the J&J team, primarily focused on assisting the
            development team in configuring information in the Camstar platform.
            My role involved leveraging Excel-based information on medical
            devices to tailor the system to the production team's needs.
            Utilizing Scrum methodology, our tasks and activities successfully
            completed, followed by rigorous testing by the QA team. In case of
            any issue identified during this process, my team and I went back to
            work into the task to get the issue solved. Also, sometimes I helped
            to my lead to test some configuration in the platform using basic
            SQL queries that let us identify for wrong outputs or if the
            production team's needed a new configuration, we had to create a new
            query to tailor the system to the production team's needs.
          </p>
          <button className='my-3 p-2 bg-[crimson] rounded-md hover:contrast-[1.1]'>
            Read more
          </button>
        </div>
        <span className='absolute w-3 h-3 bg-[crimson] -left-[0.30rem] top-6 rounded-full'></span>
      </div>
    </section>
  )
}

export default Experience
