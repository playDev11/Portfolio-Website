const Resume = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <p>
        Download my resume{' '}
        <a href="/resume.pdf" className="text-blue-500">
          here
        </a>
        .
      </p>
      {/* You can also display detailed resume content here */}
    </div>
  )
}

export default Resume
