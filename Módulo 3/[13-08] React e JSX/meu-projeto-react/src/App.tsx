import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import SkillList from './components/SkillList'

function App() {
  const skills = ["HTML", "CSS", "JS", "TypeScript", "React", "Vite"]

  return (
    <>
      <Header />
      <Profile name={"Henrique Porto de Sousa"}  bio={"Desenvolvedor ???"} location={"São Paulo - SP"}/>
      <SkillList skills={skills} />
    </>
  )
}

export default App
