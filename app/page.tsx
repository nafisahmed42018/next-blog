import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col pt-32">
      <section>
        <Container>
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            commodi?
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo optio
            placeat dolor sapiente aspernatur enim eos quae quod? Totam vel
            mollitia tempore consequuntur magni ad, vero asperiores suscipit
            optio voluptatibus veritatis voluptates officia ab tenetur nostrum,
            perferendis, et quasi laudantium nesciunt dolorum labore fuga. Neque
            eum ullam, est pariatur deleniti ipsam veniam, cupiditate nobis ea
            natus quod vitae voluptates sunt quasi aperiam dolores itaque? Quasi
            perferendis debitis numquam architecto ratione dolor, vel tenetur,
            quas atque voluptas soluta nemo laborum fugit!
          </p>
        </Container>
      </section>
    </main>
  )
}
