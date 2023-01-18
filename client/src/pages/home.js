import React from 'react'
import AddClientModal from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal'
import Clients from '../components/clients'
import Projects from '../components/projects'

export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClientModal/>
    <AddProjectModal/>
    </div>
    <Projects/>
    <hr/>
    <Clients/>
    </>
  )
}
