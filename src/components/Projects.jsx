import newlineblog from '../assets/images/newlineblog.webp'
import moviesnop from '../assets/images/moviesnop.webp'
import tasks_manager from '../assets/images/tasks_manager.webp'
import ExternalLink from './icons/ExternalLink'
import Github from './icons/Github'
import ArrowUpRight from './icons/ArrowUpRight'
import projectsData from '../data/projects.json'

function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col mb-32 relative w-full py-20'>
      <div className='columns-1 md:columns-2 gap-8 space-y-8 mx-auto px-4 lg:max-w-4xl xl:max-w-6xl'>
        <section className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
          <div className='flex flex-row justify-center items-center'>
            <div className='mb-14 relative flex items-center justify-center'>
              <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-start before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
              <h3 className='z-10 bg-transparent px-2 relative flex items-center'>
                Latest projects
              </h3>
              <span className="relative w-[60px] h-[0.18rem] bg-[crimson] flex items-center justify-end before:content-[''] before:absolute before:w-[10px] before:h-[10px] before:bg-[crimson] before:rounded-full"></span>
            </div>
          </div>
        </section>
        { 
          projectsData.map((project, idx) => {
            return (
              <div key={ idx }>
                <article className='w-full break-inside-avoid group rounded-lg transition duration-500 ease-in-out'>
                  <div className='relative overflow-clip rounded-md'>
                    <img
                      className='aspect-video object-cover object-top rounded-md h-38 md:h-48 xl:h-60 md:group-hover:scale-[1.05] transition-all duration-500 ease-in-out w-full'
                      loading='lazy'
                      src={ project.thumbnail }
                      alt='New Line blog screenshot of the home page'
                      />
                  </div>
                  <div className='pt-3'>
                    <h3 className='mb-3 text-[crimson]'>{ project.title }</h3>
                    <div>
                      <p>{ project.description }</p>
                      <footer className='mt-5 pt-3'>
                        <ul className='flex flex-row text-xs gap-1'>
                          { project.stack.map((technologie, idx) => <li key={ idx } className='bg-[#dc143c33] py-1 px-2 rounded-xl'>{ technologie }</li> ) }
                        </ul>
                      </footer>
                    </div>
                    <div className='flex flex-row gap-3 mt-3'>
                      <a
                        href={ project.repository }
                        className='p-2 bg-[crimson] rounded-md min-w-[70px] text-center flex flex-row justify-center items-center gap-2 md:hover:contrast-[1.1]'
                        target='_blank'>
                        Repo
                        <Github width={22} height={22} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ) 
          })
        }
        <div className='flex flex-col justify-center items-center h-[170px] lg:h-[400px] max-h-[400px]'>
          <a className='w-36 h-36 lg:w-48 lg:h-48 text-lg p-4 border-[0.12rem] border-[#ffffffa1] rounded-full text-center flex flex-col items-center justify-center md:hover:cursor-pointer'>
            <ArrowUpRight width={24} height={24} strokeWidth={2} />
            View all projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
