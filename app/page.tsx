import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-24 flex flex-col items-center text-center">
      <section className="pt-20 pb-8 flex flex-col items-center gap-8 ">
        <h1 className="text-4xl font-bold">Shadcn &gt; &gt; bootstrap</h1>
        <p className="w-[50%] text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet hic est
          facere cum nostrum cumque omnis provident! Sint, tenetur minus.
        </p>
      </section>
    </main>
  )
}
