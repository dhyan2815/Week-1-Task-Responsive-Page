import React from 'react'
import { useEffect, useState } from "react";
import '../App.css'

const Section1 = () => {

  const images = [
    "https://images.unsplash.com/photo-1595418917831-ef942bd9f9ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGFuZCUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D", 

    "https://images.unsplash.com/photo-1531857414472-edf16a1bb78c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGFuZCUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D",

    "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='section-1' id='section1'>
      <div className="relative m-5 rounded-xl h-[300px]">
        {/* Background Carousel */}
        <div className="absolute rounded-xl inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${images[index]})`, opacity: 1 }}>
          </div>
        </div>

        <h1 className='heading relative z-10 text-7xl text-white py-30 tracking-wider p-5 font-semibold m-5 rounded-xl text-center bg-opacity-20'>
          Artificial Intelligence
        </h1>
      </div>

      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>1. Open AI</pre>
        <p className='openai'>
        OpenAI is a private research company dedicated to developing artificial intelligence (AI) with a focus on ensuring its benefits are widely accessible and used for the betterment of humanity. Founded by prominent figures like Elon Musk and Sam Altman, OpenAI aims to advance AI research in a responsible manner, prioritizing safety and transparency by sharing its findings with the broader scientific community. Their most notable creation is ChatGPT, a powerful language model capable of generating human-like text, translating languages, writing different kinds of creative content, and answering questions in an informative way. While initially a non-profit, OpenAI later transitioned to a for-profit structure to attract greater investment and accelerate its research efforts.
        </p>
      </div>
      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>2. Google Gemini</pre>
        <p className='gemini'>
        Google Gemini is a cutting-edge, multimodal AI system developed by Google, considered their most advanced language model to date, capable of understanding and generating text, images, audio, video, and code simultaneously. It allows users to interact with complex information across various formats, performing tasks like writing different creative content, summarizing information, answering questions, translating languages, and even generating code, all through natural language prompts; essentially acting as a versatile digital assistant that can seamlessly integrate with various Google products and services, making it a powerful tool for both personal and professional use.
        </p>
      </div>
      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>3. Claude Sonnet</pre>
        <p className='claude'>
        Claude is an advanced AI assistant developed by Anthropic, designed to provide helpful, honest, and harmless responses through a conversational interface. It excels at a wide range of tasks including summarization, creative writing, question answering, and coding, while prioritizing safety and ethical considerations in its outputs. Unlike some other AI models, Claude focuses on understanding user intent and adapting its tone and style to suit the context of the conversation, making it feel more natural and user-friendly. With its emphasis on safety research, Claude is considered a leading example of responsible AI development, allowing users to interact with it confidently across various applications.
        </p>
      </div>
    </div>
  )
}

export default Section1