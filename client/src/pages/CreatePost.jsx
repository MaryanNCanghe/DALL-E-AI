import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import  preview  from '/workspaces/codespaces-blank/client/src/assets/preview.png';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {

  }

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = (e) => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-grey text-[16px] max-w[500px] '>Create imaginate and visualy stunning images through
          AI and share with community</p>
        </div>

        <form className='mt-16 max-w-3xl ' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'>
            <FormField 
            labelName="your name"
            type="text"
            name="name"
            placeholder="Marina Dolce"
            value={form.name}
            handleChange={handleChange}
            />
             <FormField 
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe} 
            />
            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {form.photo ? (
                <img src={form.photo} alt={form.photo} 
                className='w-full h-full object-contain'/>
              ): (
               <img src={preview} alt={preview}
               className='w-9/12 h-9/12 object-contain opacity-40' />
              )}
              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-black opacity-40 rounded-lg'>
                  <Loader />
                </div> 
                )}

            </div>
          </div>

          <div className='mt-5 flex gap-5'>
            <button
            type="button"
            onClick={generateImage}>
              
              {generatingImg ? 'Generating...' : 'Generate Image'}
            </button>
            
          </div>
        </form>
    </section>
  )
}

export default CreatePost;

