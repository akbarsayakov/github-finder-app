function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. You can
        find the source code for the project on my
        <strong>
          <a href='https://github.com/akbarsayakov/github-finder-app'>
            {' '}
            Github
          </a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Created by:{' '}
        <a className='text-white' href='https://twitter.com/sayakov_a'>
          Akbar Sayakov
        </a>
      </p>
    </>
  )
}

export default About
