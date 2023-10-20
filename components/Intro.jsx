import Button from './Button';

export function Intro() {
  return (
    <section id='intro' className='mt-16'>
      <div className='rounded-full bg-emerald-500/90 blur-3xl h-20 w-20 ml-auto mr-10'></div>
      <h1 className='text-6xl font-bold'>
        Brian Lagranda<span className='text-emerald-500 text-6xl'>.</span>
      </h1>
      <h3 className='mt-2 text-lg'>FULLSTACK DEVELOPER</h3>
      <h4 className='text-sm'>made in Argentina</h4>

      <p className='my-8 text-xl'>
        1 year of experience developing web apps from scratch.
      </p>
      <Button text='Resume'></Button>
      <div className='rounded-full bg-emerald-500/80 blur-3xl h-20 w-20 flex self-end'></div>
    </section>
  );
}

export default Intro;

