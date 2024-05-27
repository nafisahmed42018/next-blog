'use client'
import React, { useEffect, useState } from 'react'
import { FaUpload, FaImage, FaPlus } from 'react-icons/fa'
import { PiVideoBold } from 'react-icons/pi'
import Image from 'next/image'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../ui/button'
import EditorToolbar, { modules, formats } from './CustomToolbar'
import {
  getStorage,
  StorageReference,
  UploadTask,
  UploadTaskSnapshot,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { app } from '@/utils/firebase'
import { useRouter } from 'next/navigation'
const Editor = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [media, setMedia] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')
  useEffect(() => {
    const storage = getStorage(app)
    const upload = () => {
      if (!file) return
      const name = new Date().getTime() + file.name
      const storageRef: StorageReference = ref(storage, name)

      const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL: string) => {
              setMedia(downloadURL)
            },
          )
        },
      )
    }

    upload()
  }, [file])
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'nebula', //If not selected, choose the general category
      }),
    })

    if (res.status === 200) {
      const data = await res.json()
      router.push(`/`)
    }
  }
  return (
    <div className="flex flex-col gap-5 max-h-[100vh]">
      <input
        type="text"
        placeholder="Title"
        className="p-2 bg-background placeholder:text-foreground focus:outline-none border-b-2 border-b-accent"
        onChange={(e: any) => {
          setTitle(e.target.value)
        }}
      />
      <select
        className="py-2 px-1 "
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="nebula">Nebula</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex items-center gap-6 ">
        <button
          className="pl-1 pr-[5px] pt-1 pb-[5px] my-1 w-fit rounded-full  border border-foreground text-foreground"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FaPlus size={18} />
        </button>
        {open && (
          <div className="flex items-center gap-2  z-[100] w-full">
            <input
              type="file"
              id="image"
              onChange={(e: any) => setFile(e.target.files[0])}
              className=" hidden"
            />
            <button className="p-1.5 rounded-full border border-primary text-primary">
              <label htmlFor="image">
                <FaUpload size={16} />
              </label>
            </button>
            <button className="p-1.5 rounded-full border border-primary text-primary">
              <FaImage size={16} />
            </button>
            <button className="p-1.5 rounded-full border border-primary text-primary">
              <PiVideoBold size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <EditorToolbar />

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder={'Write from here...'}
          modules={modules}
          formats={formats}
        />

        <Button className="w-fit mt-8" onClick={handleSubmit}>
          Publish
        </Button>
      </div>
    </div>
  )
}

export default Editor
