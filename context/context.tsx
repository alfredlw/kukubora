import { useState, useEffect, createContext, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type ContextType = {
  q4?: string[];
  addToQ4?: (answer: string) => void;
  removeFromQ4?: (answer: string) => void;

  q5?: string[];
  addToQ5?: (answer: string) => void;
  removeFromQ5?: (answer: string) => void;

  q6?: string[];
  addToQ6?: (answer: string) => void;
  removeFromQ6?: (answer: string) => void;

  q7?: string[];
  addToQ7?: (answer: string) => void;
  removeFromQ7?: (answer: string) => void;

  q8?: string[];
  addToQ8?: (answer: string) => void;
  removeFromQ8?: (answer: string) => void;

  q9?: string[];
  addToQ9?: (answer: string) => void;
  removeFromQ9?: (answer: string) => void;

  q10?: string[];
  addToQ10?: (answer: string) => void;
  removeFromQ10?: (answer: string) => void;

  q11?: string[];
  addToQ11?: (answer: string) => void;
  removeFromQ11?: (answer: string) => void;

  reset?: () =>  void
};

export const AppContext = createContext<ContextType>({});

const AppProvider: FC<Props> = ({ children }) => {
  const [q4, setQ4Value] = useState<string[]>([]);
  const [q5, setQ5Value] = useState<string[]>([]);
  const [q6, setQ6Value] = useState<string[]>([]);
  const [q7, setQ7Value] = useState<string[]>([]);
  const [q8, setQ8Value] = useState<string[]>([]);
  const [q9, setQ9Value] = useState<string[]>([]);
  const [q10, setQ10Value] = useState<string[]>([]);
  const [q11, setQ11Value] = useState<string[]>([]);


  const reset = ()=> {
    setQ4Value([])
    setQ5Value([])
    setQ6Value([])
    setQ7Value([])
    setQ8Value([])
    setQ9Value([])
    setQ10Value([])
    setQ11Value([])
  }

  const addToQ4 = (answer: string) => {
    setQ4Value(() => [...q4, answer]);
  };
  const removeFromQ4 = (answer: string) => {
    const newArray = q4.filter((item) => item !== answer);
    setQ4Value(newArray);
  };

  const addToQ5 = (answer: string) => {
    setQ5Value(() => [...q5, answer]);
  };
  const removeFromQ5 = (answer: string) => {
    const newArray = q5.filter((item) => item !== answer);
    setQ5Value(newArray);
  };

  const addToQ6 = (answer: string) => {
    setQ6Value(() => [...q6, answer]);
  };
  const removeFromQ6 = (answer: string) => {
    const newArray = q6.filter((item) => item !== answer);
    setQ6Value(newArray);
  };

  const addToQ7 = (answer: string) => {
    setQ7Value(() => [...q7, answer]);
  };
  const removeFromQ7 = (answer: string) => {
    const newArray = q7.filter((item) => item !== answer);
    setQ7Value(newArray);
  };

  const addToQ8 = (answer: string) => {
    setQ8Value(() => [...q8, answer]);
  };
  const removeFromQ8 = (answer: string) => {
    const newArray = q8.filter((item) => item !== answer);
    setQ8Value(newArray);
  };

  const addToQ9 = (answer: string) => {
    setQ9Value(() => [...q9, answer]);
  };
  const removeFromQ9 = (answer: string) => {
    const newArray = q9.filter((item) => item !== answer);
    setQ9Value(newArray);
  };

  const addToQ10 = (answer: string) => {
    setQ4Value(() => [...q10, answer]);
  };
  const removeFromQ10 = (answer: string) => {
    const newArray = q10.filter((item) => item !== answer);
    setQ10Value(newArray);
  };

  const addToQ11 = (answer: string) => {
    setQ11Value(() => [...q11, answer]);
  };
  const removeFromQ11 = (answer: string) => {
    const newArray = q11.filter((item) => item !== answer);
    setQ11Value(newArray);
  };

  return (
    <AppContext.Provider
      value={{
        q4,
        addToQ4,
        removeFromQ4,
        q5,
        addToQ5,
        removeFromQ5,
        q6,
        addToQ6,
        removeFromQ6,
        q7,
        addToQ7,
        removeFromQ7,
        q8,
        addToQ8,
        removeFromQ8,
        q9,
        addToQ9,
        removeFromQ9,
        q10,
        addToQ10,
        removeFromQ10,
        q11,
        addToQ11,
        removeFromQ11,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
