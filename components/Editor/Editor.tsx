'use client'
import React, { useState } from 'react'
import { FaUpload, FaImage, FaPlus } from 'react-icons/fa'
import { PiVideoBold } from 'react-icons/pi'
import Image from 'next/image'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../ui/button'
import EditorToolbar, { modules, formats } from './CustomToolbar'
const Editor = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-5 max-h-[100vh]">
      <div className="flex items-center gap-6 ">
        <button
          className="pl-1 pr-[5px] pt-1 pb-[5px] my-1 w-fit rounded-full  border border-foreground text-foreground"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FaPlus size={18} />
        </button>
        {open && (
          <div className="flex items-center gap-2  z-[100] w-full">
            <button className="p-1.5 rounded-full border border-primary text-primary">
              <FaUpload size={16} />
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

        <Button className="w-fit mt-8">Publish</Button>
      </div>
    </div>
  )
}

export default Editor
