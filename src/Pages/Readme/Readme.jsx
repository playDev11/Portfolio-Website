import './readme.css'

const ReadMe = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">README</h1>
      <p class="text-sm text-black mb-4"># Personal Website</p>
      <p class="text-sm text-black mb-4">
        As a computer scientist, I figured that a desktop would be the perfect
        medium for me to present myself to the world.
      </p>
      <p class="text-sm text-black mb-4">## Technologies Used</p>
      <p class="text-sm text-black mb-4">
        I developed the responsive UI for this website with React.js and
        Tailwind CSS. Each window on the desktop uses the react-rnd package to
        handle dragging and resizing.
      </p>
      <p class="text-sm text-black mb-4">## Project Structure</p>
      The App component renders the top bar, the Pi wallpaper, and a FileGrid
      component. The React setInterval hook is used to update the time in the
      top right corner every second. The FileGrid component takes in a list of
      FileData objects, each of which corresponds to one of the files shown on
      the desktop. For each file, the corresponding instance of the FileData
      class contains information such as its name and the link that opens when
      the user clicks on it. To display the files on the desktop, the FileGrid
      component renders a File component for each element in the list of
      FileData objects with Tailwind CSS's grid-flow-col class. The File
      component renders its file icon as well as its corresponding Window
      component if it is currently open. This is an easy way of ensuring that a
      file cannot have multiple windows open at once, which greatly simplifies
      the logic. The Window component uses the Rnd component from the react-rnd
      package to handle dragging and resizing. Additionally, the Window
      component renders the unique window content of each openable file
      (Projects, david.png, about.txt, README.txt), which is stored as an
      instance variable in its FileData object.
    </div>
  )
}

export default ReadMe
