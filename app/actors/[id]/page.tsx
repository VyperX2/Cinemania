
const ActorPage = async ({ params }: { params: { id: number } }) => {
  return (
    <section className=" mt-20">{params.id}</section>
  )
}

export default ActorPage