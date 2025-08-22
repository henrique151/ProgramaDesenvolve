import { ProfileList } from "./components/ProfileList"

function App() {
  const team =[
    {
      name: "Ana Silva",
      title: "Desnvoldora Frontend",
      imageUrl: "",
      description: (
        <>Especialista em React e Next.JS com 5 anos experiencia </>
      )
    },
    {
      name: "Carlos Oliveira",
      title: "UX Designer",
      imageUrl: "",
      description: (
        <>Designer apaixonado por criar expericencias intuitivas e acessiveis </>
      )
    }
  ]
  return (
    <>
    <ProfileList profiles={team} />
    </>
  )
}

export default App
