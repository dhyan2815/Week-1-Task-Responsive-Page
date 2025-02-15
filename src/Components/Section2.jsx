import React from 'react'
import { useEffect, useState } from "react";
import '../App.css'

const Section2 = () => {

  const images = [
    "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 

    "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://plus.unsplash.com/premium_photo-1682464782978-d2f13e0fbcb2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='section-2' id='section2'>
      <div className="relative m-5 rounded-xl h-[300px]">
        {/* Background Carousel */}
        <div className="absolute rounded-xl inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${images[index]})`, opacity: 1 }}>
          </div>
        </div>

        <h1 className='heading relative z-10 text-7xl text-white py-30 tracking-wider p-5 font-semibold m-5 rounded-xl text-center bg-opacity-20'>
          Machine Learning
        </h1>
      </div>

      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>1. Supervised Learning</pre>
        <p className='supervised'>
        Supervised learning is a key branch of machine learning where algorithms are trained using labeled datasets, meaning each data point has a known output value, allowing the model to learn the relationship between input features and desired outcomes; this enables the system to make predictions on new, unseen data by identifying patterns within the labeled examples, effectively "teaching" the machine to classify or predict specific results based on the provided information, making it ideal for tasks like spam filtering, image recognition, and predicting price trends, where clear categories or target values are present.
        </p>
      </div>
      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>2. Unsupervised Learning</pre>
        <p className='unsupervised'>
        Unsupervised learning is a type of machine learning where algorithms analyze and identify patterns within unlabeled data, meaning the data has no predefined categories or labels, allowing the system to discover hidden structures and relationships without any human intervention or explicit guidance; this makes it ideal for exploratory data analysis, customer segmentation, anomaly detection, and image recognition tasks, where the goal is to find groupings and similarities within the data without prior knowledge of what those groupings might be, unlike supervised learning which relies on labeled data to make predictions. 
        </p>
      </div>
      <div className="lexend m-5 cursor-pointer transition-all duration-300 ease-in-out hover:px-9 hover:py-4 hover:pb-9 bg-cyan-200 px-6 py-2 pb-5 rounded-xl">
        <pre className='mplus py-3 font-bold text-3xl'>3. Reinforcement Learning</pre>
        <p className='reinforcement'>
        Reinforcement learning is a subset of machine learning where an agent learns to make optimal decisions by interacting with its environment through trial and error, receiving feedback in the form of rewards or penalties for its actions; essentially, the system learns by experiencing the consequences of its choices, gradually refining its strategy to maximize positive outcomes and achieve a desired goal, mimicking how humans learn through experience and feedback loops, making it particularly useful for complex decision-making scenarios where the optimal path may not be readily apparent. 
        </p>
      </div>
    </div>
  )
}

export default Section2