import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';

const Event = ({ event, isCompleted }) => (
  <div>
    {isCompleted ? <FaCheckCircle /> : <FaRegCircle />}
    <h3>{event.title}</h3>
    <p>{event.date}</p>
    <p>{event.description}</p>
  </div>
);

const Timeline = ({ events, currentStep }) => (
  <div>
    <Event event={events[currentStep]} isCompleted={currentStep > 0} />
  </div>
);

const TimelineApp = () => {
  const [events] = useState([
    { title: 'Event 1', date: '2023-01-01', description: 'Description 1' },
    { title: 'Event 2', date: '2023-02-01', description: 'Description 2' },
    { title: 'Event 3', date: '2023-03-01', description: 'Description 3' },
    // Ajoutez plus d'événements ici
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < events.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <h1>Frise chronologique</h1>
      <Timeline events={events} currentStep={currentStep} />
      <button onClick={nextStep}>Avancer à l'étape suivante</button>
      <button onClick={prevStep}>revenir à l'étape suivante</button>
    </div>
  );
};

export default TimelineApp;
