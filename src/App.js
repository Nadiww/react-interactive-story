import { useState } from "react"
import Title from './components/Title'
import Content from './components/Content'
import ChoiceList from './components/ChoiceList'
import story from './story'

function App() {

  const [chapterId, setChapterId] = useState(1)
  const chapter = story.find(chapter => chapter.id === chapterId)

  const text = chapter.content
  const book = chapter.title
  const chapterName = chapter.chapter
  const choices = chapter.choices
  return (
    
      <main className="flex min-h-screen">
        <section className="w-1/2 bg-purple-600 text white p-6">
          <Title book={book} chapter={chapterName}/> 
          <Content text= {text} />
          <button
            className="border-2 border-white rounded px-2"
            onClick={() => setChapterId(1)}>Reset</button>
            </section>
            <section className="w-1/2 bg-gray-100 p-6">
          <ChoiceList choices={choices} callback=
          
          {setChapterId} />
          </section>
          </main>
      
  );
}

export default App;

