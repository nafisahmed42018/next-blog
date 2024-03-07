'use client'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="mt-12 py-5 flex items-center justify-between border-t border-accent">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl cursor-pointer">
              <span className="text-primary">
                Hotash<span className="text-foreground">'</span>s
              </span>{' '}
              Journal
            </h2>

            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus similique aspernatur obcaecati veritatis. Aperiam
              cum porro sequi, totam minima consequuntur, aspernatur deleniti
              vero repellendus dorales.
            </p>
            <div className=" flex items-center gap-2">
              <Image src="/facebook.png" alt="" width={18} height={18} />
              <Image src="/instagram.png" alt="" width={18} height={18} />
              <Image src="/youtube.png" alt="" width={18} height={18} />
            </div>
          </div>
          <div className="flex-1 flex justify-end gap-24">
            <div className="flex flex-col gap-2.5 font-light">
              <span className="font-bold">Links</span>
              <Link href="/">Homepage</Link>
              <Link href="/">Blog</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
            <div className="flex flex-col gap-2.5 font-light">
              <span className="font-bold">Tags</span>
              <Link href="/">Style</Link>
              <Link href="/">Fashion</Link>
              <Link href="/">Coding</Link>
              <Link href="/">Travel</Link>
            </div>
            <div className="flex flex-col gap-2.5 font-light">
              <span className="font-bold">Social</span>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Tiktok</Link>
              <Link href="/">Youtube</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
